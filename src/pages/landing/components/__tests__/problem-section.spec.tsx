import { renderWithProviders } from '@/__tests__/test-utils'
import { ProblemSection } from '../problem-section'

describe('ProblemSection', () => {
  it('renders the eyebrow and section heading', () => {
    const { getByText } = renderWithProviders(<ProblemSection />)
    expect(getByText('The real cost of AI coding')).toBeInTheDocument()
    expect(getByText(/Fast became a new kind of slow\./i)).toBeInTheDocument()
    expect(getByText(/AI debt is the next technical debt\./i)).toBeInTheDocument()
  })

  it('renders the rewritten four-fragment list as plain text', () => {
    const { container } = renderWithProviders(<ProblemSection />)
    const text = container.textContent ?? ''
    expect(text).toContain('Inconsistent architecture. Missing tests. Brittle patterns. All shipped at speed.')
  })

  it('renders the rewritten 80% measurement sentence with a comma (not em dash)', () => {
    const { container } = renderWithProviders(<ProblemSection />)
    expect(container.textContent).toContain(
      'Measured across structure, consistency, and testability, Blacksmith reduces AI coding debt by over 80%',
    )
  })

  it('renders the 80 stat figure', () => {
    const { container } = renderWithProviders(<ProblemSection />)
    expect(container.textContent).toContain('80')
    expect(container.textContent).toContain('Reduction in AI coding debt')
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<ProblemSection />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<ProblemSection />)).not.toThrow()
  })
})
