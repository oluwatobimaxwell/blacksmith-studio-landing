import { tenets } from '../tenets'

describe('tenets data', () => {
  it('exports exactly five tenets', () => {
    expect(tenets).toHaveLength(5)
  })

  it('each tenet has a unique id, a non-empty title, and a non-empty body', () => {
    const ids = tenets.map((t) => t.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const tenet of tenets) {
      expect(tenet.id.length).toBeGreaterThan(0)
      expect(tenet.title.length).toBeGreaterThan(0)
      expect(tenet.body.length).toBeGreaterThan(0)
    }
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const tenet of tenets) {
      expect(tenet.id).not.toMatch(/—/)
      expect(tenet.title).not.toMatch(/—/)
      expect(tenet.body).not.toMatch(/—/)
    }
  })

  it('rewrites senior-code body to end with comma-joined "ship, not the one you rewrite"', () => {
    const senior = tenets.find((t) => t.id === 'senior-code')
    expect(senior).toBeDefined()
    expect(senior!.body).toContain('The first draft is the one you ship, not the one you rewrite.')
  })

  it('rewrites team body to use a colon for the role list and a standalone closing sentence', () => {
    const team = tenets.find((t) => t.id === 'team')
    expect(team).toBeDefined()
    expect(team!.body).toContain('Blacksmith ships the full team: PM, architect, designer, engineers, reviewer, QA, writer.')
    expect(team!.body).toContain('All working through a real process, not a single prompt.')
  })

  it('rewrites taste body to two declarations separated by a period', () => {
    const taste = tenets.find((t) => t.id === 'taste')
    expect(taste).toBeDefined()
    expect(taste!.body).toContain('We build for the reader of the code, not only the writer.')
    expect(taste!.body).toContain('The people who inherit what you build deserve it legible.')
  })

  it('preserves untouched free and global tenets', () => {
    const free = tenets.find((t) => t.id === 'free')
    const global = tenets.find((t) => t.id === 'global')
    expect(free?.body).toMatch(/The core tools stay free/i)
    expect(global?.body).toMatch(/We design for the builder with the most to prove/i)
  })
})
