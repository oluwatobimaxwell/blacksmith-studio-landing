import { faqs } from '../faqs'

describe('faqs data', () => {
  it('exports exactly eight FAQ entries', () => {
    expect(faqs).toHaveLength(8)
  })

  it('each entry has a non-empty question and answer', () => {
    for (const item of faqs) {
      expect(item.question.length).toBeGreaterThan(0)
      expect(item.answer.length).toBeGreaterThan(0)
    }
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const item of faqs) {
      expect(item.question).not.toMatch(/—/)
      expect(item.answer).not.toMatch(/—/)
    }
  })

  it('rewrites the "real separate agents" answer to use a comma instead of em dash', () => {
    const q1 = faqs.find((f) => f.question.includes('real separate agents'))
    expect(q1).toBeDefined()
    expect(q1!.answer).toContain('They run in sequence with explicit hand-offs, not a single context pretending to be many.')
  })

  it('rewrites the "whole codebase" answer to use a comma', () => {
    const q5 = faqs.find((f) => f.question.includes('whole codebase'))
    expect(q5).toBeDefined()
    expect(q5!.answer).toContain('Each agent sees only what it needs, scoped by the Architect.')
  })

  it('rewrites the "really free" answer to use a colon introducing the three options', () => {
    const q8 = faqs.find((f) => f.question.includes('really free'))
    expect(q8).toBeDefined()
    expect(q8!.answer).toContain('You bring your own model access: a Claude API key, Claude Code CLI, or a local model.')
  })
})
