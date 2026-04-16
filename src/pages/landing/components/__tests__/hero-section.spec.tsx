// Hoisted mock — strips framer-motion animation props so jsdom renders plain DOM.
vi.mock('framer-motion', async () => {
  const React = await import('react')
  return {
    motion: {
      create: (Component: any) =>
        React.forwardRef(
          (
            {
              initial,
              animate,
              exit,
              transition,
              variants,
              whileHover,
              whileTap,
              whileInView,
              viewport,
              ...props
            }: any,
            ref: any,
          ) => React.createElement(Component, { ...props, ref }),
        ),
    },
    AnimatePresence: ({ children }: any) =>
      React.createElement(React.Fragment, null, children),
    useReducedMotion: vi.fn().mockReturnValue(false),
  }
})

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { HeroSection } from '../hero-section'
import { agents } from '../../data/agents'

describe('HeroSection', () => {
  describe('landmark & heading structure', () => {
    it('renders a section landmark with aria-label="Hero"', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
    })

    it('renders the primary headline as an h1', () => {
      renderWithProviders(<HeroSection />)
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
      expect(h1.textContent).toMatch(/Build real software/)
      expect(h1.textContent).toMatch(/The right way/)
    })

    it('renders the subtext describing the product', () => {
      renderWithProviders(<HeroSection />)
      expect(
        screen.getByText(/11 specialized AI agents coordinate to build production-ready software/i),
      ).toBeInTheDocument()
    })
  })

  describe('GitHub badge link', () => {
    it('renders the badge as a link to the Blacksmith Studio GitHub repo', () => {
      renderWithProviders(<HeroSection />)
      const badge = screen.getByRole('link', {
        name: /Free & Open Source · Now on macOS/i,
      })
      expect(badge).toHaveAttribute(
        'href',
        'https://github.com/nicholasgriffintn/blacksmith-studio',
      )
    })

    it('opens the GitHub badge link in a new tab with noopener', () => {
      renderWithProviders(<HeroSection />)
      const badge = screen.getByRole('link', {
        name: /Free & Open Source · Now on macOS/i,
      })
      expect(badge).toHaveAttribute('target', '_blank')
      expect(badge).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('primary CTAs', () => {
    it('renders the "Get Started Free" button', () => {
      renderWithProviders(<HeroSection />)
      const btn = screen.getByRole('button', { name: /Get Started Free/i })
      expect(btn).toBeInTheDocument()
    })

    it('renders a "View on GitHub" link pointing to the repo in a new tab', () => {
      renderWithProviders(<HeroSection />)
      const link = screen.getByRole('link', { name: /View on GitHub/i })
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/nicholasgriffintn/blacksmith-studio',
      )
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('stats row', () => {
    it('renders all four stat values', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.getByText('11')).toBeInTheDocument()
      expect(screen.getByText('80%')).toBeInTheDocument()
      expect(screen.getByText('100%')).toBeInTheDocument()
      expect(screen.getByText('Open')).toBeInTheDocument()
    })

    it('renders all four stat labels', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.getByText('AI agents')).toBeInTheDocument()
      expect(screen.getByText('less tech debt')).toBeInTheDocument()
      expect(screen.getByText('free')).toBeInTheDocument()
      expect(screen.getByText('source')).toBeInTheDocument()
    })
  })

  describe('agent marquee', () => {
    it('renders every agent role at least once', () => {
      renderWithProviders(<HeroSection />)
      for (const agent of agents) {
        expect(screen.getAllByText(agent.role).length).toBeGreaterThan(0)
      }
    })

    it('duplicates each agent role in the marquee for the looping animation', () => {
      renderWithProviders(<HeroSection />)
      // The marquee doubles the array: [...agents, ...agents]
      const pmEntries = screen.getAllByText('Product Manager')
      expect(pmEntries).toHaveLength(2)
    })
  })

  describe('scroll hint', () => {
    it('renders the "Scroll to explore" text', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.getByText('Scroll to explore')).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<HeroSection />)).not.toThrow()
    })
  })
})
