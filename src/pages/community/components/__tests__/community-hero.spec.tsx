import { renderWithProviders } from '@/__tests__/test-utils'
import { CommunityHero } from '../community-hero'

describe('CommunityHero', () => {
  it('renders the eyebrow and h1 heading', () => {
    const { getByText, getByRole } = renderWithProviders(<CommunityHero />)
    expect(getByText('The community')).toBeInTheDocument()
    const h1 = getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/You are not/i)
    expect(h1.textContent).toMatch(/building alone\./i)
  })

  it('renders the rewritten body with parallel "where" clauses joined by a comma', () => {
    const { container } = renderWithProviders(<CommunityHero />)
    expect(container.textContent).toContain(
      'The community is where you learn to use it, and',
    )
    expect(container.textContent).toContain(
      'where the people using it learn from each other.',
    )
  })

  it('renders the supporting tagline', () => {
    const { getByText } = renderWithProviders(<CommunityHero />)
    expect(getByText(/A global room, built for builders\./i)).toBeInTheDocument()
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<CommunityHero />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<CommunityHero />)).not.toThrow()
  })
})
