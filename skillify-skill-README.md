# 🎯 Skillify Skill - Convert Sessions to Reusable Skills

<div align="center">

![Skillify Skill](https://img.shields.io/badge/OpenCode-Skillify_Skill-orange?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Capture repeatable processes from your sessions and convert them into reusable skills with proper documentation**

</div>

---

## 🎯 What This Skill Does

The **Skillify skill** enables you to:

- ✅ **Capture workflows** - Extract repeatable processes from your sessions
- ✅ **Generate skills** - Create reusable OpenCode skills automatically
- ✅ **Document processes** - Add comprehensive documentation
- ✅ **Interview process** - Ask questions to understand the workflow
- ✅ **Optimize skills** - Improve skill quality and usability
- ✅ **Share skills** - Distribute skills to the community

### Key Features

- 🎯 **Automatic extraction** - Identify repeatable patterns in your sessions
- 📝 **Comprehensive documentation** - Generate complete skill documentation
- 🤖 **Interactive interview** - Ask questions to understand the workflow
- 🎨 **Professional formatting** - Follow OpenCode skill conventions
- 📊 **Quality metrics** - Track skill quality and completeness
- 🔄 **Iterative improvement** - Refine skills based on feedback

---

## 🚀 How to Use

### Basic Usage

```bash
# Convert current session to a skill
/skillify

# Convert session with description
/skillify "Create a skill for testing React components"

# Convert session with specific focus
/skillify --focus testing

# Convert session with custom name
/skillify --name react-component-tester
```

### Workflow

The skillify skill follows a four-phase workflow:

1. **Analysis Phase** - Analyze your session for repeatable patterns
2. **Interview Phase** - Ask questions to understand the workflow
3. **Generation Phase** - Generate skill with documentation
4. **Review Phase** - Review and refine the skill

---

## 📖 Complete Guide

### Phase 1: Analysis

The analysis phase examines your session for repeatable patterns:

```bash
/skillify

📊 Session Analysis:
  - Total messages: 45
  - Repeatable patterns found: 3
  - Potential skills: 2
  - Recommended action: Create skill for testing workflow
```

### Phase 2: Interview

The interview phase asks questions to understand the workflow:

```bash
/skillify

🤖 Interview Questions:
  1. What is the main purpose of this workflow?
  2. What are the key steps in this process?
  3. What tools or commands are commonly used?
  4. What are common pitfalls or issues?
  5. How should errors be handled?
```

### Phase 3: Generation

The generation phase creates the skill with documentation:

```bash
/skillify

🎨 Skill Generation:
  - Skill name: react-component-tester
  - Skill description: Test React components with automated testing
  - Documentation: 450 lines
  - Examples: 8 examples
  - Best practices: 12 practices
  - Troubleshooting: 15 issues
```

### Phase 4: Review

The review phase lets you review and refine the skill:

```bash
/skillify

📋 Skill Review:
  - Quality score: 92/100
  - Completeness: 95%
  - Documentation quality: Excellent
  - Examples quality: Good
  - Ready for use: Yes
```

---

## 🎨 Usage Examples

### Example 1: Testing Workflow

```bash
# Convert testing session to skill
/skillify "Create a skill for testing React components"

🎯 Skill Created: react-component-tester
📝 Documentation: 450 lines
🎨 Examples: 8 examples
✅ Ready to use!
```

### Example 2: Debugging Workflow

```bash
# Convert debugging session to skill
/skillify "Create a skill for debugging Node.js applications"

🎯 Skill Created: nodejs-debugger
📝 Documentation: 520 lines
🎨 Examples: 10 examples
✅ Ready to use!
```

### Example 3: Deployment Workflow

```bash
# Convert deployment session to skill
/skillify "Create a skill for deploying applications to production"

🎯 Skill Created: production-deployer
📝 Documentation: 480 lines
🎨 Examples: 9 examples
✅ Ready to use!
```

### Example 4: Code Review Workflow

```bash
# Convert code review session to skill
/skillify "Create a skill for conducting code reviews"

🎯 Skill Created: code-reviewer
📝 Documentation: 410 lines
🎨 Examples: 7 examples
✅ Ready to use!
```

### Example 5: Documentation Workflow

```bash
# Convert documentation session to skill
/skillify "Create a skill for writing technical documentation"

🎯 Skill Created: technical-writer
📝 Documentation: 460 lines
🎨 Examples: 8 examples
✅ Ready to use!
```

---

## 🔧 Advanced Usage

### Custom Skill Name

```bash
# Use custom skill name
/skillify --name my-custom-skill

# Use custom skill name with description
/skillify --name my-custom-skill "Create a skill for my custom workflow"
```

### Focus on Specific Aspect

```bash
# Focus on testing aspect
/skillify --focus testing

# Focus on debugging aspect
/skillify --focus debugging

# Focus on deployment aspect
/skillify --focus deployment
```

### Interactive Mode

```bash
# Use interactive mode for more control
/skillify --interactive

🤖 Interactive Mode:
  - Answer questions as they appear
  - Provide additional details
  - Refine skill as it's being created
  - Review and approve each section
```

### Dry Run Mode

```bash
# Preview skill without creating it
/skillify --dry-run

📊 Dry Run Results:
  - Potential skill: react-component-tester
  - Estimated documentation: 450 lines
  - Estimated examples: 8 examples
  - Quality score: 92/100
```

---

## 📊 Monitoring and Feedback

### Skill Quality Metrics

The skillify skill provides quality metrics:

```bash
/skillify

📊 Skill Quality Metrics:
  - Documentation completeness: 95%
  - Example quality: 90%
  - Best practices coverage: 88%
  - Troubleshooting coverage: 92%
  - Overall quality score: 92/100
```

### Generation Progress

```bash
/skillify

📊 Generation Progress:
  [████████████████████████████████░░░░░] 80%
  - Analysis: ✅ Complete
  - Interview: ✅ Complete
  - Generation: 🔄 In progress
  - Review: ⏳ Pending
```

---

## 🎯 Best Practices

### 1. Be Specific About the Workflow

```bash
# ✅ Good: Specific workflow description
/skillify "Create a skill for testing React components with Jest and React Testing Library"

# ❌ Bad: Vague workflow description
/skillify "Create a skill for testing"
```

### 2. Answer Interview Questions Thoroughly

```bash
# ✅ Good: Thorough answers to interview questions
🤖 What is the main purpose of this workflow?
Your answer: The main purpose is to test React components to ensure they work correctly and catch bugs early in development.

# ❌ Bad: Brief answers to interview questions
🤖 What is the main purpose of this workflow?
Your answer: Testing
```

### 3. Review the Generated Skill

```bash
# ✅ Good: Review and refine the skill
/skillify --review

# ❌ Bad: Skip review phase
/skillify
```

### 4. Test the Generated Skill

```bash
# ✅ Good: Test the generated skill
/skillify
# Then test the skill with real examples

# ❌ Bad: Don't test the generated skill
/skillify
# Then don't test it
```

### 5. Share Useful Skills

```bash
# ✅ Good: Share useful skills with the community
/skillify
# Then share the skill with others

# ❌ Bad: Keep useful skills to yourself
/skillify
# Then don't share it
```

---

## 🔍 Troubleshooting

### No Repeatable Patterns Found

**Issue**: No repeatable patterns found in session

**Solutions**:
1. Review session content
2. Look for common patterns
3. Try different focus area
4. Provide more context

### Skill Quality Low

**Issue**: Generated skill has low quality score

**Solutions**:
1. Provide more details during interview
2. Review and refine the skill
3. Add more examples
4. Improve documentation

### Generation Taking Too Long

**Issue**: Skill generation is taking too long

**Solutions**1. Reduce session scope
2. Focus on specific aspect
3. Use dry-run mode to preview
4. Cancel and restart with clearer focus

### Skill Not Working as Expected

**Issue**: Generated skill doesn't work as expected

**Solutions**:
1. Test the skill with real examples
2. Review documentation for accuracy
3. Refine skill based on testing
4. Regenerate with more details

---

## 🎨 Frontend Design Principles

### Visual Appeal

The skillify skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Progress bars** - Visual representation of progress
- **Quality metrics** - Visual representation of quality scores
- **Code blocks** - Syntax-highlighted code examples

### User Experience

- **Four-phase workflow** - Clear analysis, interview, generation, review phases
- **Interactive mode** - Engage with the process as it happens
- **Real-time feedback** - Know what's happening at all times
- **Quality metrics** - Track skill quality and completeness
- **Iterative improvement** - Refine skills based on feedback

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### OpenCode Skill Documentation

- [OpenCode Skill Guide](https://docs.opencode.ai/skills)
- [OpenCode Skill Conventions](https://docs.opencode.ai/skills/conventions)
- [OpenCode Skill Examples](https://docs.opencode.ai/skills/examples)

### OpenCode Documentation

- [OpenCode Skills Collection](https://github.com/kushalchalla981-tech/opencode-skills)
- [OpenCode Documentation](https://docs.opencode.ai)
- [OpenCode Community](https://community.opencode.ai)

### Related Skills

- **loop** - Recurring task scheduling with cron expressions
- **batch** - Parallel work orchestration for large-scale changes
- **debug** - Session debugging and troubleshooting
- **remember** - Memory management and organization

---

## 🤝 Contributing

Contributions to the skillify skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to convert your first session to a skill?

```bash
# Convert your current session to a skill
/skillify

# Convert session with description
/skillify "Create a skill for testing React components"

# Convert session with specific focus
/skillify --focus testing
```

**Start converting your sessions to reusable skills today!** 🚀

---

<div align="center">

**Made with ❤️ for the OpenCode community**

[![OpenCode](https://img.shields.io/badge/OpenCode-Skillify_Skill-orange?style=for-the-badge&logo=opencode)](https://github.com/kushalchalla981-tech/opencode-skills)

</div>
