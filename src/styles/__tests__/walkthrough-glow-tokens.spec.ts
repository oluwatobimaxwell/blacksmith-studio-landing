import { readFileSync } from 'fs'
import { resolve } from 'path'

const css = readFileSync(resolve(__dirname, '../globals.css'), 'utf-8')

/** Extract all lines within the [data-theme='dark'] block */
function getDarkThemeBlock(source: string): string {
  const match = source.match(/\[data-theme='dark'\]\s*\{([^}]+)\}/)
  if (!match) throw new Error('Dark theme block not found in globals.css')
  return match[1]
}

const darkBlock = getDarkThemeBlock(css)

describe('walkthrough glow CSS tokens in globals.css', () => {
  describe('token existence', () => {
    it('defines --walkthrough-glow-color', () => {
      expect(darkBlock).toContain('--walkthrough-glow-color:')
    })

    it('defines --walkthrough-glow-color-hover', () => {
      expect(darkBlock).toContain('--walkthrough-glow-color-hover:')
    })

    it('defines --walkthrough-window-glow-shadow', () => {
      expect(darkBlock).toContain('--walkthrough-window-glow-shadow:')
    })

    it('defines --walkthrough-window-glow-shadow-hover', () => {
      expect(darkBlock).toContain('--walkthrough-window-glow-shadow-hover:')
    })
  })

  describe('token values', () => {
    it('--walkthrough-glow-color uses brand green at 0.06 opacity', () => {
      expect(darkBlock).toContain('--walkthrough-glow-color: rgba(45, 212, 168, 0.06)')
    })

    it('--walkthrough-glow-color-hover uses brand green at 0.10 opacity', () => {
      expect(darkBlock).toContain('--walkthrough-glow-color-hover: rgba(45, 212, 168, 0.10)')
    })

    it('--walkthrough-window-glow-shadow includes 80px ambient glow spread', () => {
      const match = darkBlock.match(/--walkthrough-window-glow-shadow:\s*([^;]+);/)
      expect(match).toBeTruthy()
      expect(match![1]).toContain('0 0 80px rgba(45, 212, 168, 0.04)')
    })

    it('--walkthrough-window-glow-shadow-hover includes 120px ambient glow spread', () => {
      const match = darkBlock.match(/--walkthrough-window-glow-shadow-hover:\s*([^;]+);/)
      expect(match).toBeTruthy()
      expect(match![1]).toContain('0 0 120px rgba(45, 212, 168, 0.08)')
    })
  })

  describe('existing tokens preserved', () => {
    it('--walkthrough-window-shadow is still defined (not removed or renamed)', () => {
      expect(darkBlock).toContain('--walkthrough-window-shadow:')
    })

    it('--walkthrough-window-bg is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-window-bg:')
    })

    it('--walkthrough-titlebar-bg is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-titlebar-bg:')
    })

    it('--walkthrough-titlebar-border is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-titlebar-border:')
    })

    it('--walkthrough-dot-red is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-dot-red:')
    })

    it('--walkthrough-dot-yellow is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-dot-yellow:')
    })

    it('--walkthrough-dot-green is still defined', () => {
      expect(darkBlock).toContain('--walkthrough-dot-green:')
    })
  })

  describe('glow shadow structure', () => {
    /** Split a CSS box-shadow value into individual layers, respecting rgba() commas */
    function splitShadowLayers(value: string): string[] {
      // Replace commas inside rgba(...) with a placeholder, split on remaining commas, restore
      const placeholder = '<<COMMA>>'
      const safe = value.replace(/rgba\([^)]+\)/g, (m) => m.replace(/,/g, placeholder))
      return safe.split(',').map((l) => l.replace(new RegExp(placeholder, 'g'), ',').trim())
    }

    it('--walkthrough-window-glow-shadow has three layers (border, elevation, ambient)', () => {
      const match = darkBlock.match(/--walkthrough-window-glow-shadow:\s*([^;]+);/)
      expect(match).toBeTruthy()
      const layers = splitShadowLayers(match![1])
      expect(layers).toHaveLength(3)
    })

    it('--walkthrough-window-glow-shadow-hover has three layers', () => {
      const match = darkBlock.match(/--walkthrough-window-glow-shadow-hover:\s*([^;]+);/)
      expect(match).toBeTruthy()
      const layers = splitShadowLayers(match![1])
      expect(layers).toHaveLength(3)
    })

    it('hover shadow uses larger elevation blur (100px vs 80px)', () => {
      const base = darkBlock.match(/--walkthrough-window-glow-shadow:\s*([^;]+);/)
      const hover = darkBlock.match(/--walkthrough-window-glow-shadow-hover:\s*([^;]+);/)
      expect(base![1]).toContain('0 32px 80px')
      expect(hover![1]).toContain('0 40px 100px')
    })
  })
})
