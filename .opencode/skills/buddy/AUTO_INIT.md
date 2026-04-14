# Buddy Skill - Automatic Initialization

## 🎨 How It Works

The buddy skill automatically generates and displays a random buddy when the skill is loaded. No manual intervention required!

## 🚀 Automatic Loading

### When You Load the Buddy Skill

```bash
/buddy
```

**What happens automatically:**
1. ✅ A random buddy is generated
2. ✅ The buddy appears in your terminal
3. ✅ The buddy stays visible throughout the session
4. ✅ The buddy reacts to your activities

### Example Output

```
🎨 Loading Buddy Skill...

==================================================
   quack!
   (•o•)
   /|   |\
  (_|   |_)
    |   |
   /     \

Stats:
  Intelligence: ████████░░ 82
  Creativity:   ██████░░░░ 65
  Friendliness:  █████████░ 91
  Energy:       ███████░░░ 78
  Wisdom:       █████████░ 89

Rarity: RARE
Species: Duck

🎉 Your session buddy has arrived!
==================================================

✅ Buddy skill loaded successfully!
Your buddy will stay with you throughout this session.
```

## 🔧 Manual Initialization

If you need to manually initialize the buddy system:

### Using Node.js (All Platforms)

```bash
node .opencode/skills/buddy/init.js
```

### Using Shell Script (Unix/Linux/Mac)

```bash
bash .opencode/skills/buddy/init.sh
```

### Using Batch Script (Windows)

```bash
.opencode\skills\buddy\init.bat
```

## 📁 Initialization Files

The buddy skill includes several initialization files:

### 1. `init.js` (Main Initialization)
- **Purpose**: Main initialization script
- **Language**: JavaScript (Node.js)
- **Usage**: `node init.js`
- **Features**:
  - Generates random buddy
  - Displays ASCII art
  - Shows stats
  - Returns buddy object

### 2. `init.sh` (Shell Script)
- **Purpose**: Unix/Linux/Mac initialization
- **Language**: Bash
- **Usage**: `bash init.sh`
- **Features**:
  - Calls init.js
  - Displays status messages
  - Cross-platform compatible

### 3. `init.bat` (Batch Script)
- **Purpose**: Windows initialization
- **Language**: Batch
- **Usage**: `init.bat`
- **Features**:
  - Calls init.js
  - Displays status messages
  - Windows compatible

## 🎯 Integration with OpenCode

### Automatic Integration

The buddy skill integrates automatically with OpenCode's skill loading system:

```typescript
// When buddy skill is loaded, this runs automatically:
import { initializeBuddySkill } from './init.js'

// Initialize buddy
const buddy = initializeBuddySkill()

// Buddy is now visible and will stay with you
```

### Skill Loading Hook

The initialization can be hooked into the skill loading process:

```typescript
// In skill loader
import { SimpleBuddyGenerator } from './init.js'

function onSkillLoad(skillName) {
  if (skillName === 'buddy') {
    const generator = new SimpleBuddyGenerator();
    const buddy = generator.displayBuddy('Your session buddy has arrived!');
    return buddy;
  }
}
```

## 🎪 Random Generation

Each time the buddy skill is loaded, you get a **completely random buddy**:

### Random Features

- **Species**: duck, owl, cat, dog, rabbit, fox, bear, penguin (8 options)
- **Rarity**: common, uncommon, rare, epic, legendary (5 levels)
- **Expression**: normal, happy, excited, thinking, cool (5 options)
- **Accessory**: none, hat, glasses, bow, crown, bandana (6 options)
- **Stats**: intelligence, creativity, friendliness, energy, wisdom (random 1-100)
- **Shiny**: 1% chance for special effects

### Generation Example

```javascript
// Random buddy generation
const buddy = {
  species: 'duck',        // Random from 8 species
  rarity: 'rare',        // Random from 5 rarities
  expression: 'happy',   // Random from 5 expressions
  accessory: 'hat',      // Random from 6 accessories
  shiny: false,          // 1% chance
  stats: {
    intelligence: 82,    // Random 1-100
    creativity: 65,      // Random 1-100
    friendliness: 91,    // Random 1-100
    energy: 78,          // Random 1-100
    wisdom: 89           // Random 1-100
  }
}
```

## 🔍 How to Verify

### Check if Buddy is Initialized

```javascript
// After loading buddy skill
const generator = new SimpleBuddyGenerator();
const buddy = generator.getCurrentBuddy();

if (buddy) {
  console.log('Buddy is initialized!');
  console.log(`Species: ${buddy.species}`);
  console.log(`Rarity: ${buddy.rarity}`);
} else {
  console.log('Buddy is not initialized');
}
```

### Test Initialization

```bash
# Test initialization
node .opencode/skills/buddy/init.js

# Expected output:
# - Random buddy ASCII art
# - Stats display
# - Success message
```

## 🎨 Customization

While the buddy is randomly generated, you can still customize:

### Change Expression

```javascript
const generator = new SimpleBuddyGenerator();
const buddy = generator.getCurrentBuddy();

if (buddy) {
  buddy.expression = 'excited';
  // Re-display buddy with new expression
}
```

### Generate New Buddy

```javascript
const generator = new SimpleBuddyGenerator();
const newBuddy = generator.displayBuddy('New buddy arrived!');
```

## 🚀 Quick Start

### 1. Load the Buddy Skill

```bash
/buddy
```

**Result:** A random buddy appears automatically!

### 2. Verify Buddy is Visible

You should see:
- ASCII art of your buddy
- Stats display
- Success message

### 3. Enjoy Your Buddy

Your buddy will:
- Stay visible throughout the session
- React to your activities
- Respond to skill execution
- Update expressions based on context

## 🔧 Troubleshooting

### Buddy Not Appearing

**Issue**: Buddy doesn't appear when skill is loaded

**Solutions**:
1. Check that init.js exists: `ls .opencode/skills/buddy/init.js`
2. Verify Node.js is installed: `node --version`
3. Try manual initialization: `node .opencode/skills/buddy/init.js`
4. Check for error messages in console

### Initialization Script Not Running

**Issue**: init.js doesn't run automatically

**Solutions**:
1. Check file permissions: `ls -la .opencode/skills/buddy/init.js`
2. Make script executable: `chmod +x .opencode/skills/buddy/init.sh`
3. Try running manually: `node .opencode/skills/buddy/init.js`
4. Check skill loading configuration

### Random Generation Not Working

**Issue**: Same buddy appears every time

**Solutions**:
1. Check that random generation is enabled
2. Verify seed is different each time
3. Try manual initialization: `node .opencode/skills/buddy/init.js`
4. Check for caching issues

## 🎊 Enjoy Your Automatic Buddy!

Every time you load the buddy skill, a **random buddy is automatically generated and displayed**. No manual intervention required!

**Your buddy appears instantly and stays with you throughout the session!** 🎨✨

## 📚 Additional Resources

- **SKILL.md** - Complete skill documentation
- **INTEGRATION_GUIDE.md** - Integration guide
- **init.js** - Main initialization script
- **init.sh** - Shell initialization script
- **init.bat** - Batch initialization script

---

**Automatic initialization makes the buddy skill effortless to use!** 🚀✨
