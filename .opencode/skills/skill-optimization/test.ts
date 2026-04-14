/**
 * Test Suite for Skill Optimization System
 * Tests caching, smart delivery, and integration
 */

import { describe, it, expect, beforeEach, afterEach } from 'bun:test'
import {
  getOptimizedSkillContent,
  getOptimizationStats,
  clearOptimizationCaches,
  getSkillInvocationStats,
  resetSkillInvocationTracking,
  preloadSkills,
  isSkillCached,
  getCacheSize,
  getSkillCacheEntry,
  invalidateSkillCache,
  getCachedSkillPaths,
  getSkillSections,
  getOptimizedContent,
  updateSkillCacheEntry,
} from './index'
import { skillCache } from './skill-cache'

describe('Skill Optimization System', () => {
  beforeEach(() => {
    clearOptimizationCaches()
  })

  afterEach(() => {
    clearOptimizationCaches()
  })

  describe('Caching Infrastructure', () => {
    it('should cache a skill after first load', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(result.fromCache).toBe(true)
      expect(result.content).toBeTruthy()
      expect(result.sections).toBeTruthy()
    })

    it('should load skill from cache on subsequent calls', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      // First load
      const firstResult = await getOptimizedSkillContent('loop', skillPath)
      const firstLoadTime = firstResult.performance.loadTime

      // Second load (should be from cache)
      const secondResult = await getOptimizedSkillContent('loop', skillPath)
      const secondLoadTime = secondResult.performance.loadTime

      expect(secondResult.fromCache).toBe(true)
      expect(secondLoadTime).toBeLessThan(firstLoadTime)
    })

    it('should detect file modifications and invalidate cache', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      // Load skill
      const firstResult = await getOptimizedSkillContent('loop', skillPath)
      const firstHash = firstResult.sections.core

      // Simulate file modification by invalidating cache
      invalidateSkillCache(skillPath)

      // Load again
      const secondResult = await getOptimizedSkillContent('loop', skillPath)

      expect(secondResult.fromCache).toBe(true)
    })

    it('should track cache statistics', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)
      await getOptimizedSkillContent('batch', '.opencode/skills/batch/SKILL.md')

      const stats = getOptimizationStats()

      expect(stats.cache.cached).toBeGreaterThan(0)
      expect(stats.cache.total).toBeGreaterThan(0)
      expect(stats.cache.hitRate).toBeGreaterThan(0)
    })
  })

  describe('Smart Content Delivery', () => {
    it('should include core section in all contexts', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(result.content).toBeTruthy()
      expect(result.sections.core).toBeTruthy()
    })

    it('should include usage section for first-time invocation', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, 'how do I use this')

      expect(result.context.isFirstInvocation).toBe(true)
      expect(result.content).toBeTruthy()
    })

    it('should include examples when user is learning', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, 'show me examples')

      expect(result.context.isLearning).toBe(true)
      expect(result.content).toBeTruthy()
    })

    it('should include troubleshooting on error state', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, 'fix this error')

      expect(result.context.hasError).toBe(true)
      expect(result.content).toBeTruthy()
    })

    it('should include integration when needed', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, 'integrate with batch')

      expect(result.context.needsIntegration).toBe(true)
      expect(result.content).toBeTruthy()
    })
  })

  describe('Invocation Tracking', () => {
    it('should track invocation counts', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)
      await getOptimizedSkillContent('loop', skillPath)

      const stats = getSkillInvocationStats('loop')

      expect(stats.invocationCount).toBe(2)
    })

    it('should track time since last use', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      const stats = getSkillInvocationStats('loop')

      expect(stats.timeSinceLastUse).toBeLessThan(1000) // Should be very recent
    })

    it('should reset invocation tracking', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)
      resetSkillInvocationTracking('loop')

      const stats = getSkillInvocationStats('loop')

      expect(stats.invocationCount).toBe(0)
      expect(stats.timeSinceLastUse).toBeUndefined()
    })
  })

  describe('Performance Optimization', () => {
    it('should measure load time', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(result.performance.loadTime).toBeGreaterThanOrEqual(0)
      expect(typeof result.performance.loadTime).toBe('number')
    })

    it('should measure content size', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(result.performance.contentSize).toBeGreaterThan(0)
      expect(typeof result.performance.contentSize).toBe('number')
    })

    it('should track included sections', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(Array.isArray(result.performance.sectionsIncluded)).toBe(true)
      expect(result.performance.sectionsIncluded.length).toBeGreaterThan(0)
    })
  })

  describe('Cache Management', () => {
    it('should check if skill is cached', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      expect(isSkillCached(skillPath)).toBe(false)

      await getOptimizedSkillContent('loop', skillPath)

      expect(isSkillCached(skillPath)).toBe(true)
    })

    it('should get cache size', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      const size = getCacheSize()

      expect(size).toBeGreaterThan(0)
      expect(typeof size).toBe('number')
    })

    it('should get skill cache entry', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      const entry = getSkillCacheEntry(skillPath)

      expect(entry).toBeTruthy()
      expect(entry?.frontmatter).toBeTruthy()
      expect(entry?.sections).toBeTruthy()
    })

    it('should get cached skill paths', async () => {
      const skillPath1 = '.opencode/skills/loop/SKILL.md'
      const skillPath2 = '.opencode/skills/batch/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath1)
      await getOptimizedSkillContent('batch', skillPath2)

      const paths = getCachedSkillPaths()

      expect(paths.length).toBeGreaterThanOrEqual(2)
      expect(paths).toContain(skillPath1)
      expect(paths).toContain(skillPath2)
    })

    it('should get skill sections', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      const sections = getSkillSections(skillPath)

      expect(sections).toBeTruthy()
      expect(sections?.core).toBeTruthy()
    })

    it('should get optimized content', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      const content = getOptimizedContent(skillPath)

      expect(content).toBeTruthy()
      expect(typeof content).toBe('string')
    })

    it('should update skill cache entry', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      const result = await getOptimizedSkillContent('loop', skillPath)
      const entry = getSkillCacheEntry(skillPath)

      if (entry) {
        const updatedEntry = { ...entry, optimizedContent: 'Updated content' }
        updateSkillCacheEntry(skillPath, updatedEntry)

        const updatedContent = getOptimizedContent(skillPath)

        expect(updatedContent).toBe('Updated content')
      }
    })
  })

  describe('Preloading', () => {
    it('should preload multiple skills', async () => {
      const skillPaths = [
        '.opencode/skills/loop/SKILL.md',
        '.opencode/skills/batch/SKILL.md',
        '.opencode/skills/skillify/SKILL.md',
      ]

      const result = await preloadSkills(skillPaths)

      expect(result.preloaded).toBe(3)
      expect(result.failed).toBe(0)
      expect(result.totalTime).toBeGreaterThan(0)
    })

    it('should handle preload failures gracefully', async () => {
      const skillPaths = [
        '.opencode/skills/loop/SKILL.md',
        '.opencode/skills/nonexistent/SKILL.md',
      ]

      const result = await preloadSkills(skillPaths)

      expect(result.preloaded).toBe(1)
      expect(result.failed).toBe(1)
    })
  })

  describe('Integration with Existing Skills', () => {
    it('should work with loop skill', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath)

      expect(result.content).toBeTruthy()
      expect(result.sections.core).toContain('loop')
    })

    it('should work with batch skill', async () => {
      const skillPath = '.opencode/skills/batch/SKILL.md'
      const result = await getOptimizedSkillContent('batch', skillPath)

      expect(result.content).toBeTruthy()
      expect(result.sections.core).toContain('batch')
    })

    it('should work with buddy skill', async () => {
      const skillPath = '.opencode/skills/buddy/SKILL.md'
      const result = await getOptimizedSkillContent('buddy', skillPath)

      expect(result.content).toBeTruthy()
      expect(result.sections.core).toContain('buddy')
    })
  })

  describe('Edge Cases', () => {
    it('should handle non-existent skill paths', async () => {
      const skillPath = '.opencode/skills/nonexistent/SKILL.md'

      await expect(getOptimizedSkillContent('nonexistent', skillPath)).rejects.toThrow()
    })

    it('should handle empty user intent', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, '')

      expect(result.content).toBeTruthy()
      expect(result.context.userIntent).toBe('')
    })

    it('should handle undefined user intent', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'
      const result = await getOptimizedSkillContent('loop', skillPath, undefined)

      expect(result.content).toBeTruthy()
      expect(result.context.userIntent).toBeUndefined()
    })

    it('should clear all caches', async () => {
      const skillPath = '.opencode/skills/loop/SKILL.md'

      await getOptimizedSkillContent('loop', skillPath)

      expect(isSkillCached(skillPath)).toBe(true)

      clearOptimizationCaches()

      expect(isSkillCached(skillPath)).toBe(false)
    })
  })
})
