/**
 * Smart Content Delivery System
 * Determines which skill sections to include based on context
 */

import type { SkillSections } from './skill-cache.js'

export interface SkillContext {
  isFirstInvocation: boolean
  isLearning: boolean
  hasError: boolean
  needsIntegration: boolean
  userIntent?: string
  previousInteractions?: string[]
  skillName: string
  invocationCount: number
  timeSinceLastUse?: number
}

/**
 * Get relevant content based on context
 */
export function getRelevantContent(
  sections: SkillSections,
  context: SkillContext
): string {
  const relevantSections: string[] = []

  // Always include core section (frontmatter + essential instructions)
  if (sections.core) {
    relevantSections.push(sections.core)
  }

  // Include usage section for first-time usage
  if (context.isFirstInvocation && sections.usage) {
    relevantSections.push(sections.usage)
  }

  // Include examples when user is learning
  if (context.isLearning && sections.examples) {
    relevantSections.push(sections.examples)
  }

  // Include troubleshooting on errors
  if (context.hasError && sections.troubleshooting) {
    relevantSections.push(sections.troubleshooting)
  }

  // Include integration when relevant
  if (context.needsIntegration && sections.integration) {
    relevantSections.push(sections.integration)
  }

  // Include best practices for experienced users
  if (!context.isFirstInvocation && !context.isLearning && sections.bestPractices) {
    relevantSections.push(sections.bestPractices)
  }

  // Combine sections with proper spacing
  return relevantSections.join('\n\n')
}

/**
 * Determine if this is a first-time invocation
 */
export function isFirstInvocation(
  invocationCount: number,
  timeSinceLastUse?: number
): boolean {
  // First invocation ever
  if (invocationCount === 0) {
    return true
  }

  // First invocation in a while (more than 5 minutes since last use)
  if (timeSinceLastUse && timeSinceLastUse > 300000) {
    return true
  }

  return false
}

/**
 * Determine if user is learning (based on user intent)
 */
export function isUserLearning(userIntent?: string): boolean {
  if (!userIntent) {
    return false
  }

  const learningKeywords = [
    'how', 'what', 'explain', 'show me', 'help', 'example', 'tutorial',
    'learn', 'understand', 'teach', 'guide', 'walkthrough'
  ]

  return learningKeywords.some(keyword =>
    userIntent.toLowerCase().includes(keyword)
  )
}

/**
 * Determine if there's an error state
 */
export function hasErrorState(userIntent?: string): boolean {
  if (!userIntent) {
    return false
  }

  const errorKeywords = [
    'error', 'fail', 'broken', 'not working', 'issue', 'problem',
    'troubleshoot', 'debug', 'fix', 'repair', 'resolve'
  ]

  return errorKeywords.some(keyword =>
    userIntent.toLowerCase().includes(keyword)
  )
}

/**
 * Determine if integration is needed
 */
export function needsIntegration(userIntent?: string): boolean {
  if (!userIntent) {
    return false
  }

  const integrationKeywords = [
    'integrate', 'combine', 'together', 'with', 'and', 'plus',
    'alongside', 'also', 'additionally', 'furthermore'
  ]

  return integrationKeywords.some(keyword =>
    userIntent.toLowerCase().includes(keyword)
  )
}

/**
 * Create skill context from invocation data
 */
export function createSkillContext(
  skillName: string,
  userIntent?: string,
  invocationCount: number = 0,
  timeSinceLastUse?: number
): SkillContext {
  return {
    skillName,
    isFirstInvocation: isFirstInvocation(invocationCount, timeSinceLastUse),
    isLearning: isUserLearning(userIntent),
    hasError: hasErrorState(userIntent),
    needsIntegration: needsIntegration(userIntent),
    userIntent,
    invocationCount,
    timeSinceLastUse,
  }
}

/**
 * Get context-aware content for a skill
 */
export function getContextualContent(
  sections: SkillSections,
  context: SkillContext
): string {
  return getRelevantContent(sections, context)
}

/**
 * Get context-aware content for a skill (legacy signature for compatibility)
 */
export function getContextualContentLegacy(
  sections: SkillSections,
  skillName: string,
  userIntent?: string,
  invocationCount: number = 0,
  timeSinceLastUse?: number
): string {
  const context = createSkillContext(
    skillName,
    userIntent,
    invocationCount,
    timeSinceLastUse
  )

  return getRelevantContent(sections, context)
}

/**
 * Update invocation tracking
 */
export function updateInvocationTracking(
  skillName: string,
  invocationCount: number,
  timeSinceLastUse?: number
): {
  newCount: number
  newTimeSinceLastUse: number
} {
  const newCount = invocationCount + 1
  const newTimeSinceLastUse = timeSinceLastUse ? 0 : timeSinceLastUse

  return {
    newCount,
    newTimeSinceLastUse,
  }
}
