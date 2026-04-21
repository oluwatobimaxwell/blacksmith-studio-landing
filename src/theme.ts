import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,

  fonts: {
    heading: "'Outfit', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
    body: "'Outfit', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
    mono: "'SF Mono', 'JetBrains Mono', ui-monospace, 'Menlo', monospace",
  },

  textStyles: {
    display: { fontSize: '32px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.03em' },
    heading: { fontSize: '24px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.025em' },
    title: { fontSize: '17px', fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.015em' },
    subtitle: { fontSize: '15px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.01em' },
    body: { fontSize: '14px', fontWeight: 400, lineHeight: 1.6, letterSpacing: '-0.003em' },
    bodySmall: { fontSize: '13px', fontWeight: 400, lineHeight: 1.6 },
    label: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.4,
      textTransform: 'uppercase' as const,
      letterSpacing: 'wider',
    },
    caption: { fontSize: '11px', fontWeight: 450, lineHeight: 1.4 },
    tiny: {
      fontSize: '10px',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '0.06em',
      textTransform: 'uppercase' as const,
    },
    code: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 1.6,
      fontFamily: "'SF Mono', 'JetBrains Mono', ui-monospace, 'Menlo', monospace",
    },
    landingHero: {
      fontSize: { base: '48px', md: '72px', lg: '88px' },
      fontWeight: 500,
      lineHeight: 1.0,
      letterSpacing: '-0.04em',
    },
    landingHeading: {
      fontSize: { base: '32px', md: '44px', lg: '52px' },
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: '-0.035em',
    },
    landingSubheading: {
      fontSize: { base: '20px', md: '24px' },
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '-0.01em',
    },
    landingBody: {
      fontSize: { base: '17px', md: '19px' },
      fontWeight: 400,
      lineHeight: 1.7,
      letterSpacing: '-0.005em',
    },
    landingCaption: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: '0',
    },
    landingLabel: {
      fontSize: '13px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.03em',
      textTransform: 'uppercase' as const,
    },
  },

  space: {
    '2xs': '2px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '40px',
    '4xl': '48px',
    '5xl': '56px',
    '6xl': '64px',
  },

  radii: {
    xs: '4px',
    sm: '6px',
    md: '10px',
    lg: '14px',
    xl: '18px',
    '2xl': '24px',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.08)',
    md: '0 8px 24px rgba(0, 0, 0, 0.12)',
    lg: '0 32px 80px rgba(0, 0, 0, 0.32)',
    focusRing: '0 0 0 2px var(--fg-1)',
  },

  semanticTokens: {
    colors: {
      // Community-landing tokens (primary surface system)
      paper: { default: 'var(--paper)' },
      'paper.2': { default: 'var(--paper-2)' },
      'paper.3': { default: 'var(--paper-3)' },
      'paper.4': { default: 'var(--paper-4)' },
      ink: { default: 'var(--ink)' },
      'fg.1': { default: 'var(--fg-1)' },
      'fg.2': { default: 'var(--fg-2)' },
      'fg.3': { default: 'var(--fg-3)' },
      'fg.4': { default: 'var(--fg-4)' },
      hairline: { default: 'var(--hairline)' },
      'hairline.strong': { default: 'var(--hairline-strong)' },
      'hairline.ghost': { default: 'var(--hairline-ghost)' },
      scrim: { default: 'var(--scrim)' },
      'btn.primary.bg': { default: 'var(--btn-primary-bg)' },
      'btn.primary.fg': { default: 'var(--btn-primary-fg)' },
      'btn.primary.bgHover': { default: 'var(--btn-primary-bg-hover)' },

      // Studio tokens — retained for legal pages that still consume them
      'studio.bg': { default: 'var(--studio-bg)' },
      'studio.surface': { default: 'var(--studio-surface)' },
      'studio.border': { default: 'var(--studio-border)' },
      'studio.primary': { default: 'var(--studio-primary)' },
      'studio.error': { default: 'var(--studio-error)' },
      'studio.text.primary': { default: 'var(--studio-text-primary)' },
      'studio.text.secondary': { default: 'var(--studio-text-secondary)' },
      'studio.text.muted': { default: 'var(--studio-text-muted)' },
    },
  },

  layerStyles: {
    landingCard: {
      bg: 'var(--paper)',
      borderWidth: '1px',
      borderColor: 'var(--hairline)',
      borderRadius: 'xl',
    },
    landingCardRaised: {
      bg: 'var(--paper-2)',
      borderWidth: '1px',
      borderColor: 'var(--hairline)',
      borderRadius: '2xl',
    },
  },

  components: {
    Button: {
      variants: {
        primary: {
          bg: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-fg)',
          borderRadius: 'lg',
          fontSize: '14px',
          fontWeight: 500,
          _hover: { bg: 'var(--btn-primary-bg-hover)' },
          _active: { transform: 'scale(0.98)' },
        },
        secondary: {
          bg: 'transparent',
          borderWidth: '1px',
          borderColor: 'var(--hairline)',
          color: 'var(--fg-1)',
          borderRadius: 'lg',
          fontSize: '14px',
          fontWeight: 500,
          _hover: { bg: 'var(--paper-3)', borderColor: 'var(--hairline-strong)' },
        },
        ghost: {
          bg: 'transparent',
          color: 'var(--fg-1)',
          borderRadius: 'lg',
          _hover: { bg: 'var(--paper-3)' },
        },
        danger: {
          bg: 'var(--studio-error)',
          color: '#FFFFFF',
          borderRadius: 'lg',
          _hover: { opacity: 0.9 },
          _active: { opacity: 0.8 },
        },
      },
    },

    Card: {
      baseStyle: {
        container: {
          bg: 'var(--paper)',
          borderWidth: '1px',
          borderColor: 'var(--hairline)',
          borderRadius: 'xl',
          shadow: 'sm',
        },
      },
    },

    Input: {
      variants: {
        outline: {
          field: {
            bg: 'var(--paper-2)',
            borderColor: 'var(--hairline)',
            color: 'var(--fg-1)',
            _hover: { borderColor: 'var(--hairline-strong)' },
            _focus: {
              borderColor: 'var(--fg-1)',
              boxShadow: 'focusRing',
            },
          },
        },
      },
    },

    Badge: {
      baseStyle: {
        fontSize: '12px',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 'wider',
        borderRadius: 'full',
      },
    },

    Modal: {
      baseStyle: {
        overlay: {
          bg: 'rgba(10, 10, 10, 0.62)',
          backdropFilter: 'blur(6px)',
        },
        dialog: {
          bg: 'var(--paper)',
          color: 'var(--fg-1)',
          borderWidth: '1px',
          borderColor: 'var(--hairline)',
          borderRadius: '2xl',
          boxShadow: 'lg',
        },
      },
    },
  },
})

export default theme
