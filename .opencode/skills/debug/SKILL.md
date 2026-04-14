---
name: debug
description: "Debug your current OpenCode session by reading the session debug log. Includes all event logging and helps diagnose issues with error analysis, stack traces, and failure patterns."
when_to_use: "Use when encountering issues, errors, or unexpected behavior in the current OpenCode session. Also useful for performance analysis, understanding tool execution, and troubleshooting failures."
argument_hint: "[issue description or symptoms]"
allowed_tools:
  - Read
  - Grep
  - Glob
context: inline
---

# Debug Skill - Session Debugging and Troubleshooting

## Overview

The Debug skill helps you debug issues in your current OpenCode session by analyzing the session debug log. It provides comprehensive error analysis, stack trace interpretation, and failure pattern detection.

## Usage

```bash
/debug [issue description or symptoms]
```

### Examples

```bash
# General debugging
/debug

# Specific issue
/debug tool execution is hanging

# Error investigation
/debug getting permission denied errors

# Performance issue
/debug session is running slowly
```

## How It Works

### 1. Enable Debug Logging

The skill automatically enables debug logging for the current session if it's not already enabled. This ensures all subsequent activity is captured.

**Note:** Debug logging was OFF for this session until now. Nothing prior to this `/debug` invocation was captured.

### 2. Read the Debug Log

The skill reads the session debug log from:
- **Location**: Session-specific debug log file
- **Format**: Structured log entries with timestamps and event types
- **Content**: All events, errors, warnings, and system messages

### 3. Analyze the Log

The skill examines the debug log for:

**Error Patterns:**
- `[ERROR]` entries with full context
- Stack traces and call stacks
- Error messages and codes
- Failure points in execution

**Warning Patterns:**
- `[WARN]` entries that might indicate issues
- Deprecated usage warnings
- Performance warnings
- Configuration issues

**Notable Events:**
- Tool execution failures
- Permission denials
- Resource exhaustion
- Timeout issues
- Network problems

### 4. Provide Diagnosis

The skill delivers:
- **Plain language explanation** of what was found
- **Root cause analysis** when possible
- **Concrete fixes or next steps**
- **Prevention strategies** for future issues

## Debug Log Format

The debug log contains structured entries:

```
[timestamp] [LEVEL] [component] message
```

**Example:**
```
2024-04-14 10:30:45 [ERROR] [ToolExecution] Bash tool failed: command not found
2024-04-14 10:30:46 [WARN] [Permissions] Permission denied for Write(/etc/hosts)
2024-04-14 10:30:47 [INFO] [Agent] Agent task completed successfully
```

## Common Issues and Solutions

### Tool Execution Failures

**Symptoms:**
- Tools not executing
- Commands failing silently
- Unexpected tool behavior

**Debug Approach:**
1. Search for `[ERROR] [ToolExecution]` entries
2. Examine error messages and stack traces
3. Check for permission issues
4. Verify tool availability

**Common Causes:**
- Tool not installed or not in PATH
- Incorrect command syntax
- Permission denied
- Resource limits exceeded

**Solutions:**
- Install missing tools
- Fix command syntax
- Adjust permissions
- Increase resource limits

### Permission Issues

**Symptoms:**
- Permission denied errors
- Tools blocked from executing
- File access denied

**Debug Approach:**
1. Search for `[ERROR] [Permissions]` entries
2. Check permission rules in settings
3. Verify file/directory permissions
4. Review permission mode

**Common Causes:**
- Restrictive permission rules
- Wrong permission mode
- File system permissions
- Security policies

**Solutions:**
- Update permission rules
- Change permission mode
- Fix file permissions
- Adjust security settings

### Performance Issues

**Symptoms:**
- Slow response times
- High resource usage
- Session hanging

**Debug Approach:**
1. Search for timing information
2. Check for long-running operations
3. Look for resource warnings
4. Analyze execution patterns

**Common Causes:**
- Large file operations
- Inefficient algorithms
- Resource contention
- Network latency

**Solutions:**
- Optimize operations
- Use more efficient approaches
- Manage resources better
- Cache results

### Memory Issues

**Symptoms:**
- Out of memory errors
- Session crashes
- Slow performance

**Debug Approach:**
1. Search for memory-related errors
2. Check for memory leaks
3. Analyze memory usage patterns
4. Look for large operations

**Common Causes:**
- Memory leaks
- Large file operations
- Inefficient data structures
- Insufficient memory

**Solutions:**
- Fix memory leaks
- Optimize memory usage
- Process data in chunks
- Increase available memory

### Network Issues

**Symptoms:**
- Connection failures
- Timeout errors
- Slow network operations

**Debug Approach:**
1. Search for network-related errors
2. Check timeout settings
3. Verify network connectivity
4. Analyze network patterns

**Common Causes:**
- Network connectivity issues
- Firewall rules
- DNS problems
- Timeout settings too aggressive

**Solutions:**
- Fix network connectivity
- Adjust firewall rules
- Resolve DNS issues
- Increase timeout values

## Debugging Workflow

### 1. Identify the Issue
```bash
# Describe the problem
/debug tool execution is failing with permission errors
```

### 2. Analyze the Log
The skill will:
- Read the debug log
- Search for relevant error patterns
- Analyze the context around errors
- Identify root causes

### 3. Get Diagnosis
The skill provides:
- Clear explanation of the issue
- Root cause analysis
- Specific steps to fix
- Prevention strategies

### 4. Implement Fixes
Apply the suggested fixes and verify the issue is resolved.

## Advanced Debugging Techniques

### Pattern Matching
```bash
# Search for specific error patterns
/debug search for "permission denied" errors in the last hour
```

### Time-Based Analysis
```bash
# Focus on recent events
/debug analyze events from the last 10 minutes
```

### Component-Specific Debugging
```bash
# Debug specific component
/debug investigate agent execution issues
```

### Performance Profiling
```bash
# Analyze performance
/debug profile slow operations in the session
```

## Debug Log Analysis

### Error Categories

**1. Tool Errors**
- Command execution failures
- Tool not found
- Invalid tool usage
- Tool timeout

**2. Permission Errors**
- Access denied
- Insufficient permissions
- Security policy violations
- Authorization failures

**3. Resource Errors**
- Out of memory
- Disk space exhausted
- CPU limits exceeded
- File handle limits

**4. Network Errors**
- Connection refused
- Timeout
- DNS resolution failure
- SSL/TLS errors

**5. Configuration Errors**
- Invalid settings
- Missing configuration
- Conflicting settings
- Deprecated settings

### Warning Categories

**1. Performance Warnings**
- Slow operations
- Resource usage high
- Inefficient patterns
- Deprecated usage

**2. Configuration Warnings**
- Non-optimal settings
- Missing recommended settings
- Incompatible settings
- Security concerns

**3. Deprecation Warnings**
- Deprecated features
- Soon-to-be-removed features
- Migration recommendations
- Breaking changes ahead

## Troubleshooting Guide

### Quick Diagnosis

**Step 1: Run `/debug`**
```bash
/debug
```

**Step 2: Review the output**
- Look for `[ERROR]` entries
- Note any `[WARN]` entries
- Check for patterns
- Identify the most recent issues

**Step 3: Apply fixes**
- Follow the suggested solutions
- Test the fixes
- Verify the issue is resolved

**Step 4: Prevent recurrence**
- Update configurations
- Add monitoring
- Document the issue
- Share with team if relevant

### Common Debugging Scenarios

#### Scenario 1: Tool Not Found
**Symptom:** Command fails with "command not found"

**Debug:**
```bash
/debug tool not found error
```

**Solution:**
- Install the missing tool
- Add tool to PATH
- Use full path to tool
- Check tool availability

#### Scenario 2: Permission Denied
**Symptom:** Access denied when trying to read/write files

**Debug:**
```bash
/debug permission denied error
```

**Solution:**
- Check file permissions
- Update permission rules
- Change permission mode
- Verify user has access

#### Scenario 3: Slow Performance
**Symptom:** Operations taking longer than expected

**Debug:**
```bash
/debug slow performance issue
```

**Solution:**
- Optimize operations
- Cache results
- Process data in chunks
- Use more efficient algorithms

#### Scenario 4: Session Hanging
**Symptom:** Session becomes unresponsive

**Debug:**
```bash
/debug session hanging issue
```

**Solution:**
- Identify blocking operation
- Check for deadlocks
- Increase timeout values
- Break into smaller operations

## Best Practices

### 1. Enable Debugging Early
```bash
# Enable debugging at start of session
/debug
```

### 2. Be Specific About Issues
```bash
# Good - Specific issue
/debug tool execution failing with permission denied on /etc/hosts

# Avoid - Too vague
/debug something is wrong
```

### 3. Review All Output
- Read all error messages
- Check warnings
- Look for patterns
- Note context

### 4. Document Findings
- Keep notes on issues
- Document solutions
- Share with team
- Update documentation

### 5. Prevent Recurrence
- Fix root causes
- Update configurations
- Add monitoring
- Document procedures

## Integration Notes

### Settings Locations
Remember that settings are in:
- **user** - `~/.opencode/settings.json`
- **project** - `.opencode/settings.json`
- **local** - `.opencode/settings.local.json`

### Log Location
The debug log for the current session is at a session-specific location that the skill will identify.

### Log Rotation
Debug logs may be rotated or truncated:
- Recent events are most relevant
- Older events may be archived
- Log size is managed automatically

## Performance Considerations

### Log Size
- Debug logs can grow large in long sessions
- The skill reads the most recent entries
- Full log analysis may take time

### Resource Usage
- Debugging has minimal overhead
- Log analysis is efficient
- Pattern matching is optimized

## Security Considerations

- Debug logs may contain sensitive information
- Logs are session-specific
- Logs are not shared automatically
- Review logs before sharing

## Related Skills

- **update-config**: For configuration issues
- **remember**: For documenting issues
- **loop**: For recurring monitoring
- **skillify**: For creating debugging workflows

## Debug Quality Checklist

After debugging, verify:

- [ ] Issue identified and understood
- [ ] Root cause determined
- [ ] Solution implemented
- [ ] Fix verified
- [ ] Issue documented
- [ ] Prevention strategy in place
- [ ] Team notified if relevant

## Advanced Debugging Patterns

### Reproducible Issues
```bash
/debug create a reproducible test case for this issue
```

### Intermittent Issues
```bash
/debug analyze intermittent failures and patterns
```

### Performance Profiling
```bash
/debug profile and identify performance bottlenecks
```

### Security Analysis
```bash
/debug analyze security-related events and issues
```

## Debugging Workflow Examples

### Example 1: Tool Execution Failure
```bash
# User experiences tool failure
/debug bash tool is failing with "command not found"

# Skill analyzes log
# Finds: [ERROR] [ToolExecution] Command 'prettier' not found

# Provides solution
# Install prettier: npm install -g prettier
# Or use full path: /usr/local/bin/prettier
```

### Example 2: Permission Issue
```bash
# User gets permission denied
/debug permission denied when writing to /etc/hosts

# Skill analyzes log
# Finds: [ERROR] [Permissions] Access denied for Write(/etc/hosts)

# Provides solution
# Update permission rules to allow Write(/etc/hosts)
# Or change permission mode to bypass
```

### Example 3: Performance Issue
```bash
# Session is slow
/debug session is running slowly, operations taking too long

# Skill analyzes log
# Finds: [WARN] [Performance] Large file operation taking 30s

# Provides solution
# Process file in chunks
# Use more efficient approach
# Cache results
```

## Best Practices Summary

1. **Enable debugging early** - Capture all events from the start
2. **Be specific about issues** - Provide clear descriptions
3. **Review all output** - Check errors, warnings, and patterns
4. **Apply suggested fixes** - Follow the recommended solutions
5. **Verify fixes work** - Test that issues are resolved
6. **Document findings** - Keep notes for future reference
7. **Prevent recurrence** - Fix root causes and add monitoring
8. **Share knowledge** - Document issues and solutions with team
