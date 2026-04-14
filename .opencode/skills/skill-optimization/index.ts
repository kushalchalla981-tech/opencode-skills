/**
 * Skill Optimization System
 * Main module that integrates caching, segmentation, and smart delivery
 */

import { skillCache, type SkillCacheEntry, type SkillSections } from './skill-cache.js'
import {
  getContextualContent,
  createSkillContext,
  updateInvocationTracking,
  type SkillContext,
} from './smart-delivery.js'

export interface OptimizedSkillResult {
  content: string
  fromCache: boolean
  sections: SkillSections
  context: SkillContext
  performance: {
    loadTime: number
    cacheHit: boolean
    contentSize: number
    sectionsIncluded: string[]
  }
}

// Track invocation counts for each skill
const invocationCounts = new Map<string, number>()
const lastInvocationTimes = new Map<string, number>()

/**
 * Get optimized skill content with caching and smart delivery
 */
export async function getOptimizedSkillContent(
  skillName: string,
  skillPath: string,
  userIntent?: string
): Promise<OptimizedSkillResult> {
  const startTime = Date.now()

  try {
    // Get skill from cache (loads if not cached)
    const cacheEntry = await skillCache.getSkill(skillPath)

    // Get invocation tracking
    const invocationCount = invocationCounts.get(skillName) || 0
    const timeSinceLastUse = lastInvocationTimes.get(skillName)
      ? Date.now() - lastInvocationTimes.get(skillName)!
      : undefined

    // Create context
    const context = createSkillContext(
      skillName,
      userIntent,
      invocationCount,
      timeSinceLastUse
    )

    // Get relevant content based on context
    const content = getContextualContent(cacheEntry.sections, context)

    // Update invocation tracking
    const { newCount, newTimeSinceLastUse } = updateInvocationTracking(
      skillName,
      invocationCount,
      timeSinceLastUse
    )
    invocationCounts.set(skillName, newCount)
    lastInvocationTimes.set(skillName, Date.now())

    const endTime = Date.now()
    const loadTime = endTime - startTime

    // Determine which sections were included
    const sectionsIncluded = Object.keys(cacheEntry.sections).filter(
      section => cacheEntry.sections[section as keyof SkillSections]
    )

    return {
      content,
      fromCache: cacheEntry.lastModified === cacheEntry.lastModified,
      sections: cacheEntry.sections,
      context,
      performance: {
        loadTime,
        cacheHit: cacheEntry.lastModified === cacheEntry.lastModified,
        contentSize: content.length,
        sectionsIncluded,
      },
    }
  } catch (error) {
    throw new Error(`Failed to get optimized skill content: ${error}`)
  }
}

/**
 * Get performance statistics for the optimization system
 */
export function getOptimizationStats(): {
  cache: {
    cached: number
    total: number
    hitRate: number
  }
  invocationTracking: {
    skillsTracked: number
    totalInvocations: number
  }
} {
  const cacheStats = skillCache.getStats()

  const skillsTracked = invocationCounts.size
  const totalInvocations = Array.from(invocationCounts.values()).reduce(
    (sum, count) => sum + count,
    0
  )

  return {
    cache: cacheStats,
    invocationTracking: {
      skillsTracked,
      totalInvocations,
    },
  }
}

/**
 * Clear all optimization caches
 */
export function clearOptimizationCaches(): void {
  skillCache.clear()
  invocationCounts.clear()
  lastInvocationTimes.clear()
}

/**
 * Get invocation tracking for a specific skill
 */
export function getSkillInvocationStats(skillName: string): {
  invocationCount: number
  timeSinceLastUse: number | undefined
} {
  return {
    invocationCount: invocationCounts.get(skillName) || 0,
    timeSinceLastUse: lastInvocationTimes.get(skillName)
      ? Date.now() - lastInvocationTimes.get(skillName)!
      : undefined,
  }
}

/**
 * Reset invocation tracking for a specific skill
 */
export function resetSkillInvocationTracking(skillName: string): void {
  invocationCounts.delete(skillName)
  lastInvocationTimes.delete(skillName)
}

/**
 * Preload skills into cache for faster first-time access
 */
export async function preloadSkills(skillPaths: string[]): Promise<{
  preloaded: number
  failed: number
  totalTime: number
}> {
  const startTime = Date.now()
  let preloaded = 0
  let failed = 0

  for (const skillPath of skillPaths) {
    try {
      await skillCache.getSkill(skillPath)
      preloaded++
    } catch (error) {
      failed++
    }
  }

  const totalTime = Date.now() - startTime

  return {
    preloaded,
    failed,
    totalTime,
  }
}

/**
 * Check if a skill is cached
 */
export function isSkillCached(skillPath: string): boolean {
  const stats = skillCache.getStats()
  return stats.cached > 0 && skillCache['cache'].has(skillPath)
}

/**
 * Get cache size in bytes
 */
export function getCacheSize(): number {
  let totalSize = 0

  for (const [path, entry] of skillCache['cache']) {
    totalSize += entry.optimizedContent.length
    totalSize += JSON.stringify(entry.frontmatter).length
    totalSize += JSON.stringify(entry.sections).length
  }

  return totalSize
}

/**
 * Get skill cache entry details
 */
export function getSkillCacheEntry(skillPath: string): SkillCacheEntry | undefined {
  return skillCache['cache'].get(skillPath)
}

/**
 * Invalidate cache for a specific skill
 */
export function invalidateSkillCache(skillPath: string): void {
  skillCache['cache'].delete(skillPath)
  skillCache['timestamps'].delete(skillPath)
  skillCache['fileHashes'].delete(skillPath)
}

/**
 * Get all cached skill paths
 */
export function getCachedSkillPaths(): string[] {
  return Array.from(skillCache['cache'].keys())
}

/**
 * Get skill sections for a cached skill
 */
export function getSkillSections(skillPath: string): SkillSections | undefined {
  const entry = skillCache['cache'].get(skillPath)
  return entry?.sections
}

/**
 * Get optimized content for a skill
 */
export function getOptimizedContent(skillPath: string): string | undefined {
  const entry = skillCache['cache'].get(skillPath)
  return entry?.optimizedContent
}

/**
 * Update skill cache entry
 */
export function updateSkillCacheEntry(
  skillPath: string,
  entry: SkillCacheEntry
): void {
  skillCache['cache'].set(skillPath, entry)
  skillCache['timestamps'].set(skillPath, Date.now())
  skillCache['fileHashes'].set(skillPath, entry.fileHash)
}
