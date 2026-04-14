---
name: claude-internals
description: "Expert knowledge of Claude Code's internal architecture, including agent loops, tool permissions, prompt engineering, and state management. Use when analyzing or re-implementing advanced AI agent patterns."
---

# Claude Code Internals Skill

## Tool System Architecture

### Tool Definition Pattern
Claude Code uses a `buildTool()` function that creates comprehensive tool definitions with:

- **Input/Output Schemas**: Zod-based validation with lazy evaluation for conditional fields
- **Permission Hooks**: `checkPermissions()` returns `PermissionResult` with behaviors (allow/deny/ask)
- **Validation Layer**: `validateInput()` pre-checks before permission evaluation
- **Execution Context**: `ToolUseContext` provides app state, file cache, abort controllers
- **Progress Streaming**: Async generators for real-time progress updates

**Key Pattern**: Tools are self-contained units that handle their own validation, permissions, and execution through a unified interface.

### Tool Schema Design
```typescript
// Lazy schema evaluation enables conditional fields based on feature flags
const inputSchema = lazySchema(() => z.object({
  command: z.string(),
  timeout: semanticNumber(z.number().optional()),
  // Internal-only fields omitted from model-facing schema
  _simulatedSedEdit: z.object({...}).optional()
}))
```

**Notable**: Internal fields like `_simulatedSedEdit` are stripped from the model-facing schema to prevent bypassing permission checks.

## Permission System

### Multi-Layer Permission Architecture
Claude Code implements a sophisticated permission system with:

1. **Permission Modes**: `default`, `plan`, `bypassPermissions`, `dontAsk`, `acceptEdits`, `auto`
2. **Rule Sources**: userSettings, projectSettings, localSettings, cliArg, session, hooks
3. **Rule Behaviors**: allow, deny, ask with pattern matching (wildcards, prefixes)
4. **Classifier Integration**: AI-based safety classification for sensitive operations
5. **Hook System**: Pre/post execution hooks for additional validation

### Permission Decision Flow
```
Tool Call → validateInput() → checkPermissions() → 
  Rule Match? → Mode Override? → Hook Check? → 
    Classifier? → User Prompt → Execute
```

**Key Insight**: Permission checks happen before any filesystem operations, with multiple fallback layers (rules → mode → hooks → classifier → user).

### Bash Tool Permission Patterns
The BashTool demonstrates advanced permission handling:

- **Command Parsing**: Splits compound commands (`&&`, `||`, `|`) for individual subcommand checking
- **Semantic Analysis**: Distinguishes read-only vs. destructive operations
- **Sandbox Integration**: Optional sandboxing with override mechanisms
- **Auto-Backgrounding**: Long-running commands automatically moved to background

**Pattern**: `preparePermissionMatcher()` returns a function that matches permission patterns against parsed subcommands.

## State Management

### 35-Line Store Pattern
Claude Code uses a minimal but effective state management pattern:

```typescript
type Store<T> = {
  getState: () => T
  setState: (updater: (prev: T) => T) => void
  subscribe: (listener: () => void) => () => void
}

function createStore<T>(initialState: T, onChange?: OnChange<T>): Store<T> {
  let state = initialState
  const listeners = new Set<Listener>()
  
  return {
    getState: () => state,
    setState: (updater) => {
      const prev = state
      const next = updater(prev)
      if (Object.is(next, prev)) return
      state = next
      onChange?.({ newState: next, oldState: prev })
      for (const listener of listeners) listener()
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    }
  }
}
```

**Key Features**:
- Immutable updates via updater functions
- Reference equality check to prevent unnecessary renders
- Automatic listener notification on state changes
- Optional onChange callback for side effects

## Agent System

### Agent Spawning Architecture
The AgentTool implements complex agent lifecycle management:

- **Subagent Types**: Built-in agents (general-purpose, explore, etc.) and custom agents from `.agents/` directory
- **Isolation Modes**: `worktree` (git worktree isolation), `remote` (CCR environment)
- **Execution Modes**: Synchronous (blocking) vs. asynchronous (background)
- **Tool Inheritance**: Agents can filter and override parent tools
- **MCP Integration**: Agent-specific MCP servers with automatic cleanup

### Agent Context Creation
```typescript
// Subagents get isolated contexts but share infrastructure
const subagentContext = createSubagentContext(parentContext, {
  agentId,
  setAppStateForTasks: rootSetAppState, // Always reaches root store
  readFileState: cloneFileStateCache(parentContext.readFileState),
  // ... other context fields
})
```

**Pattern**: `setAppStateForTasks` ensures background agents can register tasks visible to the UI, while `setAppState` is no-op for async agents.

### Background Task Management
Claude Code implements sophisticated background task handling:

- **Task Registry**: Centralized task tracking with status updates
- **Progress Streaming**: Real-time progress via async generators
- **Auto-Backgrounding**: Long-running operations automatically moved to background
- **Cleanup Hooks**: Proper resource cleanup on task completion/abortion

**Key Pattern**: Background tasks use a shared `setAppStateForTasks` to register with the root store, ensuring visibility across agent nesting levels.

## Prompt Engineering

### System Prompt Construction
System prompts are assembled from multiple segments:

1. **Static Instructions**: Core behavior rules from `src/constants/prompts.ts`
2. **Dynamic Context**: OS, shell, git status, working directory
3. **Tool Descriptions**: Auto-generated from tool schemas
4. **Memory Content**: `.claude.md` and `CLAUDE.md` files
5. **User Preferences**: Language, output style, custom prompts

### Prompt Caching Strategy
```typescript
export const SYSTEM_PROMPT_DYNAMIC_BOUNDARY =
  '__SYSTEM_PROMPT_DYNAMIC_BOUNDARY__'
```

**Pattern**: Everything before the boundary marker can use global scope caching; everything after contains user/session-specific content.

### Memory System
The memory directory system (`src/memdir/`) reads project and user-level memory files:

- **Project Memory**: `CLAUDE.md` in project root
- **User Memory**: `.claude.md` in user home directory
- **Session Memory**: Transient session-specific context
- **Automatic Injection**: Memory content automatically included in system prompts

## File Operations

### FileEditTool Safety Patterns
The FileEditTool demonstrates robust file editing:

- **Read-Before-Write**: Must read file before editing (tracked in `readFileState`)
- **Conflict Detection**: Timestamp and content comparison to detect concurrent modifications
- **Atomic Operations**: Read-modify-write sequence with minimal async operations
- **Quote Normalization**: Handles different quote styles (curly vs. straight)
- **Encoding Detection**: Automatic UTF-8/UTF-16 detection

### File State Cache
```typescript
type FileStateCache = Map<string, {
  content: string
  timestamp: number
  offset?: number
  limit?: number
  isPartialView?: boolean
}>
```

**Pattern**: Tracks read operations with timestamps to detect stale writes and prevent concurrent modification conflicts.

## Background Processing

### DreamTask Pattern
The DreamTask shows memory consolidation for background agents:

- **Phase Tracking**: 'starting' → 'updating' phases
- **File Touch Detection**: Pattern-matches Edit/Write tool uses
- **Turn Collapsing**: Collapses multiple tool uses into single turns
- **Lock Management**: Uses file mtime for consolidation locks

**Key Insight**: Background agents need UI surfacing without interrupting the main conversation flow.

### Progress Streaming Pattern
```typescript
async function* runShellCommand({...}): AsyncGenerator<{
  type: 'progress'
  output: string
  fullOutput: string
  elapsedTimeSeconds: number
  // ... other progress fields
}, ExecResult, void> {
  // Yield progress updates during execution
  yield { type: 'progress', output: lastLines, ... }
  // Return final result
  return result
}
```

**Pattern**: Async generators enable real-time progress updates while maintaining clean separation between progress streaming and final results.

## Security Patterns

### Sandbox Integration
Claude Code implements optional sandboxing for shell commands:

- **Command Filtering**: Configurable allow/deny lists for sandboxed commands
- **Path Validation**: Prevents access to sensitive paths
- **Override Mechanism**: `dangerouslyDisableSandbox` for trusted operations
- **Failure Annotation**: Sandbox violations are annotated in command output

### Input Validation
- **Schema Validation**: Zod schemas for all tool inputs
- **Security Parsing**: AST-based command parsing for security checks
- **Path Expansion**: Consistent path normalization (especially on Windows)
- **Size Limits**: File size limits to prevent OOM attacks

## MCP Integration

### Agent-Specific MCP Servers
Agents can define their own MCP servers in frontmatter:

```yaml
# .agents/my-agent/SKILL.md
mcpServers:
  - my-server
  - inline-server:
      command: node server.js
```

**Pattern**: MCP servers are connected when the agent starts and cleaned up when it finishes, with proper memoization for shared servers.

## Key Architectural Insights

### 1. Separation of Concerns
Each tool handles its own validation, permissions, and execution through a unified interface, enabling composition and reuse.

### 2. Progressive Enhancement
Features are gated behind feature flags with conditional imports, enabling dead code elimination and smaller bundles.

### 3. Context Propagation
Agent contexts are carefully constructed to provide necessary isolation while sharing infrastructure (task registration, file state).

### 4. Safety First
Multiple layers of validation (schema → permissions → hooks → classifiers → user prompts) ensure safe operations.

### 5. Performance Optimization
Lazy schema evaluation, prompt caching, and efficient state updates minimize overhead and enable responsive interactions.

### 6. Extensibility
Plugin system, skill loading, and MCP integration enable extending functionality without modifying core code.

## Transferable Patterns for OpenCode Skills

### Tool Definition
Use the `buildTool` pattern for creating self-contained, validated tools with permission hooks.

### State Management
Adopt the 35-line store pattern for simple, effective state management with immutable updates.

### Permission System
Implement multi-layer permission checks with rule-based filtering and classifier integration.

### Agent Spawning
Use the agent context pattern for creating isolated subagents with shared infrastructure.

### Progress Streaming
Leverage async generators for real-time progress updates in long-running operations.

### File Operations
Implement read-before-write validation with conflict detection for safe file editing.

### Memory System
Use directory-based memory files for persistent context across sessions.

### Background Processing
Implement task registry with progress streaming for background operations.
