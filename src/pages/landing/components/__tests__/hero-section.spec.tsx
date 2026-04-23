import { renderWithProviders } from '@/__tests__/test-utils'
import { HeroSection } from '../hero-section'

describe('HeroSection', () => {
  it('renders the headline', () => {
    const { getByRole } = renderWithProviders(<HeroSection />)
    const h1 = getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/AI writes code in seconds\./i)
    expect(h1.textContent).toMatch(/Someone still has to maintain it\./i)
  })

  it('renders the rewritten subhead with colon-introduced agent list', () => {
    const { container } = renderWithProviders(<HeroSection />)
    expect(container.textContent).toContain(
      'Blacksmith Studio runs a coordinated team of specialist AI agents: Architect, Engineer, Reviewer, QA.',
    )
  })

  it('keeps the "code you get isn\'t just fast" beat from the rewritten paragraph', () => {
    const { container } = renderWithProviders(<HeroSection />)
    expect(container.textContent).toContain(
      "The code you get isn't just fast. It's structured, tested, and clean from line one.",
    )
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<HeroSection />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders both download CTAs', () => {
    const { getByText } = renderWithProviders(<HeroSection />)
    expect(getByText('Download Blacksmith Studio')).toBeInTheDocument()
    expect(getByText('Join the community')).toBeInTheDocument()
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<HeroSection />)).not.toThrow()
  })
})
