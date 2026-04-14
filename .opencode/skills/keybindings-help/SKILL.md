---
name: keybindings-help
description: "Customize keyboard shortcuts by modifying ~/.opencode/keybindings.json. Rebind keys, add chord bindings, and modify keybinding behavior with comprehensive reference and examples."
when_to_use: "Use when the user wants to customize keyboard shortcuts, rebind keys, add chord bindings, or modify ~/.opencode/keybindings.json. Examples: 'rebind ctrl+s', 'add a chord shortcut', 'change the submit key', 'customize keybindings'."
argument_hint: "<keybinding change description>"
allowed_tools:
  - Read
  - Write
  - Edit
context: inline
---

# Keybindings Skill - Keyboard Shortcut Customization

## Overview

Create or modify `~/.opencode/keybindings.json` to customize keyboard shortcuts. This skill provides comprehensive guidance for rebinding keys, adding chord bindings, and customizing keybinding behavior.

## CRITICAL: Read Before Write

**Always read `~/.opencode/keybindings.json` first** (it may not exist yet). Merge changes with existing bindings — never replace the entire file.

- Use **Edit** tool for modifications to existing files
- Use **Write** tool only if the file does not exist yet

## File Format

```json
{
  "$schema": "https://www.schemastore.org/opencode-keybindings.json",
  "$docs": "https://code.opencode.com/docs/en/keybindings",
  "bindings": [
    {
      "context": "Chat",
      "bindings": {
        "ctrl+e": "chat:externalEditor"
      }
    }
  ]
}
```

**Always include the `$schema` and `$docs` fields.**

## Keystroke Syntax

### Modifiers (combine with `+`)
- `ctrl` (alias: `control`)
- `alt` (aliases: `opt`, `option`) - note: `alt` and `meta` are identical in terminals
- `shift`
- `meta` (aliases: `cmd`, `command`)

### Special Keys
- `escape`/`esc`, `enter`/`return`, `tab`, `space`
- `backspace`, `delete`
- `up`, `down`, `left`, `right`

### Chords
Space-separated keystrokes, e.g., `ctrl+k ctrl+t` (1-second timeout between keystrokes)

### Examples
- `ctrl+shift+p`
- `alt+enter`
- `ctrl+k ctrl+n`

## Unbinding Default Shortcuts

Set a key to `null` to remove its default binding:

```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+s": null
  }
}
```

## How User Bindings Interact with Defaults

- User bindings are **additive** — they are appended after the default bindings
- To **move** a binding to a different key: unbind the old key (`null`) AND add the new binding
- A context only needs to appear in the user's file if they want to change something in that context

## Common Patterns

### Rebind a Key
To change the external editor shortcut from `ctrl+g` to `ctrl+e`:

```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+g": null,
    "ctrl+e": "chat:externalEditor"
  }
}
```

### Add a Chord Binding
```json
{
  "context": "Global",
  "bindings": {
    "ctrl+k ctrl+t": "app:toggleTodos"
  }
}
```

### Multiple Bindings in One Context
```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+e": "chat:externalEditor",
    "ctrl+k": "chat:clear",
    "ctrl+l": "chat:loadHistory"
  }
}
```

## Behavioral Rules

1. Only include contexts the user wants to change (minimal overrides)
2. Validate that actions and contexts are from the known lists below
3. Warn the user proactively if they choose a key that conflicts with reserved shortcuts or common tools like tmux (`ctrl+b`) and screen (`ctrl+a`)
4. When adding a new binding for an existing action, the new binding is additive (existing default still works unless explicitly unbound)
5. To fully replace a default binding, unbind the old key AND add the new one

## Available Contexts

| Context | Description |
|---------|-------------|
| `Global` | Applies everywhere |
| `Chat` | Chat/input area |
| `Autocomplete` | Autocomplete suggestions |
| `Confirmation` | Confirmation dialogs |
| `Tabs` | Tab management |
| `Transcript` | Message history |
| `HistorySearch` | Search through history |
| `Task` | Task management |
| `ThemePicker` | Theme selection |
| `Help` | Help system |
| `Attachments` | File attachments |
| `Footer` | Footer area |
| `MessageSelector` | Message selection |
| `DiffDialog` | Diff/comparison dialogs |
| `ModelPicker` | Model selection |
| `Select` | Selection operations |
| `Permission` | Permission dialogs |

## Available Actions

### App Actions
- `app:help` - Show help
- `app:quit` - Quit application
- `app:toggleTodos` - Toggle todos panel

### Chat Actions
- `chat:clear` - Clear chat
- `chat:externalEditor` - Open external editor
- `chat:loadHistory` - Load chat history
- `chat:submit` - Submit message

### History Actions
- `history:back` - Go back in history
- `history:forward` - Go forward in history
- `history:search` - Search history

### Task Actions
- `task:complete` - Complete current task
- `task:next` - Go to next task
- `task:previous` - Go to previous task

### Theme Actions
- `theme:next` - Next theme
- `theme:previous` - Previous theme
- `theme:toggle` - Toggle theme

### And many more... (see full list below)

## Reserved Shortcuts

### Non-rebindable (errors)
These keys cannot be rebound and will cause errors:
- `ctrl+c` - Interrupt signal (SIGINT)
- `ctrl+z` - Suspend signal (SIGTSTP)
- `ctrl+d` - End of file (EOF)

### Terminal Reserved (errors/warnings)
These keys may conflict with terminal shortcuts:
- `ctrl+a` - Screen/tmux prefix
- `ctrl+b` - Tmux prefix
- `ctrl+w` - Delete word backward
- `ctrl+u` - Delete line backward

**Severity:**
- `error` - Will not work
- `warning` - May conflict but might work

### macOS Reserved (errors)
These keys are reserved by macOS:
- `cmd+space` - Spotlight
- `cmd+tab` - App switcher
- `cmd+c` - Copy (system-wide)
- `cmd+v` - Paste (system-wide)

## Validation with /doctor

The `/doctor` command includes a "Keybinding Configuration Issues" section that validates `~/.opencode/keybindings.json`.

### Common Issues and Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| `keybindings.json must have a "bindings" array` | Missing wrapper object | Wrap bindings in `{ "bindings": [...] }` |
| `"bindings" must be an array` | `bindings` is not an array | Set `"bindings"` to an array: `[{ context: ..., bindings: ... }]` |
| `Unknown context "X"` | Typo or invalid context name | Use exact context names from the Available Contexts table |
| `Duplicate key "X" in Y bindings` | Same key defined twice in one context | Remove the duplicate; JSON uses only the last value |
| `"X" may not work: ...` | Key conflicts with terminal/OS reserved shortcut | Choose a different key (see Reserved Shortcuts section) |
| `Could not parse keystroke "X"` | Invalid key syntax | Check syntax: use `+` between modifiers, valid key names |
| `Invalid action for "X"` | Action value is not a string or null | Actions must be strings like `"app:help"` or `null` to unbind |

### Example /doctor Output

```
Keybinding Configuration Issues
Location: ~/.opencode/keybindings.json
  └ [Error] Unknown context "chat"
    → Valid contexts: Global, Chat, Autocomplete, ...
  └ [Warning] "ctrl+c" may not work: Terminal interrupt (SIGINT)
```

**Errors** prevent bindings from working and must be fixed. **Warnings** indicate potential conflicts but the binding may still work.

## Example Workflows

### Workflow 1: Rebind Submit Key
**User:** "I want to use ctrl+enter to submit instead of ctrl+d"

1. **Read existing keybindings:**
```bash
Read ~/.opencode/keybindings.json
```

2. **Unbind old key and bind new one:**
```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+d": null,
    "ctrl+enter": "chat:submit"
  }
}
```

3. **Merge with existing bindings** (don't replace entire file)

### Workflow 2: Add Chord Shortcut
**User:** "Add a chord to toggle todos"

1. **Read existing keybindings**

2. **Add chord binding:**
```json
{
  "context": "Global",
  "bindings": {
    "ctrl+k ctrl+t": "app:toggleTodos"
  }
}
```

3. **Merge with existing bindings**

### Workflow 3: Multiple Customizations
**User:** "Customize several shortcuts at once"

1. **Read existing keybindings**

2. **Add multiple bindings:**
```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+e": "chat:externalEditor",
    "ctrl+k": "chat:clear",
    "ctrl+l": "chat:loadHistory"
  }
}
```

3. **Merge with existing bindings**

## Best Practices

### 1. Always Read First
```bash
# Good - Read existing file
Read ~/.opencode/keybindings.json

# Bad - Assume file doesn't exist
Write ~/.opencode/keybindings.json with new content
```

### 2. Merge, Don't Replace
```json
// Good - Merge with existing
{
  "context": "Chat",
  "bindings": {
    "ctrl+e": "chat:externalEditor"  // new binding
  }
}

// Bad - Replace entire file
{
  "$schema": "...",
  "bindings": [
    {
      "context": "Chat",
      "bindings": {
        "ctrl+e": "chat:externalEditor"
      }
    }
  ]
}
```

### 3. Check for Conflicts
- Verify keys don't conflict with reserved shortcuts
- Check for terminal conflicts
- Test bindings after adding them

### 4. Use Appropriate Contexts
- Choose the right context for your binding
- Don't use Global when a specific context exists
- Consider where the action should be available

### 5. Document Custom Bindings
- Keep notes on custom bindings
- Share with team if relevant
- Update documentation for team

## Troubleshooting

### Binding Not Working

**Check:**
1. JSON syntax is valid
2. Context name is correct
3. Action name is correct
4. Key syntax is correct
5. No conflicts with reserved keys

**Debug:**
```bash
# Run doctor to check for issues
/doctor

# Check keybindings file
cat ~/.opencode/keybindings.json

# Validate JSON
jq . ~/.opencode/keybindings.json
```

### Conflicting Bindings

**Symptoms:**
- Key doesn't work as expected
- Multiple actions triggered
- Unexpected behavior

**Solutions:**
1. Check for duplicate key definitions
2. Verify context is correct
3. Unbind conflicting keys
4. Test in isolation

### JSON Syntax Errors

**Symptoms:**
- Bindings not loading
- Errors in doctor output
- File not being read

**Solutions:**
1. Validate JSON syntax
2. Check for missing commas
3. Verify quote usage
4. Use JSON validator

## Advanced Usage

### Context-Specific Bindings
```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+e": "chat:externalEditor"
  }
}
```

### Global Bindings
```json
{
  "context": "Global",
  "bindings": {
    "ctrl+k ctrl+t": "app:toggleTodos"
  }
}
```

### Multiple Contexts
```json
{
  "bindings": [
    {
      "context": "Chat",
      "bindings": {
        "ctrl+e": "chat:externalEditor"
      }
    },
    {
      "context": "Global",
      "bindings": {
        "ctrl+k ctrl+t": "app:toggleTodos"
      }
    }
  ]
}
```

### Conditional Bindings
Some actions may only work in specific contexts. Check the action documentation for context requirements.

## Integration Notes

### File Location
Keybindings are stored in:
- **Location**: `~/.opencode/keybindings.json`
- **Scope**: User-specific (global across all projects)
- **Format**: JSON with schema validation

### Schema Validation
The file includes:
- `$schema` field for validation
- `$docs` field for documentation
- Automatic validation by tools

### Hot Reloading
Changes to keybindings are:
- Automatically detected
- Applied immediately
- No restart required

## Security Considerations

- Keybindings file is user-specific
- No sensitive information in keybindings
- File permissions should be restrictive
- Backup keybindings before major changes

## Performance Considerations

- Keybindings are loaded at startup
- Large numbers of bindings may impact startup time
- Keep bindings minimal and focused
- Remove unused bindings

## Related Skills

- **update-config**: For other configuration changes
- **debug**: For troubleshooting keybinding issues
- **doctor**: For validating keybindings configuration

## Keybinding Quality Checklist

After customizing keybindings, verify:

- [ ] JSON syntax is valid
- [ ] Context names are correct
- [ ] Action names are correct
- [ ] Key syntax is correct
- [ ] No conflicts with reserved keys
- [ ] Bindings work as expected
- [ ] No duplicate keys
- [ ] Appropriate scope (context)
- [ ] Documented if shared
- [ ] Tested in actual usage

## Examples by Use Case

### Development Workflow
```json
{
  "context": "Chat",
  "bindings": {
    "ctrl+e": "chat:externalEditor",
    "ctrl+k": "chat:clear",
    "ctrl+l": "chat:loadHistory"
  }
}
```

### Task Management
```json
{
  "context": "Task",
  "bindings": {
    "ctrl+n": "task:next",
    "ctrl+p": "task:previous",
    "ctrl+enter": "task:complete"
  }
}
```

### Navigation
```json
{
  "context": "Global",
  "bindings": {
    "ctrl+k ctrl+t": "app:toggleTodos",
    "ctrl+k ctrl+h": "app:help"
  }
}
```

## Best Practices Summary

1. **Always read existing file first** - Never assume it doesn't exist
2. **Merge with existing bindings** - Don't replace entire file
3. **Validate JSON syntax** - Ensure file is well-formed
4. **Check for conflicts** - Avoid reserved shortcuts
5. **Use appropriate contexts** - Choose the right scope
6. **Test bindings** - Verify they work as expected
7. **Document customizations** - Keep notes for reference
8. **Run doctor** - Validate configuration regularly

## Advanced Patterns

### Platform-Specific Bindings
```json
{
  "context": "Chat",
  "bindings": {
    "cmd+enter": "chat:submit"  // macOS
  }
}
```

### Mode-Specific Bindings
Some actions may only work in specific modes. Check documentation for requirements.

### Conditional Keybindings
Some keybindings may only work when certain features are enabled. Check feature requirements.

## Migration Guide

### From Default to Custom
1. Identify default bindings you want to change
2. Read existing keybindings file
3. Add custom bindings (unbinding defaults if needed)
4. Test new bindings
5. Remove unused default overrides

### Updating Keybindings
1. Read current keybindings
2. Identify changes needed
3. Update bindings (merge, don't replace)
4. Validate JSON syntax
5. Test changes

### Removing Customizations
1. Read current keybindings
2. Remove custom bindings
3. Restore defaults if needed
4. Validate file
5. Test default bindings
