import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,

  fonts: {
    heading: 'Outfit, sans-serif',
    body: 'Outfit, sans-serif',
    mono: '"SF Mono", "Fira Code", monospace',
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
      fontFamily: '"SF Mono", "Fira Code", monospace',
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
    md: '8px',
    lg: '10px',
    xl: '12px',
    '2xl': '14px',
    '3xl': '16px',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.5)',
    md: '0 4px 12px rgba(0,0,0,0.4)',
    lg: '0 8px 30px rgba(0,0,0,0.5)',
    focusRing: '0 0 0 2px rgba(45, 212, 168, 0.4)',
  },

  semanticTokens: {
    colors: {
      'studio.bg': { default: 'var(--studio-bg)' },
      'studio.bgSidebar': { default: 'var(--studio-bg-sidebar)' },
      'studio.surface': { default: 'var(--studio-surface)' },
      'studio.surfaceRaised': { default: 'var(--studio-surface-raised)' },
      'studio.border': { default: 'var(--studio-border)' },
      'studio.borderHover': { default: 'var(--studio-border-hover)' },
      'studio.primary': { default: 'var(--studio-primary)' },
      'studio.primaryOn': { default: 'var(--studio-primary-on)' },
      'studio.secondary': { default: 'var(--studio-secondary)' },
      'studio.tertiary': { default: 'var(--studio-tertiary)' },
      'studio.error': { default: 'var(--studio-error)' },
      'studio.success': { default: 'var(--studio-success)' },
      'studio.warning': { default: 'var(--studio-warning)' },
      'studio.link': { default: 'var(--studio-link)' },
      'studio.text.primary': { default: 'var(--studio-text-primary)' },
      'studio.text.secondary': { default: 'var(--studio-text-secondary)' },
      'studio.text.tertiary': { default: 'var(--studio-text-tertiary)' },
      'studio.text.muted': { default: 'var(--studio-text-muted)' },
      'studio.brandGreen': { default: 'var(--studio-brand-green)' },
      'studio.brandGreenSubtle': { default: 'var(--studio-brand-green-subtle)' },
      'studio.brandGreenBorder': { default: 'var(--studio-brand-green-border)' },
    },
  },

  layerStyles: {
    landingCard: {
      bg: 'var(--studio-landing-surface)',
      borderWidth: '1px',
      borderColor: 'var(--studio-landing-border)',
      borderRadius: 'xl',
    },
  },

  components: {
    Button: {
      variants: {
        primary: {
          bg: 'var(--studio-primary)',
          color: 'var(--studio-primary-on)',
          borderRadius: 'lg',
          fontSize: '14px',
          fontWeight: 500,
          _hover: { opacity: 0.9 },
          _active: { opacity: 0.8 },
        },
        brand: {
          bg: 'var(--studio-brand-green)',
          color: '#121212',
          borderRadius: 'lg',
          fontSize: '14px',
          fontWeight: 600,
          _hover: { opacity: 0.9, transform: 'translateY(-1px)' },
          _active: { opacity: 0.8 },
        },
        secondary: {
          bg: 'transparent',
          borderWidth: '1px',
          borderColor: 'var(--studio-border)',
          color: 'var(--studio-text-primary)',
          _hover: { bg: 'var(--studio-surface-raised)' },
        },
        ghost: {
          bg: 'transparent',
          color: 'var(--studio-text-primary)',
          _hover: { bg: 'var(--studio-surface-raised)' },
        },
        danger: {
          bg: 'var(--studio-error)',
          color: 'white',
          _hover: { opacity: 0.9 },
          _active: { opacity: 0.8 },
        },
      },
    },

    Card: {
      baseStyle: {
        container: {
          bg: 'var(--studio-surface)',
          borderWidth: '1px',
          borderColor: 'var(--studio-border)',
          borderRadius: 'xl',
          shadow: 'sm',
        },
      },
    },

    Input: {
      variants: {
        outline: {
          field: {
            bg: 'var(--studio-surface)',
            borderColor: 'var(--studio-border)',
            _focus: {
              borderColor: 'var(--studio-brand-green-border)',
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
          bg: 'blackAlpha.600',
        },
        dialog: {
          bg: 'var(--studio-glass-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderWidth: '1px',
          borderColor: 'var(--studio-glass-border)',
        },
      },
    },
  },
})

export default theme
