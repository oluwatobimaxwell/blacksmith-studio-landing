// vi.mock calls are hoisted before imports by Vitest
vi.mock('framer-motion', async () => {
  const React = await import('react')
  return {
    motion: {
      create: (Component: any) =>
        React.forwardRef(({ initial, animate, exit, transition, ...props }: any, ref: any) =>
          React.createElement(Component, { ...props, ref })
        ),
    },
    AnimatePresence: ({ children }: any) => React.createElement(React.Fragment, null, children),
    useReducedMotion: vi.fn().mockReturnValue(false),
  }
})

vi.mock('../../hooks/use-scroll-progress')

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { useScrollProgress } from '../../hooks/use-scroll-progress'
import { FeatureWalkthroughSection } from '../feature-walkthrough-section'
import { walkthroughFeatures } from '../../data/walkthrough-features'
import { useReducedMotion } from 'framer-motion'

const DEFAULT_SCROLL = {
  sectionRef: { current: null } as any,
  activeIndex: 0,
  segmentProgress: 0,
  totalProgress: 0,
}

beforeEach(() => {
  vi.mocked(useScrollProgress).mockReturnValue(DEFAULT_SCROLL)
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
})

// The dot nav uses `display={{ base: 'none', md: 'flex' }}`. Chakra responsive props
// compile to CSS @media queries which jsdom does not evaluate, so the nav resolves to
// display: none in tests. Pass { hidden: true } so testing-library still finds the
// elements in the accessibility tree.
const QUERY_OPTS = { hidden: true } as const

afterEach(() => {
  vi.restoreAllMocks()
})

describe('FeatureWalkthroughSection', () => {
  describe('accessibility landmarks', () => {
    it('renders a section element with id="features"', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(document.getElementById('features')).toBeInTheDocument()
    })

    it('section has aria-label="Features walkthrough"', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(document.getElementById('features')).toHaveAttribute(
        'aria-label',
        'Features walkthrough',
      )
    })

    it('renders a nav element with aria-label="Feature navigation"', () => {
      const { container } = renderWithProviders(<FeatureWalkthroughSection />)
      // Chakra responsive `display: none` on base hides the nav from getByRole
      // even with hidden:true in some configs; query the DOM directly.
      const navs = container.querySelectorAll('nav[aria-label="Feature navigation"]')
      expect(navs.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('feature dot nav', () => {
    it('renders one dot button per feature, each labeled by feature name', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      for (const feature of walkthroughFeatures) {
        expect(
          screen.getByRole('button', { name: new RegExp(feature.label), ...QUERY_OPTS }),
        ).toBeInTheDocument()
      }
    })

    it('active dot (index 0) has aria-current="true"', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      const btn = screen.getByRole('button', { name: /Multi-Agent Canvas/, ...QUERY_OPTS })
      expect(btn).toHaveAttribute('aria-current', 'true')
    })

    it('inactive dots do not have aria-current', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      const inactive = ['AI Chat', 'Code Editor', 'Terminal & Dev Services', 'Git Integration']
      for (const label of inactive) {
        const btn = screen.getByRole('button', { name: new RegExp(label), ...QUERY_OPTS })
        expect(btn).not.toHaveAttribute('aria-current')
      }
    })

    it('updates aria-current when activeIndex changes', () => {
      vi.mocked(useScrollProgress).mockReturnValue({
        ...DEFAULT_SCROLL,
        activeIndex: 2,
        totalProgress: 0.4,
      })
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(
        screen.getByRole('button', { name: /Code Editor/, ...QUERY_OPTS }),
      ).toHaveAttribute('aria-current', 'true')
      expect(
        screen.getByRole('button', { name: /Multi-Agent Canvas/, ...QUERY_OPTS }),
      ).not.toHaveAttribute('aria-current')
    })
  })

  describe('active feature text content', () => {
    it('shows the first feature headline when activeIndex is 0', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(screen.getByText(walkthroughFeatures[0]!.headline)).toBeInTheDocument()
    })

    it('shows the first feature description when activeIndex is 0', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(screen.getByText(walkthroughFeatures[0]!.description)).toBeInTheDocument()
    })

    it('shows the first feature bullets', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      for (const bullet of walkthroughFeatures[0]!.bullets) {
        expect(screen.getByText(bullet)).toBeInTheDocument()
      }
    })

    it('shows the third feature headline when activeIndex is 2', () => {
      vi.mocked(useScrollProgress).mockReturnValue({
        ...DEFAULT_SCROLL,
        activeIndex: 2,
        totalProgress: 0.4,
      })
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(screen.getByText(walkthroughFeatures[2]!.headline)).toBeInTheDocument()
    })

    it('shows the last feature headline when activeIndex is 4', () => {
      vi.mocked(useScrollProgress).mockReturnValue({
        ...DEFAULT_SCROLL,
        activeIndex: 4,
        totalProgress: 1,
      })
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(screen.getByText(walkthroughFeatures[4]!.headline)).toBeInTheDocument()
    })

    it('renders the "Features" section label', () => {
      renderWithProviders(<FeatureWalkthroughSection />)
      expect(screen.getByText('Features')).toBeInTheDocument()
    })
  })

  describe('dot click scrolling', () => {
    it('clicking a dot calls window.scrollTo', async () => {
      const { user } = renderWithProviders(<FeatureWalkthroughSection />)
      await user.click(screen.getByRole('button', { name: /AI Chat/, ...QUERY_OPTS }))
      expect(window.scrollTo).toHaveBeenCalledWith(
        expect.objectContaining({ behavior: 'smooth' }),
      )
    })

    it('clicking the third dot scrolls to its position', async () => {
      const { user } = renderWithProviders(<FeatureWalkthroughSection />)
      await user.click(screen.getByRole('button', { name: /Code Editor/, ...QUERY_OPTS }))
      expect(window.scrollTo).toHaveBeenCalledTimes(1)
    })

    it('pressing Enter on a focused dot calls window.scrollTo', async () => {
      const { user } = renderWithProviders(<FeatureWalkthroughSection />)
      const btn = screen.getByRole('button', { name: /Terminal/, ...QUERY_OPTS })
      btn.focus()
      await user.keyboard('{Enter}')
      expect(window.scrollTo).toHaveBeenCalled()
    })
  })

  describe('reduced motion', () => {
    it('renders without animation when prefers-reduced-motion is set', () => {
      vi.mocked(useReducedMotion).mockReturnValue(true)
      renderWithProviders(<FeatureWalkthroughSection />)
      // Content still renders correctly — no crash, headline visible
      expect(screen.getByText(walkthroughFeatures[0]!.headline)).toBeInTheDocument()
    })
  })
})
