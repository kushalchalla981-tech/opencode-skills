/**
 * Buddy Integration System
 * Integrates live ASCII art buddies with OpenCode skill loading
 * Displays buddies throughout the session with randomization
 */

import { spawn } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

interface BuddyConfig {
  species?: string;
  rarity?: string;
  expression?: string;
  accessory?: string;
  shiny?: boolean;
}

interface BuddyDisplay {
  buddy: any;
  visible: boolean;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  animated: boolean;
}

class BuddyIntegration {
  private static instance: BuddyIntegration;
  private currentBuddy: any = null;
  private display: BuddyDisplay = {
    buddy: null,
    visible: false,
    position: 'top-right',
    animated: true
  };
  private buddyProcess: any = null;
  private animationInterval: any = null;
  private sessionStartTime: number = Date.now();

  private constructor() {
    this.sessionStartTime = Date.now();
  }

  static getInstance(): BuddyIntegration {
    if (!BuddyIntegration.instance) {
      BuddyIntegration.instance = new BuddyIntegration();
    }
    return BuddyIntegration.instance;
  }

  /**
   * Generate a random buddy for the current session
   */
  generateRandomBuddy(): any {
    const species = ['duck', 'owl', 'cat', 'dog', 'rabbit', 'fox', 'bear', 'penguin'];
    const expressions = ['normal', 'happy', 'excited', 'thinking', 'cool'];
    const accessories = ['none', 'hat', 'glasses', 'bow', 'crown', 'bandana'];

    const randomSpecies = species[Math.floor(Math.random() * species.length)];
    const randomExpression = expressions[Math.floor(Math.random() * expressions.length)];
    const randomAccessory = accessories[Math.floor(Math.random() * accessories.length)];
    const shiny = Math.random() < 0.01; // 1% shiny chance

    // Generate rarity based on weighted random
    const rarityRoll = Math.random();
    let rarity = 'common';
    if (rarityRoll < 0.50) rarity = 'common';
    else if (rarityRoll < 0.80) rarity = 'uncommon';
    else if (rarityRoll < 0.95) rarity = 'rare';
    else if (rarityRoll < 0.99) rarity = 'epic';
    else rarity = 'legendary';

    return {
      species: randomSpecies,
      rarity,
      expression: randomExpression,
      accessory: randomAccessory,
      shiny,
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

  /**
   * Get ASCII art for a buddy
   */
  getBuddyAsciiArt(buddy: any): string {
    const artTemplates: any = {
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
    const expressionEmojis: any = {
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

  /**
   * Get buddy stats display
   */
  getBuddyStats(buddy: any): string {
    const stats = buddy.stats;
    return `
Stats:
  Intelligence: ${'█'.repeat(Math.floor(stats.intelligence / 10))}${'░'.repeat(10 - Math.floor(stats.intelligence / 10))} ${stats.intelligence}
  Creativity:   ${'█'.repeat(Math.floor(stats.creativity / 10))}${'░'.repeat(10 - Math.floor(stats.creativity / 10))} ${stats.creativity}
  Friendliness:  ${'█'.repeat(Math.floor(stats.friendliness / 10))}${'░'.repeat(10 - Math.floor(stats.friendliness / 10))} ${stats.friendliness}
  Energy:       ${'█'.repeat(Math.floor(stats.energy / 10))}${'░'.repeat(10 - Math.floor(stats.energy / 10))} ${stats.energy}
  Wisdom:       ${'█'.repeat(Math.floor(stats.wisdom / 10))}${'░'.repeat(10 - Math.floor(stats.wisdom / 10))} ${stats.wisdom}

Rarity: ${buddy.rarity.toUpperCase()}${buddy.shiny ? ' ✨ SHINY!' : ''}
Species: ${buddy.species.charAt(0).toUpperCase() + buddy.species.slice(1)}
Session Time: ${Math.floor((Date.now() - this.sessionStartTime) / 1000)}s`;
  }

  /**
   * Display buddy in terminal
   */
  displayBuddy(buddy?: any, message?: string): void {
    const buddyToDisplay = buddy || this.currentBuddy || this.generateRandomBuddy();
    this.currentBuddy = buddyToDisplay;
    this.display.visible = true;
    this.display.buddy = buddyToDisplay;

    const art = this.getBuddyAsciiArt(buddyToDisplay);
    const stats = this.getBuddyStats(buddyToDisplay);

    console.log('\n' + '='.repeat(50));
    console.log(art);
    console.log(stats);
    if (message) {
      console.log(`\n${message}`);
    }
    console.log('='.repeat(50) + '\n');
  }

  /**
   * Start buddy animation
   */
  startAnimation(buddy?: any): void {
    if (this.animationInterval) {
      this.stopAnimation();
    }

    const buddyToAnimate = buddy || this.currentBuddy || this.generateRandomBuddy();
    this.currentBuddy = buddyToAnimate;
    this.display.animated = true;

    const expressions = ['normal', 'happy', 'excited', 'thinking', 'cool'];
    let currentExpression = 0;

    this.animationInterval = setInterval(() => {
      const animatedBuddy = { ...buddyToAnimate, expression: expressions[currentExpression] };
      this.displayBuddy(animatedBuddy, `${animatedBuddy.species} is ${expressions[currentExpression]}!`);
      currentExpression = (currentExpression + 1) % expressions.length;
    }, 3000); // Change expression every 3 seconds
  }

  /**
   * Stop buddy animation
   */
  stopAnimation(): void {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
      this.animationInterval = null;
    }
    this.display.animated = false;
  }

  /**
   * Hide buddy display
   */
  hideBuddy(): void {
    this.display.visible = false;
    this.stopAnimation();
  }

  /**
   * Update buddy expression
   */
  updateExpression(expression: string): void {
    if (this.currentBuddy) {
      this.currentBuddy.expression = expression;
      if (this.display.visible) {
        this.displayBuddy(this.currentBuddy);
      }
    }
  }

  /**
   * Get current buddy
   */
  getCurrentBuddy(): any {
    return this.currentBuddy;
  }

  /**
   * Get display status
   */
  getDisplayStatus(): BuddyDisplay {
    return { ...this.display };
  }

  /**
   * Generate new random buddy
   */
  generateNewBuddy(): any {
    this.stopAnimation();
    const newBuddy = this.generateRandomBuddy();
    this.currentBuddy = newBuddy;
    this.display.buddy = newBuddy;
    return newBuddy;
  }

  /**
   * Initialize buddy for skill loading
   */
  initializeForSkillLoad(): void {
    // Generate a random buddy for this session
    const newBuddy = this.generateRandomBuddy();
    this.currentBuddy = newBuddy;
    this.display.buddy = newBuddy;
    this.display.visible = true;

    // Display the buddy
    this.displayBuddy(newBuddy, '🎉 Your session buddy has arrived!');

    // Start animation if enabled
    if (this.display.animated) {
      this.startAnimation(newBuddy);
    }
  }

  /**
   * Cleanup buddy resources
   */
  cleanup(): void {
    this.stopAnimation();
    this.hideBuddy();
    this.currentBuddy = null;
    this.display.buddy = null;
  }
}

// Export singleton instance
export const buddyIntegration = BuddyIntegration.getInstance();

// Export convenience functions
export function initializeBuddy(): void {
  buddyIntegration.initializeForSkillLoad();
}

export function displayBuddy(buddy?: any, message?: string): void {
  buddyIntegration.displayBuddy(buddy, message);
}

export function hideBuddy(): void {
  buddyIntegration.hideBuddy();
}

export function generateNewBuddy(): any {
  return buddyIntegration.generateNewBuddy();
}

export function getCurrentBuddy(): any {
  return buddyIntegration.getCurrentBuddy();
}

export function updateBuddyExpression(expression: string): void {
  buddyIntegration.updateExpression(expression);
}

export function startBuddyAnimation(buddy?: any): void {
  buddyIntegration.startAnimation(buddy);
}

export function stopBuddyAnimation(): void {
  buddyIntegration.stopAnimation();
}

export function cleanupBuddy(): void {
  buddyIntegration.cleanup();
}
