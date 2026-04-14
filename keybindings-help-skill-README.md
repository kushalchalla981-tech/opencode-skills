# ⌨️ Keybindings-Help Skill - Keyboard Shortcut Customization

<div align="center">

![Keybindings-Help Skill](https://img.shields.io/badge/OpenCode-Keybindings_Help_Skill-indigo?style=for-the-badge&logo=opencode)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/status-production--success?style=for-the-badge)

**Customize keyboard shortcuts by modifying keybindings.json with comprehensive reference and examples**

</div>

---

## 🎯 What This Skill Does

The **Keybindings-Help skill** enables you to:

- ✅ **Customize shortcuts** - Modify keyboard shortcuts to your preference
- **Add chord bindings** - Create multi-key combinations
- **Modify keybinding behavior** - Change how shortcuts work
- **View current bindings** - See all configured shortcuts
- **Validate bindings** - Check for conflicts and issues
- **Get reference help** - Access comprehensive documentation

### Key Features

- ⌨️ **Shortcut customization** - Modify any keyboard shortcut
- 🔗 **Chord bindings** - Create multi-key combinations
- 🎯 **Behavior modification** - Change how shortcuts behave
- 📋 **Reference documentation** - Comprehensive help and examples
- ✅ **Validation system** - Check for conflicts and issues
- 🔄 **Easy management** - Simple configuration and updates

---

## 🚀 How to Use

### Basic Usage

```bash
# Customize keyboard shortcut
/keybindings-help customize --key ctrl+s --action save

# Add chord binding
/keybindings-help add-chord ctrl+k ctrl+s --action save-and-format

# View current bindings
/keybindings-help list

# Get help with keybindings
/keybindings-help help
```

### Keybinding Configuration

The keybindings-help skill uses `~/.opencode/keybindings.json` for configuration:

```json
{
  "$schema": "https://www.schemastore.org/opencode-keybindings.json",
  "$docs": "https://code.opencode.com/docs/en/keybindings",
  "bindings": [
    {
      "key": "ctrl+s",
      "action": "save",
      "when": "editor.hasFocus"
    },
    {
      "key": "ctrl+k ctrl+s",
      "action": "save-and-format",
      "when": "editor.hasFocus"
    }
  ]
}
```

---

## 📖 Complete Guide

### Step 1: View Current Bindings

```bash
/keybindings-help list

📋 Current Keybindings:
  - ctrl+s: Save
  - ctrl+k ctrl+s: Save and format
  - ctrl+p: Quick open
  - ctrl+shift+f: Find in files
  - ctrl+shift+h: Replace in files
  - ctrl+ctrl+g: Go to line
```

### Step 2: Customize Shortcuts

```bash
# Customize existing shortcut
/keybindings-help customize --key ctrl+s --action save

✅ Shortcut customized successfully
📊 Shortcut details:
  - Key: ctrl+s
  - Action: save
  - Previous action: save
  - Status: Updated
```

### Step 3: Add Chord Bindings

```bash
# Add new chord binding
/keybindings-help add-chord ctrl+k ctrl+s --action save-and-format

✅ Chord binding added successfully
📊 Chord binding details:
  - Keys: ctrl+k ctrl+s
  - Action: save-and-format
  - Status: Added
```

### Step 4: Validate Bindings

```bash
# Validate keybindings configuration
/keybindings-help validate

✅ Keybindings configuration is valid
📊 Validation results:
  - Total bindings: 6
  - Conflicts: 0
  - Warnings: 0
  - Errors: 0
  - Status: Valid
```

---

## 🎨 Usage Examples

### Example 1: Basic Customization

```bash
# Customize save shortcut
/keybindings-help customize --key ctrl+s --action save

✅ Shortcut customized successfully
📊 Shortcut details:
  - Key: ctrl+s
  - Action: save
  - Previous action: save
  - Status: Updated
```

### Example 2: Chord Bindings

```bash
# Add chord binding for save and format
/keybindings-help add-chord ctrl+k ctrl+s --action save-and-format

✅ Chord binding added successfully
📊 Chord binding details:
  - Keys: ctrl+k ctrl+s
  - Action: save and format
  - Status: Added
```

### Example 3: Complex Chord Bindings

```bash
# Add complex chord binding
/keybindings-help add-chord ctrl+k ctrl+b ctrl+s --action save-build-and-format

✅ Complex chord binding added successfully
📊 Chord binding details:
  - Keys: ctrl+k ctrl+b ctrl+s
  - Action: save, build, and format
  - Status: Added
```

### Example 4: Remove Bindings

```bash
# Remove existing binding
/keybindings-help remove --key ctrl+s

✅ Binding removed successfully
📊 Binding details:
  - Key: ctrl+s
  - Action: save
  - Status: Removed
```

### Example 5: View All Bindings

```bash
# View all keybindings
/keybindings-help list

📋 All Keybindings:
  - ctrl+s: Save
  - ctrl+k ctrl+s: Save and format
  - ctrl+p: Quick open
  - ctrl+shift+f: Find in files
  - ctrl+shift+h: Replace in files
  - ctrl+ctrl+g: Go to line
  - ctrl+shift+g: Go to symbol
  - ctrl+shift+o: Go to file
```

---

## 🔧 Advanced Usage

### Conditional Bindings

```bash
# Add conditional binding
/keybindings-help add-conditional --key ctrl+s --action save --when "editor.hasFocus"

✅ Conditional binding added successfully
📊 Conditional binding details:
  - Key: ctrl+s
  - Action: save
  - Condition: editor.hasFocus
  - Status: Added
```

### Platform-Specific Bindings

```bash
# Add platform-specific binding
/keybindings-help add-platform --key ctrl+s --action save --platform macos

✅ Platform-specific binding added successfully
📊 Platform-specific binding details:
  - Key: cmd+s
  - Action: save
  - Platform: macOS
  - Status: Added
```

### Mode-Specific Bindings

```bash
# Add mode-specific binding
/keybindings-help add-mode --key ctrl+s --action save --mode insert

✅ Mode-specific binding added successfully
📊 Mode-specific binding details:
  - Key: ctrl+s
  - Action: save
  - Mode: insert
  - Status: Added
```

### Context-Specific Bindings

```bash
# Add context-specific binding
/keybindings-help add-context --key ctrl+s --action save --context "editor"

✅ Context-specific binding added successfully
📊 Context-specific binding details:
  - Key: ctrl+s
  - Action: save
  - Context: editor
  - Status: Added
```

---

## 📊 Monitoring and Feedback

### Keybinding Statistics

The keybindings-help skill provides keybinding statistics:

```bash
/keybindings-help stats

📊 Keybinding Statistics:
  - Total bindings: 6
  - Chord bindings: 2
  - Conditional bindings: 1
  - Platform-specific bindings: 1
  - Mode-specific bindings: 1
  - Context-specific bindings: 1
  - Last updated: 1 hour ago
```

### Binding Conflicts

The keybindings-help skill detects conflicts:

```bash
/keybindings-help conflicts

⚠️ Binding Conflicts:
  - Total conflicts: 0
  - Total warnings: 0
  - Total errors: 0
  - Status: No conflicts
```

---

## 🎯 Best Practices

### 1. Use Intuitive Key Combinations

```bash
# ✅ Good: Use intuitive key combinations
/keybindings-help add-chord ctrl+s --action save

# ❌ Bad: Use unintuitive key combinations
/keybindings-help add-chord ctrl+shift+alt+s --action save
```

### 2. Avoid Conflicts

```bash
# ✅ Good: Avoid conflicts with existing bindings
/keybindings-help validate
# Then add binding if no conflicts

# ❌ Bad: Create conflicts with existing bindings
/keybindings-help add-chord ctrl+s --action save
# Even though ctrl+s already exists
```

### 3. Document Your Bindings

```bash
# ✅ Good: Document your keybindings
/keybindings-help list
# Then document in README

# ❌ Bad: Don't document your keybindings
/keybindings-help list
# Then don't document
```

### 4. Test Your Bindings

```bash
# ✅ Good: Test your keybindings
/keybindings-help test

# ❌ Bad: Don't test your keybindings
# (do nothing)
```

### 5. Use Appropriate Bindings

```bash
# ✅ Good: Use appropriate bindings for the action
/keybindings-help add-chord ctrl+s --action save

# ❌ Bad: Use inappropriate bindings for the action
/keybindings-help add-chord ctrl+shift+alt+s --action save
```

---

## 🔍 Troubleshooting

### Binding Not Working

**Issue**: Keybinding is not working

**Solutions**:
1. Check keybinding syntax
2. Verify keybinding is not conflicting
3. Check keybinding conditions
4. Review keybinding logs

### Conflicts Detected

**Issue**: Keybinding conflicts are detected

**Solutions**:
1. Review conflict details
2. Resolve conflicts manually
3. Remove conflicting bindings
4. Add alternative bindings

### Platform-Specific Issues

**Issue**: Keybinding not working on specific platform

**Solutions**:
1. Check platform-specific bindings
2. Verify platform-specific syntax
3. Add platform-specific bindings
4. Test on target platform

### Mode-Specific Issues

**Issue**: Keybinding not working in specific mode

**Solutions**:
1. Check mode-specific bindings
2. Verify mode-specific syntax
3. Add mode-specific bindings
4. Test in target mode

---

## 🎨 Frontend Design Principles

### Visual Appeal

The keybindings-help skill documentation follows these design principles:

- **Clear hierarchy** - Information is organized with clear headings
- **Visual indicators** - Emojis and badges for quick scanning
- **Keybinding tables** - Organized data presentation
- **Code blocks** - Syntax-highlighted code examples
- **Conflict indicators** - Visual representation of conflicts

### User Experience

- **Easy customization** - Simple and intuitive customization process
- **Comprehensive reference** - Complete help and documentation
- **Validation system** - Check for conflicts and issues
- **Multi-platform support** - Support for different platforms
- **Context-aware bindings** - Support for different contexts

### Accessibility

- **Semantic HTML** - Proper heading structure
- **Alt text** - Descriptive text for images
- **Keyboard navigation** - Accessible without mouse
- **Screen reader friendly** - Compatible with assistive technologies
- **High contrast** - Good color contrast for readability

---

## 📚 Additional Resources

### OpenCode Keybindings Documentation

- [OpenCode Keybindings Guide](https://docs.opencode.ai/keybindings)
- [OpenCode Keybindings Best Practices](https://docs.opencode.ai/keybindings/best-practices)
- [OpenCode Keybindings Examples](https://docs.opencode.ai/keybindings/examples)

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

Contributions to the keybindings-help skill are welcome! Please:

1. **Follow OpenCode conventions** - Maintain consistency with other skills
2. **Add comprehensive documentation** - Include usage examples and best practices
3. **Test thoroughly** - Ensure all functionality works as expected
4. **Provide examples** - Add real-world usage examples

---

## 📄 License

This skill is licensed under the MIT License - see the [LICENSE](../../LICENSE) file for details.

---

## 🎉 Get Started

Ready to customize your keyboard shortcuts?

```bash
# Customize keyboard shortcut
/keybindings-help customize --key ctrl+s --action save

# Add chord binding
/keybindings-help add-chord ctrl+k ctrl+s --action save-and-format

# View current bindings
/keybindings-help list

# Get help with keybindings
/keybindings-help help
```

**Start customizing your keyboard shortcuts today!** 🚀

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

</div>
