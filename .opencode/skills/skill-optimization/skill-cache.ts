/**
 * Skill Caching System
 * Provides intelligent caching for skill data to avoid redundant file I/O
 */

import { readFile, stat } from 'fs/promises'
import { createHash } from 'crypto'

export interface SkillCacheEntry {
  frontmatter: any
  sections: SkillSections
  optimizedContent: string
  lastModified: number
  fileHash: string
  filePath: string
}

export interface SkillSections {
  core: string
  usage: string
  examples: string
  bestPractices: string
  troubleshooting: string
  integration: string
}

export interface SkillContext {
  isFirstInvocation: boolean
  isLearning: boolean
  hasError: boolean
  needsIntegration: boolean
  userIntent?: string
  previousInteractions?: string[]
}

/**
 * Simple in-memory cache for skill data
 */
class SkillCache {
  private cache: Map<string, SkillCacheEntry>
  private timestamps: Map<string, number>
  private fileHashes: Map<string, string>

  constructor() {
    this.cache = new Map()
    this.timestamps = new Map()
    this.fileHashes = new Map()
  }

  /**
   * Get a skill from cache, loading it if necessary
   */
  async getSkill(filePath: string): Promise<SkillCacheEntry> {
    // Check cache first
    const cached = this.cache.get(filePath)
    if (cached && await this.isValid(cached)) {
      return cached
    }

    // Load and cache the skill
    return await this.loadAndCacheSkill(filePath)
  }

  /**
   * Check if a cached entry is still valid
   */
  private async isValid(cached: SkillCacheEntry): Promise<boolean> {
    try {
      const stats = await stat(cached.filePath)
      const currentModified = stats.mtimeMs
      const currentHash = await this.getFileHash(cached.filePath)

      return (
        currentModified === cached.lastModified &&
        currentHash === cached.fileHash
      )
    } catch {
      return false
    }
  }

  /**
   * Load a skill from disk and cache it
   */
  private async loadAndCacheSkill(
    filePath: string
  ): Promise<SkillCacheEntry> {
    try {
      const content = await readFile(filePath, 'utf-8')
      const stats = await stat(filePath)
      const fileHash = await this.getFileHash(filePath)

      // Parse frontmatter and content
      const { frontmatter, content: markdownContent } = this.parseMarkdown(content)

      // Segment content into sections
      const sections = this.parseSkillSections(markdownContent)

      // Optimize content
      const optimizedContent = this.optimizeContent(markdownContent)

      const entry: SkillCacheEntry = {
        frontmatter,
        sections,
        optimizedContent,
        lastModified: stats.mtimeMs,
        fileHash,
        filePath,
      }

      // Cache the entry
      this.cache.set(filePath, entry)
      this.timestamps.set(filePath, Date.now())
      this.fileHashes.set(filePath, fileHash)

      return entry
    } catch (error) {
      throw new Error(`Failed to load skill from ${filePath}: ${error}`)
    }
  }

  /**
   * Parse markdown content into frontmatter and content
   */
  private parseMarkdown(content: string): {
    frontmatter: any
    content: string
  } {
    // Simple frontmatter parsing
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (!frontmatterMatch) {
      return { frontmatter: {}, content }
    }

    try {
      // Parse YAML frontmatter (simplified version)
      const frontmatterText = frontmatterMatch[1]
      const frontmatter = this.parseYAML(frontmatterText)

      const markdownContent = content.slice(frontmatterMatch[0].length + 6)

      return { frontmatter, content: markdownContent }
    } catch {
      return { frontmatter: {}, content }
    }
  }

  /**
   * Parse YAML frontmatter (simplified version)
   */
  private parseYAML(yamlText: string): any {
    const result: any = {}
    const lines = yamlText.split('\n')

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) {
        continue
      }

      const colonIndex = trimmed.indexOf(':')
      if (colonIndex === -1) {
        continue
      }

      const key = trimmed.slice(0, colonIndex).trim()
      let value = trimmed.slice(colonIndex + 1).trim()

      // Handle quoted strings
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      // Handle booleans
      else if (value === 'true') {
        value = true
      } else if (value === 'false') {
        value = false
      }
      // Handle numbers
      else if (!isNaN(Number(value))) {
        value = Number(value)
      }
      // Handle arrays (simplified)
      else if (value.startsWith('[') && value.endsWith(']')) {
        value = value.slice(1, -1).split(',').map((item: string) => item.trim())
      }

      result[key] = value
    }

    return result
  }

  /**
   * Parse skill content into logical sections
   */
  private parseSkillSections(content: string): SkillSections {
    const sections: SkillSections = {
      core: '',
      usage: '',
      examples: '',
      bestPractices: '',
      troubleshooting: '',
      integration: '',
    }

    const lines = content.split('\n')
    let currentSection = 'core'
    let currentContent: string[] = []

    for (const line of lines) {
      if (line.startsWith('## ')) {
        // Save previous section
        if (currentContent.length > 0) {
          sections[currentSection as keyof SkillSections] = currentContent.join('\n')
        }

        // Start new section
        const sectionName = line.slice(3).toLowerCase().replace(/[^a-z]/g, '')
        if (sections.hasOwnProperty(sectionName)) {
          currentSection = sectionName
          currentContent = []
        } else {
          // Unknown section, add to core
          currentContent.push(line)
        }
      } else {
        currentContent.push(line)
      }
    }

    // Save last section
    if (currentContent.length > 0) {
      sections[currentSection as keyof SkillSections] = currentContent.join('\n')
    }

    return sections
  }

  /**
   * Optimize content for AI understanding
   */
  private optimizeContent(content: string): string {
    // Remove excessive whitespace
    let optimized = content.replace(/\n{3,}/g, '\n\n')

    // Remove trailing whitespace from lines
    optimized = optimized.replace(/[ \t]+$/gm, '')

    // Remove duplicate blank lines
    optimized = optimized.replace(/\n\n\n+/g, '\n\n')

    return optimized
  }

  /**
   * Get file hash for cache validation
   */
  private async getFileHash(filePath: string): Promise<string> {
    try {
      const content = await readFile(filePath, 'utf-8')
      return createHash('md5').update(content).digest('hex')
    } catch {
      return ''
    }
  }

  /**
   * Clear the cache
   */
  clear(): void {
    this.cache.clear()
    this.timestamps.clear()
    this.fileHashes.clear()
  }

  /**
   * Get cache statistics
   */
  getStats(): {
    cached: number
    total: number
    hitRate: number
  } {
    const total = this.timestamps.size
    const cached = this.cache.size
    const hitRate = total > 0 ? (cached / total) * 100 : 0

    return { cached, total, hitRate }
  }
}

// Global cache instance
const globalCache = new SkillCache()

export { globalCache as skillCache }
