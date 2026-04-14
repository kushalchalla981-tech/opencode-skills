---
name: session-memory
description: "Manage automatic session summarization and memory extraction. Configures when and how sessions are summarized, controls memory thresholds, and provides tools for reviewing and managing session memory."
when_to_use: "Use when the user wants to configure session memory settings, review session summaries, manage memory extraction, or understand how session memory works."
argument_hint: "[action: configure | review | extract | clear | status]"
allowed_tools:
  - Read
  - Write
  - Edit
  - Bash
context: inline
---

# Session Memory Skill - Automatic Session Summarization

## Overview

The Session Memory skill manages automatic session summarization and memory extraction. It configures when sessions are summarized, controls memory thresholds, and provides tools for reviewing and managing session memory across your OpenCode usage.

## Usage

```bash
/session-memory [action]
```

### Examples

```bash
# Configure session memory settings
/session-memory configure

# Review current session memory
/session-memory review

# Extract memory from current session
/session-memory extract

# Clear session memory
/session-memory clear

# Check session memory status
/session-memory status
```

## How It Works

### Automatic Memory Extraction

Session memory automatically extracts and summarizes your sessions based on configurable thresholds:

**Triggers:**
1. **Context window growth**: When context grows by minimum tokens
2. **Tool call count**: After specified number of tool calls
3. **Session length**: When session reaches minimum token threshold
4. **Manual trigger**: When explicitly requested

**Extraction Process:**
1. **Analyze session**: Review messages, tool calls, and outcomes
2. **Identify patterns**: Find recurring themes, decisions, and learnings
3. **Extract key information**: Capture important context and insights
4. **Generate summary**: Create concise, actionable summary
5. **Store memory**: Save to session memory file

### Memory Configuration

Session memory behavior is controlled by these settings:

```json
{
  "sessionMemory": {
    "minimumMessageTokensToInit": 10000,
    "minimumTokensBetweenUpdate": 5000,
    "toolCallsBetweenUpdates": 3
  }
}
```

**Configuration Parameters:**

- **minimumMessageTokensToInit**: Minimum context window tokens before initializing session memory (default: 10,000)
  - Uses same token counting as autocompact
  - Ensures sufficient context for meaningful summaries
  - Prevents premature extraction on short sessions

- **minimumTokensBetweenUpdate**: Minimum context window growth between updates (default: 5,000)
  - Measures actual context growth, not cumulative usage
  - Prevents too-frequent updates
  - Ensures meaningful changes between summaries

- **toolCallsBetweenUpdates**: Number of tool calls between updates (default: 3)
  - Ensures sufficient activity before updating
  - Prevents updates on minor interactions
  - Balances freshness with efficiency

## Actions

### Configure Session Memory
```bash
/session-memory configure
```

Allows configuration of:
- **Initialization threshold**: When to start memory extraction
- **Update threshold**: When to update memory
- **Tool call threshold**: Minimum activity between updates

**Configuration Options:**
```json
{
  "minimumMessageTokensToInit": 10000,    // 10k tokens to start
  "minimumTokensBetweenUpdate": 5000,     // 5k tokens between updates
  "toolCallsBetweenUpdates": 3             // 3 tool calls minimum
}
```

**Best Practices:**
- **Lower thresholds**: More frequent updates, more memory usage
- **Higher thresholds**: Less frequent updates, less memory usage
- **Balance**: Find the right balance for your workflow

### Review Session Memory
```bash
/session-memory review
```

Displays current session memory including:
- **Summary content**: Current session summary
- **Key decisions**: Important decisions made
- **Learnings**: Insights and patterns discovered
- **Context**: Relevant context and background
- **Metadata**: When memory was last updated

**Review Format:**
```
## Session Summary
[Summary of current session]

## Key Decisions
- [Decision 1]
- [Decision 2]

## Learnings
- [Learning 1]
- [Learning 2]

## Context
[Relevant context and background]

## Metadata
- Last updated: [timestamp]
- Session length: [token count]
- Tool calls: [count]
```

### Extract Memory
```bash
/session-memory extract
```

Manually triggers memory extraction from current session:
- **Analyzes entire session**: Reviews all messages and interactions
- **Identifies patterns**: Finds recurring themes and decisions
- **Extracts key information**: Captures important insights
- **Updates memory**: Replaces or augments existing memory

**When to Use:**
- After completing important work
- Before ending a long session
- When you want to preserve context
- After making significant decisions

### Clear Session Memory
```bash
/session-memory clear
```

Clears current session memory:
- **Removes summary**: Deletes current session summary
- **Resets tracking**: Clears extraction state
- **Starts fresh**: Allows new extraction to begin

**Warning:** This action cannot be undone. Use with caution.

### Check Status
```bash
/session-memory status
```

Shows session memory status including:
- **Initialization state**: Whether memory is initialized
- **Last extraction**: When memory was last extracted
- **Token counts**: Current and threshold values
- **Configuration**: Current memory settings
- **Storage location**: Where memory is stored

**Status Format:**
```
## Session Memory Status

### Initialization
- Initialized: Yes/No
- Threshold met: Yes/No

### Last Extraction
- Timestamp: [timestamp]
- Token count: [count]
- Tool calls: [count]

### Configuration
- Init threshold: 10,000 tokens
- Update threshold: 5,000 tokens
- Tool call threshold: 3

### Storage
- Location: [path]
- File size: [size]
- Last modified: [timestamp]
```

## Memory Content Structure

### Summary Section
Concise overview of the session:
- **Main activities**: What was accomplished
- **Key outcomes**: Results achieved
- **Important context**: Background and setup

### Decisions Section
Important decisions made during session:
- **Technical decisions**: Architecture, tools, approaches
- **Strategic decisions**: Direction, priorities, trade-offs
- **Process decisions**: Workflow, methodology, approach

### Learnings Section
Insights and patterns discovered:
- **Technical learnings**: New techniques, solutions, approaches
- **Process learnings**: Workflow improvements, efficiencies
- **Domain learnings**: Subject matter insights

### Context Section
Relevant background and context:
- **Project context**: Current project state and goals
- **User preferences**: Your preferences and patterns
- **Environment context**: Tools, configurations, setup

## Best Practices

### 1. Configure Appropriately
```bash
# Set thresholds based on your workflow
/session-memory configure

# Consider:
# - Session length (short vs long sessions)
# - Memory importance (critical vs nice-to-have)
# - Resource constraints (memory, performance)
```

### 2. Extract at Key Points
```bash
# Extract after important work
/session-memory extract

# Good times to extract:
# - Completing a feature
# - Making a major decision
# - Solving a complex problem
# - Ending a long session
```

### 3. Review Regularly
```bash
# Review memory periodically
/session-memory review

# Check for:
# - Accuracy of summaries
# - Completeness of information
# - Relevance of context
```

### 4. Manage Storage
```bash
# Check status regularly
/session-memory status

# Monitor:
# - File size
# - Update frequency
# - Storage location
```

## Advanced Usage

### Custom Thresholds
```bash
# Configure for specific workflows
/session-memory configure

# Examples:
# - Frequent updates: lower thresholds
# - Long sessions: higher thresholds
# - Critical work: more frequent extraction
```

### Selective Extraction
```bash
# Extract specific aspects
/session-memory extract

# Focus on:
# - Technical decisions
# - User preferences
# - Project context
```

### Memory Integration
Session memory integrates with:
- **Auto-memory**: Automatic memory system
- **Remember skill**: Memory organization
- **Context management**: Session context tracking

## Troubleshooting

### Memory Not Extracting

**Check:**
1. Thresholds are met
2. Session is long enough
3. Sufficient tool calls
4. No errors in extraction

**Solution:**
```bash
# Check status
/session-memory status

# Manually trigger extraction
/session-memory extract

# Adjust thresholds if needed
/session-memory configure
```

### Memory Not Updating

**Check:**
1. Update threshold is met
2. Sufficient changes since last update
3. No errors in update process

**Solution:**
```bash
# Check last extraction time
/session-memory status

# Manually trigger update
/session-memory extract

# Verify thresholds
/session-memory configure
```

### Memory File Issues

**Check:**
1. File exists and is accessible
2. File permissions are correct
3. No corruption in file

**Solution:**
```bash
# Check file location
/session-memory status

# Clear and regenerate
/session-memory clear
/session-memory extract

# Verify permissions
/update-config check file permissions
```

## Integration Notes

### Storage Location
Session memory is stored in:
- **Location**: Session-specific directory
- **Format**: Plain text or JSON
- **Backup**: Automatic backup on updates

### Token Counting
Session memory uses:
- **Same counting as autocompact**: Input + output + cache tokens
- **Consistent behavior**: Same thresholds across features
- **Accurate measurement**: Actual context window size

### Update Triggers
Memory updates on:
- **Token growth**: Context grows by threshold
- **Tool calls**: Sufficient activity
- **Manual trigger**: Explicit extraction request
- **Session events**: Start, end, compact

## Performance Considerations

### Extraction Overhead
- **Initial extraction**: ~100-500ms depending on session length
- **Incremental updates**: ~50-200ms
- **Memory usage**: Minimal overhead
- **Storage**: Typically 1-10KB per session

### Optimization Tips
1. **Appropriate thresholds**: Balance freshness with efficiency
2. **Selective extraction**: Focus on important sessions
3. **Regular review**: Keep memory clean and relevant
4. **Storage management**: Archive old sessions if needed

## Security Considerations

- Session memory may contain sensitive information
- Memory files are user-specific
- No automatic sharing of memory
- Review memory before sharing

## Related Skills

- **remember**: For memory organization and management
- **update-config**: For memory configuration
- **debug**: For troubleshooting memory issues
- **loop**: For recurring memory maintenance

## Session Memory Quality Checklist

After memory extraction, verify:

- [ ] Summary is accurate and complete
- [ ] Key decisions are captured
- [ ] Learnings are documented
- [ ] Context is relevant
- [ ] No sensitive information exposed
- [ ] File is properly stored
- [ ] Timestamps are correct
- [ ] Configuration is appropriate

## Examples by Use Case

### Development Session
```bash
# After completing feature work
/session-memory extract

# Memory includes:
# - Feature implementation details
# - Technical decisions made
# - Testing approach used
# - Lessons learned
```

### Debugging Session
```bash
# After solving complex issue
/session-memory extract

# Memory includes:
# - Problem description
# - Debugging approach
# - Solution implemented
# - Prevention strategies
```

### Planning Session
```bash
# After planning work
/session-memory extract

# Memory includes:
# - Project goals and requirements
# - Architecture decisions
# - Technology choices
# - Implementation plan
```

## Advanced Patterns

### Incremental Memory
```bash
# Extract incrementally during long sessions
/session-memory extract

# Benefits:
# - More frequent updates
# - Better context preservation
# - Easier to review
```

### Focused Memory
```bash
# Extract specific aspects
/session-memory extract

# Focus on:
# - Technical decisions only
# - User preferences only
# - Project context only
```

### Memory Archiving
```bash
# Archive old session memory
/session-memory clear

# Then:
# - Store in separate location
# - Compress if needed
# - Label for easy retrieval
```

## Best Practices Summary

1. **Configure appropriately** - Set thresholds for your workflow
2. **Extract at key points** - Capture important moments
3. **Review regularly** - Keep memory accurate and relevant
4. **Manage storage** - Monitor file size and location
5. **Integrate with workflow** - Make memory part of your process
6. **Protect sensitive info** - Review before sharing
7. **Use selectively** - Focus on important sessions
8. **Maintain quality** - Ensure summaries are useful

## Memory Lifecycle

### Initialization
1. Session starts
2. Context grows to threshold
3. Memory initializes
4. First extraction occurs

### Updates
1. Context grows by update threshold
2. Tool call threshold met
3. Memory updates
4. New summary generated

### Completion
1. Session ends
2. Final extraction occurs
3. Memory saved
4. Ready for next session

## Future Enhancements

### Planned Features
- **Smart extraction**: AI-powered summarization
- **Pattern recognition**: Automatic pattern detection
- **Cross-session learning**: Learnings across sessions
- **Memory search**: Search across session memories

### Experimental Features
- **Predictive memory**: Anticipate needs
- **Memory clustering**: Group related sessions
- **Memory sharing**: Share with team (optional)
- **Memory analytics**: Insights about your work patterns
