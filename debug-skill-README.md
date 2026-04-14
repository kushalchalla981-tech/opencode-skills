# 🐛 Debug Skill - Session Debugging and Troubleshooting

<div align="center">

![Debug Skill](https://img.shields.io/badge/OpenCode-Debug_Skill-cyan?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Debug your current OpenCode session by reading the session debug log with comprehensive error analysis**

</div>

---

## 🎯 What This Skill Does

The **Debug skill** enables you to:

- ✅ **Read session logs** - Access detailed session debug logs
- ✅ **Analyze errors** - Comprehensive error analysis and diagnosis
- ✅ **Performance profiling** - Identify performance bottlenecks
- ✅ **Stack trace analysis** - Understand error context and flow
- ✅ **Issue diagnosis** - Identify root causes of problems
- ✅ **Solution suggestions** - Get actionable solutions for issues

### Key Features

- 🔍 **Deep log analysis** - Comprehensive session log examination
- 📊 **Error categorization** - Categorize errors by type and severity
- 🎯 **Root cause analysis** - Identify underlying causes of issues
- 💡 **Solution suggestions** - Get actionable recommendations
- 📈 **Performance metrics** - Track performance over time
- 🔄 **Real-time debugging** - Debug issues as they occur

---

## 🚀 How to Use

### Basic Usage

```bash
# Debug current session
/debug

# Debug with specific issue
/debug "API endpoint not responding"

# Debug with time range
/debug --last 10m

# Debug with error focus
/debug --focus errors
```

### Debugging Workflow

The debug skill follows a four-phase workflow:

1. **Log Collection** - Collect and analyze session logs
2. **Error Analysis** - Identify and categorize errors
3. **Root Cause Analysis** - Determine underlying causes
4. **Solution Suggestions** - Provide actionable recommendations

---

## 📖 Complete Guide

### Phase 1: Log Collection

The debug skill collects session logs:

```bash
/debug

📊 Log Collection:
  - Total log entries: 234
  - Error entries: 12
  - Warning entries: 8
  - Info entries: 214
  - Time range: Last 1 hour
  - Log size: 2.3 MB
```

### Phase 2: Error Analysis

The debug skill analyzes errors:

```bash
/debug

🔍 Error Analysis:
  - Total errors: 12
  - Critical errors: 3
  - Major errors: 5
  - Minor errors: 4
  - Error rate: 5.1%
  - Most common error: "API timeout"
```

### Phase 3: Root Cause Analysis

The debug skill determines root causes:

```bash
/debug

🎯 Root Cause Analysis:
  - Primary cause: Network connectivity issues
  - Secondary cause: API rate limiting
  - Contributing factors: High request volume
  - Environmental factors: Server load
  - User actions: Rapid API calls
```

### Phase 4: Solution Suggestions

The debug skill provides solutions:

```bash
/debug

💡 Solution Suggestions:
  1. Implement retry logic with exponential backoff
  2. Add request rate limiting
  3. Optimize API call frequency
  4. Add connection pooling
  5. Implement circuit breaker pattern
```

---

## 🎨 Usage Examples

### Example 1: API Issues

```bash
# Debug API issues
/debug "API endpoint not responding"

🔍 Error Analysis:
  - Total errors: 8
  - Error type: Network timeout
  - Error frequency: High
  - Error severity: Critical

🎯 Root Cause Analysis:
  - Primary cause: Network connectivity issues
  - Secondary cause: API rate limiting

💡 Solution Suggestions:
  1. Implement retry logic with exponential backoff
  2. Add request rate limiting
  3. Optimize API call frequency
```

### Example 2: Performance Issues

```bash
# Debug performance issues
/debug --focus performance

📊 Performance Analysis:
  - Total operations: 156
  - Slow operations: 12
  - Average duration: 2.3s
  - Slowest operation: Database query (8.7s)

🎯 Root Cause Analysis:
  - Primary cause: Unoptimized database queries
  - Secondary cause: Missing database indexes

💡 Solution Suggestions:
  1. Add database indexes
  2. Optimize query structure
  3. Implement query caching
```

### Example 3: Memory Issues

```bash
# Debug memory issues
/debug --focus memory

📊 Memory Analysis:
  - Total memory usage: 512 MB
  - Peak memory: 1.2 GB
  - Memory leaks detected: 2
  - Garbage collection frequency: High

🎯 Root Cause Analysis:
  - Primary cause: Memory leaks in event listeners
  - Secondary cause: Large object retention

💡 Solution Suggestions:
  1. Remove event listeners when not needed
  2. Implement object pooling
  3. Add memory monitoring
```

### Example 4: File System Issues

```bash
# Debug file system issues
/debug --focus filesystem

📊 File System Analysis:
  - Total file operations: 89
  - Failed operations: 5
  - Slow operations: 12
  - Error type: Permission denied

🎯 Root Cause Analysis:
  - Primary cause: File permission issues
  - Secondary cause: Concurrent file access

💡 Solution Suggestions:
  1. Fix file permissions
  - Implement file locking
  - Add retry logic for file operations
```

### Example 5: Dependency Issues

```bash
# Debug dependency issues
/debug --focus dependencies

📊 Dependency Analysis:
  - Total dependencies: 45
  - Outdated dependencies: 8
  - Vulnerable dependencies: 3
  - Conflicting dependencies: 2

🎯 Root Cause Analysis:
  - Primary cause: Outdated dependencies
  - Secondary cause: Version conflicts

💡 Solution Suggestions:
  1. Update outdated dependencies
  - Resolve version conflicts
  - Add dependency locking
```

---

## 🔧 Advanced Usage

### Time-Based Debugging

```bash
# Debug last 10 minutes
/debug --last 10m

# Debug last 1 hour
/debug --last 1h

# Debug last 24 hours
/debug --last 24h
```

### Focus-Based Debugging

```bash
# Focus on errors
/debug --focus errors

# Focus on performance
/debug --focus performance

# Focus on memory
/debug --focus memory

# Focus on filesystem
/debug --focus filesystem
```

### Detailed Analysis

```bash
# Get detailed analysis
/debug --detailed

📊 Detailed Analysis:
  - Total log entries: 234
  - Error entries: 12
  - Warning entries: 8
  - Info entries: 214
  - Time range: Last 1 hour
  - Log size: 2.3 MB
  - Error rate: 5.1%
  - Performance score: 72/100
  - Memory score: 85/100
  - Filesystem score: 68/100
```

### Interactive Debugging

```bash
# Use interactive mode for more control
/debug --interactive

🤖 Interactive Mode:
  - Answer questions as they appear
  - Provide additional context
  - Refine analysis as it progresses
  - Review and approve each section
```

---

## 📊 Monitoring and Feedback

### Debug Statistics

The debug skill provides debug statistics:

```bash
/debug stats

📊 Debug Statistics:
  - Total debug sessions: 15
  - Total errors found: 45
  - Total issues resolved: 38
  - Success rate: 84.4%
  - Average debug time: 3m 15s
  - Last debug: 1 hour ago
```

### Error Trends

```bash
/debug trends

📈 Error Trends:
  - Error rate: 5.1%
  - Error trend: Decreasing (-2%)
  - Most common error: "API timeout"
  - Error frequency: High
  - Resolution rate: 84%
```

---

## 🎯 Best Practices

### 1. Debug Early and Often

```bash
# ✅ Good: Debug early and often
/debug --last 10m

# ❌ Bad: Debug only when major issues occur
/debug --last 24h
```

### 2. Focus on Root Causes

```bash
# ✅ Good: Focus on root causes
/debug --focus root-cause

# ❌ Bad: Focus only on symptoms
/debug --focus symptoms
```

### 3. Implement Solutions

```bash
# ✅ Good: Implement suggested solutions
/debug
# Then implement the suggested solutions

# ❌ Bad: Don't implement suggested solutions
/debug
# Then ignore the suggestions
```

### 4. Monitor Performance

```bash
# ✅ Good: Monitor performance regularly
/debug --focus performance

# ❌ Bad: Don't monitor performance
# (do nothing)
```

### 5. Document Findings

```bash
# ✅ Good: Document debug findings
/debug
# Then document the findings in README

# ❌ Bad: Don't document findings
/debug
# Then don't document the findings
```

---

## 🔍 Troubleshooting

### No Errors Found

**Issue**: No errors found in session

**Solutions**:
1. Check time range
2. Review log collection
3. Check debug focus
4. Review session activity

### Too Many Errors

**Issue**: Too many errors found in session

**Solutions**:
1. Narrow down time range
2. Focus on specific error type
3. Review error frequency
4. Prioritize critical errors

### No Solutions Found

**Issue**: No solutions found for errors

**Solutions**:
1. Provide more context about the issue
2. Review error details more carefully
3. Check for related issues
4. Consult documentation

### Performance Issues

**Issue**: Debugging is taking too long

**Solutions**:
1. Narrow down time range
2. Focus on specific issue
3. Use dry-run mode to preview
4. Cancel and restart with clearer focus

---

## 🎨 Frontend Design Principles

### Visual Appeal

The debug skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Error categorization** - Visual representation of error types
- **Performance metrics** - Visual representation of performance scores
- **Code blocks** - Syntax-highlighted code examples

### User Experience

- **Four-phase workflow** - Clear collection, analysis, root cause, solution phases
- **Interactive mode** - Engage with the debugging process
- **Real-time feedback** - Know what's happening at all times
- **Error categorization** - Categorize errors by type and severity
- **Solution suggestions** - Get actionable recommendations

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### OpenCode Debugging Documentation

- [OpenCode Debugging Guide](https://docs.opencode.ai/debugging)
- [OpenCode Debugging Best Practices](https://docs.opencode.ai/debugging/best-practices)
- [OpenCode Debugging Examples](https://docs.opencode.ai/debugging/examples)

### OpenCode Documentation

- [OpenCode Skills Collection](https://github.com/kushalchalla981-tech/opencode-skills)
- [OpenCode Documentation](https://docs.opencode.ai)
- [OpenCode Community](https://community.opencode.ai)

### Related Skills

- **loop** - Recurring task scheduling with cron expressions
- **batch** - Parallel work orchestration for large-scale changes
- **skillify** - Convert sessions to reusable skills
- **remember** - Memory management and organization

---

## 🤝 Contributing

Contributions to the debug skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to debug your session?

```bash
# Debug current session
/debug

# Debug with specific issue
/debug "API endpoint not responding"

# Debug with time range
/debug --last 10m

# Debug with error focus
/debug --focus errors
```

**Start debugging your session today!** 🚀

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

</div>
