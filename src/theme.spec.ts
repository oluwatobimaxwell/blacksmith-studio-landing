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
    it('defines border radius tokens matching community-landing --r-* scale', () => {
      expect(theme.radii.sm).toBe('6px')
      expect(theme.radii.md).toBe('10px')
      expect(theme.radii.lg).toBe('14px')
      expect(theme.radii.xl).toBe('18px')
      expect(theme.radii['2xl']).toBe('24px')
      expect(theme.radii.full).toBe('9999px')
    })
  })

  describe('shadows', () => {
    it('defines shadow tokens', () => {
      expect(theme.shadows.sm).toBeDefined()
      expect(theme.shadows.lg).toBeDefined()
    })

    it('focus ring uses the foreground token', () => {
      expect(theme.shadows.focusRing).toContain('var(--fg-1)')
    })
  })

  describe('semantic tokens', () => {
    it('defines community-landing surface tokens', () => {
      const colors = theme.semanticTokens.colors
      expect(colors.paper).toBeDefined()
      expect(colors.ink).toBeDefined()
      expect(colors['fg.1']).toBeDefined()
      expect(colors.hairline).toBeDefined()
      expect(colors['btn.primary.bg']).toBeDefined()
    })

    it('retains studio tokens consumed by legal pages', () => {
      const colors = theme.semanticTokens.colors
      expect(colors['studio.bg']).toBeDefined()
      expect(colors['studio.text.primary']).toBeDefined()
    })
  })

  describe('layer styles', () => {
    it('landingCard uses the paper surface and hairline border', () => {
      const landingCard = theme.layerStyles.landingCard
      expect(landingCard.bg).toContain('--paper')
      expect(landingCard.borderColor).toContain('--hairline')
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

    it('primary button uses --btn-primary-* tokens', () => {
      const primary = theme.components.Button.variants.primary
      expect(primary.bg).toContain('--btn-primary-bg')
      expect(primary.color).toContain('--btn-primary-fg')
    })

    it('defines Card base style', () => {
      expect(theme.components.Card.baseStyle.container.borderRadius).toBe('xl')
      expect(theme.components.Card.baseStyle.container.bg).toContain('--paper')
    })

    it('defines Input outline variant', () => {
      expect(theme.components.Input.variants.outline).toBeDefined()
    })

    it('defines Badge base style', () => {
      expect(theme.components.Badge.baseStyle.borderRadius).toBe('full')
    })

    it('Modal overlay matches landing scrim', () => {
      const baseStyle = theme.components.Modal.baseStyle
      const resolved = typeof baseStyle === 'function' ? baseStyle({}) : baseStyle
      expect(resolved.overlay.backdropFilter).toContain('blur')
      expect(resolved.dialog.bg).toContain('--paper')
    })
  })
})
