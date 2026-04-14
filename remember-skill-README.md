# 🧠 Remember Skill - Memory Management and Organization

<div align="center">

![Remember Skill](https://img.shields.io/badge/OpenCode-Remember_Skill-yellow?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://imgaffle.com/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Review auto-memory entries and propose promotions to OPENCODE.md, OPENCODE.local.md, or shared memory**

</div>

---

## 🎯 What This Skill Does

The **Remember skill** enables you to:

- ✅ **Review memory entries** - Examine auto-generated memory from your sessions
- ✅ **Propose promotions** - Suggest promotions to appropriate memory files
- ✅ **Organize knowledge** - Structure information for easy retrieval
- ✅ **Cleanup detection** - Identify outdated or duplicate entries
- ✅ **Multi-layer memory** - Manage project, local, and shared memory
- ✅ **Smart categorization** - Automatically categorize memory entries

### Key Features

- 🧠 **Intelligent analysis** - Analyze memory entries for quality and relevance
- 📊 **Quality scoring** - Score entries based on usefulness and clarity
- 🎯 **Smart suggestions** - Propose appropriate promotions
- 🗂️ **Cleanup detection** - Identify outdated or duplicate entries
- 📝 **Multi-layer support** - Support for project, local, and shared memory
- 🔍 **Search functionality** - Find relevant memory entries quickly

---

## 🚀 How to Use

### Basic Usage

```bash
# Review all memory entries
/remember

# Review memory with specific focus
/remember testing

# Review memory for specific time period
/remember --last 1h

# Review memory with quality threshold
/remember --quality 80
```

### Memory Layers

The remember skill supports three memory layers:

1. **OPENCODE.md** - Project-specific memory (committed to git)
2. **OPENCODE.local.md** - Local project memory (gitignored)
3. **Shared memory** - Cross-project memory (user home directory)

---

## 📖 Complete Guide

### Step 1: Review Memory Entries

The remember skill analyzes your auto-memory entries:

```bash
/remember

📊 Memory Review:
  - Total entries: 45
  - High quality: 32
  - Medium quality: 10
  - Low quality: 3
  - Recommended promotions: 8
  - Cleanup candidates: 5
```

### Step 2: Propose Promotions

The remember skill suggests promotions:

```bash
/remember

🎯 Promotion Suggestions:
  1. Promote "React component testing best practices" to OPENCODE.md
  2. Promote "Project-specific debugging workflow" to OPENCODE.local.md
  3. Promote "General testing strategies" to shared memory
  4. Promote "API endpoint documentation" to OPENCODE.md
  5. Promote "Database schema notes" to OPENCODE.local.md
```

### Step 3: Organize Knowledge

The remember skill helps organize your knowledge:

```bash
/remember

📚 Knowledge Organization:
  - Testing: 12 entries
  - Debugging: 8 entries
  - Documentation: 10 entries
  - API: 7 entries
  - Database: 8 entries
```

### Step 4: Cleanup Detection

The remember skill identifies cleanup candidates:

```bash
/remember

🗑️ Cleanup Candidates:
  1. "Outdated API endpoint" - Last updated 30 days ago
  2. "Duplicate testing note" - Similar to entry #12
  3. "Vague debugging tip" - Low quality score
  4. "Incomplete documentation" - Missing key information
  5. "Deprecated workflow" - No longer relevant
```

---

## 🎨 Usage Examples

### Example 1: Testing Knowledge

```bash
# Review testing-related memory
/remember testing

📊 Testing Memory Review:
  - Total entries: 12
  - High quality: 10
  - Medium quality: 2
  - Low quality: 0
  - Recommended promotions: 3
  - Cleanup candidates: 1

🎯 Promotion Suggestions:
  1. Promote "React component testing best practices" to OPENCODE.md
  2. Promote "Testing workflow optimization" to OPENCODE.local.md
  3. Promote "General testing strategies" to shared memory
```

### Example 2: Debugging Knowledge

```bash
# Review debugging-related memory
/remember debugging

📊 Debugging Memory Review:
  - Total entries: 8
  - High quality: 6
  - Medium quality: 2
  - Low quality: 0
  - Recommended promotions: 2
  - Cleanup candidates: 0

🎯 Promotion Suggestions:
  1. Promote "Node.js debugging workflow" to OPENCODE.md
  2. Promote "Project-specific debugging notes" to OPENCODE.local.md
```

### Example 3: Recent Activity

```bash
# Review recent memory entries
/remember --last 1h

📊 Recent Memory Review:
  - Total entries: 15
  - High quality: 12
  - Medium quality: 3
  - Low quality: 0
  - Recommended promotions: 4
  - Cleanup candidates: 1

🎯 Promotion Suggestions:
  1. Promote "Recent API changes" to OPENCODE.md
  2. Promote "New testing approach" to OPENCODE.local.md
  3. Promote "Updated workflow" to shared memory
  4. Promote "Recent bug fix" to OPENCODE.md
```

### Example 4: Quality Filtering

```bash
# Review high-quality memory only
/remember --quality 90

📊 High-Quality Memory Review:
  - Total entries: 8
  - High quality: 8
  - Medium quality: 0
  - Low quality: 0
  - Recommended promotions: 5
  - Cleanup candidates: 0

🎯 Promotion Suggestions:
  1. Promote "Critical security fix" to OPENCODE.md
  2. Promote "Important optimization" to OPENCODE.md
  3. Promote "Key architectural decision" to OPENCODE.md
  4. Promote "Essential workflow" to OPENCODE.local.md
  5. Promote "Critical bug fix" to shared memory
```

### Example 5: Cleanup Focus

```bash
# Focus on cleanup candidates
/remember --cleanup

🗑️ Cleanup Review:
  - Total entries: 5
  - High quality: 0
  - Medium quality: 2
  - Low quality: 3
  - Recommended promotions: 0
  - Cleanup candidates: 5

🗑️ Cleanup Actions:
  1. Remove "Outdated API endpoint" (30 days old)
  2. Merge "Duplicate testing note" with entry #12
  3. Improve "Vague debugging tip" (add details)
  4. Complete "Incomplete documentation"
  5. Remove "Deprecated workflow"
```

---

## 🔧 Advanced Usage

### Custom Quality Threshold

```bash
# Use custom quality threshold
/remember --quality 75

# Use high quality threshold
/remember --quality 90

# Use low quality threshold
/remember --quality 50
```

### Time-Based Filtering

```bash
# Review memory from last hour
/remember --last 1h

# Review memory from last day
/remember --last 1d

# Review memory from last week
/remember --last 1w

# Review memory from last month
/remember --last 1m
```

### Category Filtering

```bash
# Review specific category
/remember --category testing

# Review multiple categories
/remember --category testing,debugging

# Review all categories
/remember --all
```

### Dry Run Mode

```bash
# Preview changes without applying them
/remember --dry-run

📊 Dry Run Results:
  - Total entries: 45
  - Recommended promotions: 8
  - Cleanup candidates: 5
  - Estimated time: 2m 30s
  - Risk level: Low
```

---

## 📊 Monitoring and Feedback

### Memory Statistics

The remember skill provides memory statistics:

```bash
/remember stats

📊 Memory Statistics:
  - Total entries: 45
  - High quality: 32
  - Medium quality: 10
  - Low quality: 3
  - Average quality: 78/100
  - Total promotions: 8
  - Total cleanups: 5
  - Last review: 2 hours ago
```

### Quality Trends

```bash
/remember trends

📈 Quality Trends:
  - Average quality: 78/100
  - Quality trend: Improving (+5%)
  - Promotion rate: 18%
  - Cleanup rate: 11%
  - Memory growth: +3 entries/day
```

---

## 🎯 Best Practices

### 1. Review Memory Regularly

```bash
# ✅ Good: Review memory regularly
/remember --last 1d

# ❌ Bad: Never review memory
# (do nothing)
```

### 2. Promote High-Quality Entries

```bash
# ✅ Good: Promote high-quality entries
/remember
# Then accept promotion suggestions

# ❌ Bad: Don't promote high-quality entries
/remember
# Then ignore promotion suggestions
```

### 3. Clean Up Low-Quality Entries

```bash
# ✅ Good: Clean up low-quality entries
/remember --cleanup
# Then accept cleanup suggestions

# ❌ Bad: Don't clean up low-quality entries
/remember
# Then ignore cleanup suggestions
```

### 4. Organize Knowledge by Category

```bash
# ✅ Good: Organize by category
/remember --category testing

# ❌ Bad: Don't organize by category
/remember
# Then don't organize
```

### 5. Use Appropriate Memory Layer

```bash
# ✅ Good: Use appropriate memory layer
/remember
# Then promote to OPENCODE.md for project-specific knowledge

# ❌ Bad: Use wrong memory layer
/remember
# Then promote to shared memory for project-specific knowledge
```

---

## 🔍 Troubleshooting

### No Memory Entries Found

**Issue**: No memory entries found

**Solutions**:
1. Check if auto-memory is enabled
2. Review session history
3. Check memory configuration
4. Verify memory files exist

### Low Quality Scores

**Issue**: Memory entries have low quality scores

**Solutions**:
1. Provide more details in your sessions
2. Be more specific in your requests
3. Add context to your responses
4. Review and improve existing entries

### Too Many Cleanup Candidates

**Issue**: Too many cleanup candidates

**Solutions**:
1. Review cleanup criteria
2. Adjust quality threshold
3. Manually review candidates
4. Keep important entries even if low quality

### Promotion Suggestions Not Appearing

**Issue**: Promotion suggestions are not appearing

**Solutions**:
1. Check memory layer configuration
2. Verify entry quality scores
3. Review promotion criteria
4. Check for conflicts

---

## 🎨 Frontend Design Principles

### Visual Appeal

The remember skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Quality scores** - Visual representation of quality metrics
- **Progress bars** - Visual representation of progress
- **Code blocks** - Syntax-highlighted code examples

### User Experience

- **Multi-layer support** - Support for project, local, and shared memory
- **Quality scoring** - Visual representation of quality metrics
- **Smart suggestions** - Intelligent promotion and cleanup suggestions
- **Category organization** - Organize knowledge by category
- **Time-based filtering** - Review memory by time period

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### OpenCode Memory Documentation

- [OpenCode Memory Guide](https://docs.opencode.ai/memory)
- [OpenCode Memory Best Practices](https://docs.opencode.ai/memory/best-practices)
- [OpenCode Memory Examples](https://docs.opencode.ai/memory/examples)

### OpenCode Documentation

- [OpenCode Skills Collection](https://github.com/kushalchalla981-tech/opencode-skills)
- [OpenCode Documentation](https://docs.opencode.ai)
- [OpenCode Community](https://community.opencode.ai)

### Related Skills

- **loop** - Recurring task scheduling with cron expressions
- **batch** - Parallel work orchestration for large-scale changes
- **skillify** - Convert sessions to reusable skills
- **debug** - Session debugging and troubleshooting

---

## 🤝 Contributing

Contributions to the remember skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to review your memory entries?

```bash
# Review all memory entries
/remember

# Review memory with specific focus
/remember testing

# Review memory for specific time period
/remember --last 1h

# Review memory with quality threshold
/remember --quality 80
```

**Start organizing your knowledge today!** 🚀

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

</div>
