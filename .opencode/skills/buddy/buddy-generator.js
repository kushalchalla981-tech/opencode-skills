#!/usr/bin/env node

/**
 * Live ASCII Art Buddy Generator
 * Creates and displays animated ASCII art companions in the terminal
 */

const SPECIES = {
  duck: {
    name: 'Duck',
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
    name: 'Owl',
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
    name: 'Cat',
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
    name: 'Dog',
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
    name: 'Rabbit',
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
    name: 'Fox',
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
    name: 'Bear',
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
    name: 'Penguin',
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

const EXPRESSIONS = {
  normal: '',
  happy: ' 😊',
  excited: ' 🎉',
  sad: ' 😢',
  angry: ' 😠',
  thinking: ' 🤔',
  sleepy: ' 😴',
  cool: ' 😎'
};

const ACCESSORIES = {
  none: '',
  hat: ' [hat]',
  glasses: ' [glasses]',
  bow: ' [bow]',
  crown: ' 👑',
  'wizard-hat': ' [wizard-hat]',
  bandana: ' [bandana]',
  sunglasses: ' [sunglasses]'
};

class BuddyGenerator {
  constructor(userId) {
    this.userId = userId;
    this.seed = this.hashString(userId + 'buddy-2026');
    this.rng = this.seededRandom(this.seed);
  }

  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  seededRandom(seed) {
    return function() {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
  }

  pick(arr) {
    return arr[Math.floor(this.rng() * arr.length)];
  }

  rollRarity() {
    const roll = this.rng();
    if (roll < 0.50) return 'common';
    if (roll < 0.80) return 'uncommon';
    if (roll < 0.95) return 'rare';
    if (roll < 0.99) return 'epic';
    return 'legendary';
  }

  rollStats(rarity) {
    const floors = {
      common: 5,
      uncommon: 15,
      rare: 25,
      epic: 35,
      legendary: 50
    };

    const floor = floors[rarity];
    const stats = {
      intelligence: floor + Math.floor(this.rng() * 30),
      creativity: floor + Math.floor(this.rng() * 30),
      friendliness: floor + Math.floor(this.rng() * 30),
      energy: floor + Math.floor(this.rng() * 30),
      wisdom: floor + Math.floor(this.rng() * 30)
    };

    // Ensure stats are within 1-100 range
    Object.keys(stats).forEach(key => {
      stats[key] = Math.max(1, Math.min(100, stats[key]));
    });

    return stats;
  }

  generate() {
    const rarity = this.rollRarity();
    const species = this.pick(Object.keys(SPECIES));
    const expression = this.pick(Object.keys(EXPRESSIONS));
    const accessory = rarity === 'common' ? 'none' : this.pick(Object.keys(ACCESSORIES));
    const shiny = this.rng() < 0.01;
    const stats = this.rollStats(rarity);

    return {
      species,
      rarity,
      expression,
      accessory,
      shiny,
      stats,
      seed: this.seed
    };
  }

  getAsciiArt(buddy) {
    const speciesData = SPECIES[buddy.species];
    const art = speciesData[buddy.rarity] || speciesData.common;
    
    // Add expression
    let displayArt = art;
    if (buddy.expression !== 'normal') {
      displayArt = art.replace('!', `!${EXPRESSIONS[buddy.expression]}`);
    }

    // Add accessory
    if (buddy.accessory !== 'none') {
      displayArt = displayArt.replace(/\n/g, ACCESSORIES[buddy.accessory] + '\n');
    }

    // Add shiny effect
    if (buddy.shiny) {
      displayArt = displayArt.replace('✨', '✨✨');
    }

    return displayArt;
  }

  getStatsDisplay(buddy) {
    return `
Stats:
  Intelligence: ${'█'.repeat(Math.floor(buddy.stats.intelligence / 10))}${'░'.repeat(10 - Math.floor(buddy.stats.intelligence / 10))} ${buddy.stats.intelligence}
  Creativity:   ${'█'.repeat(Math.floor(buddy.stats.creativity / 10))}${'░'.repeat(10 - Math.floor(buddy.stats.creativity / 10))} ${buddy.stats.creativity}
  Friendliness:  ${'█'.repeat(Math.floor(buddy.stats.friendliness / 10))}${'░'.repeat(10 - Math.floor(buddy.stats.friendliness / 10))} ${buddy.stats.friendliness}
  Energy:       ${'█'.repeat(Math.floor(buddy.stats.energy / 10))}${'░'.repeat(10 - Math.floor(buddy.stats.energy / 10))} ${buddy.stats.energy}
  Wisdom:       ${'█'.repeat(Math.floor(buddy.stats.wisdom / 10))}${'░'.repeat(10 - Math.floor(buddy.stats.wisdom / 10))} ${buddy.stats.wisdom}

Rarity: ${buddy.rarity.toUpperCase()}${buddy.shiny ? ' ✨ SHINY!' : ''}
Species: ${SPECIES[buddy.species].name}
`;
  }
}

// Terminal utilities
function clearScreen() {
  console.clear();
}

function detectTerminalCapabilities() {
  return {
    colors: process.env.COLORTERM !== undefined || process.env.TERM_PROGRAM?.includes('color'),
    unicode: process.platform !== 'win32' || process.env.TERM === 'xterm-256color',
    size: {
      width: process.stdout.columns || 80,
      height: process.stdout.rows || 24
    }
  };
}

function displayBuddy(buddy, message = '') {
  clearScreen();
  const generator = new BuddyGenerator(buddy.seed);
  const art = generator.getAsciiArt(buddy);
  const stats = generator.getStatsDisplay(buddy);
  
  console.log(art);
  console.log(stats);
  
  if (message) {
    console.log(`\n${message}`);
  }
}

function animateBuddy(buddy, frames = 5, interval = 500) {
  const generator = new BuddyGenerator(buddy.seed);
  let currentFrame = 0;
  
  const animationInterval = setInterval(() => {
    clearScreen();
    
    // Simple animation by varying expression
    const expressions = ['normal', 'happy', 'excited', 'normal'];
    const currentExpression = expressions[currentFrame % expressions.length];
    
    const animatedBuddy = { ...buddy, expression: currentExpression };
    const art = generator.getAsciiArt(animatedBuddy);
    
    console.log(art);
    console.log(`\n${animatedBuddy.species} is ${currentExpression}!`);
    
    currentFrame++;
    
    if (currentFrame >= frames) {
      clearInterval(animationInterval);
      displayBuddy(buddy, 'Animation complete!');
    }
  }, interval);
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  const action = args[0] || 'show';
  
  // Get user ID (use environment variable or generate one)
  const userId = process.env.USER || process.env.USERNAME || 'default-user';
  const generator = new BuddyGenerator(userId);
  const buddy = generator.generate();
  
  switch (action) {
    case 'show':
      displayBuddy(buddy, 'Your companion is ready!');
      break;
      
    case 'generate':
      const newBuddy = generator.generate();
      displayBuddy(newBuddy, 'New buddy generated!');
      break;
      
    case 'animate':
      animateBuddy(buddy, 5, 500);
      break;
      
    case 'stats':
      const statsDisplay = generator.getStatsDisplay(buddy);
      console.log(statsDisplay);
      break;
      
    default:
      console.log(`Unknown action: ${action}`);
      console.log('Available actions: show, generate, animate, stats');
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { BuddyGenerator, displayBuddy, animateBuddy };
