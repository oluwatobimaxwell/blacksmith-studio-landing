import { Button, type ButtonProps } from '@chakra-ui/react'

type ClButtonSize = 'sm' | 'md' | 'lg'
type ClButtonVariant = 'primary' | 'ghost'

interface ClButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  clVariant?: ClButtonVariant
  clSize?: ClButtonSize
}

const SIZE_STYLES: Record<ClButtonSize, { h: string; px: string; fontSize: string; radius: string }> = {
  sm: { h: '30px', px: '12px', fontSize: '12px', radius: 'var(--r-md)' },
  md: { h: '36px', px: '16px', fontSize: '13px', radius: 'var(--r-lg)' },
  lg: { h: '44px', px: '20px', fontSize: '14px', radius: 'var(--r-lg)' },
}

export function ClButton({ clVariant = 'primary', clSize = 'md', children, ...rest }: ClButtonProps) {
  const size = SIZE_STYLES[clSize]
  const variantStyles =
    clVariant === 'primary'
      ? {
          bg: 'var(--btn-primary-bg)',
          color: 'var(--btn-primary-fg)',
          _hover: { bg: 'var(--btn-primary-bg-hover)' },
          _active: { transform: 'scale(0.98)' },
        }
      : {
          bg: 'transparent',
          color: 'var(--fg-1)',
          border: '1px solid var(--hairline)',
          _hover: { bg: 'var(--paper-3)', borderColor: 'var(--hairline-strong)' },
        }

  return (
    <Button
      variant="unstyled"
      display="inline-flex"
      alignItems="center"
      gap="8px"
      fontWeight={500}
      lineHeight="16px"
      h={size.h}
      px={size.px}
      fontSize={size.fontSize}
      borderRadius={size.radius}
      transition="background 120ms var(--ease), border-color 120ms var(--ease), transform 120ms var(--ease)"
      whiteSpace="nowrap"
      {...variantStyles}
      {...rest}
    >
      {children}
    </Button>
  )
}
