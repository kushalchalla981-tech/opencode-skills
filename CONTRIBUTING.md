# Contributing to OpenCode Skills

Thank you for your interest in contributing to the OpenCode Skills collection! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Issues
- Use GitHub Issues to report bugs or request features
- Include clear descriptions and reproduction steps
- Provide relevant error messages or logs

### Submitting Skills
1. **Follow Skill Conventions**: Ensure your skill follows OpenCode's skill format
2. **Comprehensive Documentation**: Include usage examples, best practices, and troubleshooting
3. **Test Thoroughly**: Test your skill in various scenarios
4. **Submit PR**: Create a pull request with clear description

## 📝 Skill Guidelines

### Required Frontmatter Fields
Every skill must include:
```yaml
---
name: skill-name
description: "One-line description of what the skill does"
when_to_use: "When to invoke this skill"
argument_hint: "[optional-arguments]"
allowed_tools:
  - Tool1
  - Tool2
context: inline # or fork
---
```

### Documentation Structure
Each skill should include:
- **Overview**: Brief description of the skill
- **Usage**: How to use the skill with examples
- **Best Practices**: Recommended usage patterns
- **Troubleshooting**: Common issues and solutions
- **Integration Notes**: How it works with other skills

### Code Quality
- Follow OpenCode's coding conventions
- Use clear, descriptive names
- Include comments for complex logic
- Handle errors gracefully

## 🧪 Testing

### Manual Testing Checklist
- [ ] Skill loads correctly
- [ ] Frontmatter is valid
- [ ] Documentation is complete
- [ ] Examples work as described
- [ ] Error handling works
- [ ] Integration with other skills

### Test Scenarios
Test your skill with:
- Different input types
- Edge cases and error conditions
- Integration with other OpenCode features
- Various user skill levels

## 📚 Documentation Standards

### README Format
- Clear, concise descriptions
- Code examples with syntax highlighting
- Real-world use cases
- Troubleshooting section

### Skill Documentation
- Start with overview
- Include multiple examples
- Add best practices
- Provide troubleshooting guide
- Note dependencies and requirements

## 🎯 Style Guidelines

### Naming Conventions
- **Skill names**: lowercase with hyphens (e.g., `my-skill`)
- **File names**: `SKILL.md` (exactly)
- **Directory names**: match skill name

### Writing Style
- Use clear, concise language
- Avoid jargon when possible
- Include examples for complex concepts
- Use active voice

## 🔄 Pull Request Process

### Before Submitting
1. **Test thoroughly**: Ensure your changes work as expected
2. **Update documentation**: Include relevant documentation updates
3. **Follow conventions**: Adhere to existing code style and patterns
4. **Clean commits**: Make clear, descriptive commit messages

### PR Description
Include:
- **Summary**: Brief description of changes
- **Motivation**: Why this change is needed
- **Testing**: How you tested the changes
- **Documentation**: Any documentation updates
- **Breaking Changes**: Note any breaking changes

### Review Process
- Maintainers will review your PR
- Address feedback promptly
- Be responsive to questions
- Iterate as needed

## 🏷️ Tagging and Mentions

### When to Tag OpenCode
- Major feature additions
- Breaking changes
- Security fixes
- Important announcements

### Format
Use GitHub's mention format:
- **OpenCode**: @opencode
- **Maintainers**: @kushalchalla981-tech

## 📋 Code of Conduct

### Our Pledge
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Assume good intentions

### Unacceptable Behavior
- Harassment or discrimination
- Personal attacks
- Unwelcome sexual attention
- Trolling or insulting comments

## 🎓 Getting Help

### Resources
- **OpenCode Documentation**: [Official docs]
- **Skill Examples**: Review existing skills
- **Community**: Ask questions in issues

### Asking Questions
- Be specific about your problem
- Include relevant code and error messages
- Show what you've tried
- Be patient with responses

## 🌟 Recognition

Contributors will be recognized in:
- **Contributors section**: In README
- **Release notes**: For significant contributions
- **Skill credits**: In skill documentation

## 📞 Contact

For questions about contributing:
- **GitHub Issues**: Use for bugs and feature requests
- **Discussions**: Use for questions and ideas
- **Email**: kushalchalla981-tech@users.noreply.github.com

## 🙏 Thank You

Contributions make OpenCode better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🚀**
