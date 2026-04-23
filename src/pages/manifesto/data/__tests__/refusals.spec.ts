import { refusals } from '../refusals'

describe('refusals data', () => {
  it('exports exactly three refusals', () => {
    expect(refusals).toHaveLength(3)
  })

  it('each refusal has a non-empty claim and reason', () => {
    for (const refusal of refusals) {
      expect(refusal.claim.length).toBeGreaterThan(0)
      expect(refusal.reason.length).toBeGreaterThan(0)
    }
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const refusal of refusals) {
      expect(refusal.claim).not.toMatch(/—/)
      expect(refusal.reason).not.toMatch(/—/)
    }
  })

  it('rewrites the tech-debt refusal with a colon resolving the list', () => {
    const techDebt = refusals.find((r) => r.claim.includes('tech debt as a feature'))
    expect(techDebt).toBeDefined()
    expect(techDebt!.reason).toContain('a codebase held together with assumptions: they pay the real price.')
  })

  it('rewrites the global refusal with a colon defining "the least"', () => {
    const global = refusals.find((r) => r.claim.includes('one city and call it global'))
    expect(global).toBeDefined()
    expect(global!.reason).toContain('the builder with the least: the tightest budget, the slowest connection, the most to prove.')
  })

  it('preserves the price-out refusal unchanged', () => {
    const price = refusals.find((r) => r.claim.includes('price out'))
    expect(price?.reason).toMatch(/A tool for builders has to reach the builders/i)
  })
})
