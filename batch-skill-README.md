# 🔄 Batch Skill - Parallel Work Orchestration

<div align="center">

![Batch Skill](https://img.shields.io/badge/OpenCode-Batch_Skill-purple?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Research and plan large-scale changes, then execute them in parallel across isolated worktree agents that each open a PR**

</div>

---

## 🎯 What This Skill Does

The **Batch skill** enables you to orchestrate large-scale changes across your codebase by:

- ✅ **Parallel execution** - Run multiple changes simultaneously
- ✅ **Isolated worktrees** - Each change in its own git worktree
- ✅ **Automatic PR creation** - Each change gets its own pull request
- ✅ **Progress tracking** - Monitor all parallel operations
- ✅ **Conflict resolution** - Handle merge conflicts automatically
- ✅ **Rollback capability** - Undo changes if needed

### Key Features

- 🚀 **Massive parallelization** - Execute hundreds of changes simultaneously
- 🎯 **Intelligent planning** - Research and plan before execution
- 📊 **Progress monitoring** - Track all operations in real-time
- 🔧 **Automatic conflict handling** - Resolve merge conflicts automatically
- 📝 **Comprehensive logging** - Detailed logs for all operations
- 🔄 **Rollback support** - Undo changes if something goes wrong

---

## 🚀 How to Use

### Basic Usage

```bash
# Batch migrate all lodash usage
/batch migrate all lodash usage to native JavaScript

# Batch update all dependencies
/batch update all dependencies to latest versions

# Batch refactor all API endpoints
/batch refactor all API endpoints to use async/await

# Batch fix all security issues
/batch fix all security vulnerabilities identified in audit
```

### Workflow

The batch skill follows a three-phase workflow:

1. **Research Phase** - Analyze the codebase and plan changes
2. **Planning Phase** - Create detailed execution plan
3. **Execution Phase** - Execute changes in parallel

---

## 📖 Complete Guide

### Phase 1: Research

The research phase analyzes your codebase to understand the scope of changes:

```bash
/batch research migrate all lodash usage

📊 Research Results:
  - Total files: 156
  - Files with lodash: 89
  - Total lodash imports: 234
  - Estimated changes: 89 files
  - Estimated time: 45 minutes
```

### Phase 2: Planning

The planning phase creates a detailed execution plan:

```bash
/batch plan migrate all lodash usage

📋 Execution Plan:
  - Total changes: 89
  - Parallel workers: 10
  - Estimated time: 15 minutes
  - Risk level: Medium
  - Rollback plan: Available
```

### Phase 3: Execution

The execution phase runs all changes in parallel:

```bash
/batch execute migrate all lodash usage

🚀 Execution Started:
  - Total changes: 89
  - Parallel workers: 10
  - Progress: 0/89 (0%)
  - Elapsed time: 0s

✅ Execution Complete:
  - Total changes: 89
  - Successful: 87
  - Failed: 2
  - PRs created: 87
  - Time taken: 14m 32s
```

---

## 🎨 Usage Examples

### Example 1: Dependency Migration

```bash
# Migrate all lodash usage to native JavaScript
/batch migrate all lodash usage to native JavaScript

# Migrate all moment.js usage to date-fns
/batch migrate all moment.js usage to date-fns

# Migrate all jQuery usage to vanilla JavaScript
/batch migrate all jQuery usage to vanilla JavaScript
```

### Example 2: Dependency Updates

```bash
# Update all dependencies to latest versions
/batch update all dependencies to latest versions

# Update all dev dependencies
/batch update all dev dependencies to latest versions

# Update all peer dependencies
/batch update all peer dependencies to latest versions
```

### Example 3: Code Refactoring

```bash
# Refactor all API endpoints to use async/await
/batch refactor all API endpoints to use async/await

# Refactor all database queries to use prepared statements
/batch refactor all database queries to use prepared statements

# Refactor all error handling to use async/await
/batch refactor all error handling to use async/await
```

### Example 4: Security Fixes

```bash
# Fix all security vulnerabilities identified in audit
/batch fix all security vulnerabilities identified in audit

# Fix all XSS vulnerabilities
/batch fix all XSS vulnerabilities in templates

# Fix all SQL injection vulnerabilities
/batch fix all SQL injection vulnerabilities in database queries
```

### Example 5: Code Style Updates

```bash
# Update all code to follow new style guide
/batch update all code to follow new style guide

# Update all variable names to follow naming convention
/batch update all variable names to follow naming convention

# Update all function names to follow naming convention
/batch update all function names to follow naming convention
```

---

## 🔧 Advanced Usage

### Custom Worker Configuration

```bash
# Use custom number of workers
/batch --workers 20 migrate all lodash usage

# Use custom timeout
/batch --timeout 300 migrate all lodash usage

# Use custom retry policy
/batch --retry 3 migrate all lodash usage
```

### Selective Execution

```bash
# Only process specific files
/batch --files src/**/*.js migrate all lodash usage

# Exclude specific files
/batch --exclude node_modules migrate all lodash usage

# Only process files matching pattern
/batch --pattern "src/**/*" migrate all lodash usage
```

### Dry Run Mode

```bash
# Preview changes without executing
/batch --dry-run migrate all lodash usage

📊 Dry Run Results:
  - Total changes: 89
  - Files to modify: 89
  - Estimated time: 15 minutes
  - Risk level: Medium
```

### Rollback Support

```bash
# Rollback all changes if something goes wrong
/batch rollback

🔄 Rollback Complete:
  - Total changes rolled back: 87
  - PRs closed: 87
  - Time taken: 3m 15s
```

---

## 📊 Monitoring and Feedback

### Progress Tracking

The batch skill provides real-time progress updates:

```bash
/batch execute migrate all lodash usage

📊 Progress:
  [████████████████████░░░░░░░░░░░░░░░░] 60/89 (67%)
  - Completed: 60
  - In progress: 10
  - Pending: 19
  - Failed: 0
  - Time elapsed: 8m 23s
  - Estimated time remaining: 5m 12s
```

### Detailed Statistics

```bash
/batch stats

📊 Batch Statistics:
  - Total batches: 5
  - Total changes: 423
  - Successful: 418
  - Failed: 5
  - Success rate: 98.8%
  - Average time per change: 12.3s
  - Total time: 87m 15s
```

---

## 🎯 Best Practices

### 1. Start with Research

```bash
# ✅ Good: Research before planning
/batch research migrate all lodash usage
/batch plan migrate all lodash usage
/batch execute migrate all lodash usage

# ❌ Bad: Skip research and planning
/batch execute migrate all lodash usage
```

### 2. Use Appropriate Worker Count

```bash
# ✅ Good: Appropriate worker count for the task
/batch --workers 10 migrate all lodash usage

# ❌ Bad: Too many workers for the task
/batch --workers 100 migrate all lodash usage
```

### 3. Monitor Progress

```bash
# ✅ Good: Monitor progress during execution
/batch execute migrate all lodash usage

# ❌ Bad: Don't monitor progress
/batch execute migrate all lodash usage > /dev/null
```

### 4. Handle Failures Gracefully

```bash
# ✅ Good: Handle failures with retry
/batch --retry 3 migrate all lodash usage

# ❌ Bad: No retry on failure
/batch execute migrate all lodash usage
```

### 5. Use Rollback When Needed

```bash
# ✅ Good: Rollback if something goes wrong
/batch rollback

# ❌ Bad: Leave failed changes in place
# (do nothing)
```

---

## 🔍 Troubleshooting

### Changes Not Executing

**Issue**: Changes are not being executed

**Solutions**:
1. Check research phase results
2. Verify planning phase completed
3. Check worker configuration
4. Review execution logs

### High Failure Rate

**Issue**: Many changes are failing

**Solutions**:
1. Increase retry count
2. Increase timeout duration
3. Review error logs
4. Adjust worker count

### Slow Execution

**Issue**: Execution is taking too long

**Solutions**:
1. Increase worker count
2. Optimize change operations
3. Reduce timeout duration
4. Review system resources

### Merge Conflicts

**Issue**: Merge conflicts are occurring

**Solutions**:
1. Review conflict resolution strategy
2. Check branch status
3. Verify git configuration
4. Review conflict logs

---

## 🎨 Frontend Design Principles

### Visual Appeal

The batch skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Progress bars** - Visual representation of progress
- **Code blocks** - Syntax-highlighted code examples
- **Tables** - Organized data presentation

### User Experience

- **Three-phase workflow** - Clear research, plan, execute phases
- **Real-time feedback** - Know what's happening at all times
- **Progress tracking** - Visual progress indicators
- **Error handling** - Graceful degradation with helpful messages
- **Rollback support** - Undo changes if needed

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### Git Worktree Documentation

- [Git Worktree Guide](https://git-scm.com/docs/git-worktree)
- [Git Worktree Tutorial](https://www.atlassian.com/git/tutorials/using-git-branches/git-worktree)
- [Git Worktree Best Practices](https://www.git-scm.com/docs/git-worktree#_examples)

### OpenCode Documentation

- [OpenCode Skills Collection](https://github.com/kushalchalla981-tech/opencode-skills)
- [OpenCode Documentation](https://docs.opencode.ai)
- [OpenCode Community](https://community.opencode.ai)

### Related Skills

- **loop** - Recurring task scheduling with cron expressions
- **skillify** - Convert sessions to reusable skills
- **debug** - Session debugging and troubleshooting
- **remember** - Memory management and organization

---

## 🤝 Contributing

Contributions to the batch skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to orchestrate your first large-scale change?

```bash
# Research your first batch operation
/batch research migrate all lodash usage

# Plan your first batch operation
/batch plan migrate all lodash usage

# Execute your first batch operation
/batch execute migrate all lodash usage
```

**Start orchestrating large-scale changes today!** 🚀

---

<div align="center">

**Made with ❤️ for the OpenCode community**

[![OpenCode](https://img.shields.io/badge/OpenCode-Batch_Skill-purple?style=for-the-badge&logo=opencode)](https://github.com/kushalchalla981-tech/opencode-skills)

</div>
