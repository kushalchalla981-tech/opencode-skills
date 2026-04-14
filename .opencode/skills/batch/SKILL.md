---
name: batch
description: "Research and plan large-scale changes, then execute them in parallel across isolated worktree agents that each open a PR. Perfect for migrations, refactors, and bulk changes."
when_to_use: "Use when the user wants to make a sweeping, mechanical change across many files (migrations, refactors, bulk renames) that can be decomposed into independent parallel units."
argument_hint: "<instruction>"
allowed_tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Agent
  - AskUserQuestion
context: inline
---

# Batch Skill - Parallel Work Orchestration

## Overview

The Batch skill enables you to orchestrate large-scale changes across a codebase by decomposing work into independent units that execute in parallel. Each unit runs in an isolated git worktree and creates its own pull request.

## Usage

```bash
/batch <instruction>
```

### Examples

```bash
# Migrate from one library to another
/batch migrate all lodash usage to native equivalents

# Add type annotations across the codebase
/batch add type annotations to all untyped function parameters

# Update import statements
/batch update all relative imports to use absolute paths

# Apply code style changes
/batch format all TypeScript files with new linting rules
```

## How It Works

### Phase 1: Research and Plan

#### 1. Understand the Scope
The skill launches subagents to deeply research what your instruction touches:
- Find all files, patterns, and call sites that need to change
- Understand existing conventions for consistent migration
- Identify dependencies and potential conflicts

#### 2. Decompose into Independent Units
The work is broken into **5-30 self-contained units** where each unit:
- Is independently implementable in an isolated git worktree
- Is mergeable on its own without depending on other units
- Is roughly uniform in size (splits large units, merges trivial ones)

**Scaling Strategy:**
- Few files → Closer to 5 units
- Hundreds of files → Closer to 30 units
- Prefer per-directory or per-module slicing over arbitrary file lists

#### 3. Determine E2E Test Recipe
The skill figures out how each worker can verify its change actually works:

**Verification Methods:**
- **Browser automation**: Use chrome extension or browser tool for UI changes
- **CLI verification**: Launch app interactively and exercise changed behavior
- **Dev server + curl**: Start server and hit affected endpoints for API changes
- **Existing test suite**: Run integration/e2e tests if available

**If no e2e path is found**, the skill asks you how to verify the change, offering 2-3 specific options.

#### 4. Write the Plan
The plan file includes:
- Summary of research findings
- Numbered list of work units (title, files/directories, description)
- E2E test recipe (or "skip e2e because...")
- Exact worker instructions template

#### 5. Present for Approval
The plan is presented for your review and approval before execution.

### Phase 2: Spawn Workers

After plan approval, the skill spawns **one background agent per work unit** using the Agent tool.

**Critical Requirements:**
- All agents use `isolation: "worktree"` and `run_in_background: true`
- Launched in a single message block for parallel execution
- Each agent's prompt is fully self-contained

**Agent Prompt Includes:**
- Overall goal (your instruction)
- Unit's specific task (title, file list, change description)
- Codebase conventions discovered during research
- E2E test recipe from the plan
- Worker instructions template

### Phase 3: Track Progress

The skill renders a status table and updates it as agents complete:

| # | Unit | Status | PR |
|---|------|--------|----|
| 1 | <title> | running | — |
| 2 | <title> | done | https://github.com/... |
| 3 | <title> | failed | — |

**Status Tracking:**
- Parses `PR: <url>` line from each agent's result
- Re-renders table with updated status and PR links
- Keeps failure notes for agents that didn't produce a PR

**Final Summary:**
When all agents report, renders final table and one-line summary (e.g., "22/24 units landed as PRs").

## Worker Instructions Template

Each worker agent receives these instructions:

```
After you finish implementing the change:
1. **Simplify** — Review and clean up your changes
2. **Run unit tests** — Run the project's test suite
3. **Test end-to-end** — Follow the e2e test recipe
4. **Commit and push** — Commit changes, push branch, create PR
5. **Report** — End with: `PR: <url>` or `PR: none — <reason>`
```

## Prerequisites

### Git Repository Required
The `/batch` command requires a git repository because it:
- Spawns agents in isolated git worktrees
- Creates PRs from each worktree
- Manages parallel branches safely

**If not in a git repo**, the skill will prompt you to initialize one.

### Sufficient Work Scope
Batch is designed for **large-scale changes** that:
- Affect many files (typically 10+)
- Can be decomposed into independent units
- Benefit from parallel execution

**For small changes**, use regular editing instead.

## Best Practices

### 1. Clear Instructions
```bash
# Good - Specific and actionable
/batch replace all lodash _.map calls with Array.prototype.map

# Avoid - Vague
/batch improve the code
```

### 2. Appropriate Scope
```bash
# Good - Large-scale, mechanical change
/batch migrate all React class components to hooks

# Avoid - Small, focused change
/batch fix the login button
```

### 3. Testable Changes
```bash
# Good - Clear verification path
/batch update all API endpoints to use new authentication

# Include verification method
/batch update API endpoints and verify with integration tests
```

## Advanced Usage

### Custom Worker Instructions
You can customize what each worker does by including specific instructions:

```bash
/batch migrate to TypeScript and ensure all tests pass
```

### Targeted Changes
Specify which parts of the codebase to change:

```bash
/batch update all services in /src/api to use new error handling
```

### Conditional Execution
Include conditions in your instruction:

```bash
/batch add logging to all functions that handle user data
```

## Troubleshooting

### Plan Phase Issues

**Research takes too long:**
- The skill is thoroughly analyzing the codebase
- This is normal for large changes
- You can interrupt and provide more specific scope

**Too many/few units:**
- The skill automatically scales based on work size
- You can adjust by being more/less specific in your instruction

**No e2e test recipe found:**
- The skill will ask you how to verify
- Provide clear verification steps
- Consider if the change needs e2e testing

### Execution Phase Issues

**Workers failing:**
- Check individual worker status in the table
- Review failure notes for specific issues
- Common causes: test failures, merge conflicts, missing dependencies

**PRs not being created:**
- Verify git credentials are configured
- Check if you have push permissions
- Review worker output for specific errors

**Slow execution:**
- Normal for large-scale changes
- Workers run in parallel but may be resource-intensive
- Consider reducing scope if needed

## Examples by Use Case

### Library Migration
```bash
# Migrate from one library to another
/batch replace all moment.js usage with date-fns

# Update to new major version
/batch migrate from React 17 to React 18
```

### Code Style Updates
```bash
# Apply new linting rules
/batch fix all ESLint errors in the codebase

# Update naming conventions
/batch rename all variables from camelCase to snake_case
```

### API Changes
```bash
# Update API endpoints
/batch update all API calls to use new authentication headers

# Change response format
/batch update all API consumers to handle new response structure
```

### Configuration Updates
```bash
# Update configuration files
/batch migrate all config files to new format

# Update environment variables
/batch update all .env files with new variable names
```

## Integration Notes

### Git Worktree Isolation
Each worker runs in an isolated git worktree:
- Prevents conflicts between parallel workers
- Enables safe concurrent modifications
- Each worktree creates its own branch

### PR Creation
Each worker:
- Creates a feature branch from main
- Implements its specific changes
- Runs tests and verification
- Creates a PR with descriptive title
- Reports PR URL back to coordinator

### Progress Tracking
The batch coordinator:
- Tracks all worker statuses in real-time
- Updates progress table as workers complete
- Aggregates final results and summary
- Handles worker failures gracefully

## Performance Considerations

### Resource Usage
- **Parallel execution**: All workers run simultaneously
- **Memory usage**: Each worktree has its own git checkout
- **Disk usage**: Temporary worktrees are cleaned up after completion

### Optimization Tips
1. **Scope appropriately**: Don't batch small changes
2. **Test locally first**: Verify your approach works on a small scale
3. **Monitor progress**: Watch the status table for issues
4. **Clean up**: Worktrees are automatically cleaned, but verify if needed

## Security Considerations

- **Permission checks**: All operations respect OpenCode's permission system
- **Isolation**: Workers are isolated in separate worktrees
- **Audit trail**: All changes are tracked in git history
- **Review required**: All changes go through PR process

## Limitations

- **Git required**: Must be in a git repository
- **Sufficient scope**: Designed for large-scale changes (10+ files)
- **Linear changes**: Best for mechanical, predictable changes
- **Test coverage**: Requires clear verification path

## Related Skills

- **loop**: For recurring task scheduling
- **skillify**: For creating reusable workflows
- **agent**: For spawning subagents
- **debug**: For troubleshooting batch execution

## Error Recovery

### Worker Failures
If a worker fails:
1. The batch coordinator notes the failure
2. Other workers continue running
3. You can retry failed units individually
4. Review failure notes for specific issues

### Partial Success
If some workers succeed and others fail:
1. Successful PRs are created and can be merged
2. Failed units can be retried or handled manually
3. The final summary shows success rate

### Cleanup Issues
If worktrees aren't cleaned up:
```bash
# Manually clean up worktrees
git worktree prune

# List existing worktrees
git worktree list
```

## Best Practices Summary

1. **Start with clear, specific instructions**
2. **Ensure you're in a git repository**
3. **Have a clear verification strategy**
4. **Monitor progress through the status table**
5. **Review PRs before merging**
6. **Handle failures gracefully**
7. **Clean up any remaining worktrees**

## Advanced Patterns

### Staged Rollout
```bash
# First batch: Core functionality
/batch update core services to new API

# Second batch: Peripheral services
/batch update peripheral services to new API
```

### Conditional Batching
```bash
# Only batch if certain conditions are met
/batch if tests pass, migrate to new library
```

### Rollback Strategy
```bash
# Include rollback instructions in worker prompt
/batch update to new version and include rollback steps
```

## Monitoring and Observability

### Progress Tracking
- Real-time status table updates
- Individual worker progress
- PR creation notifications
- Final summary with success rate

### Logging
- All worker executions are logged
- Errors and failures are captured
- Success metrics are tracked
- Audit trail is maintained

### Metrics
- Number of units completed
- Success/failure rate
- Execution time per unit
- PR creation rate
