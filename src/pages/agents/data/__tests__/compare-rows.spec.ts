import { compareRows } from '../compare-rows'

describe('compareRows data', () => {
  it('exports exactly eight comparison rows', () => {
    expect(compareRows).toHaveLength(8)
  })

  it('each row has a non-empty label, single, and team string', () => {
    for (const row of compareRows) {
      expect(row.label.length).toBeGreaterThan(0)
      expect(row.single.length).toBeGreaterThan(0)
      expect(row.team.length).toBeGreaterThan(0)
    }
  })

  it('row labels are unique', () => {
    const labels = compareRows.map((r) => r.label)
    expect(new Set(labels).size).toBe(labels.length)
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const row of compareRows) {
      expect(row.label).not.toMatch(/—/)
      expect(row.single).not.toMatch(/—/)
      expect(row.team).not.toMatch(/—/)
    }
  })

  it('rewrites Best for / single with colon and "or review"', () => {
    const row = compareRows.find((r) => r.label === 'Best for')
    expect(row?.single).toBe('A focused task: bug fix, refactor, doc tweak, or review.')
  })

  it('rewrites Best for / team to "from plan through ship"', () => {
    const row = compareRows.find((r) => r.label === 'Best for')
    expect(row?.team).toBe('A whole feature or project, from plan through ship.')
  })

  it('rewrites You drive / team to two sentences', () => {
    const row = compareRows.find((r) => r.label === 'You drive')
    expect(row?.team).toBe('Pick the goal. PM scopes and sequences the work.')
  })

  it('rewrites Hand-offs / single to "None. Single input, single output."', () => {
    const row = compareRows.find((r) => r.label === 'Hand-offs')
    expect(row?.single).toBe('None. Single input, single output.')
  })

  it('rewrites Tests / single to "On request. You decide what to cover."', () => {
    const row = compareRows.find((r) => r.label === 'Tests')
    expect(row?.single).toBe('On request. You decide what to cover.')
  })

  it('rewrites Time to first output / single to "Seconds. Straight to the answer."', () => {
    const row = compareRows.find((r) => r.label === 'Time to first output')
    expect(row?.single).toBe('Seconds. Straight to the answer.')
  })

  it('rewrites Time to first output / team to "Minutes. Plan first, then build."', () => {
    const row = compareRows.find((r) => r.label === 'Time to first output')
    expect(row?.team).toBe('Minutes. Plan first, then build.')
  })
})
