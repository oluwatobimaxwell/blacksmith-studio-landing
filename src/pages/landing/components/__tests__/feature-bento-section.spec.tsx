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
import { FeatureBentoSection } from '../feature-bento-section'
import { walkthroughFeatures } from '../../data/walkthrough-features'

describe('FeatureBentoSection', () => {
  describe('section landmark', () => {
    it('renders a section element with id="features"', () => {
      renderWithProviders(<FeatureBentoSection />)
      expect(document.getElementById('features')).toBeInTheDocument()
    })

    it('renders the section as an HTML <section>', () => {
      renderWithProviders(<FeatureBentoSection />)
      expect(document.getElementById('features')?.tagName).toBe('SECTION')
    })

    it('section has aria-label="Features"', () => {
      renderWithProviders(<FeatureBentoSection />)
      expect(document.getElementById('features')).toHaveAttribute('aria-label', 'Features')
    })
  })

  describe('heading and copy', () => {
    it('renders the main headline as an h2', () => {
      renderWithProviders(<FeatureBentoSection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2).toHaveTextContent(/Not just an AI chat window/i)
    })

    it('renders the descriptive subtext', () => {
      renderWithProviders(<FeatureBentoSection />)
      expect(
        screen.getByText(/Studio is a full IDE\. Here's what comes in the box\./i),
      ).toBeInTheDocument()
    })
  })

  describe('bento grid tiles', () => {
    it('renders exactly one tile per feature', () => {
      renderWithProviders(<FeatureBentoSection />)
      const articles = screen.getAllByRole('article')
      expect(articles).toHaveLength(walkthroughFeatures.length)
    })

    it('renders every feature headline simultaneously', () => {
      renderWithProviders(<FeatureBentoSection />)
      for (const feature of walkthroughFeatures) {
        expect(
          screen.getByRole('heading', { level: 3, name: feature.headline }),
        ).toBeInTheDocument()
      }
    })

    it('renders every feature description simultaneously', () => {
      renderWithProviders(<FeatureBentoSection />)
      for (const feature of walkthroughFeatures) {
        expect(screen.getByText(feature.description)).toBeInTheDocument()
      }
    })
  })

  describe('no scroll-locked walkthrough', () => {
    it('does not render a feature-navigation nav (bento shows all at once)', () => {
      renderWithProviders(<FeatureBentoSection />)
      const nav = document.querySelector('nav[aria-label="Feature navigation"]')
      expect(nav).toBeNull()
    })

    it('does not render any dot buttons with aria-current', () => {
      renderWithProviders(<FeatureBentoSection />)
      expect(document.querySelector('[aria-current="true"]')).toBeNull()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<FeatureBentoSection />)).not.toThrow()
    })
  })
})
