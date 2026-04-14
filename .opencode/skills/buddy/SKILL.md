---
name: buddy
description: "Generate and manage procedurally generated companion avatars with unique species, appearances, and stats. Each buddy is deterministically generated from your user ID with rarity levels and customizable attributes."
when_to_use: "Use when the user wants to see their companion avatar, generate a new buddy, or customize their companion's appearance and stats."
argument_hint: "[action: show | generate | customize | stats]"
allowed_tools:
  - Read
  - Write
  - Edit
context: inline
---

# Buddy Skill - Procedurally Generated Companion Avatars

## Overview

The Buddy skill generates and manages procedurally generated companion avatars. Each buddy is uniquely created from your user ID with deterministic generation, ensuring consistency across sessions while providing variety and personality.

## Usage

```bash
/buddy [action]
```

### Examples

```bash
# Show your current buddy
/buddy show

# Generate a new buddy
/buddy generate

# Customize your buddy
/buddy customize

# View buddy stats
/buddy stats
```

## How It Works

### Deterministic Generation

Buddies are generated using a seeded random number generator based on your user ID:

```javascript
// User ID + salt → seed → deterministic buddy
const seed = hashString(userId + "friend-2026-401")
const rng = mulberry32(seed)
const buddy = rollFrom(rng)
```

**Key Properties:**
- **Deterministic**: Same user ID always produces same buddy
- **Consistent**: Buddy persists across sessions
- **Unique**: Each user gets a unique companion
- **Reproducible**: Can regenerate same buddy if needed

### Rarity System

Buddies have rarity levels that affect their appearance and stats:

| Rarity | Weight | Floor Stats | Special Features |
|--------|--------|-------------|------------------|
| Common | 50% | 5 | Basic appearance, no hat |
| Uncommon | 30% | 15 | Better colors, simple hat |
| Rare | 15% | 25 | Premium colors, fancy hat |
| Epic | 4% | 35 | Unique colors, special hat |
| Legendary | 1% | 50 | Shiny, legendary hat, max stats |

**Shiny Chance:** 1% chance for any buddy to be shiny (special visual effect)

### Stats System

Each buddy has stats that affect their abilities:

**Available Stats:**
- `intelligence` - Problem-solving capability
- `creativity` - Creative thinking ability
- `friendliness` - Social interaction quality
- `energy` - Activity level and enthusiasm
- `wisdom` - Experience and insight

**Stat Distribution:**
- **Peak stat**: One stat is highest (50-80 range)
- **Dump stat**: One stat is lowest (1-25 range)
- **Other stats**: Scattered around rarity floor

**Example Stat Distribution:**
```javascript
{
  intelligence: 75,  // peak
  creativity: 60,
  friendliness: 15, // dump
  energy: 55,
  wisdom: 65
}
```

## Buddy Components

### Species

Available species with unique characteristics:

- **Duck** - Classic, friendly, adaptable
- **Owl** - Wise, intelligent, observant
- **Cat** - Independent, creative, mysterious
- **Dog** - Loyal, energetic, friendly
- **Rabbit** - Quick, clever, energetic
- **Fox** - Clever, adaptable, cunning
- **Bear** - Strong, wise, protective
- **Penguin** - Friendly, social, resilient

### Eyes

Eye styles that express personality:

- **Normal** - Standard, friendly
- **Happy** - Cheerful, optimistic
- **Wise** - Knowledgeable, thoughtful
- **Sleepy** - Relaxed, calm
- **Excited** - Energetic, enthusiastic
- **Cool** - Confident, composed
- **Goofy** - Playful, fun-loving

### Hats

Headwear that adds character (rarity-dependent):

**Common:** None
**Uncommon:** Simple cap, bandana
**Rare:** Top hat, wizard hat
**Epic:** Crown, special themed hat
**Legendary:** Legendary crown, unique hat

## Actions

### Show Buddy
```bash
/buddy show
```

Displays your current buddy with:
- Visual representation
- Species and appearance
- Rarity level
- Current stats
- Special features (shiny, hat)

### Generate New Buddy
```bash
/buddy generate
```

Creates a new buddy with:
- Random species based on rarity
- Random eye style
- Rarity-appropriate hat
- Stat distribution
- Shiny chance (1%)

**Note:** This replaces your current buddy. Use with caution!

### Customize Buddy
```bash
/buddy customize
```

Allows customization of:
- Species (change appearance)
- Eyes (change expression)
- Hat (change headwear)
- Stats (redistribute points)

**Customization Rules:**
- Can change species and eyes freely
- Hat changes respect rarity level
- Stat redistribution maintains total points
- Some changes may require confirmation

### View Stats
```bash
/buddy stats
```

Shows detailed stat breakdown:
- Individual stat values
- Stat comparisons
- Strengths and weaknesses
- Recommendations for improvement

## Buddy Personality

Based on stats, buddies have different personalities:

### High Intelligence
- **Problem Solver**: Good at debugging and analysis
- **Quick Learner**: Adapts to new situations
- **Strategic**: Thinks ahead and plans

### High Creativity
- **Innovative**: Comes up with creative solutions
- **Artistic**: Appreciates design and aesthetics
- **Imaginative**: Thinks outside the box

### High Friendliness
- **Supportive**: Encouraging and helpful
- **Social**: Good at communication
- **Empathetic**: Understands user needs

### High Energy
- **Enthusiastic**: Excited about tasks
- **Persistent**: Doesn't give up easily
- **Active**: Prefers action over waiting

### High Wisdom
- **Experienced**: Knows best practices
- **Insightful**: Sees patterns and connections
- **Thoughtful**: Considers consequences

## Best Practices

### 1. Choose Your Buddy Wisely
```bash
# Generate until you get a buddy you like
/buddy generate

# Check stats before committing
/buddy stats
```

### 2. Customize for Your Workflow
```bash
# Tailor buddy to your needs
/buddy customize

# Focus on stats that match your work style
```

### 3. Use Buddy Personality
- Leverage your buddy's strengths
- Be aware of weaknesses
- Adapt interactions based on personality

## Advanced Features

### Buddy Persistence

Buddies persist across sessions:
- Stored in user configuration
- Automatically loaded on startup
- Consistent across devices

### Buddy Evolution

Buddies can "level up" through usage:
- Stats may improve over time
- Rarity can increase (rare)
- Special features may unlock

### Buddy Interactions

Buddies can interact with:
- **Task completion**: Celebrates successes
- **Errors**: Provides encouragement
- **Long sessions**: Shows energy levels
- **Achievements**: Unlocks special features

## Troubleshooting

### Buddy Not Showing

**Check:**
1. User ID is configured
2. Buddy data is saved
3. File permissions are correct
4. No corruption in buddy data

**Solution:**
```bash
# Regenerate buddy
/buddy generate

# Check configuration
/update-config verify buddy settings
```

### Stats Not Updating

**Check:**
1. Buddy is properly initialized
2. Stat tracking is enabled
3. No corruption in stat data

**Solution:**
```bash
# Reset stats
/buddy customize

# Verify tracking
/debug check buddy stat tracking
```

### Customization Not Working

**Check:**
1. Customization is allowed
2. Changes are being saved
3. No conflicts with other settings

**Solution:**
```bash
# Check permissions
/update-config verify buddy permissions

# Try again
/buddy customize
```

## Integration Notes

### User Identification
Buddies are tied to:
- **User ID**: Unique identifier
- **Account UUID**: For authenticated users
- **Anonymous**: Fallback for unauthenticated users

### Storage Location
Buddy data is stored in:
- **Location**: User configuration directory
- **Format**: JSON with buddy metadata
- **Backup**: Automatic backup on changes

### Display Integration
Buddies integrate with:
- **UI components**: Avatar display
- **Status indicators**: Energy levels
- **Notifications**: Buddy reactions
- **Achievements**: Special celebrations

## Security Considerations

- Buddy data is user-specific
- No sensitive information in buddy data
- File permissions should be restrictive
- Anonymous users get random buddies

## Performance Considerations

- Buddy generation is fast (< 10ms)
- Stat tracking has minimal overhead
- Display rendering is optimized
- Storage requirements are minimal

## Related Skills

- **update-config**: For buddy configuration
- **debug**: For troubleshooting buddy issues
- **remember**: For documenting buddy preferences

## Buddy Quality Checklist

After creating or customizing a buddy, verify:

- [ ] Buddy appears correctly
- [ ] Stats are accurate
- [ ] Rarity is appropriate
- [ ] Customizations applied
- [ ] Persistence works
- [ ] Display is correct
- [ ] No corruption in data
- [ ] Performance is good

## Examples by Use Case

### Development Buddy
```bash
# Generate a development-focused buddy
/buddy generate

# Customize for coding
/buddy customize
# Focus on: intelligence, creativity
```

### Design Buddy
```bash
# Generate a design-focused buddy
/buddy generate

# Customize for design work
/buddy customize
# Focus on: creativity, friendliness
```

### Debugging Buddy
```bash
# Generate a debugging-focused buddy
/buddy generate

# Customize for debugging
/buddy customize
# Focus on: intelligence, wisdom
```

## Advanced Patterns

### Stat Optimization
```bash
# Optimize stats for specific tasks
/buddy customize
# Redistribute for maximum effectiveness
```

### Personality Matching
```bash
# Generate buddy that matches your personality
/buddy generate
# Keep generating until stats align
```

### Themed Buddies
```bash
# Generate themed buddy for specific projects
/buddy generate
# Customize species and colors to match theme
```

## Best Practices Summary

1. **Generate thoughtfully** - Take time to find a buddy you like
2. **Customize strategically** - Tailor to your workflow
3. **Leverage personality** - Use buddy's strengths
4. **Track progress** - Watch stats improve over time
5. **Have fun** - Enjoy the gamification element
6. **Share optionally** - Show off your buddy if desired
7. **Experiment** - Try different combinations
8. **Document preferences** - Note what works best

## Fun Features

### Buddy Reactions
Buddies react to different events:
- **Success**: Celebrates with animation
- **Error**: Shows concern and encouragement
- **Long work**: Displays energy level
- **Achievement**: Special celebration

### Seasonal Variations
Buddies may have seasonal variations:
- **Holiday themes**: Special appearances
- **Event-based**: Limited edition features
- **Time-based**: Changes over time

### Buddy Achievements
Unlock achievements through usage:
- **First buddy**: Generate your first companion
- **Stat master**: Max out a stat
- **Rarity collector**: Have all rarity levels
- **Customizer**: Extensively customize buddy

## Easter Eggs

### Secret Combinations
Certain species + eye + hat combinations create special effects:
- **Owl + Wise + Wizard Hat**: Maximum wisdom boost
- **Cat + Cool + Crown**: Maximum creativity boost
- **Dog + Happy + Top Hat**: Maximum friendliness boost

### Legendary Combinations
Rare combinations unlock special features:
- **All stats maxed**: Legendary status
- **Shiny + Legendary**: Ultra-rare appearance
- **Specific species + specific hat**: Unique abilities

## Community Features

### Buddy Sharing
Share your buddy with others:
- **Export buddy data**: Share configuration
- **Import buddy data**: Load shared buddies
- **Buddy gallery**: View community buddies

### Buddy Contests
Participate in buddy contests:
- **Best design**: Visual appeal
- **Best stats**: Optimal distribution
- **Most creative**: Unique combinations
- **Fan favorite**: Community voting

## Future Enhancements

### Planned Features
- **Buddy evolution**: Stats improve over time
- **Buddy interactions**: Buddy-to-buddy communication
- **Buddy missions**: Special tasks for buddies
- **Buddy customization**: More options

### Experimental Features
- **Buddy AI**: Buddy personality affects responses
- **Buddy learning**: Buddy adapts to your style
- **Buddy collaboration**: Multiple buddies working together
- **Buddy marketplace**: Trade or collect buddies
