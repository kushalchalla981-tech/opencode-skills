# ⚙️ Update-Config Skill - Configuration Management

<div align="center">

![Update-Config Skill](https://img.shields.io/badge/OpenCode-Update_Config_Skill-red?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Configure OpenCode via settings.json with hooks, permissions, environment variables, and automated behaviors**

</div>

---

## 🎯 What This Skill Does

The **Update-Config skill** enables you to:

- ✅ **Configure hooks** - Set up automated behaviors for tool usage
- ✅ **Manage permissions** - Control what tools can be used
- ✅ **Set environment variables** - Configure environment-specific settings
- **Automate behaviors** - Create automated responses to events
- **Multi-layer configuration** - Support for user, project, and local settings
- **Validation and testing** - Verify configuration changes

### Key Features

- 🔧 **Hook system** - Automate responses to tool usage
- 🛡️ **Permission management** - Control tool access and usage
- 🌍 **Environment variables** - Configure environment-specific settings
- 🤖 **Automated behaviors** - Create intelligent automated responses
- 📊 **Configuration layers** - Support for multiple configuration layers
- ✅ **Validation** - Verify configuration changes before applying

---

## 🚀 How to Use

### Basic Usage

```bash
# Update configuration
/update-config add hook for Edit tool

# Update permissions
/update-config add permission for Bash tool

# Set environment variable
/update-config set environment variable NODE_ENV=production

# Remove configuration
/update-config remove hook for Edit tool
```

### Configuration Layers

The update-config skill supports three configuration layers:

1. **~/.opencode/settings.json** - Global settings (all projects)
2: **.opencode/settings.json** - Project settings (committed to git)
3. **.opencode/settings.local.json** - Local settings (gitignored)

---

## 📖 Complete Guide

### Step 1: Choose Configuration Layer

```bash
# Update global settings
/update-config --global add hook for Edit tool

# Update project settings
/update-config --project add hook for Edit tool

# Update local settings
/update-config --local add hook for Edit tool
```

### Step 2: Add Configuration

```bash
# Add hook for Edit tool
/update-config add hook for Edit tool

# Add permission for Bash tool
/update-config add permission for Bash tool

# Set environment variable
/update-config set environment variable NODE_ENV=production
```

### Step 3: Remove Configuration

```bash
# Remove hook for Edit tool
/update-config remove hook for Edit tool

# Remove permission for Bash tool
/update-config remove permission for Bash tool

# Remove environment variable
/update-config unset environment variable NODE_ENV
```

### Step 4: Validate Configuration

```bash
# Validate configuration
/update-config validate

✅ Configuration is valid
📊 Configuration summary:
  - Hooks: 5
  - Permissions: 3
  - Environment variables: 2
  - Total settings: 10
```

---

## 🎨 Usage Examples

### Example 1: Hook Configuration

```bash
# Add hook for Edit tool
/update-config add hook for Edit tool

✅ Hook added successfully
📊 Hook details:
  - Tool: Edit
  - Trigger: After tool use
  - Action: Log to file
  - Command: echo "$(date) Edit used" >> /tmp/edit-log.txt
```

### Example 2: Permission Configuration

```bash
# Add permission for Bash tool
/update-config add permission for Bash tool

✅ Permission added successfully
📊 Permission details:
  - Tool: Bash
  - Permission: Allow
  - Scope: All
  - Restrictions: None
```

### Example 3: Environment Variable Configuration

```bash
# Set environment variable
/update-config set environment variable NODE_ENV=production

✅ Environment variable set successfully
📊 Environment variable details:
  - Name: NODE_ENV
  - Value: production
  - Scope: All
  - Persistence: Session
```

### Example 4: Automated Behavior Configuration

```bash
# Add automated behavior
/update-config add behavior auto-format after Edit

✅ Behavior added successfully
📊 Behavior details:
  - Trigger: After Edit tool use
  - Action: Auto-format code
  - Tool: prettier
  - Options: --write
```

### Example 5: Complex Configuration

```bash
# Add complex hook with multiple actions
/update-config add hook for Edit tool with multiple actions

✅ Complex hook added successfully
📊 Hook details:
  - Tool: Edit
  - Trigger: After tool use
  - Actions:
    1. Log to file
    2. Run linter
    3. Format code
    4: Send notification
```

---

## 🔧 Advanced Usage

### Custom Hook Configuration

```bash
# Add custom hook with custom command
/update-config add hook for Edit tool with custom command

✅ Custom hook added successfully
📊 Hook details:
  - Tool: Edit
  - Trigger: After tool use
  - Action: Run custom command
  - Command: /path/to/custom-script.sh
```

### Conditional Permissions

```bash
# Add conditional permission
/update-config add permission for Bash tool with conditions

✅ Conditional permission added successfully
📊 Permission details:
  - Tool: Bash
  - Permission: Allow
  - Scope: Specific
  - Conditions:
    - Path: /safe/directory/*
    - Command: safe-command
```

### Temporary Environment Variables

```bash
# Set temporary environment variable
/update-config set environment variable TEMP_VAR=temp_value --scope session

✅ Temporary environment variable set successfully
📊 Environment variable details:
  - Name: TEMP_VAR
  - Value: temp_value
  - Scope: Session
  - Persistence: Temporary
```

### Configuration Validation

```bash
# Validate configuration before applying
/update-config validate --dry-run

✅ Configuration is valid
📊 Validation results:
  - Hooks: 5
  - Permissions: 3
  - Environment variables: 2
  - Total settings: 10
  - Validation: Passed
```

---

## 📊 Monitoring and Feedback

### Configuration Status

The update-config skill provides configuration status:

```bash
/update-config status

📊 Configuration Status:
  - Global settings: 5
  - Project settings: 3
  - Local settings: 2
  - Total settings: 10
  - Last updated: 2 hours ago
```

### Configuration Changes

The update-config skill tracks configuration changes:

```bash
/update-config changes

📊 Recent Changes:
  1. Added hook for Edit tool (2 hours ago)
  2. Added permission for Bash tool (1 hour ago)
  3. Set environment variable NODE_ENV=production (30 minutes ago)
  4. Removed hook for Read tool (1 day ago)
  5. Updated permission for Write tool (2 days ago)
```

---

## 🎯 Best Practices

### 1. Use Appropriate Configuration Layer

```bash
# ✅ Good: Use appropriate configuration layer
/update-config --project add hook for Edit tool

# ❌ Bad: Use wrong configuration layer
/update-config --global add hook for Edit tool
```

### 2. Test Configuration Changes

```bash
# ✅ Good: Test configuration changes
/update-config validate

# ❌ Bad: Don't test configuration changes
/update-config add hook for Edit tool
# Then don't validate
```

### 3. Document Configuration Changes

```bash
# ✅ Good: Document configuration changes
/update-config add hook for Edit tool
# Then document the change in README

# ❌ Bad: Don't document configuration changes
/update-config add hook for Edit tool
# Then don't document
```

### 4. Use Descriptive Configuration

```bash
# ✅ Good: Use descriptive configuration
/update-config add hook for Edit tool with detailed description

# ❌ Bad: Use vague configuration
/update-config add hook for Edit tool
```

### 5. Review Configuration Regularly

```bash
# ✅ Good: Review configuration regularly
/update-config status

# ❌ Bad: Never review configuration
# (do nothing)
```

---

## 🔍 Troubleshooting

### Configuration Not Applying

**Issue**: Configuration changes are not being applied

**Solutions**:
1. Check configuration layer
2. Verify configuration syntax
3. Review configuration logs
4. Check file permissions

### Conflicts Between Layers

**Issue**: Configuration conflicts between layers

**Solutions**:
1. Review layer priority
2. Resolve conflicts manually
3. Use appropriate layer
4. Document conflicts

### Invalid Configuration

**Issue**: Configuration is invalid

**Solutions**:
1. Validate configuration syntax
2. Review error messages
3. Fix configuration errors
4. Re-validate configuration

### Performance Issues

**Issue**: Configuration is causing performance issues

**Solutions**:
1. Review hook frequency
2. Optimize hook commands
3. Reduce hook complexity
4. Monitor performance metrics

---

## 🎨 Frontend Design Principles

### Visual Appeal

The update-config skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Configuration status** - Visual representation of configuration state
- **Change tracking** - Visual representation of recent changes
- **Code blocks** - Syntax-highlighted code examples

### User Experience

- **Multi-layer support** - Support for global, project, and local settings
- **Validation system** - Verify configuration before applying
- **Change tracking** - Track all configuration changes
- **Status monitoring** - Monitor configuration status
- **Error handling** - Graceful degradation with helpful messages

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### OpenCode Configuration Documentation

- [OpenCode Configuration Guide](https://docs.opencode.ai/configuration)
- [OpenCode Configuration Best Practices](https://docs.opencode.ai/configuration/best-practices)
- [OpenCode Configuration Examples](https://docs.opencode.ai/configuration/examples)

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

Contributions to the update-config skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to configure your OpenCode environment?

```bash
# Add hook for Edit tool
/update-config add hook for Edit tool

# Add permission for Bash tool
/update-config add permission for Bash tool

# Set environment variable
/update-config set environment variable NODE_ENV=production

# Validate configuration
/update-config validate
```

**Start configuring your OpenCode environment today!** 🚀

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

</div>
