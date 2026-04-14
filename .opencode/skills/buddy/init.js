#!/usr/bin/env node

/**
 * Buddy Skill Initialization
 * Automatically generates and displays a buddy when the skill is loaded
 * This script runs automatically when the buddy skill is loaded
 */

// Simple buddy generator for skill loading
class SimpleBuddyGenerator {
  constructor() {
    this.currentBuddy = null;
  }

  generateRandomBuddy() {
    const species = ['duck', 'owl', 'cat', 'dog', 'rabbit', 'fox', 'bear', 'penguin'];
    const expressions = ['normal', 'happy', 'excited', 'thinking', 'cool'];
    const accessories = ['none', 'hat', 'glasses', 'bow', 'crown', 'bandana'];
    const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary'];

    return {
      species: species[Math.floor(Math.random() * species.length)],
      rarity: rarities[Math.floor(Math.random() * rarities.length)],
      expression: expressions[Math.floor(Math.random() * expressions.length)],
      accessory: accessories[Math.floor(Math.random() * accessories.length)],
      shiny: Math.random() < 0.01,
      seed: Date.now() + Math.random(),
      stats: {
        intelligence: Math.floor(Math.random() * 100) + 1,
        creativity: Math.floor(Math.random() * 100) + 1,
        friendliness: Math.floor(Math.random() * 100) + 1,
        energy: Math.floor(Math.random() * 100) + 1,
        wisdom: Math.floor(Math.random() * 100) + 1
      }
    };
  }

  getAsciiArt(buddy) {
    const artTemplates = {
      duck: {
        common: `
   quack!
   (•o•)
   /|   |\\
  (_|   |_)
    |   |
   /     \\`,
        uncommon: `
   quack!
   (•o•)  ~
   /|   |\\
  (_|   |_)
    |   |
   /     \\`,
        rare: `
   quack!
   (•o•)  ★
   /|   |\\
  (_|   |_)
    |   |
   /     \\`,
        epic: `
   quack! ✨
   (•o•)  ★✨
   /|   |\\
  (_|   |_)
    |   |
   /     \\`,
        legendary: `
   quack! 🌟
   (•o•)  ★✨🌟
   /|   |\\
  (_|   |_)
    |   |
   /     \\`
      },
      owl: {
        common: `
   hoot!
   (O,O)
  /)  )
  (  (_)
   |  |
  /  \\`,
        uncommon: `
   hoot!
   (O,O)
  /)  )  [glasses]
  (  (_)
   |  |
  /  \\`,
        rare: `
   hoot!
   (O,O)
  /)  )  [glasses]
  (  (_)
   |  |
  /  \\  📚`,
        epic: `
   hoot! ✨
   (O,O)
  /)  )  [glasses]
  (  (_)
   |  |
  /  \\  📚✨`,
        legendary: `
   hoot! 🌟
   (O,O)
  /)  )  [glasses]
  (  (_)
   |  |
  /  \\  📚✨🌟`
      },
      cat: {
        common: `
   meow!
  /\\_/\\
 ( o.o )
  > ^ <
  |   |
 /   | \\`,
        uncommon: `
   meow!
  /\\_/\\
 ( o.o )  ~
  > ^ <
  |   |
 /   | \\`,
        rare: `
   meow!
  /\\_/\\
 ( o.o )  ~
  > ^ <
  |   |
 /   | \\  🐟`,
        epic: `
   meow! ✨
  /\\_/\\
 ( o.o )  ~
  > ^ <
  |   |
 /   | \\  🐟✨`,
        legendary: `
   meow! 🌟
  /\\_/\\
 ( o.o )  ~
  > ^ <
  |   |
 /   | \\  🐟✨🌟`
      },
      dog: {
        common: `
   woof!
  / \\__
 (    @\\___
 /         O
 /   (_____/
/_____/   U`,
        uncommon: `
   woof!
  / \\__
 (    @\\___
 /         O
 /   (_____/
/_____/   U  🎾`,
        rare: `
   woof!
  / \\__
 (    @\\___
 /         O
 /   (_____/
/_____/   U  🎾🦴`,
        epic: `
   woof! ✨
  / \\__
 (    @\\___
 /         O
 /   (_____/
/_____/   U  🎾✨🦴`,
        legendary: `
   woof! 🌟
  / \\__
 (    @\\___
 /         O
 /   (_____/
/_____/   U  🎾✨🦴🌟`
      },
      rabbit: {
        common: `
   hop!
    (\\_/)
    ( •.•)
    >  <
   /   \\
  (_)(_)`,
        uncommon: `
   hop!
    (\\_/)
    ( •.•)  ~
    >  <
   /   \\
  (_)(_)`,
        rare: `
   hop!
    (\\_/)
    ( •.•)  ~
    >  <
   /   \\
  (_)(_)  🥕`,
        epic: `
   hop! ✨
    (\\_/)
    ( •.•)  ~
    >  <
   /   \\
  (_)(_)  🥕✨`,
        legendary: `
   hop! 🌟
    (\\_/)
    ( •.•)  ~
    >  <
   /   \\
  (_)(_)  🥕✨🌟`
      },
      fox: {
        common: `
   yip!
   |/\\_/\\
   ( ^.^ )
   c  (")
  /   | \\
 (_)(_)`,
        uncommon: `
   yip!
   |/\\_/\\
   ( ^.^ )  ~
   c  (")
  /   | \\
 (_)(_)`,
        rare: `
   yip!
   |/\\_/\\
   ( ^.^ )  ~
   c  (")
  /   | \\
 (_)(_)  🦊`,
        epic: `
   yip! ✨
   |/\\_/\\
   ( ^.^ )  ~
   c  (")
  /   | \\
 (_)(_)  🦊✨`,
        legendary: `
   yip! 🌟
   |/\\_/\\
   ( ^.^ )  ~
   c  (")
  /   | \\
 (_)(_)  🦊✨🌟`
      },
      bear: {
        common: `
   growl!
    __  __
   /  \\/  \\
  (  ^  ^ )
   C  ==  )
  /      \\
 (_/    \\_)`,
        uncommon: `
   growl!
    __  __
   /  \\/  \\
  (  ^  ^ )
   C  ==  )
  /      \\
 (_/    \\_)  🍯`,
        rare: `
   growl!
    __  __
   /  \\/  \\
  (  ^  ^ )
   C  ==  )
  /      \\
 (_/    \\_)  🍯🐟`,
        epic: `
   growl! ✨
    __  __
   /  \\/  \\
  (  ^  ^ )
   C  ==  )
  /      \\
 (_/    \\_)  🍯✨🐟`,
        legendary: `
   growl! 🌟
    __  __
   /  \\/  \\
  (  ^  ^ )
   C  ==  )
  /      \\
 (_/    \\_)  🍯✨🐟🌟`
      },
      penguin: {
        common: `
   waddle!
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)`,
        uncommon: `
   waddle!
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)  🐧`,
        rare: `
   waddle!
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)  🐧❄️`,
        epic: `
   waddle! ✨
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)  🐧✨❄️`,
        legendary: `
   waddle! 🌟
   (•o•)  <
   |  |  //
  /|  | //
 (_|  |//)  🐧✨❄️🌟`
      }
    };

    const speciesArt = artTemplates[buddy.species] || artTemplates.duck;
    let art = speciesArt[buddy.rarity] || speciesArt.common;

    // Add expression
    const expressionEmojis = {
      normal: '',
      happy: ' 😊',
      excited: ' 🎉',
      thinking: ' 🤔',
      cool: ' 😎'
    };
    if (buddy.expression && expressionEmojis[buddy.expression]) {
      art = art.replace('!', `!${expressionEmojis[buddy.expression]}`);
    }

    // Add shiny effect
    if (buddy.shiny) {
      art = art.replace('✨', '✨✨');
    }

    return art;
  }

  getStatsDisplay(buddy) {
    const stats = buddy.stats;
    return `
Stats:
  Intelligence: ${'█'.repeat(Math.floor(stats.intelligence / 10))}${'░'.repeat(10 - Math.floor(stats.intelligence / 10))} ${stats.intelligence}
  Creativity:   ${'█'.repeat(Math.floor(stats.creativity / 10))}${'░'.repeat(10 - Math.floor(stats.creativity / 10))} ${stats.creativity}
  Friendliness:  ${'█'.repeat(Math.floor(stats.friendliness / 10))}${'░'.repeat(10 - Math.floor(stats.friendliness / 10))} ${stats.friendliness}
  Energy:       ${'█'.repeat(Math.floor(stats.energy / 10))}${'░'.repeat(10 - Math.floor(stats.energy / 10))} ${stats.energy}
  Wisdom:       ${'█'.repeat(Math.floor(stats.wisdom / 10))}${'░'.repeat(10 - Math.floor(stats.wisdom / 10))} ${stats.wisdom}

Rarity: ${buddy.rarity.toUpperCase()}${buddy.shiny ? ' ✨ SHINY!' : ''}
Species: ${buddy.species.charAt(0).toUpperCase() + buddy.species.slice(1)}`;
  }

  displayBuddy(message = '') {
    // Generate random buddy
    this.currentBuddy = this.generateRandomBuddy();

    // Get ASCII art and stats
    const art = this.getAsciiArt(this.currentBuddy);
    const stats = this.getStatsDisplay(this.currentBuddy);

    // Display buddy
    console.log('\n' + '='.repeat(50));
    console.log(art);
    console.log(stats);

    if (message) {
      console.log(`\n${message}`);
    }

    console.log('='.repeat(50) + '\n');

    return this.currentBuddy;
  }

  getCurrentBuddy() {
    return this.currentBuddy;
  }
}

// Main initialization function
function initializeBuddySkill() {
  console.log('\n🎨 Loading Buddy Skill...\n');

  const generator = new SimpleBuddyGenerator();
  const buddy = generator.displayBuddy('🎉 Your session buddy has arrived!');

  console.log('✅ Buddy skill loaded successfully!');
  console.log('Your buddy will stay with you throughout this session.\n');

  return buddy;
}

// Run initialization if called directly
if (require.main === module) {
  initializeBuddySkill();
}

// Export for use in other modules
module.exports = {
  SimpleBuddyGenerator,
  initializeBuddySkill
};
