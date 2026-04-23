import { renderWithProviders } from '@/__tests__/test-utils'
import { HeroBadge } from '../hero-badge'

describe('HeroBadge', () => {
  it('renders the badge label with a middle dot separator (no em dash)', () => {
    const { getByText } = renderWithProviders(<HeroBadge />)
    expect(getByText('Blacksmith Studio 0.8 · AI & Prompting')).toBeInTheDocument()
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<HeroBadge />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders the read-more affordance', () => {
    const { getByText } = renderWithProviders(<HeroBadge />)
    expect(getByText(/read/i)).toBeInTheDocument()
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<HeroBadge />)).not.toThrow()
  })
})
