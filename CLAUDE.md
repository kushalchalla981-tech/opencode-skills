# OPENCODE.md

This file provides guidance to OpenCode (opencode.ai/code) when working with code in this repository.

## Project Overview

This is the OpenCode source code repository - a leaked version (2026-03-31) of OpenCode's OpenCode CLI. The project is a sophisticated AI-powered development tool with terminal UI, agent system, and extensive plugin architecture.

## Development Commands

### Build Commands
- `bun run build` - Build the CLI bundle
- `bun run build:watch` - Build with watch mode for development
- `bun run build:prod` - Build production bundle with minification
- `bun run build:web` - Build the web interface
- `bun run build:web:watch` - Build web with watch mode
- `bun run build:web:prod` - Build production web bundle

### Quality Assurance
- `bun run typecheck` - Run TypeScript type checking
- `bun run lint` - Run Biome linter to check code quality
- `bun run lint:fix` - Automatically fix linting issues
- `bun run format` - Format code with Biome
- `bun run check` - Run both linting and type checking

### Package Management
- Uses Bun as package manager (>= 1.1.0)
- Install dependencies: `bun install`
- Add dependency: `bun add <package>`
- Add dev dependency: `bun add -d <package>`

## Project Structure

### Key Directories
- `src/` - Main source code
  - `entrypoints/` - Application entry points (CLI, web, etc.)
  - `tools/` - Tool implementations (Bash, FileEdit, Agent, etc.)
  - `commands/` - Slash command implementations
  - `skills/` - Skill system and bundled skills
  - `state/` - State management (35-line store pattern)
  - `services/` - Service layer (analytics, MCP, compact, etc.)
  - `utils/` - Utility functions and helpers
- `prompts/` - System prompt construction and documentation
- `docs/` - Architecture and subsystem documentation
- `scripts/` - Build and utility scripts
- `.opencode/skills/` - Custom OpenCode skills (10 skills created)

### Architecture Patterns

**Tool System**: Tools use `buildTool()` pattern with:
- Input/output schemas (Zod-based with lazy evaluation)
- Permission hooks (`checkPermissions()`)
- Validation layer (`validateInput()`)
- Execution context (`ToolUseContext`)
- Progress streaming (async generators)

**State Management**: 35-line store pattern:
```typescript
type Store<T> = {
  getState: () => T
  setState: (updater: (prev: T) => T) => void
  subscribe: (listener: () => void) => () => void
}
```

**Permission System**: Multi-layer architecture with:
- Permission modes (default, plan, bypassPermissions, etc.)
- Rule sources (userSettings, projectSettings, etc.)
- Rule behaviors (allow, deny, ask)
- Classifier integration for safety checks

**Agent System**: Subagent spawning with:
- Isolation modes (worktree, remote)
- Execution modes (sync/async)
- Tool inheritance and filtering
- MCP server integration

## Key Technologies

- **Runtime**: Bun (JavaScript runtime)
- **Language**: TypeScript (strict mode)
- **UI Framework**: React with Ink (terminal UI)
- **Build Tool**: esbuild
- **Linting/Formatting**: Biome
- **Package Manager**: Bun
- **Terminal**: xterm.js
- **AI SDK**: @OpenCode-ai/sdk
- **MCP**: @modelcontextprotocol/sdk

## Code Style

- Use TypeScript strict mode
- Follow Biome linting rules
- 2-space indentation for TypeScript/JavaScript
- Use functional programming patterns where appropriate
- Prefer immutable updates (especially in state management)
- Use Zod for schema validation
- Use lazy evaluation for conditional schemas

## Testing

Currently no automated test suite is configured. When adding tests:
- Consider using Bun's built-in test runner
- Follow the project's testing conventions once established
- Test critical paths: tool execution, permission checks, state management

## Important Gotchas

- **Feature Flags**: Many features are gated behind `feature()` calls from `bun:bundle`
- **Dead Code Elimination**: Conditional imports enable tree-shaking
- **Permission System**: Always check permissions before filesystem operations
- **State Updates**: Use immutable updater functions, never mutate directly
- **Tool Context**: Always pass `ToolUseContext` for proper execution
- **File State Cache**: Track file reads to detect concurrent modifications
- **Async Generators**: Use for progress streaming in long-running operations

## Custom Skills Created

This repository includes 10 custom OpenCode skills in `.opencode/skills/`:

1. **loop** - Recurring task scheduling with cron expressions
2. **batch** - Parallel work orchestration for large-scale changes
3. **skillify** - Convert sessions to reusable skills
4. **remember** - Memory management and organization
5. **update-config** - Configuration management with hooks
6. **debug** - Session debugging with log analysis
7. **keybindings-help** - Keyboard shortcut customization
8. **buddy** - Procedurally generated companion avatars
9. **session-memory** - Automatic session summarization
10. **schedule-remote-agents** - Cloud-based agent scheduling

These skills provide comprehensive functionality for OpenCode users and serve as reference implementations for skill development.

## MCP Integration

The project supports Model Context Protocol (MCP) servers:
- Server configuration in `.OPENCODE/mcp.json`
- Dynamic server connection and tool fetching
- Agent-specific MCP servers (defined in agent frontmatter)
- Server lifecycle management (connect, disconnect, cleanup)

## Development Workflow

1. **Make changes**: Edit source files in `src/`
2. **Type check**: `bun run typecheck`
3. **Lint**: `bun run lint`
4. **Format**: `bun run format`
5. **Build**: `bun run build:watch` (for development) or `bun run build` (for production)
6. **Test**: Manual testing of CLI functionality

## Environment Variables

Key environment variables (check `.env` or settings):
- `OPENCODE_CODE_*` - Various feature flags and configuration options
- `USER_TYPE` - User type (ant, etc.) for feature gating
- `DISABLE_TELEMETRY` - Disable analytics/telemetry
- `OPENCODE_CODE_SIMPLE` - Simple mode without skills

## Git Workflow

- Branch naming: Follow conventional commits format
- Commit messages: Use clear, descriptive messages
- PR descriptions: Include summary of changes and testing performed
- Code review: Required for all changes

## Performance Considerations

- **Lazy Schema Evaluation**: Reduces initial bundle size
- **Progress Streaming**: Use async generators for long operations
- **State Updates**: Immutable updates prevent unnecessary re-renders
- **File Caching**: Track file reads to avoid redundant operations
- **Tool Result Persistence**: Large outputs persisted to disk

## Security Considerations

- **Permission System**: Multi-layer checks before operations
- **Input Validation**: Zod schemas for all tool inputs
- **Path Expansion**: Consistent path normalization
- **Sandbox Integration**: Optional sandboxing for shell commands
- **Secret Detection**: Check for secrets before committing

## Documentation

- **Architecture**: `docs/architecture.md` - High-level architecture
- **Subsystems**: `docs/subsystems.md` - Component breakdown
- **Tools**: `docs/tools.md` - Tool system documentation
- **Commands**: `docs/commands.md` - Command system
- **Prompts**: `prompts/` directory - System prompt construction
- **Contributing**: `CONTRIBUTING.md` - Contribution guidelines

## Common Patterns

### Creating a New Tool
```typescript
export const MyTool = buildTool({
  name: 'MyTool',
  inputSchema: lazySchema(() => z.object({...})),
  outputSchema: lazySchema(() => z.object({...})),
  async call(input, context) {
    // Implementation
    return { data: {...} }
  }
})
```

### Creating a New Command
```typescript
const command: Command = {
  type: 'prompt',
  name: 'my-command',
  description: 'Command description',
  async getPromptForCommand(args) {
    return [{ type: 'text', text: '...' }]
  }
}
```

### State Management
```typescript
const store = createStore(initialState, onChange)
const state = store.getState()
store.setState(prev => ({ ...prev, update }))
```

## Troubleshooting

### Build Issues
- Clear Bun cache: `bun pm cache rm`
- Reinstall dependencies: `rm -rf node_modules && bun install`
- Check TypeScript version: `bun --version`

### Runtime Issues
- Enable debug logging: Check settings for debug mode
- Review session logs: Look for error patterns
- Check permissions: Verify tool permission rules

### Performance Issues
- Profile with Bun's built-in profiler
- Check for large file operations
- Review state update patterns
- Monitor memory usage

## Notes

- This is a leaked source code version, not an official release
- Some features may be incomplete or experimental
- Feature flags control availability of many features
- The codebase is actively developed and evolving
- Refer to official documentation for production usage
