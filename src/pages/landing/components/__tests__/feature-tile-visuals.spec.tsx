import { renderWithProviders } from '@/__tests__/test-utils'
import { getFeatureVisual, getFeatureIcon } from '../feature-tile-visuals'
import { walkthroughFeatures } from '../../data/walkthrough-features'

describe('feature-tile-visuals', () => {
  describe('getFeatureVisual', () => {
    it.each(walkthroughFeatures.map((f) => [f.id] as const))(
      'returns a component for known feature "%s"',
      (id) => {
        const Visual = getFeatureVisual(id)
        expect(Visual).toBeDefined()
      },
    )

    it('returns undefined for an unknown feature id', () => {
      expect(getFeatureVisual('nonexistent')).toBeUndefined()
    })

    it.each(walkthroughFeatures.map((f) => [f.id] as const))(
      'renders the visual for "%s" without throwing',
      (id) => {
        const Visual = getFeatureVisual(id)!
        expect(() => renderWithProviders(<Visual />)).not.toThrow()
      },
    )
  })

  describe('getFeatureIcon', () => {
    it.each(walkthroughFeatures.map((f) => [f.id] as const))(
      'returns an icon for known feature "%s"',
      (id) => {
        expect(getFeatureIcon(id)).toBeDefined()
      },
    )

    it('returns undefined for an unknown feature id', () => {
      expect(getFeatureIcon('nonexistent')).toBeUndefined()
    })
  })
})
