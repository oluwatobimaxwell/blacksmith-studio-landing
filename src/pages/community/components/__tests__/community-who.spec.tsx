import { renderWithProviders } from '@/__tests__/test-utils'
import { CommunityWho } from '../community-who'

describe('CommunityWho', () => {
  it('renders the eyebrow and section heading', () => {
    const { getByText } = renderWithProviders(<CommunityWho />)
    expect(getByText('Who is here')).toBeInTheDocument()
    expect(getByText(/Sixty-two countries,/i)).toBeInTheDocument()
    expect(getByText(/and counting\./i)).toBeInTheDocument()
  })

  it('rewrites the closing paragraph to use a comma instead of em dash', () => {
    const { container } = renderWithProviders(<CommunityWho />)
    expect(container.textContent).toContain(
      'You will find a version of yourself in here, and a version',
    )
    expect(container.textContent).toContain(
      'of the person you are about to become.',
    )
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<CommunityWho />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<CommunityWho />)).not.toThrow()
  })
})
