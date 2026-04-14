#!/usr/bin/env node

/**
 * Buddy Skill Implementation
 * This is the main entry point for the buddy skill
 * It automatically generates and displays a buddy when the skill is loaded
 */

const { SimpleBuddyGenerator, initializeBuddySkill } = require('./init.js');

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  console.log('\n' + '='.repeat(60));
  log(title, 'cyan');
  console.log('='.repeat(60));
}

// Global state for current buddy
let globalBuddy = null;
let globalGenerator = new SimpleBuddyGenerator();

/**
 * Main buddy skill function
 * This is called when the buddy skill is loaded
 */
function buddySkill(action = 'show', ...args) {
  logSection('🎨 Buddy Skill');

  switch (action) {
    case 'show':
      showBuddy();
      break;

    case 'generate':
      generateBuddy();
      break;

    case 'customize':
      customizeBuddy(args);
      break;

    case 'stats':
      showStats();
      break;

    case 'animate':
      animateBuddy();
      break;

    case 'help':
      showHelp();
      break;

    default:
      // Default action: show current buddy or generate new one
      if (action) {
        log(`Unknown action: ${action}`, 'yellow');
        log('Showing current buddy instead...', 'yellow');
      }
      showBuddy();
  }
}

/**
 * Show current buddy
 */
function showBuddy() {
  log('\n📺 Showing your current buddy...\n');

  if (globalBuddy) {
    globalGenerator.displayBuddy('Your current buddy!');
  } else {
    log('No buddy generated yet. Generating one now...', 'yellow');
    generateBuddy();
  }
}

/**
 * Generate new buddy
 */
function generateBuddy() {
  log('\n🎲 Generating a new random buddy...\n');

  globalBuddy = globalGenerator.displayBuddy('🎉 New buddy generated!');

  log('\n✅ Your new buddy is ready!', 'green');
  log('Your buddy will stay with you throughout this session.', 'cyan');
}

/**
 * Customize buddy
 */
function customizeBuddy(args) {
  log('\n🎨 Customizing your buddy...\n');

  if (!globalBuddy) {
    log('No buddy to customize. Generating one first...', 'yellow');
    generateBuddy();
    return;
  }

  // Parse customization arguments
  const options = {};
  for (let i = 0; i < args.length; i += 2) {
    if (args[i] && args[i + 1]) {
      options[args[i].replace(/^-+/, '')] = args[i + 1];
    }
  }

  // Apply customizations
  if (options.species) {
    globalBuddy.species = options.species;
    log(`Species changed to: ${options.species}`, 'green');
  }

  if (options.expression) {
    globalBuddy.expression = options.expression;
    log(`Expression changed to: ${options.expression}`, 'green');
  }

  if (options.accessory) {
    globalBuddy.accessory = options.accessory;
    log(`Accessory changed to: ${options.accessory}`, 'green');
  }

  // Display updated buddy
  globalGenerator.displayBuddy('🎨 Buddy customized!');

  log('\n✅ Customization applied!', 'green');
}

/**
 * Show buddy stats
 */
function showStats() {
  log('\n📊 Showing buddy stats...\n');

  if (!globalBuddy) {
    log('No buddy generated yet. Generating one now...', 'yellow');
    generateBuddy();
  }

  // Display current buddy
  globalGenerator.displayBuddy('Your current buddy!');

  const stats = globalGenerator.getStatsDisplay(globalBuddy);
  console.log(stats);

  log('\n📈 Detailed Analysis:', 'cyan');

  const statsArray = [
    { name: 'Intelligence', value: globalBuddy.stats.intelligence },
    { name: 'Creativity', value: globalBuddy.stats.creativity },
    { name: 'Friendliness', value: globalBuddy.stats.friendliness },
    { name: 'Energy', value: globalBuddy.stats.energy },
    { name: 'Wisdom', value: globalBuddy.stats.wisdom }
  ];

  // Find peak and dump stats
  const sorted = [...statsArray].sort((a, b) => b.value - a.value);
  const peak = sorted[0];
  const dump = sorted[sorted.length - 1];

  log(`\n🏆 Peak Stat: ${peak.name} (${peak.value})`, 'green');
  log(`📉 Dump Stat: ${dump.name} (${dump.value})`, 'yellow');

  // Personality analysis
  log('\n🎭 Personality Analysis:', 'cyan');

  if (peak.name === 'Intelligence') {
    log('• Problem Solver: Good at debugging and analysis', 'blue');
    log('• Quick Learner: Adapts to new situations', 'blue');
    log('• Strategic: Thinks ahead and plans', 'blue');
  } else if (peak.name === 'Creativity') {
    log('• Innovative: Comes up with creative solutions', 'blue');
    log('• Artistic: Appreciates design and aesthetics', 'blue');
    log('• Imaginative: Thinks outside the box', 'blue');
  } else if (peak.name === 'Friendliness') {
    log('• Supportive: Encouraging and helpful', 'blue');
    log('• Social: Good at communication', 'blue');
    log('• Empathetic: Understands user needs', 'blue');
  } else if (peak.name === 'Energy') {
    log('• Enthusiastic: Excited about tasks', 'blue');
    log('• Persistent: Doesn\'t give up easily', 'blue');
    log('• Active: Prefers action over waiting', 'blue');
  } else if (peak.name === 'Wisdom') {
    log('• Experienced: Knows best practices', 'blue');
    log('• Insightful: Sees patterns and connections', 'blue');
    log('• Thoughtful: Considers consequences', 'blue');
  }
}

/**
 * Animate buddy
 */
function animateBuddy() {
  log('\n🎬 Starting buddy animation...\n');

  if (!globalBuddy) {
    log('No buddy to animate. Generating one first...', 'yellow');
    generateBuddy();
  }

  const expressions = ['normal', 'happy', 'excited', 'thinking', 'cool'];
  let currentFrame = 0;

  log('🎬 Animating buddy (5 frames, 2 seconds each)...', 'cyan');
  log('Press Ctrl+C to stop animation\n', 'yellow');

  const animationInterval = setInterval(() => {
    const expression = expressions[currentFrame % expressions.length];
    globalBuddy.expression = expression;

    console.clear();
    logSection(`🎬 Buddy Animation - Frame ${currentFrame + 1}/5`);
    globalGenerator.displayBuddy(`Buddy is ${expression}!`);

    currentFrame++;

    if (currentFrame >= 5) {
      clearInterval(animationInterval);
      log('\n🎬 Animation complete!', 'green');
      showBuddy();
    }
  }, 2000);
}

/**
 * Show help
 */
function showHelp() {
  logSection('📚 Buddy Skill Help');

  log('\n🎯 Available Actions:', 'cyan');
  log('  /buddy              - Show current buddy', 'blue');
  log('  /buddy show         - Show current buddy', 'blue');
  log('  /buddy generate     - Generate new random buddy', 'blue');
  log('  /buddy customize     - Customize buddy', 'blue');
  log('  /buddy stats        - Show detailed stats', 'blue');
  log('  /buddy animate      - Animate buddy', 'blue');
  log('  /buddy help         - Show this help', 'blue');

  log('\n🎨 Customization Options:', 'cyan');
  log('  --species <type>    - Change species (duck, owl, cat, dog, rabbit, fox, bear, penguin)', 'blue');
  log('  --expression <type> - Change expression (normal, happy, excited, thinking, cool)', 'blue');
  log('  --accessory <type>  - Change accessory (none, hat, glasses, bow, crown, bandana)', 'blue');

  log('\n💡 Examples:', 'cyan');
  log('  /buddy generate                    - Generate new buddy', 'blue');
  log('  /buddy customize --species cat     - Change to cat', 'blue');
  log('  /buddy customize --expression happy - Make buddy happy', 'blue');
  log('  /buddy stats                       - View detailed stats', 'blue');
  log('  /buddy animate                     - Animate buddy', 'blue');

  log('\n🎪 Features:', 'cyan');
  log('  • Random buddy generation on skill load', 'blue');
  log('  • Session persistence - buddy stays visible', 'blue');
  log('  • Interactive responses to activities', 'blue');
  log('  • Expression updates based on context', 'blue');
  log('  • 8 species, 5 rarity levels, random stats', 'blue');
  log('  • Cross-platform support (Windows, Mac, Linux)', 'blue');

  log('\n🎉 Enjoy your buddy!', 'green');
}

/**
 * Auto-initialize when skill is loaded
 */
function autoInitialize() {
  log('\n🎨 Buddy Skill Loading...\n');

  // Automatically initialize buddy
  globalBuddy = initializeBuddySkill();

  log('\n💡 Tip: Use /buddy help to see all available actions!', 'yellow');
  log('💡 Your buddy will stay with you throughout this session.', 'yellow');

  return globalBuddy;
}

// Export functions
module.exports = {
  buddySkill,
  showBuddy,
  generateBuddy,
  customizeBuddy,
  showStats,
  animateBuddy,
  showHelp,
  autoInitialize
};

// Run if called directly with arguments
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length > 0) {
    buddySkill(...args);
  } else {
    // Auto-initialize when no arguments provided
    autoInitialize();
  }
}
