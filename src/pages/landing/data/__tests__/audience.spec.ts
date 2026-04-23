import { audienceRows } from '../audience'

describe('audienceRows data', () => {
  it('exports an array of four audience rows', () => {
    expect(Array.isArray(audienceRows)).toBe(true)
    expect(audienceRows).toHaveLength(4)
  })

  it('every row has a non-empty name and body', () => {
    for (const row of audienceRows) {
      expect(typeof row.name).toBe('string')
      expect(row.name.length).toBeGreaterThan(0)
      expect(typeof row.body).toBe('string')
      expect(row.body.length).toBeGreaterThan(0)
    }
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const row of audienceRows) {
      expect(row.name).not.toMatch(/—/)
      expect(row.body).not.toMatch(/—/)
    }
  })

  it('uses the rewritten Developers row body with a colon-introduced list', () => {
    const dev = audienceRows.find((r) => r.name === 'Developers')
    expect(dev).toBeDefined()
    expect(dev!.body).toContain('codes the way you\'d want your team to: structured, consistent, testable.')
  })

  it('uses the rewritten Teams & small businesses row body without "custom software"', () => {
    const teams = audienceRows.find((r) => r.name === 'Teams & small businesses')
    expect(teams).toBeDefined()
    expect(teams!.body).toContain('Custom dashboards, portals, and internal tools.')
    expect(teams!.body).toContain('Without the overhead of a custom dev agency.')
    expect(teams!.body.toLowerCase()).not.toContain('custom software')
  })

  it('preserves the unedited Non-technical founders and Students rows', () => {
    const founders = audienceRows.find((r) => r.name === 'Non-technical founders')
    const students = audienceRows.find((r) => r.name === 'Students & learners')
    expect(founders?.body).toMatch(/Go from idea to working product/i)
    expect(students?.body).toMatch(/Build real things the right way from the start/i)
  })
})
