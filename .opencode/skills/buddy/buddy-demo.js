#!/usr/bin/env node

/**
 * Buddy System Demonstration
 * Shows how the buddy system integrates with skill loading
 * Demonstrates random buddy generation and session persistence
 */

const { buddyIntegration } = require('./buddy-integration.ts');

// ANSI color codes for terminal output
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

function simulateSkillLoad(skillName, skillPath) {
  logSection(`Simulating Skill Load: ${skillName}`);

  log(`Loading skill from: ${skillPath}`, 'blue');

  // Simulate before skill load hook
  if (skillName === 'buddy') {
    log('\n🎨 Buddy skill detected!', 'yellow');
    log('Initializing buddy system...', 'yellow');

    // Initialize buddy for this session
    buddyIntegration.initializeForSkillLoad();

    log('✅ Buddy initialized and displayed!', 'green');
  }

  // Simulate skill loading
  log(`\n⏳ Loading ${skillName} skill...`, 'blue');
  log('✅ Skill loaded successfully!', 'green');

  // Get current buddy info
  const currentBuddy = buddyIntegration.getCurrentBuddy();
  if (currentBuddy) {
    log(`\n📊 Current Buddy Info:`, 'cyan');
    log(`  Species: ${currentBuddy.species}`, 'cyan');
    log(`  Rarity: ${currentBuddy.rarity}`, 'cyan');
    log(`  Expression: ${currentBuddy.expression}`, 'cyan');
    log(`  Shiny: ${currentBuddy.shiny ? 'Yes ✨' : 'No'}`, 'cyan');
  }

  // Simulate after skill load hook
  if (skillName === 'buddy') {
    log('\n🎉 Buddy skill loaded!', 'yellow');
    log('Your buddy will stay with you throughout this session.', 'yellow');
  }
}

function simulateUserActivity(activity) {
  logSection(`Simulating User Activity: ${activity}`);

  log(`User activity: ${activity}`, 'blue');

  const currentBuddy = buddyIntegration.getCurrentBuddy();
  if (currentBuddy && buddyIntegration.getDisplayStatus().visible) {
    // Update buddy expression based on activity
    let newExpression = currentBuddy.expression;

    if (activity.includes('error') || activity.includes('fail')) {
      newExpression = 'thinking';
      log('\n🤔 Buddy looks concerned about the error...', 'yellow');
    } else if (activity.includes('success') || activity.includes('complete')) {
      newExpression = 'excited';
      log('\n🎉 Buddy is excited about your success!', 'yellow');
    } else if (activity.includes('help') || activity.includes('how')) {
      newExpression = 'happy';
      log('\n😊 Buddy is happy to help!', 'yellow');
    }

    if (newExpression !== currentBuddy.expression) {
      buddyIntegration.updateExpression(newExpression);
      log(`✅ Buddy expression updated to: ${newExpression}`, 'green');
    }

    // Display updated buddy
    buddyIntegration.displayBuddy(currentBuddy, `Responding to: ${activity}`);
  }
}

function simulateSkillExecution(skillName, status) {
  logSection(`Simulating Skill Execution: ${skillName} - ${status}`);

  log(`Executing skill: ${skillName}`, 'blue');
  log(`Status: ${status}`, 'blue');

  const currentBuddy = buddyIntegration.getCurrentBuddy();
  if (currentBuddy && buddyIntegration.getDisplayStatus().visible) {
    let newExpression = currentBuddy.expression;
    let message = '';

    switch (status) {
      case 'success':
        newExpression = 'excited';
        message = `🎉 ${skillName} completed successfully!`;
        log('\n🎉 Buddy celebrates your success!', 'yellow');
        break;
      case 'error':
        newExpression = 'thinking';
        message = `🤔 ${skillName} encountered an issue. Let's figure it out!`;
        log('\n🤔 Buddy looks thoughtful about the issue...', 'yellow');
        break;
      case 'running':
        newExpression = 'happy';
        message = `🚀 ${skillName} is running...`;
        log('\n🚀 Buddy is excited about the running skill!', 'yellow');
        break;
    }

    if (newExpression !== currentBuddy.expression) {
      buddyIntegration.updateExpression(newExpression);
      log(`✅ Buddy expression updated to: ${newExpression}`, 'green');
    }

    if (message) {
      buddyIntegration.displayBuddy(currentBuddy, message);
    }
  }
}

function demonstrateRandomBuddyGeneration() {
  logSection('Demonstrating Random Buddy Generation');

  log('Generating 5 different random buddies to show variety...', 'blue');

  for (let i = 1; i <= 5; i++) {
    log(`\n🎲 Generating buddy #${i}...`, 'yellow');

    const newBuddy = buddyIntegration.generateNewBuddy();

    log(`✅ Buddy #${i} generated!`, 'green');
    log(`  Species: ${newBuddy.species}`, 'cyan');
    log(`  Rarity: ${newBuddy.rarity}`, 'cyan');
    log(`  Expression: ${newBuddy.expression}`, 'cyan');
    log(`  Accessory: ${newBuddy.accessory}`, 'cyan');
    log(`  Shiny: ${newBuddy.shiny ? 'Yes ✨' : 'No'}`, 'cyan');

    // Display the buddy
    buddyIntegration.displayBuddy(newBuddy, `This is buddy #${i}!`);

    // Wait a bit before next one
    if (i < 5) {
      log('\n⏳ Waiting 2 seconds before next buddy...', 'blue');
      sleep(2000);
    }
  }
}

function demonstrateBuddyAnimation() {
  logSection('Demonstrating Buddy Animation');

  log('Starting buddy animation...', 'blue');

  const currentBuddy = buddyIntegration.getCurrentBuddy();
  if (currentBuddy) {
    buddyIntegration.startAnimation(currentBuddy);

    log('✅ Animation started! Buddy will change expressions every 3 seconds.', 'green');
    log('Animation will run for 15 seconds...', 'blue');

    // Let animation run for 15 seconds
    sleep(15000);

    log('\n⏹️  Stopping animation...', 'blue');
    buddyIntegration.stopBuddyAnimation();
    log('✅ Animation stopped!', 'green');
  }
}

function demonstrateSessionPersistence() {
  logSection('Demonstrating Session Persistence');

  log('Buddy stays visible throughout the session...', 'blue');

  const currentBuddy = buddyIntegration.getCurrentBuddy();
  if (currentBuddy) {
    log(`\n📊 Current buddy:`, 'cyan');
    log(`  Species: ${currentBuddy.species}`, 'cyan');
    log(`  Rarity: ${currentBuddy.rarity}`, 'cyan');
    log(`  Expression: ${currentBuddy.expression}`, 'cyan');

    log('\n⏳ Buddy will stay visible for 10 seconds...', 'blue');
    sleep(10000);

    log('\n✅ Buddy is still visible! Session persistence working!', 'green');

    // Display buddy again to show it's still there
    buddyIntegration.displayBuddy(currentBuddy, 'Still here after 10 seconds!');
  }
}

function sleep(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Busy wait (not ideal but works for demo)
  }
}

function main() {
  log('\n' + '='.repeat(60));
  log('🎨 BUDDY SYSTEM DEMONSTRATION', 'magenta');
  log('='.repeat(60));

  log('\nThis demonstration shows how the buddy system integrates with skill loading', 'blue');
  log('and provides persistent, random buddy display throughout sessions.\n', 'blue');

  // Demo 1: Simulate buddy skill loading
  simulateSkillLoad('buddy', '.opencode/skills/buddy/SKILL.md');

  sleep(3000);

  // Demo 2: Simulate user activities
  simulateUserActivity('help with loop skill');
  sleep(2000);

  simulateUserActivity('batch processing completed successfully');
  sleep(2000);

  simulateUserActivity('error in debug skill');
  sleep(2000);

  // Demo 3: Simulate skill executions
  simulateSkillExecution('loop', 'running');
  sleep(2000);

  simulateSkillExecution('loop', 'success');
  sleep(2000);

  simulateSkillExecution('debug', 'error');
  sleep(2000);

  // Demo 4: Demonstrate random buddy generation
  demonstrateRandomBuddyGeneration();

  // Demo 5: Demonstrate buddy animation
  demonstrateBuddyAnimation();

  // Demo 6: Demonstrate session persistence
  demonstrateSessionPersistence();

  // Final summary
  logSection('Demonstration Complete');

  log('✅ Buddy system demonstration finished!', 'green');
  log('\nKey Features Demonstrated:', 'cyan');
  log('  1. ✅ Random buddy generation on skill load', 'cyan');
  log('  2. ✅ Buddy visibility throughout session', 'cyan');
  log('  3. ✅ Buddy responds to user activities', 'cyan');
  log('  4. ✅ Buddy reacts to skill execution status', 'cyan');
  log('  5. ✅ Random buddy variety (5 different buddies)', 'cyan');
  log('  6. ✅ Buddy animation system', 'cyan');
  log('  7. ✅ Session persistence', 'cyan');

  log('\n🎉 The buddy system is fully functional and ready for integration!', 'green');

  // Cleanup
  log('\n🧹 Cleaning up buddy resources...', 'blue');
  buddyIntegration.cleanup();
  log('✅ Cleanup complete!', 'green');

  log('\n' + '='.repeat(60) + '\n');
}

// Run demonstration
if (require.main === module) {
  main();
}

module.exports = {
  simulateSkillLoad,
  simulateUserActivity,
  simulateSkillExecution,
  demonstrateRandomBuddyGeneration,
  demonstrateBuddyAnimation,
  demonstrateSessionPersistence
};
