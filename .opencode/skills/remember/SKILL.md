---
name: remember
description: "Review auto-memory entries and propose promotions to OpenCode AI.md, OpenCode AI.local.md, or shared memory. Detects outdated, conflicting, and duplicate entries across memory layers."
when_to_use: "Use when the user wants to review, organize, or promote their auto-memory entries. Also useful for cleaning up outdated or conflicting entries across OpenCode AI.md, OpenCode AI.local.md, and auto-memory."
argument_hint: "[specific focus or area to review]"
allowed_tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
context: inline
---

# Remember Skill - Memory Management and Organization

## Overview

The Remember skill reviews your memory landscape and produces a clear report of proposed changes, grouped by action type. It helps organize memory across different layers and identifies cleanup opportunities.

## Usage

```bash
/remember [specific focus or area to review]
```

### Examples

```bash
# Review all memory
/remember

# Focus on specific area
/remember review authentication-related memory

# Clean up outdated entries
/remember find and remove outdated memory entries

# Organize project conventions
/remember organize project-specific conventions
```

## Memory Layers

### 1. OpenCode AI.md (Project Memory)
**Location**: Project root (`OpenCode AI.md`)

**Purpose**: Project conventions and instructions for OpenCode AI that all contributors should follow

**What Belongs Here:**
- Build commands and test procedures
- Code style and formatting rules
- Architecture patterns and conventions
- Project-specific tool configurations
- Team-wide workflows and processes

**Examples:**
- "Use bun not npm for package management"
- "API routes use kebab-case naming"
- "Test command is `bun test`"
- "Prefer functional programming patterns"
- "All new features must include tests"

**Scope**: Committed to git, visible to all contributors

### 2. OpenCode AI.local.md (Personal Memory)
**Location**: Project root (`OpenCode AI.local.md`)

**Purpose**: Personal instructions for OpenCode AI specific to this user, not applicable to other contributors

**What Belongs Here:**
- Personal coding preferences
- Individual workflow habits
- Personal debugging approaches
- User-specific tool configurations
- Personal communication style preferences

**Examples:**
- "I prefer concise responses"
- "Always explain trade-offs before implementing"
- "Don't auto-commit without asking"
- "Run tests before committing changes"
- "I like detailed explanations for complex changes"

**Scope**: Gitignored, personal to this user

### 3. Team Memory (Shared)
**Location**: Configured team memory location

**Purpose**: Org-wide knowledge that applies across repositories

**What Belongs Here:**
- Organization-wide conventions
- Cross-repository standards
- Company-wide workflows
- Shared infrastructure knowledge
- Team communication protocols

**Examples:**
- "Deploy PRs go through #deploy-queue channel"
- "Staging environment is at staging.internal.com"
- "Platform team owns all infrastructure"
- "Security reviews required for all auth changes"

**Scope**: Shared across team, configured in settings

### 4. Auto-Memory (Session)
**Location**: Automatic session memory

**Purpose**: Working notes, temporary context, or entries that don't clearly fit elsewhere

**What Belongs Here:**
- Session-specific observations
- Temporary working notes
- Uncertain patterns being explored
- Context for current session
- Notes that might be promoted later

**Scope**: Session-specific, ephemeral by default

## How It Works

### Step 1: Gather All Memory Layers

The skill reads from all available memory sources:

**Sources Checked:**
1. `OpenCode AI.md` in project root (if exists)
2. `OpenCode AI.local.md` in project root (if exists)
3. Auto-memory content (already in system prompt)
4. Team memory sections (if configured)

**Success Criteria**: All memory layers are collected and can be compared

### Step 2: Classify Each Auto-Memory Entry

For each substantive entry in auto-memory, the skill determines the best destination:

| Destination | What Belongs There | Examples |
|---|---|---|
| **OpenCode AI.md** | Project conventions for all contributors | "use bun not npm", "API routes use kebab-case", "test command is bun test" |
| **OpenCode AI.local.md** | Personal instructions for this user only | "I prefer concise responses", "always explain trade-offs", "don't auto-commit" |
| **Team memory** | Org-wide knowledge across repositories | "deploy PRs go through #deploy-queue", "staging is at staging.internal" |
| **Stay in auto-memory** | Working notes, temporary context | Session-specific observations, uncertain patterns |

**Important Distinctions:**
- OpenCode AI.md and OpenCode AI.local.md contain **instructions for OpenCode AI**, not user preferences for external tools
- Workflow practices (PR conventions, merge strategies) are ambiguous - ask whether they're personal or team-wide
- When unsure, ask rather than guess

**Success Criteria**: Each entry has a proposed destination or is flagged as ambiguous

### Step 3: Identify Cleanup Opportunities

The skill scans across all layers for:

**Duplicates:**
- Auto-memory entries already captured in OpenCode AI.md or OpenCode AI.local.md
- Propose removing from auto-memory

**Outdated:**
- OpenCode AI.md or OpenCode AI.local.md entries contradicted by newer auto-memory entries
- Propose updating the older layer

**Conflicts:**
- Contradictions between any two layers
- Propose resolution, noting which is more recent

**Success Criteria**: All cross-layer issues are identified

### Step 4: Present the Report

The skill outputs a structured report grouped by action type:

**Report Structure:**
1. **Promotions** - Entries to move, with destination and rationale
2. **Cleanup** - Duplicates, outdated entries, conflicts to resolve
3. **Ambiguous** - Entries where user input is needed on destination
4. **No Action Needed** - Brief note on entries that should stay put

**If auto-memory is empty**, the skill says so and offers to review OpenCode AI.md for cleanup.

**Success Criteria**: User can review and approve/reject each proposal individually

## Rules

### Core Principles
1. **Present ALL proposals before making any changes**
2. **Do NOT modify files without explicit user approval**
3. **Do NOT create new files unless the target doesn't exist yet**
4. **Ask about ambiguous entries - don't guess**

### Decision Framework

**When to Promote to OpenCode AI.md:**
- Applies to all contributors
- Project-specific conventions
- Team-wide workflows
- Architectural decisions

**When to Promote to OpenCode AI.local.md:**
- Personal preferences only
- Individual workflow habits
- User-specific configurations
- Personal communication style

**When to Keep in Auto-Memory:**
- Session-specific observations
- Temporary working notes
- Uncertain patterns
- Context for current work

**When to Flag as Ambiguous:**
- Could apply to multiple layers
- User preference unclear
- Workflow practices (personal vs team-wide)
- Borderline cases

## Best Practices

### 1. Regular Memory Review
```bash
# Review memory weekly or after major work
/remember

# Focus on specific areas
/remember review authentication memory
```

### 2. Be Specific About Focus
```bash
# Good - Specific area
/remember organize testing-related memory

# Avoid - Too broad
/remember clean up memory
```

### 3. Review Before Promoting
```bash
# Always review proposals before accepting
/remember review and organize project conventions
```

## Common Patterns

### Promoting to Project Memory
**Scenario**: You've discovered a project convention during work

**Auto-memory entry**: "Always use bun for package management"

**Proposed action**: Promote to OpenCode AI.md

**Rationale**: This is a project convention all contributors should follow

### Promoting to Personal Memory
**Scenario**: You have a personal preference

**Auto-memory entry**: "I prefer detailed explanations for complex changes"

**Proposed action**: Promote to OpenCode AI.local.md

**Rationale**: This is a personal preference, not a team convention

### Cleaning Up Duplicates
**Scenario**: Same information in multiple layers

**Auto-memory**: "Use bun for package management"
**OpenCode AI.md**: "Use bun not npm for package management"

**Proposed action**: Remove from auto-memory (already in OpenCode AI.md)

**Rationale**: Duplicate information, keep authoritative source

### Resolving Conflicts
**Scenario**: Contradictory information across layers

**OpenCode AI.md**: "Use functional programming patterns"
**Auto-memory**: "Prefer object-oriented approach for this module"

**Proposed action**: Update OpenCode AI.md to acknowledge both approaches

**Rationale**: Conflict needs resolution, auto-memory is more recent

## Troubleshooting

### Too Many Proposals
**Issue**: The skill proposes too many changes

**Solution:**
- Focus on specific areas with `/remember <area>`
- Review proposals selectively
- Accept only the most important ones

### Ambiguous Entries
**Issue**: Many entries flagged as ambiguous

**Solution:**
- Provide more context in your request
- The skill will ask for clarification
- You can specify destination directly

### Memory Files Not Found
**Issue**: OpenCode AI.md or OpenCode AI.local.md don't exist

**Solution:**
- The skill will offer to create them
- You can choose which files to create
- Start with the most important layer

## Advanced Usage

### Focused Review
```bash
# Review specific technology or domain
/remember review React-related memory

# Review specific workflow
/remember organize deployment process memory
```

### Cleanup Focus
```bash
# Find and remove duplicates
/remember find duplicate memory entries

# Resolve conflicts
/remember resolve conflicting memory entries
```

### Organization Focus
```bash
# Organize by category
/remember organize memory by technology stack

# Organize by workflow
/remember organize memory by development phase
```

## Integration Notes

### Auto-Memory System
The skill integrates with OpenCode's automatic memory system:
- Reads current auto-memory content
- Identifies patterns worth promoting
- Suggests appropriate destinations

### File System
The skill works with:
- Project root files (OpenCode AI.md, OpenCode AI.local.md)
- Team memory configuration
- Auto-memory storage

### Permission System
The skill respects:
- File write permissions
- Memory layer access rules
- User approval requirements

## Memory Hygiene Tips

### Regular Maintenance
1. **Weekly review**: Use `/remember` to keep memory organized
2. **After major work**: Review and promote relevant entries
3. **Before new projects**: Clean up outdated entries

### Quality Guidelines
1. **Be specific**: Clear, actionable entries are more useful
2. **Keep current**: Remove outdated information
3. **Avoid redundancy**: One authoritative source per fact
4. **Organize logically**: Group related information together

### Collaboration Tips
1. **Share project memory**: Commit OpenCode AI.md to git
2. **Keep personal memory private**: Use OpenCode AI.local.md
3. **Document decisions**: Explain why conventions exist
4. **Update regularly**: Keep memory current with project evolution

## Examples by Use Case

### New Project Setup
```bash
/remember organize project setup and configuration memory
```

### After Major Refactor
```bash
/remember review and update architecture-related memory
```

### Team Onboarding
```bash
/remember organize team conventions and workflows
```

### Personal Workflow Optimization
```bash
/remember review and organize my personal preferences
```

## Related Skills

- **skillify**: For creating reusable workflows
- **loop**: For recurring memory maintenance
- **update-config**: For memory configuration
- **debug**: For troubleshooting memory issues

## Memory Quality Checklist

After organizing memory, verify:

- [ ] No duplicate entries across layers
- [ ] No conflicting information
- [ ] Outdated entries removed or updated
- [ ] Clear destination for each entry
- [ ] Appropriate scope (project vs personal)
- [ ] Well-organized and easy to find
- [ ] Current and accurate
- [ ] Actionable and specific

## Best Practices Summary

1. **Review memory regularly** - Keep it organized and current
2. **Be specific about scope** - Focus on specific areas when needed
3. **Review before accepting** - Always review proposals
4. **Choose appropriate destinations** - Project vs personal vs team
5. **Clean up duplicates** - Remove redundant information
6. **Resolve conflicts** - Ensure consistency across layers
7. **Keep it current** - Remove outdated entries
8. **Document decisions** - Explain why conventions exist

## Advanced Patterns

### Memory Taxonomy
```bash
/remember organize memory by category (architecture, workflow, tools, conventions)
```

### Memory Migration
```bash
/remember migrate personal memory to team memory where appropriate
```

### Memory Consolidation
```bash
/remember consolidate related memory entries into comprehensive guides
```

### Memory Validation
```bash
/remember validate memory against current project state
```
