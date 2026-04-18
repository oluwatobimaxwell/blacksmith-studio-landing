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

import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { HeroSection } from '../hero-section'

describe('HeroSection', () => {
  describe('landmark & heading structure', () => {
    it('renders a section landmark with aria-label="Hero"', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.getByRole('region', { name: 'Hero' })).toBeInTheDocument()
    })

    it('renders the primary headline as an h1 with the two-line copy', () => {
      renderWithProviders(<HeroSection />)
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toBeInTheDocument()
      expect(h1.textContent).toMatch(/A team of AI agents,/)
      expect(h1.textContent).toMatch(/in one IDE\./)
    })

    it('renders the subtext describing how the multi-agent flow works', () => {
      renderWithProviders(<HeroSection />)
      expect(
        screen.getByText(
          /Prompt once\. A product manager plans it, specialists build it, a reviewer checks it\./i,
        ),
      ).toBeInTheDocument()
    })
  })

  describe('primary CTAs', () => {
    it('renders the "Download for macOS" link pointing to #download', () => {
      renderWithProviders(<HeroSection />)
      const link = screen.getByRole('link', { name: /Download for macOS/i })
      expect(link).toHaveAttribute('href', '#download')
    })

    it('renders the "See it build — 90s" button', () => {
      renderWithProviders(<HeroSection />)
      expect(
        screen.getByRole('button', { name: /See it build.*90s/i }),
      ).toBeInTheDocument()
    })
  })

  describe('secondary OS links', () => {
    it('renders a Windows download link', () => {
      renderWithProviders(<HeroSection />)
      const link = screen.getByRole('link', { name: 'Windows' })
      expect(link).toHaveAttribute('href', '#download')
    })

    it('renders a Linux download link', () => {
      renderWithProviders(<HeroSection />)
      const link = screen.getByRole('link', { name: 'Linux' })
      expect(link).toHaveAttribute('href', '#download')
    })
  })

  describe('demo modal', () => {
    it('does not render the demo modal by default', () => {
      renderWithProviders(<HeroSection />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('opens a dialog when the "See it build" button is clicked', async () => {
      const { user } = renderWithProviders(<HeroSection />)
      await user.click(screen.getByRole('button', { name: /See it build.*90s/i }))
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<HeroSection />)).not.toThrow()
    })
  })
})
