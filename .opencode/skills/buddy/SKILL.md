---
name: buddy
description: "Generate and display live ASCII art companion avatars with unique species, appearances, and stats. Each buddy is deterministically generated from your user ID with rarity levels and customizable attributes."
when_to_use: "Use when you want to see your companion avatar, generate a new buddy, or customize your companion's appearance and stats. The buddy will be displayed as ASCII art in your terminal."
argument_hint: "[action: show | generate | customize | stats | animate]"
allowed_tools:
  - Read
  - Write
  - Edit
  - Bash
context: inline
---

# Buddy Skill - Live ASCII Art Companion Avatars

## Overview

The Buddy skill generates and displays **live ASCII art companion avatars** in your terminal! Each buddy is uniquely created from your user ID with deterministic generation, ensuring consistency across sessions while providing variety and personality.

## 🎨 What Makes This Special

**Unlike other buddy systems, this creates ACTUAL VISUAL BUDDIES that you can see:**
- ✅ **Live ASCII art rendering** in your terminal
- ✅ **Animated displays** with movement and expressions
- ✅ **Different species** with unique visual designs
- ✅ **Rarity-based visual effects** (shimmering, glowing, etc.)
- ✅ **Interactive customization** of appearance and stats
- ✅ **Real-time display updates** as your buddy evolves

## Usage

```bash
# Show your current buddy (with animation!)
/buddy show

# Generate a new buddy
/buddy generate

# Customize your buddy
/buddy customize

# View buddy stats
/buddy stats

# Animate your buddy
/buddy animate
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

### ASCII Art Generation
```typescript
// Procedural ASCII art generation
function generateBuddyArt(species: string, rarity: string): string {
  // Select base template based on species
  // Add detail based on rarity
  // Include accessories if applicable
  // Apply visual effects
  // Return complete ASCII art
}
```

### Animation System
```typescript
// Frame-based animation
function animateBuddy(buddy: Buddy): void {
  const frames = generateFrames(buddy);
  let currentFrame = 0;
  
  setInterval(() => {
    clearDisplay();
    renderFrame(frames[currentFrame]);
    currentFrame = (currentFrame + 1) % frames.length;
  }, 500); // 2 FPS animation
}
```

### Terminal Detection
```typescript
// Check terminal capabilities
function detectTerminalCapabilities(): {
  colors: boolean;
  unicode: boolean;
  size: { width: number; height: number };
} {
  // Detect terminal type
  // Check color support
  // Measure terminal size
  // Return capabilities
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
- **Session start**: Buddy appears automatically
- **Background monitoring**: Buddy reacts to events
- **Status updates**: Buddy shows current state
- **Achievement system**: Buddy celebrates milestones

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

**The buddy is real, interactive, and uniquely yours!** 🎨✨
