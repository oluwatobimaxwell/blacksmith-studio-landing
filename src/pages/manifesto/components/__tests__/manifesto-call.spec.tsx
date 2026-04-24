import { renderWithProviders } from '@/__tests__/test-utils'
import { ManifestoCall } from '../manifesto-call'

describe('ManifestoCall', () => {
  it('renders the eyebrow and h2 heading', () => {
    const { getByText, getByRole } = renderWithProviders(<ManifestoCall />)
    expect(getByText('The call')).toBeInTheDocument()
    const h2 = getByRole('heading', { level: 2 })
    expect(h2.textContent).toMatch(/If you are tired of cleaning up after AI,/i)
    expect(h2.textContent).toMatch(/we built this for you\./i)
  })

  it('rewrites the body with three commas in place of em dashes', () => {
    const { container } = renderWithProviders(<ManifestoCall />)
    const text = container.textContent ?? ''
    expect(text).toContain('If you have spent more time fixing AI code than building your own, this is')
    expect(text).toContain('have always felt like they were built for')
    expect(text).toContain('someone else, this is for you.')
    expect(text).toContain('Wherever you are building from, whatever')
    expect(text).toContain('you are building, come build with us.')
  })

  it('renders the founder signature block', () => {
    const { getByText } = renderWithProviders(<ManifestoCall />)
    expect(getByText('Tobi Sholanke')).toBeInTheDocument()
    expect(getByText(/Founder, The Blacksmith Project/i)).toBeInTheDocument()
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<ManifestoCall />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<ManifestoCall />)).not.toThrow()
  })
})
