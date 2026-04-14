---
name: loop
description: "Run a prompt or command on a recurring interval using cron expressions. Perfect for automated monitoring, periodic checks, and repeated tasks."
when_to_use: "Use when the user wants to set up a recurring task, poll for status, or run something repeatedly on an interval (e.g., 'check the deploy every 5 minutes', 'keep running tests', 'monitor logs hourly'). Do NOT invoke for one-off tasks."
argument_hint: "[interval] <prompt>"
allowed_tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
context: inline
---

# Loop Skill - Recurring Task Scheduling

## Overview

The Loop skill enables you to schedule recurring tasks using cron expressions. This is perfect for automated monitoring, periodic checks, and repeated tasks that need to run at specific intervals.

## Usage

```
/loop [interval] <prompt>
```

### Interval Syntax

Intervals use cron-like syntax with human-friendly shortcuts:

- **Ns** - Every N seconds (minimum 1 minute granularity)
- **Nm** - Every N minutes (e.g., `5m`, `30m`)
- **Nh** - Every N hours (e.g., `2h`, `24h`)
- **Nd** - Every N days (e.g., `1d`, `7d`)

### Examples

```bash
# Check deploy status every 5 minutes
/loop 5m check the deploy status

# Run tests every 30 minutes
/loop 30m run the test suite

# Monitor logs hourly
/loop 1h check application logs for errors

# Daily backup check
/loop 1d verify backup integrity

# Default interval (10 minutes) if not specified
/loop monitor system health
```

## How It Works

### 1. Parse the Input

The skill parses your input into `[interval] <prompt>`:

**Priority Order:**
1. **Leading token**: If first token matches `^\d+[smhd]$` (e.g., `5m`, `2h`), that's the interval
2. **Trailing "every" clause**: If input ends with `every <N><unit>` (e.g., `every 20m`), extract that
3. **Default**: If no interval found, use `10m` and treat entire input as prompt

**Examples:**
- `5m /check-status` → interval: `5m`, prompt: `/check-status`
- `check logs every 20m` → interval: `20m`, prompt: `check logs`
- `monitor system` → interval: `10m`, prompt: `monitor system`

### 2. Convert Interval to Cron

The skill converts human intervals to cron expressions:

| Interval Pattern | Cron Expression | Notes |
|------------------|-----------------|-------|
| `Nm` where N ≤ 59 | `*/N * * * *` | Every N minutes |
| `Nm` where N ≥ 60 | `0 */H * * *` | Round to hours (H = N/60) |
| `Nh` where N ≤ 23 | `0 */N * * *` | Every N hours |
| `Nd` | `0 0 */N * *` | Every N days at midnight |
| `Ns` | `ceil(N/60)m` | Cron minimum is 1 minute |

**Important:** If the interval doesn't cleanly divide (e.g., `7m`), the skill rounds to the nearest clean interval and informs you.

### 3. Schedule the Task

The skill creates a scheduled task with:
- **Cron expression**: The converted cron schedule
- **Prompt**: Your parsed prompt (verbatim)
- **Recurring**: `true` for continuous execution

### 4. Execute Immediately

After scheduling, the skill **immediately executes** your prompt once - you don't wait for the first cron fire.

## Task Lifecycle

### Creation
```bash
/loop 5m check deploy status
```
This:
1. Parses: interval=`5m`, prompt=`check deploy status`
2. Converts: `5m` → `*/5 * * * *`
3. Schedules: Task runs every 5 minutes
4. Executes: Runs `check deploy status` immediately
5. Confirms: Shows task ID and schedule

### Monitoring
Check running tasks with:
```bash
# List all scheduled tasks
/loop list

# View specific task details
/loop status <task-id>
```

### Cancellation
```bash
# Cancel a specific task
/loop cancel <task-id>

# Cancel all tasks
/loop cancel-all
```

## Advanced Usage

### Complex Prompts
```bash
# Run a slash command on schedule
/loop 1h /standup

# Multi-step prompt
/loop 30m check logs, analyze errors, and report if any found

# Conditional execution
/loop 15m if tests fail, notify the team
```

### Time-Based Scheduling
```bash
# Specific time (uses your local timezone)
/loop "9am * * 1-5" run morning checks

# Multiple intervals
/loop "0 9,17 * * *" run checks at 9am and 5pm
```

### Integration with Other Skills
```bash
# Combine with batch for parallel work
/loop 1h /batch check all services

# Use with remember for memory updates
/loop 1d /remember review and organize memory
```

## Best Practices

### 1. Choose Appropriate Intervals
- **Frequent tasks** (1-5 minutes): Use for critical monitoring
- **Regular tasks** (15-60 minutes): Use for periodic checks
- **Daily tasks**: Use for maintenance and reporting
- **Avoid**: Sub-minute intervals (not supported by cron)

### 2. Keep Prompts Self-Contained
```bash
# Good - Self-contained
/loop 1h check /var/log/app.log for ERROR patterns

# Avoid - Depends on previous context
/loop 1h continue what we were doing
```

### 3. Handle Failures Gracefully
```bash
# Include error handling in your prompt
/loop 30m try { run-tests } catch { log-error }
```

### 4. Monitor Resource Usage
- Frequent tasks can consume significant resources
- Consider the impact on system performance
- Use appropriate intervals for your use case

## Troubleshooting

### Task Not Running
1. Check if the task was created: `/loop list`
2. Verify the cron expression is valid
3. Ensure the prompt doesn't have syntax errors
4. Check system logs for errors

### Task Running Too Frequently
1. Verify your interval parsing: `/loop status <task-id>`
2. Check for unintended "every" clauses in your prompt
3. Review the cron expression shown in task details

### Task Not Executing Prompt
1. Ensure prompt is properly formatted
2. Check for special characters that need escaping
3. Verify the prompt works when run manually

## Limitations

- **Minimum interval**: 1 minute (cron limitation)
- **Timezone**: Uses your local system timezone
- **Persistence**: Tasks are session-based by default
- **Resource limits**: Frequent tasks may impact performance

## Examples by Use Case

### DevOps Monitoring
```bash
# Check service health every 5 minutes
/loop 5m check all service endpoints

# Monitor disk space hourly
/loop 1h check disk usage and alert if > 80%

# Verify backups daily
/loop 1d verify last backup completed successfully
```

### Development Workflow
```bash
# Run tests every 30 minutes during development
/loop 30m run test suite and report failures

# Check for dependency updates daily
/loop 1d check for package updates and security advisories

# Monitor build status every 10 minutes
/loop 10m check CI/CD pipeline status
```

### Data Processing
```bash
# Process new files every hour
/loop 1h process any new files in /incoming

# Clean up temporary files daily
/loop 1d remove files older than 7 days from /tmp

# Aggregate logs every 6 hours
/loop 6h aggregate and compress log files
```

## Integration Notes

This skill integrates with OpenCode's task scheduling system. It uses standard cron expressions and follows these conventions:

- **Timezone**: Local system timezone
- **Execution**: Tasks run when OpenCode is active
- **Persistence**: Session-based by default
- **Error handling**: Failed tasks are logged but don't stop the schedule

## Security Considerations

- **Prompt validation**: All prompts are validated before scheduling
- **Resource limits**: Tasks are subject to system resource constraints
- **Permission checks**: Scheduled tasks respect OpenCode's permission system
- **Audit logging**: All task executions are logged

## Performance Tips

1. **Batch operations**: Combine multiple checks into a single task
2. **Optimize intervals**: Use the longest interval that meets your needs
3. **Cache results**: Store results to avoid redundant work
4. **Parallel execution**: Use batch skill for parallel work when needed

## Related Skills

- **batch**: For parallel work orchestration
- **skillify**: For creating reusable workflows
- **remember**: For memory management and organization
- **debug**: For troubleshooting scheduled tasks
