import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

type Tone = 'default' | 'accent'

interface DocCalloutProps {
  tone?: Tone
  children: ReactNode
}

const toneStyles: Record<Tone, { bg: string; border: string; accent: string }> = {
  default: {
    bg: 'var(--studio-landing-surface)',
    border: 'var(--studio-landing-border)',
    accent: 'var(--studio-landing-text-muted)',
  },
  accent: {
    bg: 'var(--studio-brand-green-subtle)',
    border: 'var(--studio-brand-green-border)',
    accent: 'var(--studio-brand-green)',
  },
}

export function DocCallout({ tone = 'default', children }: DocCalloutProps) {
  const styles = toneStyles[tone]

  return (
    <Box
      role="note"
      position="relative"
      bg={styles.bg}
      border="1px solid"
      borderColor={styles.border}
      borderRadius="10px"
      px={{ base: 4, md: 5 }}
      py={4}
      my={6}
      _before={{
        content: '""',
        position: 'absolute',
        top: 3,
        bottom: 3,
        left: 0,
        width: '3px',
        borderRadius: '0 3px 3px 0',
        bg: styles.accent,
      }}
    >
      {children}
    </Box>
  )
}
