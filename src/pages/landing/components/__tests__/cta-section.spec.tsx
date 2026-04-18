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
  describe('section landmark', () => {
    it('renders a section element with id="download"', () => {
      renderWithProviders(<CtaSection />)
      expect(document.getElementById('download')).toBeInTheDocument()
    })
  })

  describe('heading and copy', () => {
    it('renders the main headline as an h2', () => {
      renderWithProviders(<CtaSection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2.textContent).toMatch(/Free\. Forever\./)
      expect(h2.textContent).toMatch(/Installed in seconds\./)
    })

    it('renders each supported OS label', () => {
      renderWithProviders(<CtaSection />)
      expect(screen.getByText('macOS 12+')).toBeInTheDocument()
      expect(screen.getByText('Windows 10+')).toBeInTheDocument()
      expect(screen.getByText('Linux')).toBeInTheDocument()
    })
  })

  describe('primary download CTA', () => {
    it('renders the "Download for macOS" link to #download', () => {
      renderWithProviders(<CtaSection />)
      const link = screen.getByRole('link', { name: /Download for macOS/i })
      expect(link).toHaveAttribute('href', '#download')
    })
  })

  describe('secondary links', () => {
    it('renders the "See the changelog" link', () => {
      renderWithProviders(<CtaSection />)
      expect(
        screen.getByRole('link', { name: /See the changelog/i }),
      ).toBeInTheDocument()
    })

    it('renders the "Browse the Hub" link pointing to #graphify', () => {
      renderWithProviders(<CtaSection />)
      const link = screen.getByRole('link', { name: /Browse the Hub/i })
      expect(link).toHaveAttribute('href', '#graphify')
    })

    it('renders the "Read the docs" link to the docs site', () => {
      renderWithProviders(<CtaSection />)
      const link = screen.getByRole('link', { name: /Read the docs/i })
      expect(link).toHaveAttribute('href', 'https://docs.blacksmith.studio')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<CtaSection />)).not.toThrow()
    })
  })
})
