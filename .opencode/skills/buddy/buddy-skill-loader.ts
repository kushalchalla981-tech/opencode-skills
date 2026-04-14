/**
 * Buddy Skill Loader Hook
 * Integrates buddy display with OpenCode skill loading system
 * Automatically displays random buddy when buddy skill is loaded
 */

import { buddyIntegration } from './buddy-integration.js';

interface SkillLoadContext {
  skillName: string;
  skillPath: string;
  userIntent?: string;
  timestamp: number;
}

interface SkillLoadResult {
  content: string;
  metadata?: any;
}

/**
 * Hook that runs before a skill is loaded
 */
export function beforeSkillLoad(context: SkillLoadContext): void {
  // Check if this is the buddy skill being loaded
  if (context.skillName === 'buddy' || context.skillPath.includes('buddy')) {
    console.log('\n🎨 Loading buddy skill...');

    // Initialize buddy for this session
    buddyIntegration.initializeForSkillLoad();

    console.log('✅ Buddy initialized and displayed!\n');
  }
}

/**
 * Hook that runs after a skill is loaded
 */
export function afterSkillLoad(context: SkillLoadContext, result: SkillLoadResult): SkillLoadResult {
  // Check if this is the buddy skill that was loaded
  if (context.skillName === 'buddy' || context.skillPath.includes('buddy')) {
    console.log('\n🎉 Buddy skill loaded successfully!');
    console.log('Your buddy will stay with you throughout this session.\n');

    // Add buddy metadata to result
    if (!result.metadata) {
      result.metadata = {};
    }

    const currentBuddy = buddyIntegration.getCurrentBuddy();
    result.metadata.buddy = {
      species: currentBuddy?.species,
      rarity: currentBuddy?.rarity,
      expression: currentBuddy?.expression,
      shiny: currentBuddy?.shiny,
      stats: currentBuddy?.stats
    };
  }

  return result;
}

/**
 * Hook that runs when a skill is unloaded
 */
export function onSkillUnload(skillName: string): void {
  // Check if this is the buddy skill being unloaded
  if (skillName === 'buddy') {
    console.log('\n👋 Buddy skill unloading...');
    console.log('Your buddy will be hidden but remembered for next time!\n');

    // Hide buddy but don't cleanup completely
    buddyIntegration.hideBuddy();
  }
}

/**
 * Hook that runs on session start
 */
export function onSessionStart(): void {
  console.log('\n🌟 Session started!');
  console.log('Buddy system ready to display companions when skills are loaded.\n');
}

/**
 * Hook that runs on session end
 */
export function onSessionEnd(): void {
  console.log('\n👋 Session ending...');
  console.log('Cleaning up buddy resources...\n');

  // Cleanup buddy resources
  buddyIntegration.cleanup();

  console.log('✅ Buddy system cleaned up. Goodbye!\n');
}

/**
 * Hook that runs on user activity
 */
export function onUserActivity(activity: string): void {
  const currentBuddy = buddyIntegration.getCurrentBuddy();

  if (!currentBuddy || !buddyIntegration.getDisplayStatus().visible) {
    return;
  }

  // Update buddy expression based on activity
  let newExpression = currentBuddy.expression;

  if (activity.includes('error') || activity.includes('fail')) {
    newExpression = 'thinking';
  } else if (activity.includes('success') || activity.includes('complete')) {
    newExpression = 'excited';
  } else if (activity.includes('help') || activity.includes('how')) {
    newExpression = 'happy';
  }

  if (newExpression !== currentBuddy.expression) {
    buddyIntegration.updateExpression(newExpression);
  }
}

/**
 * Hook that runs on skill execution
 */
export function onSkillExecution(skillName: string, status: 'success' | 'error' | 'running'): void {
  const currentBuddy = buddyIntegration.getCurrentBuddy();

  if (!currentBuddy || !buddyIntegration.getDisplayStatus().visible) {
    return;
  }

  // Update buddy based on skill execution status
  let newExpression = currentBuddy.expression;
  let message = '';

  switch (status) {
    case 'success':
      newExpression = 'excited';
      message = `🎉 ${skillName} completed successfully!`;
      break;
    case 'error':
      newExpression = 'thinking';
      message = `🤔 ${skillName} encountered an issue. Let's figure it out!`;
      break;
    case 'running':
      newExpression = 'happy';
      message = `🚀 ${skillName} is running...`;
      break;
  }

  if (newExpression !== currentBuddy.expression) {
    buddyIntegration.updateExpression(newExpression);
  }

  if (message) {
    buddyIntegration.displayBuddy(currentBuddy, message);
  }
}

/**
 * Main skill loader integration function
 */
export function integrateBuddyWithSkillLoader(): {
  beforeSkillLoad: (context: SkillLoadContext) => void;
  afterSkillLoad: (context: SkillLoadContext, result: SkillLoadResult) => SkillLoadResult;
  onSkillUnload: (skillName: string) => void;
  onSessionStart: () => void;
  onSessionEnd: () => void;
  onUserActivity: (activity: string) => void;
  onSkillExecution: (skillName: string, status: 'success' | 'error' | 'running') => void;
} {
  return {
    beforeSkillLoad,
    afterSkillLoad,
    onSkillUnload,
    onSessionStart,
    onSessionEnd,
    onUserActivity,
    onSkillExecution
  };
}

/**
 * Convenience function to initialize buddy system
 */
export function initializeBuddySystem(): void {
  console.log('\n🎨 Initializing Buddy System...');
  console.log('Buddies will appear when skills are loaded and stay visible throughout the session.\n');
  onSessionStart();
}

/**
 * Convenience function to shutdown buddy system
 */
export function shutdownBuddySystem(): void {
  console.log('\n👋 Shutting down Buddy System...\n');
  onSessionEnd();
}
