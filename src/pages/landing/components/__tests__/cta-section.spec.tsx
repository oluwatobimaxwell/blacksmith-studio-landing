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
    useAnimation: () => ({ start: vi.fn() }),
    useInView: () => true,
  }
})

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { CtaSection } from '../cta-section'

describe('CtaSection', () => {
  describe('heading and copy', () => {
    it('renders the "Get Started" eyebrow label', () => {
      renderWithProviders(<CtaSection />)
      expect(screen.getByText('Get Started')).toBeInTheDocument()
    })

    it('renders the main headline as an h2', () => {
      renderWithProviders(<CtaSection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2.textContent).toMatch(/Start building/)
      expect(h2.textContent).toMatch(/The right way/)
    })

    it('renders the supporting description text', () => {
      renderWithProviders(<CtaSection />)
      expect(
        screen.getByText(/Download Blacksmith Studio and join a global community of builders/i),
      ).toBeInTheDocument()
    })

    it('renders the commitment/requirements tagline', () => {
      renderWithProviders(<CtaSection />)
      expect(
        screen.getByText(/Free forever · No credit card required · macOS 13\+/i),
      ).toBeInTheDocument()
    })
  })

  describe('primary download CTA', () => {
    it('renders the "Download for macOS" button', () => {
      renderWithProviders(<CtaSection />)
      expect(
        screen.getByRole('button', { name: /Download for macOS/i }),
      ).toBeInTheDocument()
    })
  })

  describe('secondary GitHub CTA', () => {
    it('renders the "View on GitHub" link pointing to the repo', () => {
      renderWithProviders(<CtaSection />)
      const link = screen.getByRole('link', { name: /View on GitHub/i })
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/nicholasgriffintn/blacksmith-studio',
      )
    })

    it('opens the GitHub link in a new tab with noopener', () => {
      renderWithProviders(<CtaSection />)
      const link = screen.getByRole('link', { name: /View on GitHub/i })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<CtaSection />)).not.toThrow()
    })
  })
})
