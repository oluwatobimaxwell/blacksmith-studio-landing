import { walkthroughFeatures, type WalkthroughFeature } from '../walkthrough-features'

describe('walkthroughFeatures', () => {
  it('defines exactly 5 features', () => {
    expect(walkthroughFeatures).toHaveLength(5)
  })

  it('has features with expected IDs in order', () => {
    expect(walkthroughFeatures.map((f) => f.id)).toEqual([
      'canvas',
      'chat',
      'editor',
      'terminal',
      'git',
    ])
  })

  it('each feature has all required fields', () => {
    for (const feature of walkthroughFeatures) {
      expect(feature.id).toBeTruthy()
      expect(feature.label).toBeTruthy()
      expect(feature.headline).toBeTruthy()
      expect(feature.description).toBeTruthy()
      expect(Array.isArray(feature.bullets)).toBe(true)
      expect(feature.bullets.length).toBeGreaterThan(0)
    }
  })

  it('each feature has at least 2 bullets', () => {
    for (const feature of walkthroughFeatures) {
      expect(feature.bullets.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('each bullet is a non-empty string', () => {
    for (const feature of walkthroughFeatures) {
      for (const bullet of feature.bullets) {
        expect(typeof bullet).toBe('string')
        expect(bullet.length).toBeGreaterThan(0)
      }
    }
  })

  it('canvas feature is about multi-agent orchestration', () => {
    const canvas = walkthroughFeatures.find((f) => f.id === 'canvas')
    expect(canvas?.label).toBe('Multi-Agent Canvas')
    expect(canvas?.headline).toContain('engineering team')
  })

  it('chat feature is about AI chat', () => {
    const chat = walkthroughFeatures.find((f) => f.id === 'chat')
    expect(chat?.label).toBe('AI Chat')
  })

  it('editor feature references Monaco editor in its bullets', () => {
    const editor = walkthroughFeatures.find((f) => f.id === 'editor')
    const mentionsMo = editor?.bullets.some((b) => /monaco/i.test(b))
    expect(mentionsMo).toBe(true)
  })

  it('terminal feature covers terminal and dev services', () => {
    const terminal = walkthroughFeatures.find((f) => f.id === 'terminal')
    expect(terminal?.label).toBe('Terminal & Dev Services')
  })

  it('git feature is the last feature', () => {
    expect(walkthroughFeatures[walkthroughFeatures.length - 1].id).toBe('git')
  })

  it('all feature IDs are unique', () => {
    const ids = walkthroughFeatures.map((f) => f.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(walkthroughFeatures.length)
  })

  it('all feature labels are unique', () => {
    const labels = walkthroughFeatures.map((f) => f.label)
    const uniqueLabels = new Set(labels)
    expect(uniqueLabels.size).toBe(walkthroughFeatures.length)
  })
})
