# 🧠 Session Memory Skill - Automatic Session Summarization

<div align="center">

![Session Memory Skill](https://img.shields.io/badge/Skill-Session%20Memory-purple)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![OpenCode](https://img.shields.io/badge/OpenCode-Compatible-orange)

**Manage automatic session summarization and memory extraction with intelligent thresholds**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Examples](#-examples) • [Advanced](#-advanced) • [Best Practices](#-best-practices) • [Troubleshooting](#-troubleshooting)

</div>

---

## 🌟 Features

### Core Capabilities

- 🤖 **Automatic Summarization**: Intelligently summarizes coding sessions
- 📊 **Smart Thresholds**: Configurable memory and token limits
- 🎯 **Context Extraction**: Identifies and preserves key information
- 💾 **Multi-Layer Storage**: Organized memory management system
- 🔍 **Searchable Memory**: Quick retrieval of past sessions
- 📈 **Usage Analytics**: Track session patterns and productivity
- 🔄 **Automatic Cleanup**: Manage memory storage efficiently
- 🎨 **Rich Formatting**: Beautiful, readable summaries

### Technical Highlights

- ⚡ **Real-time Processing**: Summarizes as you work
- 🧠 **AI-Powered**: Uses advanced language models
- 🔒 **Privacy-First**: Local-first with optional cloud sync
- 📱 **Cross-Session**: Maintains context across sessions
- 🎯 **Selective Memory**: Focuses on important information

---

## 📦 Installation

### Prerequisites

- OpenCode CLI installed
- Basic familiarity with terminal commands
- Git repository initialized
- Sufficient disk space for memory storage

### Setup Steps

1. **Navigate to your OpenCode skills directory**
   ```bash
   cd ~/.opencode/skills/
   ```

2. **Create the session-memory skill directory**
   ```bash
   mkdir session-memory
   cd session-memory
   ```

3. **Create the skill file**
   ```bash
   touch SKILL.md
   ```

4. **Add the skill content** (see Usage section below)

5. **Configure memory settings**
   ```bash
   # Create configuration file
   mkdir -p ~/.opencode/memory
   touch ~/.opencode/memory/config.json
   ```

6. **Verify installation**
   ```bash
   # In OpenCode, run:
   /skill session-memory
   ```

### Quick Start

```bash
# Enable automatic session memory
/skill session-memory --enable

# Configure memory thresholds
/skill session-memory --threshold tokens:5000,messages:100

# View current memory status
/skill session-memory --status

# Review past sessions
/skill session-memory --list
```

---

## 🚀 Usage

### Basic Usage

#### Enable Session Memory

```bash
/skill session-memory --enable
```

Activates automatic session summarization with default settings:
- Token threshold: 10,000
- Message threshold: 200
- Summary interval: 5 minutes
- Storage location: `~/.opencode/memory/`

#### View Memory Status

```bash
/skill session-memory --status
```

Displays current memory configuration and usage:
- Enabled/disabled status
- Current thresholds
- Memory usage statistics
- Recent sessions
- Storage information

#### Disable Session Memory

```bash
/skill session-memory --disable
```

Stops automatic summarization while preserving existing memories.

### Advanced Usage

#### Configure Thresholds

```bash
/skill session-memory --threshold tokens:8000,messages:150,time:10m
```

Threshold options:
- `tokens` - Maximum tokens before summarization (default: 10000)
- `messages` - Maximum messages before summarization (default: 200)
- `time` - Time interval for automatic summaries (default: 5m)
- `size` - Maximum memory size in MB (default: 100)

#### Custom Storage Location

```bash
/skill session-memory --storage /custom/path/memory
```

Set a custom location for memory storage:
- Absolute or relative path
- Automatic directory creation
- Migration support
- Backup integration

#### Memory Layers

```bash
/skill session-memory --layers short,medium,long
```

Configure memory layers:
- **short** - Recent context (last 10 minutes)
- **medium** - Session summary (current session)
- **long** - Project memory (across sessions)

#### Search Memory

```bash
/skill session-memory --search "authentication"
```

Search through all stored memories:
- Keyword matching
- Fuzzy search
- Date filtering
- Relevance ranking

#### Export Memory

```bash
/skill session-memory --export session-summary.json
```

Export memory in various formats:
- JSON (structured data)
- Markdown (readable format)
- Text (plain text)
- Custom format

#### Import Memory

```bash
/skill session-memory --import backup-memory.json
```

Import previously exported memories:
- Validation checks
- Merge strategies
- Conflict resolution
- Integrity verification

---

## 📚 Examples

### Example 1: First-Time Setup

```bash
$ /skill session-memory --enable

🧠 Session Memory enabled

📊 Configuration:
   Token threshold: 10,000
   Message threshold: 200
   Summary interval: 5 minutes
   Storage: ~/.opencode/memory/

✨ Memory system ready!
```

### Example 2: Custom Configuration

```bash
$ /skill session-memory --threshold tokens:5000,messages:100,time:3m

🧠 Thresholds updated

📊 New Configuration:
   Token threshold: 5,000
   Message threshold: 100
   Summary interval: 3 minutes

✨ Settings applied!
```

### Example 3: Memory Status Check

```bash
$ /skill session-memory --status

🧠 Session Memory Status

📊 Configuration:
   Status: ✅ Enabled
   Token threshold: 10,000
   Message threshold: 200
   Summary interval: 5 minutes

💾 Storage:
   Location: ~/.opencode/memory/
   Total size: 45.2 MB
   Sessions: 23
   Last summary: 2 minutes ago

📈 Usage:
   Today's sessions: 5
   Total tokens processed: 125,000
   Average session length: 15 minutes

🔍 Recent Sessions:
   1. API Integration (15 minutes ago)
   2. Bug Fix - Login (1 hour ago)
   3. Feature Development (3 hours ago)
```

### Example 4: Search and Retrieve

```bash
$ /skill session-memory --search "authentication"

🔍 Search Results: "authentication"

📝 Found 3 matches:

1. API Integration (15 minutes ago)
   🔑 Implemented JWT authentication
   🔑 Added token refresh logic
   🔑 Fixed CORS issues

2. Bug Fix - Login (1 hour ago)
   🔑 Debugged auth flow
   🔑 Resolved session timeout
   🔑 Updated error handling

3. Feature Development (3 hours ago)
   🔑 Designed auth system
   🔑 Created user models
   🔑 Implemented OAuth

💡 View full session: /skill session-memory --view 1
```

### Example 5: Export and Import

```bash
# Export current memory
$ /skill session-memory --export my-memory.json

📤 Exporting memory...

✨ Exported 23 sessions to my-memory.json
   Size: 45.2 MB
   Format: JSON

# Import memory on another machine
$ /skill session-memory --import my-memory.json

📥 Importing memory...

✨ Imported 23 sessions
   Merged with existing: 0
   Conflicts resolved: 0
   Total sessions: 23
```

### Example 6: Memory Layer Management

```bash
# Configure memory layers
$ /skill session-memory --layers short,medium,long

🧠 Memory layers configured

📊 Layer Configuration:
   Short-term: Last 10 minutes
   Medium-term: Current session
   Long-term: All sessions

# View specific layer
$ /skill session-memory --layer medium

📝 Medium-term Memory (Current Session)

🎯 Session Summary:
   Working on authentication system
   Implemented JWT tokens
   Added refresh logic
   Fixed CORS issues

📊 Statistics:
   Duration: 45 minutes
   Messages: 67
   Tokens: 8,500

🔑 Key Points:
   - JWT implementation complete
   - Token refresh working
   - CORS configuration updated
```

---

## 🔧 Advanced Usage

### Memory Extraction Algorithm

The session memory uses intelligent extraction:

```javascript
function extractMemory(session) {
  // Analyze session content
  const analysis = analyzeSession(session);
  
  // Identify key information
  const keyPoints = extractKeyPoints(analysis);
  
  // Generate summary
  const summary = generateSummary(keyPoints);
  
  // Categorize by importance
  const categorized = categorizeByImportance(summary);
  
  // Store in appropriate layers
  storeInLayers(categorized);
  
  return summary;
}
```

### Custom Summary Templates

Create custom summary formats:

```bash
/skill session-memory --template custom-template.json
```

Template structure:
```json
{
  "format": "markdown",
  "sections": [
    "overview",
    "key_decisions",
    "code_changes",
    "issues_resolved",
    "next_steps"
  ],
  "style": "detailed"
}
```

### Memory Compression

Optimize memory storage:

```bash
# Enable compression
/skill session-memory --compress

# Set compression level
/skill session-memory --compression-level 6

# View compression stats
/skill session-memory --compression-stats
```

### Automatic Cleanup

Configure automatic memory cleanup:

```bash
# Set retention policy
/skill session-memory --retention 30d

# Cleanup old memories
/skill session-memory --cleanup

# Schedule automatic cleanup
/skill session-memory --auto-cleanup weekly
```

### Integration with Other Skills

Combine session-memory with other OpenCode skills:

```bash
# Remember important sessions
/skill session-memory --export recent.json && /skill remember --tag "recent-work"

# Loop through sessions
/skill session-memory --list | /skill loop --process "analyze-session"

# Share session insights
/skill session-memory --export insights.md && /skill buddy --share
```

---

## 🎯 Best Practices

### Design Principles

#### 1. **Information Hierarchy**
- Prioritize important information
- Use clear section headers
- Implement progressive disclosure

#### 2. **Context Preservation**
- Maintain project context
- Track dependencies
- Preserve decision rationale

#### 3. **Searchability**
- Use consistent terminology
- Add relevant tags
- Implement proper indexing

#### 4. **Privacy & Security**
- Sensitive data handling
- Access control
- Secure storage

#### 5. **Performance**
- Efficient storage
- Quick retrieval
- Minimal overhead

### Usage Guidelines

#### Threshold Configuration

| Use Case | Recommended Thresholds | Why |
|----------|----------------------|-----|
| Small projects | tokens:5000, messages:50 | Frequent summaries, detailed context |
| Medium projects | tokens:10000, messages:100 | Balanced approach |
| Large projects | tokens:20000, messages:200 | Less frequent, broader context |
| Learning | tokens:3000, messages:30 | Very detailed, step-by-step |
| Debugging | tokens:8000, messages:80 | Focus on problem-solving |
| Feature dev | tokens:15000, messages:150 | Comprehensive feature tracking |

#### Memory Layer Strategy

```bash
# For focused work
/skill session-memory --layers short

# For project tracking
/skill session-memory --layers short,medium

# For comprehensive memory
/skill session-memory --layers short,medium,long
```

#### Search Optimization

```bash
# Use specific keywords
/skill session-memory --search "JWT authentication"

# Use quotes for exact phrases
/skill session-memory --search "\"token refresh\""

# Use multiple terms
/skill session-memory --search "authentication OR login OR auth"

# Use date filters
/skill session-memory --search "authentication --since 2024-01-01"
```

### Performance Optimization

#### Memory Management

```bash
# Regular cleanup
/skill session-memory --cleanup

# Compress old memories
/skill session-memory --compress --older-than 30d

# Archive rarely used memories
/skill session-memory --archive --older-than 90d

# Monitor memory usage
/skill session-memory --stats
```

#### Storage Optimization

```bash
# Use efficient storage format
/skill session-memory --format json

# Enable compression
/skill session-memory --compress

# Set size limits
/skill session-memory --max-size 500MB

# Optimize database
/skill session-memory --optimize-db
```

---

## 🛠️ Troubleshooting

### Common Issues

#### Issue: Memory not being created

**Symptoms:**
- No summaries generated
- Status shows disabled
- Configuration errors

**Solutions:**
```bash
# Check if memory is enabled
/skill session-memory --status

# Enable memory
/skill session-memory --enable

# Verify configuration
/skill session-memory --verify-config

# Check permissions
/skill session-memory --check-permissions

# Reset configuration
/skill session-memory --reset-config
```

#### Issue: Search not finding results

**Symptoms:**
- No matches found
- Incomplete results
- Slow search performance

**Solutions:**
```bash
# Rebuild search index
/skill session-memory --rebuild-index

# Check search terms
/skill session-memory --search --test "your-term"

# Clear cache
/skill session-memory --clear-cache

# Verify memory content
/skill session-memory --list --all

# Update search algorithm
/skill session-memory --update-search
```

#### Issue: Memory size growing too large

**Symptoms:**
- Excessive disk usage
- Slow performance
- Storage warnings

**Solutions:**
```bash
# Check memory size
/skill session-memory --stats

# Enable compression
/skill session-memory --compress

# Set retention policy
/skill session-memory --retention 30d

# Cleanup old memories
/skill session-memory --cleanup

# Archive old sessions
/skill session-memory --archive --older-than 90d
```

#### Issue: Import/Export failures

**Symptoms:**
- Import errors
- Export corruption
- Format issues

**Solutions:**
```bash
# Validate export file
/skill session-memory --validate export-file.json

# Check file permissions
/skill session-memory --check-permissions

# Try different format
/skill session-memory --export --format markdown

# Repair corrupted memory
/skill session-memory --repair

# Re-export from backup
/skill session-memory --export --from-backup
```

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
# Enable debug mode
/skill session-memory --debug

# View debug logs
/skill session-memory --logs

# Export debug report
/skill session-memory --debug-report

# Test memory system
/skill session-memory --test

# Run diagnostics
/skill session-memory --diagnose
```

### Getting Help

```bash
# Show help information
/skill session-memory --help

# Show examples
/skill session-memory --examples

# Show version info
/skill session-memory --version

# Report an issue
/skill session-memory --report-issue
```

---

## 📖 Additional Resources

### Documentation

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills)
- [Memory Management Best Practices](https://opencode.ai/docs/memory)
- [Session Summarization Guide](https://opencode.ai/docs/summarization)

### Community

- [OpenCode Discord](https://discord.gg/opencode)
- [Memory Management Forum](https://forum.opencode.ai/memory)
- [Session Memory Showcase](https://showcase.opencode.ai/session-memory)

### Tutorials

- [Advanced Memory Configuration](https://tutorial.opencode.ai/advanced-memory)
- [Custom Summary Templates](https://tutorial.opencode.ai/custom-templates)
- [Memory Integration Guide](https://tutorial.opencode.ai/memory-integration)

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
3. **Add your improvements**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation
- Include examples
- Ensure accessibility

### Feature Requests

Have an idea for improving the session-memory skill?

- Open an issue on GitHub
- Describe the feature
- Provide use cases
- Include mockups if applicable

---

## 📄 License

This skill is part of the OpenCode project and follows the same license terms.

---

## 🎉 Acknowledgments

- Inspired by memory management systems
- Built with love for the OpenCode community
- Community feedback and suggestions
- Contributions from memory management experts

---

<div align="center">

**Made with ❤️ by the OpenCode community**

[⬆ Back to Top](#-session-memory-skill---automatic-session-summarization)

</div>