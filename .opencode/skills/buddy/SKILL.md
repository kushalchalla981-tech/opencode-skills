---
name: buddy
description: "Generate and display live ASCII art companion avatars with unique species, appearances, and stats. Each buddy is randomly generated when the skill is loaded and stays visible throughout the session."
when_to_use: "Use when you want to see your companion avatar, generate a new buddy, or customize your companion's appearance and stats. The buddy will be displayed as ASCII art in your terminal."
argument_hint: "[action: show | generate | customize | stats | animate | help]"
allowed_tools:
  - Read
  - Write
  - Edit
  - Bash
context: inline
entrypoint: "node .opencode/skills/buddy/buddy-skill.js"
---

# Buddy Skill - Live ASCII Art Companion Avatars

## 🎨 Quick Start

**Load the buddy skill and a random buddy appears automatically!**

```bash
/buddy
```

**What happens:**
- ✅ A random buddy is generated instantly
- ✅ The buddy appears in your terminal
- ✅ The buddy stays visible throughout the session
- ✅ The buddy reacts to your activities

## Overview

The Buddy skill generates and displays **live ASCII art companion avatars** in your terminal! Each buddy is **randomly generated** when the skill is loaded and **stays visible throughout your entire session**, providing constant companionship and visual feedback.

## 🎨 What Makes This Special

**Unlike other buddy systems, this creates ACTUAL VISUAL BUDDIES that you can see:**
- ✅ **Live ASCII art rendering** in your terminal
- ✅ **Random buddy generation** - different buddy each time!
- ✅ **Session persistence** - buddy stays visible throughout session
- ✅ **Animated displays** with movement and expressions
- ✅ **Different species** with unique visual designs
- ✅ **Rarity-based visual effects** (shimmering, glowing, etc.)
- ✅ **Interactive responses** to your activities
- ✅ **Real-time display updates** as your buddy reacts

## 🚀 How It Works

### Automatic Session Integration

When the buddy skill is loaded:

1. **Random buddy generation** - A unique buddy is created just for you
2. **Instant display** - Your buddy appears in the terminal
3. **Session persistence** - Buddy stays visible throughout the session
4. **Interactive responses** - Buddy reacts to your activities
5. **Automatic cleanup** - Buddy resources are cleaned up on session end

### Random Generation System

Each time the buddy skill is loaded, you get a **completely random buddy**:

- **Random species** (duck, owl, cat, dog, rabbit, fox, bear, penguin)
- **Random rarity** (common, uncommon, rare, epic, legendary)
- **Random expression** (normal, happy, excited, thinking, cool)
- **Random accessories** (hat, glasses, bow, crown, bandana)
- **Random stats** (intelligence, creativity, friendliness, energy, wisdom)
- **1% shiny chance** for special rainbow effects!

### Session Persistence

Your buddy **stays with you** throughout the entire session:

- **Visible at all times** - Buddy remains displayed
- **Reacts to activities** - Updates based on what you're doing
- **Responds to skill execution** - Celebrates successes, helps with errors
- **Animated expressions** - Changes mood based on context
- **Automatic cleanup** - Resources freed when session ends

## Usage

### Automatic Loading (Default)

The buddy skill **automatically generates and displays** a random buddy when loaded:

```bash
# Load buddy skill - buddy appears automatically!
/buddy

# A random buddy is generated and displayed instantly!
# The buddy stays visible throughout the session
```

**What happens automatically:**
1. A random buddy is generated
2. The buddy appears in your terminal
3. The buddy stays visible throughout the session
4. The buddy reacts to your activities

### Manual Initialization

If you want to manually initialize the buddy system:

```bash
# Run initialization script
node .opencode/skills/buddy/init.js

# Or use shell script (Unix/Linux/Mac)
bash .opencode/skills/buddy/init.sh

# Or use batch script (Windows)
.opencode\skills\buddy\init.bat
```

### Manual Commands

```bash
# Show your current buddy
/buddy show

# Generate a new random buddy
/buddy generate

# Customize your buddy
/buddy customize

# View buddy stats
/buddy stats

# Animate your buddy
/buddy animate
```

### Integration with Skill Loading

The buddy system integrates seamlessly with OpenCode's skill loading:

```typescript
import { initializeBuddy, displayBuddy, generateNewBuddy } from './buddy-integration.js'

// Initialize buddy system
initializeBuddy()

// Display current buddy
displayBuddy()

// Generate new random buddy
const newBuddy = generateNewBuddy()
displayBuddy(newBuddy, 'New buddy arrived!')
```

### Session-Based Behavior

```bash
# Session starts
/buddy
# → Random buddy appears and stays visible

# During session
# → Buddy reacts to your activities
# → Buddy responds to skill execution
# → Buddy updates expressions based on context

# Session ends
# → Buddy resources are automatically cleaned up
```

## 🎭 Buddy Species (Visual Designs)

### Duck (Default)
```
   quack!
   (•o•)
   /|   |\
  (_|   |_)
    |   |
   /     \
```
**Characteristics**: Friendly, adaptable, classic

### Owl (Wise)
```
   hoot!
   (O,O)
  /)  )
  (  (_)
   |  |
  /  \
```
**Characteristics**: Intelligent, observant, thoughtful

### Cat (Independent)
```
   meow!
  /\_/\
 ( o.o )
  > ^ <
  |   |
 /   | \
```
**Characteristics**: Independent, creative, mysterious

### Dog (Loyal)
```
   woof!
  / \__
 (    @\___
 /         O
 /   (_____/
/_____/   U
```
**Characteristics**: Loyal, energetic, friendly

### Rabbit (Quick)
```
   hop!
    (\_/)
    ( •.•)
    >  <
   /   \
  (_)(_)
```
**Characteristics**: Quick, clever, energetic

### Fox (Clever)
```
   yip!
   |/\_/\
   ( ^.^ )
   c  (")
  /   | \
 (_)(_)
```
**Characteristics**: Clever, adaptable, cunning

### Bear (Strong)
```
   growl!
    __  __
   /  \/  \
  (  ^  ^ )
   C  ==  )
  /      \
 (_/    \_)
```
**Characteristics**: Strong, wise, protective

### Penguin (Social)
```
   waddle!
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)
```
**Characteristics**: Social, resilient, friendly

## 🌟 Rarity Visual Effects

### Common (50%)
- **Standard ASCII art**
- **Basic expressions**
- **No special effects**

### Uncommon (30%)
- **Enhanced ASCII art**
- **More detailed designs**
- **Subtle animations**

### Rare (15%)
- **Premium ASCII art**
- **Fancy accessories (hats, glasses)**
- **Smooth animations**

### Epic (4%)
- **Unique ASCII art**
- **Special visual effects**
- **Complex animations**

### Legendary (1%)
- **Ultimate ASCII art**
- **Shimmering/glowing effects**
- **Legendary accessories**
- **Maximum visual detail**

### Shiny (1% chance)
- **Rainbow/colored effects** (if terminal supports)
- **Sparkle animations**
- **Special visual flair**

## 🎬 Animation System

### Static Display
```bash
/buddy show
```
Shows your buddy in a static pose.

### Basic Animation
```bash
/buddy animate
```
Animates your buddy with:
- **Blinking** (eyes open/close)
- **Breathing** (subtle movement)
- **Expression changes** (happy, excited, thinking)

### Interactive Animation
```bash
/buddy animate --interactive
```
Responds to your actions:
- **Happy** when you complete tasks
- **Excited** when you start new work
- **Thinking** when you're debugging
- **Sleepy** during long sessions

## 🎨 Customization Options

### Species Selection
```bash
/buddy customize --species owl
```
Choose from: duck, owl, cat, dog, rabbit, fox, bear, penguin

### Expression Selection
```bash
/buddy customize --expression happy
```
Choose from: normal, happy, excited, sad, angry, thinking, sleepy, cool

### Accessories
```bash
/buddy customize --accessory hat
```
Choose from: none, hat, glasses, bow, crown, wizard-hat

### Color Themes (if terminal supports)
```bash
/buddy customize --theme rainbow
```
Choose from: default, rainbow, monochrome, warm, cool

## 📊 Stats System

Each buddy has unique stats that affect their behavior:

### Intelligence
- **High**: Better at debugging and analysis
- **Low**: More action-oriented, less analytical

### Creativity
- **High**: Innovative solutions, artistic approach
- **Low**: Practical, straightforward methods

### Friendliness
- **High**: Encouraging, supportive, social
- **Low**: Focused, direct, less chatty

### Energy
- **High**: Enthusiastic, persistent, active
- **Low**: Calm, steady, methodical

### Wisdom
- **High**: Experienced, insightful, strategic
- **Low**: Learning, experimental, curious

## 🎯 How It Works

### Deterministic Generation
```bash
# Your user ID → seed → unique buddy
# Same user ID = same buddy every time
# Different user ID = different buddy
```

### Visual Generation Process
1. **Generate seed** from your user ID
2. **Determine rarity** (common → legendary)
3. **Select species** based on rarity
4. **Choose expression** and accessories
5. **Generate stats** with rarity-based floors
6. **Create ASCII art** with appropriate detail level
7. **Apply visual effects** based on rarity
8. **Display in terminal** with animations

### Display Technology
- **ASCII art rendering** using terminal characters
- **ANSI color codes** for visual effects (if supported)
- **Animation loops** using frame updates
- **Terminal detection** for capability checking
- **Fallback modes** for basic terminals

## 🎪 Live Display Features

### Real-Time Updates
- **Session start**: Buddy appears and greets you
- **Task completion**: Buddy celebrates
- **Error occurrence**: Buddy shows concern
- **Long sessions**: Buddy gets sleepy
- **Achievements**: Buddy gets excited

### Interactive Responses
- **Success**: Buddy jumps and celebrates
- **Failure**: Buddy looks concerned and encourages
- **Thinking**: Buddy looks thoughtful
- **Waiting**: Buddy looks patient

### Environmental Awareness
- **Time of day**: Different expressions
- **Session length**: Energy levels change
- **Task complexity**: Buddy reacts appropriately
- **Your activity**: Buddy mirrors your engagement

## 🛠️ Technical Implementation

### Integration Architecture

The buddy system uses a three-layer architecture:

1. **Buddy Integration Layer** (`buddy-integration.ts`)
   - Random buddy generation
   - Session management
   - Display control
   - Animation system

2. **Skill Loader Hooks** (`buddy-skill-loader.ts`)
   - Skill load hooks
   - Activity monitoring
   - Session lifecycle
   - Event handling

3. **Demonstration Layer** (`buddy-demo.js`)
   - Usage examples
   - Integration testing
   - Feature demonstration

### Random Generation Algorithm

```typescript
// Random buddy generation
function generateRandomBuddy(): Buddy {
  const species = randomChoice(['duck', 'owl', 'cat', 'dog', 'rabbit', 'fox', 'bear', 'penguin'])
  const rarity = rollWeightedRarity() // 50% common, 30% uncommon, 15% rare, 4% epic, 1% legendary
  const expression = randomChoice(['normal', 'happy', 'excited', 'thinking', 'cool'])
  const accessory = randomChoice(['none', 'hat', 'glasses', 'bow', 'crown', 'bandana'])
  const shiny = Math.random() < 0.01 // 1% shiny chance

  return {
    species,
    rarity,
    expression,
    accessory,
    shiny,
    stats: generateRandomStats(rarity)
  }
}
```

### Session Persistence

```typescript
// Buddy stays visible throughout session
class BuddyIntegration {
  private currentBuddy: Buddy
  private display: BuddyDisplay
  private sessionStartTime: number

  initializeForSkillLoad(): void {
    // Generate random buddy
    this.currentBuddy = this.generateRandomBuddy()

    // Display buddy
    this.displayBuddy(this.currentBuddy, 'Your session buddy has arrived!')

    // Start animation
    this.startAnimation(this.currentBuddy)
  }

  // Buddy stays visible until session ends
  cleanup(): void {
    this.stopAnimation()
    this.hideBuddy()
  }
}
```

### Activity Monitoring

```typescript
// Buddy responds to user activities
function onUserActivity(activity: string): void {
  const currentBuddy = getCurrentBuddy()

  // Update expression based on activity
  let newExpression = currentBuddy.expression

  if (activity.includes('error')) {
    newExpression = 'thinking'
  } else if (activity.includes('success')) {
    newExpression = 'excited'
  } else if (activity.includes('help')) {
    newExpression = 'happy'
  }

  // Update buddy display
  updateExpression(newExpression)
  displayBuddy(currentBuddy, `Responding to: ${activity}`)
}
```

## 🎨 Visual Examples

### Common Duck
```
   quack!
   (•o•)
   /|   |\
  (_|   |_)
    |   |
   /     \
```

### Rare Owl with Hat
```
   hoot!
   (O,O)
  /)  )  [hat]
  (  (_)
   |  |
  /  \
```

### Legendary Fox with Crown
```
   yip!
   |/\_/\
   ( ^.^ ) 👑
   c  (")
  /   | \
 (_)(_)
```

### Shiny Cat (Rainbow Effect)
```
   meow!
  /\_/\
 ( ✨✨ )
  > ^ <
  |   |
 /   | \
```

## 🎮 Advanced Features

### Buddy Evolution
As you use OpenCode, your buddy can "level up":
- **Visual upgrades**: More detailed ASCII art
- **New accessories**: Unlock hats, glasses, etc.
- **Enhanced animations**: Smoother, more complex
- **Special effects**: Shimmering, glowing, etc.

### Buddy Interactions
- **Pet your buddy**: `/buddy pet` - makes buddy happy
- **Feed your buddy**: `/buddy feed` - increases energy
- **Play with buddy**: `/buddy play` - fun animations
- **Talk to buddy**: `/buddy talk` - buddy responds

### Buddy Moods
Your buddy's mood changes based on:
- **Session progress**: Happy when making progress
- **Errors**: Concerned when things go wrong
- **Time of day**: Different expressions
- **Your activity**: Mirrors your engagement level

## 🎯 Best Practices

### Choosing Your Buddy
```bash
# Generate until you get one you like
/buddy generate

# Check stats before committing
/buddy stats

# Customize to your preferences
/buddy customize
```

### Display Optimization
```bash
# Use appropriate terminal size
# Minimum 80x24 recommended

# Enable colors if available
# Check terminal capabilities first

# Use animations sparingly
# Can be distracting during work
```

### Performance Tips
1. **Terminal size**: Ensure adequate space for display
2. **Animation frequency**: Don't over-animate during work
3. **Color support**: Check if your terminal supports colors
4. **Fallback modes**: Works on basic terminals too

## 🔧 Troubleshooting

### Buddy Not Displaying
**Issue**: ASCII art not showing correctly

**Solutions**:
- Check terminal size (minimum 80x24)
- Verify terminal supports ASCII characters
- Try basic terminal mode
- Check for character encoding issues

### Animation Not Working
**Issue**: Buddy not animating

**Solutions**:
- Check terminal refresh rate
- Verify animation is enabled
- Try static display mode
- Check system performance

### Colors Not Showing
**Issue**: No colors in buddy display

**Solutions**:
- Check terminal color support
- Verify color codes are supported
- Try monochrome theme
- Check terminal settings

## 🎨 Customization Examples

### Create a Wise Owl
```bash
/buddy generate
/buddy customize --species owl
/buddy customize --expression wise
/buddy customize --accessory glasses
```

### Create a Happy Dog
```bash
/buddy generate
/buddy customize --species dog
/buddy customize --expression happy
/buddy customize --accessory bandana
```

### Create a Cool Cat
```bash
/buddy generate
/buddy customize --species cat
/buddy customize --expression cool
/buddy customize --accessory sunglasses
```

## 🎪 Live Display Examples

### Session Start
```
   quack!
   (•o•)
   /|   |\
  (_|   |_)
    |   |
   /     \

Hello! I'm your buddy! Ready to code? 🚀
```

### Task Completion
```
   quack! 🎉
   (•o•) ★
   /|   |\
  (_|   |_)
    |   |
   /     \

Great job! You did it! 🌟
```

### Error Encountered
```
   quack! 😟
   (•o•) ?
   /|   |\
  (_|   |_)
    |   |
   /     \

Don't worry, we'll fix it together! 💪
```

## 🎯 Integration with OpenCode

### Automatic Display
- **Session start**: Buddy appears automatically when skill is loaded
- **Background monitoring**: Buddy reacts to events throughout session
- **Status updates**: Buddy shows current state and reactions
- **Achievement system**: Buddy celebrates milestones

### Skill Loading Integration

The buddy system hooks into OpenCode's skill loading:

```typescript
import { integrateBuddyWithSkillLoader } from './buddy-skill-loader.js'

// Integrate buddy with skill loader
const hooks = integrateBuddyWithSkillLoader()

// Hooks are automatically called:
// - beforeSkillLoad: Initialize buddy when buddy skill loads
// - afterSkillLoad: Display buddy and add metadata
// - onSkillUnload: Hide buddy when skill unloads
// - onSessionStart: Initialize buddy system
// - onSessionEnd: Cleanup buddy resources
// - onUserActivity: Update buddy based on activities
// - onSkillExecution: React to skill execution status
```

### Activity-Based Responses

Your buddy responds to your activities:

```typescript
// User asks for help
onUserActivity('help with loop skill')
// → Buddy expression changes to 'happy'
// → Buddy displays: "Happy to help!"

// User completes task successfully
onUserActivity('batch processing completed')
// → Buddy expression changes to 'excited'
// → Buddy displays: "Great job!"

// User encounters error
onUserActivity('error in debug skill')
// → Buddy expression changes to 'thinking'
// → Buddy displays: "Let's figure it out!"
```

### Skill Execution Reactions

Buddy reacts to skill execution:

```typescript
// Skill starts running
onSkillExecution('loop', 'running')
// → Buddy looks excited: "loop is running..."

// Skill completes successfully
onSkillExecution('loop', 'success')
// → Buddy celebrates: "loop completed successfully!"

// Skill encounters error
onSkillExecution('debug', 'error')
// → Buddy looks concerned: "debug encountered an issue..."
```

### Skill Integration
- **With loop skill**: Buddy shows schedule status
- **With batch skill**: Buddy tracks parallel work
- **With debug skill**: Buddy helps troubleshoot
- **With remember skill**: Buddy organizes memory

## 🎨 Future Enhancements

### Planned Features
- **More species**: Additional buddy types
- **More accessories**: Hats, glasses, clothing
- **More animations**: Complex movement patterns
- **Sound effects**: Audio feedback (if supported)
- **Image export**: Save buddy as image file

### Experimental Features
- **3D ASCII art**: Three-dimensional buddy display
- **Buddy interactions**: Pet, feed, play commands
- **Buddy evolution**: Level up system
- **Buddy marketplace**: Share and trade buddies

## 🎊 Enjoy Your Live Buddy!

Your ASCII art buddy is now **live and visible** in your terminal! Watch them react to your work, celebrate your successes, and keep you company during long coding sessions.

**The buddy is real, interactive, and uniquely yours - and a new one appears each time!** 🎨✨

## 📁 Integration Files

The buddy system includes several integration files:

### Core Integration
- **`buddy-integration.ts`** - Main buddy integration system
  - Random buddy generation
  - Session management
  - Display control
  - Animation system

### Skill Loading Hooks
- **`buddy-skill-loader.ts`** - Skill loader integration
  - Before/after skill load hooks
  - Activity monitoring
  - Session lifecycle management
  - Event handling

### Demonstration
- **`buddy-demo.js`** - Complete demonstration
  - Shows all features
  - Integration examples
  - Usage patterns

### Original Generator
- **`buddy-generator.js`** - Original buddy generator
  - Procedural generation
  - ASCII art templates
  - Rarity system

## 🚀 Quick Start

### 1. Load the Buddy Skill

```bash
/buddy
```

**Result:** A random buddy appears and stays visible throughout your session!

### 2. Watch Your Buddy React

Your buddy will automatically:
- React to your activities
- Respond to skill execution
- Update expressions based on context
- Stay visible throughout the session

### 3. Generate New Buddy (Optional)

```bash
/buddy generate
```

**Result:** A new random buddy appears!

### 4. Enjoy Session Persistence

Your buddy stays with you until:
- You explicitly hide them
- The session ends
- You generate a new buddy

## 🎯 Key Features

### ✅ Random Generation
- Different buddy every time
- 8 species, 5 rarity levels
- Random expressions and accessories
- 1% shiny chance

### ✅ Session Persistence
- Stays visible throughout session
- Reacts to activities
- Responds to skill execution
- Automatic cleanup on session end

### ✅ Interactive Responses
- Activity-based expression changes
- Skill execution reactions
- Context-aware updates
- Real-time display updates

### ✅ Animation System
- Expression animations
- Smooth transitions
- Configurable timing
- Start/stop control

## 🎨 Customization

While the buddy is randomly generated, you can still customize:

```bash
# Change expression
/buddy customize --expression happy

# Add accessory
/buddy customize --accessory hat

# View stats
/buddy stats

# Animate
/buddy animate
```

## 🔧 Advanced Usage

### Programmatic Integration

```typescript
import {
  initializeBuddy,
  displayBuddy,
  generateNewBuddy,
  updateBuddyExpression
} from './buddy-integration.js'

// Initialize buddy system
initializeBuddy()

// Generate new random buddy
const newBuddy = generateNewBuddy()
displayBuddy(newBuddy, 'New buddy arrived!')

// Update expression based on context
updateBuddyExpression('excited')
```

### Skill Loader Integration

```typescript
import {
  integrateBuddyWithSkillLoader,
  initializeBuddySystem,
  shutdownBuddySystem
} from './buddy-skill-loader.js'

// Integrate with skill loader
const hooks = integrateBuddyWithSkillLoader()

// Initialize system
initializeBuddySystem()

// System automatically handles:
// - Skill loading
// - Activity monitoring
// - Session lifecycle

// Shutdown when done
shutdownBuddySystem()
```

## 🎪 Live Display Examples

### Session Start
```
🎨 Loading buddy skill...
✅ Buddy initialized and displayed!

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
Session Time: 0s

🎉 Your session buddy has arrived!
```

### Activity Response
```
User activity: help with loop skill
😊 Buddy is happy to help!
✅ Buddy expression updated to: happy

   quack! 😊
   (•o•)
   /|   |\
  (_|   |_)
    |   |
   /     \

Responding to: help with loop skill
```

### Skill Execution Success
```
Executing skill: loop
Status: success
🎉 Buddy celebrates your success!
✅ Buddy expression updated to: excited

   quack! 🎉
   (•o•)  ★
   /|   |\
  (_|   |_)
    |   |
   /     \

🎉 loop completed successfully!
```

## 🎊 Enjoy Your Random Session Buddies!

Every time you load the buddy skill, you get a **new random buddy** that stays with you throughout your session. Watch them react to your work, celebrate your successes, and keep you company during long coding sessions.

**Each buddy is unique, random, and ready to accompany you!** 🎨✨
