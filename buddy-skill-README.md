# 🎭 Buddy Skill - Procedurally Generated Companion Avatars

<div align="center">

![Buddy Skill](https://img.shields.io/badge/Skill-Buddy-blue)
![Version](https://img.shields.io/badge/Version-1.0.0-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![OpenCode](https://img.shields.io/badge/OpenCode-Compatible-orange)

**Generate unique, procedurally generated companion avatars with species, appearances, and stats**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Examples](#-examples) • [Advanced](#-advanced) • [Best Practices](#-best-practices) • [Troubleshooting](#-troubleshooting)

</div>

---

## 🌟 Features

### Core Capabilities

- ✨ **Procedural Generation**: Create unique avatars deterministically from user ID
- 🎨 **Visual Variety**: Multiple species with distinct appearances and characteristics
- 📊 **Rarity System**: Different rarity levels (Common, Uncommon, Rare, Epic, Legendary)
- 🎯 **Customizable Attributes**: Modify appearance, stats, and personality traits
- 🔄 **ASCII Art Display**: Beautiful terminal-friendly ASCII art representations
- 💾 **Persistent Storage**: Save and load your buddy configurations
- 🎮 **Interactive Experience**: Engage with your digital companion

### Technical Highlights

- 🚀 **Zero Dependencies**: Pure JavaScript implementation
- ⚡ **Instant Generation**: No API calls or external services
- 🔒 **Deterministic**: Same user ID always produces same buddy
- 🎨 **High-Quality ASCII**: Carefully crafted character art
- 📱 **Terminal Optimized**: Perfect for CLI environments

---

## 📦 Installation

### Prerequisites

- OpenCode CLI installed
- Basic familiarity with terminal commands
- Git repository initialized

### Setup Steps

1. **Navigate to your OpenCode skills directory**
   ```bash
   cd ~/.opencode/skills/
   ```

2. **Create the buddy skill directory**
   ```bash
   mkdir buddy
   cd buddy
   ```

3. **Create the skill file**
   ```bash
   touch SKILL.md
   ```

4. **Add the skill content** (see Usage section below)

5. **Verify installation**
   ```bash
   # In OpenCode, run:
   /skill buddy
   ```

### Quick Start

```bash
# Generate your first buddy
/skill buddy

# Customize your buddy
/skill buddy --species dragon --rarity legendary

# Save your buddy configuration
/skill buddy --save my-awesome-buddy
```

---

## 🚀 Usage

### Basic Usage

#### Generate Your Default Buddy

```bash
/skill buddy
```

This creates a unique buddy based on your user ID with:
- Random species selection
- Appropriate rarity level
- Generated appearance traits
- Base statistics
- ASCII art representation

#### View Your Current Buddy

```bash
/skill buddy --show
```

Displays your current buddy with all details and ASCII art.

### Advanced Usage

#### Custom Species Selection

```bash
/skill buddy --species dragon
```

Available species:
- 🐉 **Dragon** - Majestic, powerful creatures
- 🦊 **Fox** - Clever, agile companions
- 🐱 **Cat** - Independent, graceful friends
- 🐺 **Wolf** - Loyal, pack-oriented
- 🦉 **Owl** - Wise, observant guides
- 🐼 **Panda** - Gentle, peaceful beings
- 🦄 **Unicorn** - Magical, rare entities
- 🐙 **Octopus** - Intelligent, adaptable
- 🦋 **Butterfly** - Delicate, transformative
- 🐢 **Turtle** - Wise, patient companions

#### Rarity Control

```bash
/skill buddy --rarity legendary
```

Rarity levels affect:
- Visual complexity
- Stat ranges
- Special abilities
- ASCII art detail

Rarity tiers:
- **Common** (50% chance) - Basic appearance, standard stats
- **Uncommon** (30% chance) - Enhanced details, improved stats
- **Rare** (15% chance) - Unique features, superior stats
- **Epic** (4% chance) - Exceptional design, amazing stats
- **Legendary** (1% chance) - Ultimate form, maximum stats

#### Custom Attributes

```bash
/skill buddy --name "Sparky" --color gold --size large
```

Customizable attributes:
- `--name` - Custom name for your buddy
- `--color` - Primary color scheme
- `--size` - Physical size (small, medium, large)
- `--personality` - Personality traits
- `--accessory` - Special items or decorations

#### Save and Load

```bash
# Save your buddy
/skill buddy --save my-dragon

# Load a saved buddy
/skill buddy --load my-dragon

# List saved buddies
/skill buddy --list

# Delete a saved buddy
/skill buddy --delete my-dragon
```

#### Interactive Mode

```bash
/skill buddy --interactive
```

Enter interactive mode to:
- Modify attributes in real-time
- Preview changes instantly
- Save multiple configurations
- Compare different buddies

---

## 📚 Examples

### Example 1: First-Time Buddy Generation

```bash
$ /skill buddy

🎭 Generating your buddy...

🐉 Species: Dragon
⭐ Rarity: Rare
📊 Stats:
   Strength: ████████░░ 80%
   Agility:  ██████░░░░ 60%
   Intelligence: ██████████ 100%
   Charisma: ████████░░ 80%

🎨 Appearance:
   Color: Crimson
   Size: Large
   Features: Spiked scales, glowing eyes
   Accessory: Golden amulet

✨ Your buddy "Ember" is ready!
```

### Example 2: Custom Legendary Dragon

```bash
$ /skill buddy --species dragon --rarity legendary --name "Draco" --color purple

🎭 Generating legendary dragon buddy...

🐉 Species: Dragon
⭐ Rarity: Legendary
📊 Stats:
   Strength: ██████████ 100%
   Agility:  █████████░ 90%
   Intelligence: ██████████ 100%
   Charisma: ██████████ 100%

🎨 Appearance:
   Color: Purple
   Size: Massive
   Features: Iridescent scales, multiple horns, aura
   Accessory: Crown of wisdom

✨ Your legendary buddy "Draco" is ready!
```

### Example 3: Saving and Loading Configurations

```bash
# Create and save a fox buddy
$ /skill buddy --species fox --name "Swift" --save swift-fox

✨ Buddy "Swift" saved as "swift-fox"

# Create and save a cat buddy
$ /skill buddy --species cat --name "Whiskers" --save whiskers-cat

✨ Buddy "Whiskers" saved as "whiskers-cat"

# List all saved buddies
$ /skill buddy --list

📋 Saved Buddies:
   1. swift-fox (Fox, Uncommon)
   2. whiskers-cat (Cat, Common)

# Load a specific buddy
$ /skill buddy --load swift-fox

🦊 Loading buddy "Swift"...

🐉 Species: Fox
⭐ Rarity: Uncommon
📊 Stats:
   Strength: █████░░░░░ 40%
   Agility:  ██████████ 100%
   Intelligence: ████████░░ 80%
   Charisma: ███████░░░ 70%

✨ Buddy "Swift" loaded!
```

### Example 4: Interactive Customization

```bash
$ /skill buddy --interactive

🎭 Interactive Buddy Creator

Current buddy: Dragon (Rare)

[1] Change species
[2] Modify rarity
[3] Customize appearance
[4] Adjust stats
[5] Save configuration
[6] Preview ASCII art
[7] Exit

Select option: 1

Available species:
[1] Dragon  [2] Fox  [3] Cat  [4] Wolf  [5] Owl
[6] Panda   [7] Unicorn  [8] Octopus  [9] Butterfly  [10] Turtle

Select species: 7

🦄 Species changed to Unicorn

Current buddy: Unicorn (Rare)

[1] Change species
[2] Modify rarity
[3] Customize appearance
[4] Adjust stats
[5] Save configuration
[6] Preview ASCII art
[7] Exit

Select option: 6

       ,
      / \
     /   \
    /  _  \
   |  (_)  |
   |       |
   |  | |  |
   |  |_|  |
    \     /
     \   /
      \ /
       v

✨ Your unicorn buddy!
```

---

## 🔧 Advanced Usage

### Procedural Generation Algorithm

The buddy generation uses a deterministic algorithm based on your user ID:

```javascript
function generateBuddy(userId) {
  // Hash user ID for deterministic results
  const hash = hashString(userId);
  
  // Select species based on hash
  const speciesIndex = hash % speciesList.length;
  const species = speciesList[speciesIndex];
  
  // Determine rarity with weighted distribution
  const rarityRoll = (hash >> 8) % 100;
  const rarity = calculateRarity(rarityRoll);
  
  // Generate attributes
  const attributes = {
    color: colorPalette[hash % colorPalette.length],
    size: sizeOptions[hash % sizeOptions.length],
    features: selectFeatures(hash, species),
    stats: generateStats(hash, rarity)
  };
  
  return { species, rarity, ...attributes };
}
```

### Custom Species Creation

Create your own species by extending the species definition:

```javascript
const customSpecies = {
  name: "Phoenix",
  rarity: "Epic",
  baseStats: { strength: 70, agility: 90, intelligence: 85, charisma: 95 },
  features: ["flaming wings", "golden feathers", "glowing aura"],
  asciiArt: `
    \\   /
     \\ /
      X
     / \\
    /   \\
   ~~~~~~~
  `
};
```

### Stat Modification

Adjust buddy stats for specific use cases:

```bash
# Create a combat-focused buddy
/skill buddy --species wolf --stats strength:100,agility:90

# Create an intelligence-focused buddy
/skill buddy --species owl --stats intelligence:100,charisma:90

# Create a balanced buddy
/skill buddy --species panda --stats strength:70,agility:70,intelligence:70,charisma:70
```

### Batch Generation

Generate multiple buddies at once:

```bash
# Generate 5 random buddies
/skill buddy --batch 5

# Generate specific species
/skill buddy --batch 3 --species dragon

# Generate across all rarities
/skill buddy --batch 10 --rarity all
```

### Integration with Other Skills

Combine buddy with other OpenCode skills:

```bash
# Generate buddy and remember it
/skill buddy && /skill remember --tag "my-buddy"

# Generate buddy for specific context
/skill buddy --species owl && /skill loop --cron "0 9 * * *" --command "/skill buddy --show"

# Share buddy configuration
/skill buddy --export buddy-config.json
```

---

## 🎯 Best Practices

### Design Principles

#### 1. **Visual Hierarchy**
- Use size and positioning to guide attention
- Highlight important information with emojis
- Group related attributes together

#### 2. **Color Psychology**
- Match colors to species characteristics
- Use rarity-appropriate color schemes
- Ensure good contrast for readability

#### 3. **Progressive Disclosure**
- Show basic info first, details on demand
- Use interactive mode for complex customization
- Provide quick actions for common tasks

#### 4. **Accessibility**
- Use clear, descriptive text
- Provide alternative text for ASCII art
- Support keyboard navigation

#### 5. **User Delight**
- Add personality to responses
- Include celebratory messages for achievements
- Create memorable moments

### Usage Guidelines

#### Choosing the Right Species

| Use Case | Recommended Species | Why |
|----------|-------------------|-----|
| Coding companion | Owl | Wisdom, observation |
| Creative projects | Butterfly | Transformation, beauty |
| Problem-solving | Fox | Cleverness, adaptability |
| Team collaboration | Wolf | Loyalty, pack mentality |
| Learning | Panda | Patience, gentleness |
| Innovation | Unicorn | Magic, rarity |
| Complex tasks | Octopus | Intelligence, versatility |
| Quick tasks | Cat | Independence, agility |
| Leadership | Dragon | Power, majesty |
| Long-term projects | Turtle | Wisdom, patience |

#### Rarity Selection Strategy

- **Common**: Daily use, casual interactions
- **Uncommon**: Regular projects, consistent companions
- **Rare**: Important tasks, special occasions
- **Epic**: Major milestones, achievements
- **Legendary**: Life goals, ultimate aspirations

#### Attribute Balancing

```bash
# Balanced approach (recommended for most users)
/skill buddy --stats strength:75,agility:75,intelligence:75,charisma:75

# Specialized approach (for specific needs)
/skill buddy --stats strength:100,agility:50,intelligence:50,charisma:50

# Growth-oriented (room for improvement)
/skill buddy --stats strength:60,agility:60,intelligence:60,charisma:60
```

### Performance Optimization

#### Cache Management

```bash
# Clear buddy cache
/skill buddy --clear-cache

# Pre-generate common buddies
/skill buddy --preload dragon,fox,owl

# Optimize ASCII art rendering
/skill buddy --optimize-ascii
```

#### Memory Efficiency

- Save only essential configurations
- Use descriptive names for easy identification
- Regularly clean up unused buddies
- Export important configurations

---

## 🛠️ Troubleshooting

### Common Issues

#### Issue: Buddy generation fails

**Symptoms:**
- Error message during generation
- No ASCII art displayed
- Incomplete buddy information

**Solutions:**
```bash
# Check skill installation
/skill buddy --version

# Reset buddy configuration
/skill buddy --reset

# Verify user ID
/skill buddy --check-user-id

# Reinstall skill
rm -rf ~/.opencode/skills/buddy
# Reinstall from source
```

#### Issue: ASCII art displays incorrectly

**Symptoms:**
- Misaligned characters
- Broken lines
- Garbled output

**Solutions:**
```bash
# Adjust terminal width
/skill buddy --terminal-width 80

# Use simple ASCII mode
/skill buddy --simple-ascii

# Check terminal compatibility
/skill buddy --test-terminal

# Force monospace font
/skill buddy --force-monospace
```

#### Issue: Saved buddies not loading

**Symptoms:**
- "Buddy not found" error
- Corrupted configuration
- Missing attributes

**Solutions:**
```bash
# List all saved buddies
/skill buddy --list

# Verify configuration file
/skill buddy --verify-config

# Repair corrupted saves
/skill buddy --repair-saves

# Export and reimport
/skill buddy --export-all
/skill buddy --import-all
```

#### Issue: Stats not applying correctly

**Symptoms:**
- Stats showing default values
- Incorrect stat distribution
- Stats exceeding maximum

**Solutions:**
```bash
# Validate stat values
/skill buddy --validate-stats

# Reset to base stats
/skill buddy --reset-stats

# Check stat caps
/skill buddy --stat-caps

# Recalculate stats
/skill buddy --recalculate-stats
```

### Debug Mode

Enable detailed logging for troubleshooting:

```bash
# Enable debug mode
/skill buddy --debug

# Generate with debug output
/skill buddy --debug

# View debug logs
/skill buddy --show-logs

# Export debug report
/skill buddy --debug-report
```

### Getting Help

```bash
# Show help information
/skill buddy --help

# Show examples
/skill buddy --examples

# Show version info
/skill buddy --version

# Report an issue
/skill buddy --report-issue
```

---

## 📖 Additional Resources

### Documentation

- [OpenCode Skills Documentation](https://opencode.ai/docs/skills)
- [ASCII Art Best Practices](https://asciiart.eu/)
- [Procedural Generation Guide](https://pcgbook.com/)

### Community

- [OpenCode Discord](https://discord.gg/opencode)
- [Skill Showcase Forum](https://forum.opencode.ai/skills)
- [Buddy Gallery](https://gallery.opencode.ai/buddies)

### Tutorials

- [Creating Custom Species](https://tutorial.opencode.ai/custom-species)
- [Advanced ASCII Art](https://tutorial.opencode.ai/ascii-art)
- [Buddy Integration Guide](https://tutorial.opencode.ai/buddy-integration)

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
3. **Add your species or features**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation
- Include examples
- Ensure accessibility

### Feature Requests

Have an idea for improving the buddy skill?

- Open an issue on GitHub
- Describe the feature
- Provide use cases
- Include mockups if applicable

---

## 📄 License

This skill is part of the OpenCode project and follows the same license terms.

---

<div align="center">

**📧 For review, complaints, improvements, or any other feedback:**

**kushalchalla981@gmail.com**

[⬆ Back to Top](#-buddy-skill---procedurally-generated-companion-avatars)

</div>