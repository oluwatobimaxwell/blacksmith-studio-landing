import theme from './theme'

describe('theme', () => {
  it('exports a valid Chakra UI theme object', () => {
    expect(theme).toBeDefined()
    expect(theme.config).toBeDefined()
  })

  it('sets initial color mode to dark', () => {
    expect(theme.config.initialColorMode).toBe('dark')
  })

  it('disables system color mode', () => {
    expect(theme.config.useSystemColorMode).toBe(false)
  })

  describe('fonts', () => {
    it('defines heading, body, and mono font families', () => {
      expect(theme.fonts.heading).toContain('Outfit')
      expect(theme.fonts.body).toContain('Outfit')
      expect(theme.fonts.mono).toContain('SF Mono')
    })
  })

  describe('textStyles', () => {
    it('defines all required text styles', () => {
      const requiredStyles = [
        'display', 'heading', 'title', 'subtitle', 'body',
        'bodySmall', 'label', 'caption', 'tiny', 'code',
      ]
      for (const style of requiredStyles) {
        expect(theme.textStyles).toHaveProperty(style)
      }
    })

    it('display style has correct font weight', () => {
      expect(theme.textStyles.display.fontWeight).toBe(700)
    })

    it('label style has uppercase text transform', () => {
      expect(theme.textStyles.label.textTransform).toBe('uppercase')
    })

    it('code style uses mono font family', () => {
      expect(theme.textStyles.code.fontFamily).toContain('SF Mono')
    })

    it('defines all landing text styles', () => {
      const landingStyles = [
        'landingHero', 'landingHeading', 'landingSubheading',
        'landingBody', 'landingCaption', 'landingLabel',
      ]
      for (const style of landingStyles) {
        expect(theme.textStyles).toHaveProperty(style)
      }
    })

    it('landingHero has fontWeight 500 for modern display type', () => {
      expect(theme.textStyles.landingHero.fontWeight).toBe(500)
    })
  })

  describe('spacing', () => {
    it('defines custom spacing tokens', () => {
      expect(theme.space['2xs']).toBe('2px')
      expect(theme.space.xs).toBe('4px')
      expect(theme.space.sm).toBe('8px')
      expect(theme.space.lg).toBe('16px')
      expect(theme.space['6xl']).toBe('64px')
    })
  })

  describe('radii', () => {
    it('defines border radius tokens', () => {
      expect(theme.radii.xs).toBe('4px')
      expect(theme.radii.full).toBe('9999px')
    })
  })

  describe('shadows', () => {
    it('defines shadow tokens including focus ring', () => {
      expect(theme.shadows.sm).toBeDefined()
      expect(theme.shadows.lg).toBeDefined()
      expect(theme.shadows.focusRing).toContain('rgba(45, 212, 168, 0.4)')
    })
  })

  describe('semantic tokens', () => {
    it('defines studio color tokens', () => {
      const colors = theme.semanticTokens.colors
      expect(colors['studio.bg']).toBeDefined()
      expect(colors['studio.surface']).toBeDefined()
      expect(colors['studio.primary']).toBeDefined()
      expect(colors['studio.error']).toBeDefined()
      expect(colors['studio.text.primary']).toBeDefined()
    })
  })

  describe('layer styles', () => {
    it('defines landingCard layer style', () => {
      const landingCard = theme.layerStyles.landingCard
      expect(landingCard.bg).toContain('--studio-landing-surface')
      expect(landingCard.borderWidth).toBe('1px')
      expect(landingCard.borderRadius).toBe('xl')
    })
  })

  describe('component overrides', () => {
    it('defines Button variants', () => {
      const buttonVariants = theme.components.Button.variants
      expect(buttonVariants).toHaveProperty('primary')
      expect(buttonVariants).toHaveProperty('secondary')
      expect(buttonVariants).toHaveProperty('ghost')
      expect(buttonVariants).toHaveProperty('danger')
    })

    it('defines Card base style', () => {
      expect(theme.components.Card.baseStyle.container.borderRadius).toBe('xl')
    })

    it('defines Input outline variant', () => {
      expect(theme.components.Input.variants.outline).toBeDefined()
    })

    it('defines Badge base style', () => {
      expect(theme.components.Badge.baseStyle.borderRadius).toBe('full')
    })

    it('defines Modal base style with glass effect', () => {
      const baseStyle = theme.components.Modal.baseStyle
      const resolved = typeof baseStyle === 'function' ? baseStyle({}) : baseStyle
      expect(resolved.dialog.backdropFilter).toContain('blur')
    })
  })
})
