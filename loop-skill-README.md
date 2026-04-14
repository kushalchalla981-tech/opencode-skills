# 🔄 Loop Skill - Recurring Task Scheduling

<div align="center">

![Loop Skill](https://img.shields.io/badge/OpenCode-Loop_Skill-blue?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Schedule recurring tasks using cron expressions with automated monitoring and periodic checks**

</div>

---

## 🎯 What This Skill Does

The **Loop skill** enables you to schedule recurring tasks using cron expressions. It's perfect for:

- ✅ **Automated monitoring** - Set up periodic checks on your systems
- ✅ **Repeated tasks** - Automate routine operations
- ✅ **Periodic maintenance** - Schedule regular maintenance tasks
- ✅ **Health checks** - Monitor system health at intervals
- ✅ **Data synchronization** - Sync data on a schedule
- ✅ **Backup operations** - Schedule regular backups

### Key Features

- 🕐 **Cron Expression Support** - Full cron syntax for flexible scheduling
- 🎯 **Immediate Execution** - Run tasks immediately when needed
- 📊 **Task Management** - Track and manage scheduled tasks
- ⚡ **High Performance** - Efficient scheduling and execution
- 🔧 **Easy Configuration** - Simple setup and management

---

## 🚀 How to Use

### Basic Usage

```bash
# Schedule a task to run every 5 minutes
/loop 5m check deploy status

# Schedule a task to run every hour
/loop 1h run system health check

# Schedule a task to run daily at 9 AM
/loop "0 9 * * *" run daily backup

# Schedule a task to run weekly
/loop "0 0 * * 0" run weekly cleanup
```

### Cron Expression Format

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
│ │ │ │ │
* * * * *
```

### Common Cron Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| `*/5 * * * *` | Every 5 minutes | `*/5 * * * *` |
| `0 * * * *` | Every hour | `0 * * * *` |
| `0 0 * * *` | Every day at midnight | `0 0 * * *` |
| `0 9 * * *` | Every day at 9 AM | `0 9 * * *` |
| `0 0 * * 0` | Every Sunday at midnight | `0 0 * * 0` |
| `0 0 1 * *` | Every month on the 1st | `0 0 1 * *` |
| `*/30 * * * *` | Every 30 minutes | `*/30 * * * *` |
| `0 */2 * * *` | Every 2 hours | `0 */2 * * *` |

---

## 📖 Complete Guide

### Step 1: Understand Your Scheduling Needs

Before using the loop skill, identify:
- **What task** needs to be repeated
- **How often** it should run
- **What time** it should run (if specific)
- **What action** should be taken

### Step 2: Choose the Right Cron Expression

Use the cron expression that matches your needs:

```bash
# Every 5 minutes
/loop */5 * * * * check system status

# Every hour
/loop 0 * * * * run hourly task

# Every day at 9 AM
/loop "0 9 * * *" morning routine

# Every Monday at 9 AM
/loop "0 9 * * 1" weekly meeting

# Every month on the 1st
/loop "0 0 1 * *" monthly report
```

### Step 3: Define Your Task

Be specific about what the task should do:

```bash
# Good: Specific task
/loop 5m check if server is responding

# Better: More detailed task
/loop 5m check server health and log response time

# Best: Complete task with action
/loop 5m check server health, log response time, and alert if response time > 500ms
```

### Step 4: Monitor Your Scheduled Tasks

The loop skill provides feedback on task execution:

```bash
# Task execution feedback
✅ Task scheduled successfully
📊 Next run: 2026-04-15 14:05:00
🔄 Previous run: 2026-04-15 14:00:00
⏱️  Duration: 2.3s
📈 Success rate: 98%
```

---

## 🎨 Usage Examples

### Example 1: System Health Monitoring

```bash
# Monitor system health every 5 minutes
/loop 5m check server health and log metrics

# Monitor database performance every hour
/loop 1h check database performance and optimize if needed

# Monitor disk space every 6 hours
/loop "0 */6 * * *" check disk space and alert if > 80% full
```

### Example 2: Automated Testing

```bash
# Run unit tests every 30 minutes
/loop */30 * * * run unit tests and report failures

# Run integration tests every hour
/loop 0 * * * * run integration tests

# Run end-to-end tests daily at 2 AM
/loop "0 2 * * *" run end-to-end tests and generate report
```

### Example 3: Data Synchronization

```bash
# Sync data every 10 minutes
/loop */10 * * * sync data from primary to backup

# Sync database every hour
/loop 0 * * * * sync database to backup server

# Sync files daily at midnight
/loop "0 0 * * *" sync all files to backup location
```

### Example 4: Maintenance Tasks

```bash
# Clean up temporary files every hour
/loop 0 * * * * clean up temporary files older than 1 hour

# Rotate logs daily at midnight
/loop "0 0 * * *" rotate log files and compress old logs

# Update dependencies weekly on Sunday
/loop "0 0 * * 0" update dependencies and run tests
```

### Example 5: Backup Operations

```bash
# Backup database every 6 hours
/loop "0 */6 * * *" backup database to S3

# Backup files daily at 3 AM
/loop "0 3 * * *" backup all files to backup server

# Backup configuration weekly
/loop "0 0 * * 0" backup configuration files to version control
```

---

## 🔧 Advanced Usage

### Complex Cron Expressions

```bash
# Every weekday at 9 AM
/loop "0 9 * * 1-5" weekday morning routine

# Every weekend at 10 AM
/loop "0 10 * * 6,0" weekend maintenance

# Every 15 minutes during business hours (9 AM - 5 PM)
/loop "*/15 9-17 * * 1-5" business hours monitoring

# First day of every month at midnight
/loop "0 0 1 * *" monthly report

# Last day of every month at midnight
/loop "0 0 28-31 * *" end of month cleanup
```

### Task Chaining

```bash
# Chain multiple tasks in one loop
/loop 5m check server health, check database status, check disk space, and alert if any issues

# Sequential task execution
/loop 1h run tests, analyze results, generate report, and send notification
```

### Conditional Execution

```bash
# Run task only on weekdays
/loop "0 9 * * 1-5" weekday morning check

# Run task only during business hours
/loop "*/30 9-17 * * *" business hours monitoring

# Run task only on weekends
/loop "0 10 * * 6,0" weekend maintenance
```

---

## 📊 Monitoring and Feedback

### Task Execution Status

The loop skill provides detailed feedback:

```bash
/loop 5m check server health

✅ Task scheduled successfully
📅 Schedule: Every 5 minutes
🎯 Next run: 2026-04-15 14:05:00
📊 Statistics:
  - Total runs: 156
  - Successful: 153
  - Failed: 3
  - Success rate: 98.1%
  - Average duration: 2.3s
  - Last run: 2026-04-15 14:00:00
```

### Performance Metrics

```bash
# View task performance
/loop stats

📊 Task Performance:
  - Total tasks: 5
  - Active tasks: 5
  - Total executions: 1,234
  - Success rate: 97.8%
  - Average duration: 2.1s
  - Total runtime: 43.2 minutes
```

---

## 🎯 Best Practices

### 1. Choose Appropriate Intervals

```bash
# ✅ Good: Appropriate interval for the task
/loop 5m check server health

# ❌ Bad: Too frequent for the task
/loop 1s check server health

# ✅ Good: Appropriate interval for the task
/loop 1h run comprehensive tests

# ❌ Bad: Too infrequent for the task
/loop 1d run comprehensive tests
```

### 2. Be Specific with Tasks

```bash
# ✅ Good: Specific task with clear action
/loop 5m check server health and log response time

# ❌ Bad: Vague task without clear action
/loop 5m check server
```

### 3. Handle Errors Gracefully

```bash
# ✅ Good: Task with error handling
/loop 5m check server health, log response time, and alert if response time > 500ms

# ❌ Bad: Task without error handling
/loop 5m check server health
```

### 4. Monitor Task Performance

```bash
# ✅ Good: Monitor task performance
/loop 5m check server health and log metrics

# ❌ Bad: No performance monitoring
/loop 5m check server health
```

### 5. Use Descriptive Task Names

```bash
# ✅ Good: Descriptive task name
/loop 5m check server health and log response time

# ❌ Bad: Vague task name
/loop 5m do check
```

---

## 🔍 Troubleshooting

### Task Not Running

**Issue**: Scheduled task is not running

**Solutions**:
1. Check cron expression syntax
2. Verify task is properly scheduled
3. Check system time and timezone
4. Review task execution logs

### Task Running Too Frequently

**Issue**: Task is running more often than expected

**Solutions**:
1. Review cron expression
2. Check for multiple scheduled tasks
3. Verify task execution logs
4. Adjust scheduling interval

### Task Not Completing

**Issue**: Task starts but doesn't complete

**Solutions**:
1. Check task execution logs
2. Verify task has proper error handling
3. Check system resources
4. Review task dependencies

### High Resource Usage

**Issue**: Scheduled tasks are using too many resources

**Solutions**:
1. Reduce task frequency
2. Optimize task execution
3. Add resource limits
4. Monitor system performance

---

## 🎨 Frontend Design Principles

### Visual Appeal

The loop skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Code blocks** - Syntax-highlighted code examples
- **Tables** - Organized data presentation
- **Responsive design** - Works on all screen sizes

### User Experience

- **Quick start** - Get started immediately with basic examples
- **Progressive disclosure** - Start simple, add complexity gradually
- **Clear feedback** - Know what's happening at all times
- **Error handling** - Graceful degradation with helpful messages
- **Performance monitoring** - Track task execution and performance

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### Cron Expression Reference

- [Cron Expression Guide](https://crontab.guru/)
- [Cron Expression Examples](https://en.wikipedia.org/wiki/Cron)
- [Cron Expression Generator](https://crontab-generator.org/)

### OpenCode Documentation

- [OpenCode Skills Collection](https://github.com/kushalchalla981-tech/opencode-skills)
- [OpenCode Documentation](https://docs.opencode.ai)
- [OpenCode Community](https://community.opencode.ai)

### Related Skills

- **batch** - Parallel work orchestration for large-scale changes
- **skillify** - Convert sessions to reusable skills
- **debug** - Session debugging and troubleshooting
- **remember** - Memory management and organization

---

## 🤝 Contributing

Contributions to the loop skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to schedule your first recurring task?

```bash
# Schedule your first task
/loop 5m check server health

# Schedule a daily task
/loop "0 9 * * *" morning routine

# Schedule a weekly task
/loop "0 0 * * 0" weekly maintenance
```

**Start automating your recurring tasks today!** 🚀

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

</div>
