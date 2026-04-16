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

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { FeatureScreenshot } from '../feature-screenshot'
import { walkthroughFeatures, type WalkthroughFeature } from '../../data/walkthrough-features'
import { useReducedMotion } from 'framer-motion'

function featureById(id: string): WalkthroughFeature {
  const f = walkthroughFeatures.find((feat) => feat.id === id)
  if (!f) throw new Error(`Feature "${id}" not found`)
  return f
}

describe('FeatureScreenshot', () => {
  describe('WindowChrome title bar', () => {
    it.each([
      ['canvas', 'Blacksmith Studio — Multi-Agent Canvas'],
      ['chat', 'Blacksmith Studio — AI Chat'],
      ['editor', 'Blacksmith Studio — Code Editor'],
      ['terminal', 'Blacksmith Studio — Terminal'],
      ['git', 'Blacksmith Studio — Git'],
    ])('renders the correct title for the %s feature', (id, expectedTitle) => {
      renderWithProviders(<FeatureScreenshot feature={featureById(id)} />)
      expect(screen.getByText(expectedTitle)).toBeInTheDocument()
    })

    it('renders the title bar as decorative (aria-hidden) since the outer chrome owns the label', () => {
      const { container } = renderWithProviders(<FeatureScreenshot feature={featureById('canvas')} />)
      const titleText = screen.getByText('Blacksmith Studio — Multi-Agent Canvas')
      // Walk up to find the title bar (HStack) that wraps the title text
      const titleBar = titleText.closest('[aria-hidden="true"]')
      expect(titleBar).not.toBeNull()
      expect(container).toBeDefined()
    })
  })

  describe('accessibility — image alt text owns the description', () => {
    it('exposes the screenshot via the inner <img> alt (no nested role="img")', () => {
      renderWithProviders(<FeatureScreenshot feature={featureById('canvas')} />)
      const img = screen.getByAltText(/Multi-Agent Canvas feature — /i)
      expect(img.tagName).toBe('IMG')
    })

    it('builds the alt from feature.label and feature.headline for each feature', () => {
      for (const feature of walkthroughFeatures) {
        const { unmount } = renderWithProviders(<FeatureScreenshot feature={feature} />)
        expect(
          screen.getByAltText(`${feature.label} feature — ${feature.headline}`),
        ).toBeInTheDocument()
        unmount()
      }
    })
  })

  describe('screenshot image', () => {
    it.each([
      ['canvas'],
      ['chat'],
      ['editor'],
      ['terminal'],
      ['git'],
    ])('renders the screenshot image with the expected src for the %s feature', (id) => {
      const feature = featureById(id)
      renderWithProviders(<FeatureScreenshot feature={feature} />)
      const img = screen.getByAltText(`${feature.label} feature — ${feature.headline}`)
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', `/assets/screenshots/${feature.id}.svg`)
    })

    it('marks the screenshot image as lazy-loaded for performance', () => {
      const feature = featureById('canvas')
      renderWithProviders(<FeatureScreenshot feature={feature} />)
      const img = screen.getByAltText(`${feature.label} feature — ${feature.headline}`)
      expect(img).toHaveAttribute('loading', 'lazy')
    })

    it('marks the screenshot image as async-decoded', () => {
      const feature = featureById('canvas')
      renderWithProviders(<FeatureScreenshot feature={feature} />)
      const img = screen.getByAltText(`${feature.label} feature — ${feature.headline}`)
      expect(img).toHaveAttribute('decoding', 'async')
    })

    it('uses feature.id in the image source, not the label', () => {
      const feature = featureById('terminal')
      renderWithProviders(<FeatureScreenshot feature={feature} />)
      const img = screen.getByAltText(`${feature.label} feature — ${feature.headline}`)
      expect(img.getAttribute('src')).toMatch(/\/terminal\.svg$/)
    })

    it('renders exactly one screenshot image per feature', () => {
      const feature = featureById('git')
      renderWithProviders(<FeatureScreenshot feature={feature} />)
      const images = screen.getAllByRole('img')
      const screenshots = images.filter((el) => el.tagName === 'IMG')
      expect(screenshots).toHaveLength(1)
    })
  })

  describe('traffic light dots', () => {
    it('renders three traffic-light dots inside the decorative title bar', () => {
      const { container } = renderWithProviders(
        <FeatureScreenshot feature={featureById('canvas')} />,
      )
      const titleBar = container.querySelector('[aria-hidden="true"]')
      expect(titleBar).not.toBeNull()
      // Dots are sibling Boxes rendered first inside the title bar
      const dots = titleBar!.querySelectorAll('div.chakra-stack > div')
      // Depending on Chakra's internal markup, fall back to scanning for 11px circles via style
      // We just need *at least* three direct children rendered as the dot row.
      expect(dots.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe('switching between features', () => {
    it('updates the image src when the feature prop changes', () => {
      const { rerender } = renderWithProviders(
        <FeatureScreenshot feature={featureById('canvas')} />,
      )
      expect(screen.getByRole('img', { name: /Multi-Agent Canvas feature — /i })).toHaveAttribute(
        'src',
        '/assets/screenshots/canvas.svg',
      )

      rerender(<FeatureScreenshot feature={featureById('editor')} />)
      expect(screen.getByRole('img', { name: /Code Editor feature — /i })).toHaveAttribute(
        'src',
        '/assets/screenshots/editor.svg',
      )
    })

    it('updates the image alt when the feature prop changes', () => {
      const { rerender } = renderWithProviders(
        <FeatureScreenshot feature={featureById('canvas')} />,
      )
      expect(
        screen.getByAltText('Multi-Agent Canvas feature — Your entire engineering team. In one window.'),
      ).toBeInTheDocument()

      rerender(<FeatureScreenshot feature={featureById('git')} />)
      expect(
        screen.getByAltText('Git Integration feature — Version control with AI understanding.'),
      ).toBeInTheDocument()
    })
  })

  describe('reduced motion', () => {
    it('renders the screenshot content when prefers-reduced-motion is set', () => {
      vi.mocked(useReducedMotion).mockReturnValue(true)
      renderWithProviders(<FeatureScreenshot feature={featureById('canvas')} />)
      expect(
        screen.getByAltText(/Multi-Agent Canvas feature —/),
      ).toBeInTheDocument()
    })

    it('still renders the title bar under reduced motion', () => {
      vi.mocked(useReducedMotion).mockReturnValue(true)
      renderWithProviders(<FeatureScreenshot feature={featureById('git')} />)
      expect(screen.getByText('Blacksmith Studio — Git')).toBeInTheDocument()
    })
  })

  describe('unknown feature id', () => {
    it('renders the image with the unknown id in the src (graceful degradation)', () => {
      const unknownFeature: WalkthroughFeature = {
        id: 'unknown',
        label: 'Unknown',
        headline: 'Unknown feature',
        description: 'No description',
        bullets: ['bullet'],
      }
      renderWithProviders(<FeatureScreenshot feature={unknownFeature} />)
      const img = screen.getByAltText('Unknown feature — Unknown feature')
      expect(img).toHaveAttribute('src', '/assets/screenshots/unknown.svg')
    })

    it('falls back to "Blacksmith Studio — {label}" in the title bar when the feature id is not in titleMap', () => {
      const unknownFeature: WalkthroughFeature = {
        id: 'mystery',
        label: 'Mystery',
        headline: 'Mystery feature',
        description: 'No description',
        bullets: ['bullet'],
      }
      renderWithProviders(<FeatureScreenshot feature={unknownFeature} />)
      // Title bar uses the fallback derived from feature.label
      expect(screen.getByText('Blacksmith Studio — Mystery')).toBeInTheDocument()
      // And the image still renders with its descriptive alt
      expect(screen.getByAltText('Mystery feature — Mystery feature')).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing for every known feature', () => {
      for (const feature of walkthroughFeatures) {
        expect(() =>
          renderWithProviders(<FeatureScreenshot feature={feature} />),
        ).not.toThrow()
      }
    })
  })
})
