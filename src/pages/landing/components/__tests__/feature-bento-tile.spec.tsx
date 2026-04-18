import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { FeatureBentoTile } from '../feature-bento-tile'
import { walkthroughFeatures, type WalkthroughFeature } from '../../data/walkthrough-features'

function featureById(id: string): WalkthroughFeature {
  const f = walkthroughFeatures.find((feat) => feat.id === id)
  if (!f) throw new Error(`Feature "${id}" not found`)
  return f
}

describe('FeatureBentoTile', () => {
  describe('semantic structure', () => {
    it('renders as an <article> element', () => {
      renderWithProviders(<FeatureBentoTile feature={featureById('graphify')} />)
      expect(screen.getByRole('article')).toBeInTheDocument()
    })

    it('labels the article by the headline (aria-labelledby matches h3 id)', () => {
      renderWithProviders(<FeatureBentoTile feature={featureById('runner')} />)
      const article = screen.getByRole('article')
      const h3 = screen.getByRole('heading', { level: 3, name: featureById('runner').headline })
      expect(article).toHaveAttribute('aria-labelledby', h3.id)
      expect(h3.id).toBe('feature-runner-title')
    })

    it('renders the headline as an h3', () => {
      renderWithProviders(<FeatureBentoTile feature={featureById('graphify')} />)
      expect(
        screen.getByRole('heading', { level: 3, name: featureById('graphify').headline }),
      ).toBeInTheDocument()
    })
  })

  describe('content rendering', () => {
    it.each(walkthroughFeatures.map((f) => [f.id] as const))(
      'renders the description for feature "%s"',
      (id) => {
        const feature = featureById(id)
        renderWithProviders(<FeatureBentoTile feature={feature} />)
        expect(screen.getByText(feature.description)).toBeInTheDocument()
      },
    )

    it.each(walkthroughFeatures.map((f) => [f.id] as const))(
      'renders the headline for feature "%s"',
      (id) => {
        const feature = featureById(id)
        renderWithProviders(<FeatureBentoTile feature={feature} />)
        expect(
          screen.getByRole('heading', { level: 3, name: feature.headline }),
        ).toBeInTheDocument()
      },
    )
  })

  describe('unknown feature id (graceful degradation)', () => {
    it('renders without throwing when feature.id has no registered visual/icon', () => {
      const mystery: WalkthroughFeature = {
        id: 'mystery',
        label: 'Mystery',
        headline: 'An unknown feature',
        description: 'No description available',
      }
      expect(() => renderWithProviders(<FeatureBentoTile feature={mystery} />)).not.toThrow()
      expect(screen.getByRole('heading', { level: 3, name: 'An unknown feature' })).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing for every known feature', () => {
      for (const feature of walkthroughFeatures) {
        expect(() =>
          renderWithProviders(<FeatureBentoTile feature={feature} />),
        ).not.toThrow()
      }
    })
  })
})
