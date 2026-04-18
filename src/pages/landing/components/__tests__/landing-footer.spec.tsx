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
    it('renders the "Blacksmith Studio" brand name', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Blacksmith Studio')).toBeInTheDocument()
    })

    it('renders the brand tagline about being free and open source', () => {
      renderWithProviders(<LandingFooter />)
      expect(
        screen.getByText(/A free, open source desktop IDE with a team of AI agents/i),
      ).toBeInTheDocument()
    })
  })

  describe('Studio column', () => {
    it('renders the "Studio" section title', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Studio')).toBeInTheDocument()
    })

    it('renders the Product link pointing to #features', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Product' })
      expect(link).toHaveAttribute('href', '#features')
    })

    it('renders the Hub link pointing to #graphify', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Hub' })
      expect(link).toHaveAttribute('href', '#graphify')
    })

    it('renders the Showcase link pointing to #showcase', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Showcase' })
      expect(link).toHaveAttribute('href', '#showcase')
    })
  })

  describe('Community column', () => {
    it('renders the "Community" section title', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Community')).toBeInTheDocument()
    })

    it('renders the Discord external link', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Discord' })
      expect(link).toHaveAttribute('href', 'https://discord.gg/blacksmithstudio')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('renders the GitHub external link to the project repo', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'GitHub' })
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/nicholasgriffintn/blacksmith-studio',
      )
    })

    it('renders the Principles internal link pointing to #principles', () => {
      renderWithProviders(<LandingFooter />)
      const link = screen.getByRole('link', { name: 'Principles' })
      expect(link).toHaveAttribute('href', '#principles')
    })
  })

  describe('Legal column', () => {
    it('renders the "Legal" section title', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Legal')).toBeInTheDocument()
    })

    it('renders Privacy and Terms links', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByRole('link', { name: 'Privacy' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Terms' })).toBeInTheDocument()
    })

    it('renders an "Acceptable Use" link', () => {
      renderWithProviders(<LandingFooter />)
      expect(
        screen.getByRole('link', { name: 'Acceptable Use' }),
      ).toBeInTheDocument()
    })
  })

  describe('footer bottom row', () => {
    it('renders the copyright line for 2026 Blacksmith Studio', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText(/© 2026 Blacksmith Studio/i)).toBeInTheDocument()
    })

    it('renders the "Built in Helsinki" origin line', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Built in Helsinki')).toBeInTheDocument()
    })

    it('renders the "Open source" accent text', () => {
      renderWithProviders(<LandingFooter />)
      expect(screen.getByText('Open source')).toBeInTheDocument()
    })
  })

  describe('link counts', () => {
    it('renders at least 15 links across the three columns', () => {
      const { container } = renderWithProviders(<LandingFooter />)
      const footer = container.querySelector('footer')!
      const links = within(footer).getAllByRole('link')
      expect(links.length).toBeGreaterThanOrEqual(15)
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<LandingFooter />)).not.toThrow()
    })
  })
})
