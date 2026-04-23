import { demoSteps } from '../demo-steps'

describe('demoSteps data', () => {
  it('exports exactly eleven demo steps', () => {
    expect(demoSteps).toHaveLength(11)
  })

  it('each step has a non-empty agent, t, title, and body', () => {
    for (const step of demoSteps) {
      expect(step.agent.length).toBeGreaterThan(0)
      expect(step.t).toMatch(/^\d{2}:\d{2}$/)
      expect(step.title.length).toBeGreaterThan(0)
      expect(step.body.length).toBeGreaterThan(0)
    }
  })

  it('agent identifiers are unique across the demo', () => {
    const agents = demoSteps.map((s) => s.agent)
    expect(new Set(agents).size).toBe(agents.length)
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const step of demoSteps) {
      expect(step.agent).not.toMatch(/—/)
      expect(step.t).not.toMatch(/—/)
      expect(step.title).not.toMatch(/—/)
      expect(step.body).not.toMatch(/—/)
    }
  })

  it('rewrites the code-reviewer step body with a colon explaining "one real bug"', () => {
    const cr = demoSteps.find((s) => s.agent === 'cr')
    expect(cr).toBeDefined()
    expect(cr!.body).toBe('Two nits, one real bug: hand-off of the slot ID was stringly-typed. Flagged and fixed.')
  })
})
