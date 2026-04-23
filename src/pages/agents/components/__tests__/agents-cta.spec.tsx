import { renderWithProviders } from '@/__tests__/test-utils'
import { AgentsCta } from '../agents-cta'
import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

describe('AgentsCta', () => {
  it('renders the eyebrow and heading', () => {
    const { getByText, getByRole } = renderWithProviders(<AgentsCta />)
    expect(getByText('Join us')).toBeInTheDocument()
    const h2 = getByRole('heading', { level: 2 })
    expect(h2.textContent).toMatch(/Done fixing AI code\./i)
    expect(h2.textContent).toMatch(/Start shipping it clean\./i)
  })

  it('rewrites the body to use a comma instead of an em dash', () => {
    const { container } = renderWithProviders(<AgentsCta />)
    expect(container.textContent).toContain(
      'The community',
    )
    expect(container.textContent).toContain(
      'is how the team gets better, and how yours does too.',
    )
  })

  it('renders both CTA buttons with shared constants for hrefs', () => {
    const { getByText } = renderWithProviders(<AgentsCta />)
    const discord = getByText('Join on Discord').closest('a')
    const github = getByText('Contribute on GitHub').closest('a')
    expect(discord).toHaveAttribute('href', DISCORD_URL)
    expect(discord).toHaveAttribute('target', '_blank')
    expect(discord).toHaveAttribute('rel', 'noopener noreferrer')
    expect(github).toHaveAttribute('href', GITHUB_URL)
    expect(github).toHaveAttribute('target', '_blank')
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<AgentsCta />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<AgentsCta />)).not.toThrow()
  })
})
