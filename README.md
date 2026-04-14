# OpenCode Skills Collection

A comprehensive collection of production-ready skills for OpenCode, extracted from Claude Code's internal architecture and adapted for the OpenCode ecosystem.

## 🚀 Overview

This repository contains 10 high-quality, fully-documented skills that extend OpenCode's capabilities. Each skill is production-ready, thoroughly tested, and follows OpenCode's skill conventions.

## 📦 Available Skills

### 1. **loop** - Recurring Task Scheduling
Schedule recurring tasks using cron expressions. Perfect for automated monitoring, periodic checks, and repeated tasks.

**Usage:** `/loop [interval] <prompt>`  
**Features:** Cron scheduling, interval parsing, task management, immediate execution

### 2. **batch** - Parallel Work Orchestration  
Research and plan large-scale changes, then execute them in parallel across isolated worktree agents that each open a PR.

**Usage:** `/batch <instruction>`  
**Features:** Parallel orchestration, git worktrees, PR creation, progress tracking

### 3. **skillify** - Convert Sessions to Reusable Skills
Capture repeatable processes from your sessions and convert them into reusable skills with proper documentation.

**Usage:** `/skillify [description]`  
**Features:** Session analysis, skill generation, workflow capture, interview process

### 4. **remember** - Memory Management and Organization
Review auto-memory entries and propose promotions to CLAUDE.md, CLAUDE.local.md, or shared memory.

**Usage:** `/remember [focus]`  
**Features:** Multi-layer memory management, cleanup detection, organization

### 5. **update-config** - Configuration Management
Configure OpenCode via settings.json with hooks, permissions, environment variables, and automated behaviors.

**Usage:** `/update-config <change>`  
**Features:** Hooks configuration, permissions management, environment variables

### 6. **debug** - Session Debugging and Troubleshooting
Debug your current OpenCode session by reading the session debug log with comprehensive error analysis.

**Usage:** `/debug [issue]`  
**Features:** Log analysis, error diagnosis, performance profiling, stack traces

### 7. **keybindings-help** - Keyboard Shortcut Customization
Customize keyboard shortcuts by modifying keybindings.json with comprehensive reference and examples.

**Usage:** `/keybindings-help <change>`  
**Features:** Custom shortcuts, chord bindings, validation, reference documentation

### 8. **buddy** - Procedurally Generated Companion Avatars
Generate and manage procedurally generated companion avatars with unique species, appearances, and stats.

**Usage:** `/buddy [action]`  
**Features:** Procedural generation, rarity system, stats, customization

### 9. **session-memory** - Automatic Session Summarization
Manage automatic session summarization and memory extraction with configurable thresholds.

**Usage:** `/session-memory [action]`  
**Features:** Automatic summarization, threshold management, memory extraction

### 10. **schedule-remote-agents** - Cloud-Based Agent Scheduling
Create, update, list, or run scheduled remote agents that execute on a cron schedule in cloud infrastructure.

**Usage:** `/schedule-remote-agents [action]`  
**Features:** Cloud agents, MCP integration, cron scheduling, remote execution

## 📥 Installation

### Option 1: Clone Repository
```bash
git clone https://github.com/kushalchalla981-tech/opencode-skills.git
cd opencode-skills
```

### Option 2: Copy Individual Skills
Each skill is self-contained in `.opencode/skills/<skill-name>/SKILL.md`. Copy the entire skill directory to your OpenCode skills directory.

## 🔧 How to Load Skills

### Automatic Loading
OpenCode automatically loads skills from:
- **Project skills:** `.claude/skills/` (committed to git)
- **Personal skills:** `~/.claude/skills/` (your home directory)

### Manual Installation
1. Copy the skill directory to your OpenCode skills location:
   ```bash
   # For project-specific skills
   cp -r .opencode/skills/<skill-name> .claude/skills/
   
   # For personal skills
   cp -r .opencode/skills/<skill-name> ~/.claude/skills/
   ```

2. The skill will be automatically loaded and available via `/<skill-name>`

### Verification
Test that the skill is loaded:
```bash
# List available skills
/skills

# Test a specific skill
/<skill-name> --help
```

## 📖 Skill Documentation

Each skill includes comprehensive documentation:
- **Usage examples** with real-world scenarios
- **Best practices** for optimal use
- **Troubleshooting** common issues
- **Integration notes** with other skills
- **Advanced patterns** and use cases

## 🎯 Use Cases

### Development Workflow
- **loop**: Schedule recurring tests and monitoring
- **batch**: Orchestrate large-scale refactors
- **skillify**: Document and share workflows
- **debug**: Troubleshoot complex issues

### Configuration Management
- **update-config**: Set up automated behaviors
- **keybindings-help**: Customize shortcuts
- **remember**: Organize project knowledge

### Advanced Features
- **schedule-remote-agents**: Cloud-based automation
- **session-memory**: Automatic context management
- **buddy**: Personalized companion avatars

## 🏗️ Architecture

These skills are based on Claude Code's internal architecture patterns:
- **Tool System**: Input/output schemas with validation
- **Permission System**: Multi-layer permission checks
- **State Management**: Immutable updates with listeners
- **Agent System**: Subagent spawning with isolation
- **Progress Streaming**: Async generators for long operations

## 🤝 Contributing

Contributions are welcome! Please:
1. Follow OpenCode skill conventions
2. Include comprehensive documentation
3. Add usage examples and best practices
4. Test thoroughly before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenCode**: For the amazing AI-powered development platform
- **Claude Code**: For the architectural patterns and inspiration
- **Community**: For feedback and improvements

## 📞 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Check skill documentation for troubleshooting
- Review OpenCode's official documentation

## 🏷️ Tags

- **OpenCode**: @opencode
- **AI Development**: #ai #development #automation
- **Productivity**: #productivity #workflow #efficiency
- **Open Source**: #opensource #contribution

---

**Made with ❤️ for the OpenCode community**

*Note: These skills are adapted from Claude Code's internal architecture and optimized for OpenCode's ecosystem.*
