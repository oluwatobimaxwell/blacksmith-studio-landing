import { howSteps } from '../how-it-works'

describe('howSteps data', () => {
  it('exports exactly three steps in order', () => {
    expect(howSteps).toHaveLength(3)
    expect(howSteps.map((s) => s.step)).toEqual(['01', '02', '03'])
  })

  it('every step has a non-empty title and body', () => {
    for (const step of howSteps) {
      expect(step.title.length).toBeGreaterThan(0)
      expect(step.body.length).toBeGreaterThan(0)
    }
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const step of howSteps) {
      expect(step.step).not.toMatch(/—/)
      expect(step.title).not.toMatch(/—/)
      expect(step.body).not.toMatch(/—/)
    }
  })

  it('uses the rewritten step 03 body with "Built to" and the standalone "Not just to demo." sentence', () => {
    const step03 = howSteps.find((s) => s.step === '03')
    expect(step03).toBeDefined()
    expect(step03!.body).toBe('Production-ready. Built to maintain, extend, and scale. Not just to demo.')
    expect(step03!.body).not.toContain('Structured to')
  })
})
