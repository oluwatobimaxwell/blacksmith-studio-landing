import { renderWithProviders } from '@/__tests__/test-utils'
import { ManifestoHero } from '../manifesto-hero'

describe('ManifestoHero', () => {
  it('renders the eyebrow and h1 heading', () => {
    const { getByText, getByRole } = renderWithProviders(<ManifestoHero />)
    expect(getByText('The manifesto')).toBeInTheDocument()
    const h1 = getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/Everyone is building with AI\./i)
    expect(h1.textContent).toMatch(/Not everyone is building well\./i)
  })

  it('renders the rewritten body paragraph with comma instead of em dash', () => {
    const { container } = renderWithProviders(<ManifestoHero />)
    expect(container.textContent).toContain(
      'We can ride it and ship code that lasts, or move fast and leave a mess for the',
    )
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<ManifestoHero />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<ManifestoHero />)).not.toThrow()
  })
})
