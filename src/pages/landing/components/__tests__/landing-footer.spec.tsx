import { screen, within } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LandingFooter } from '../landing-footer'

describe('LandingFooter', () => {
  describe('contentinfo landmark', () => {
    it('renders a <footer> element', () => {
      const { container } = renderWithProviders(<LandingFooter />)
      expect(container.querySelector('footer')).toBeInTheDocument()
    })
  })

  describe('brand block', () => {
    it('renders the "Blacksmith" brand name', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Blacksmith')).toBeInTheDocument()
    })

    it('renders the brand tagline about being free and open source', () => {
      renderWithProviders(<LandingFooter />)
      expect(
        screen.getByText(/The free, open source AI-native IDE for building production-ready software/i),
      ).toBeInTheDocument()
    })

    it('renders the founder name', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Tobi Sholanke')).toBeInTheDocument()
    })

    it('renders the "Built in Nigeria" origin line', () => {
      renderWithProviders(<LandingFooter />)
      expect(
        screen.getByText(/Built in Nigeria · Free, Open Source & Global/i),
      ).toBeInTheDocument()
    })
  })

  describe('product column', () => {
    it('renders the "Product" section title', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Product')).toBeInTheDocument()
    })

    it('renders the internal Features link pointing to #features', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Features' })
      expect(link).toHaveAttribute('href', '#features')
    })

    it('renders the internal Agents link pointing to #agents', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Agents' })
      expect(link).toHaveAttribute('href', '#agents')
    })

    it('marks internal links as non-external (no target="_blank")', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Features' })
      expect(link).not.toHaveAttribute('target')
    })
  })

  describe('community column', () => {
    it('renders the "Community" section title', () => {
      renderWithProviders(<LandingFooter />)
      const communityTitles = screen.getAllByText('Community')
      expect(communityTitles.length).toBeGreaterThan(0)
    })

    it('renders the Discord link pointing to discord.gg/blacksmithstudio', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Discord' })
      expect(link).toHaveAttribute('href', 'https://discord.gg/blacksmithstudio')
    })

    it('renders the Twitter / X external link', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Twitter / X' })
      expect(link).toHaveAttribute('href', 'https://twitter.com/blacksmithstudio')
    })

    it('renders the GitHub external link to the project repo', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'GitHub' })
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/nicholasgriffintn/blacksmith-studio',
      )
    })

    it('marks external links with target="_blank" and rel="noopener noreferrer"', () => {
      renderWithProviders(<LandingFooter />)
      const discord = screen.getByRole('link', { name: 'Discord' })
      expect(discord).toHaveAttribute('target', '_blank')
      expect(discord).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('resources column', () => {
    it('renders the "Resources" section title', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Resources')).toBeInTheDocument()
    })

    it('renders the Documentation external link', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Documentation' })
      expect(link).toHaveAttribute('href', 'https://docs.blacksmith.studio')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('renders Privacy and Terms links', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Terms' })).toBeInTheDocument()
    })
  })

  describe('footer bottom row', () => {
    it('renders the copyright line mentioning 2026 and the founder', () => {
      renderWithProviders(<LandingFooter />)
      expect(
        screen.getByText(/© 2026 Blacksmith Software Community/i),
      ).toBeInTheDocument()
    })

    it('renders the "Built with Claude AI" attribution', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Built with Claude AI')).toBeInTheDocument()
    })

    it('renders the "Free forever" accent text', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Free forever')).toBeInTheDocument()
    })
  })

  describe('link counts per column', () => {
    it('renders the expected number of links total across all columns', () => {
      const { container } = renderWithProviders(<LandingFooter />)
      const footer = container.querySelector('footer')!
      const links = within(footer).getAllByRole('link')
      // 2 product + 4 community + 3 resources = 9 links minimum
      expect(links.length).toBeGreaterThanOrEqual(9)
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<LandingFooter />)).not.toThrow()
    })
  })
})
