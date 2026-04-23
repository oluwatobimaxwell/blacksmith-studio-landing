import type { ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

interface DocLinkProps {
  href: string
  children: ReactNode
}

export function DocLink({ href, children }: DocLinkProps) {
  return (
    <Text
      as="a"
      href={href}
      display="inline"
      color="var(--studio-landing-text-accent)"
      textDecoration="underline"
      textDecorationColor="rgba(45, 212, 168, 0.35)"
      textUnderlineOffset="3px"
      transition="text-decoration-color 0.15s ease, color 0.15s ease"
      _hover={{
        color: 'var(--studio-landing-text-accent)',
        textDecorationColor: 'var(--studio-landing-text-accent)',
        opacity: 1,
      }}
      sx={{
        '&:focus-visible': {
          outline: 'none',
          boxShadow: '0 0 0 2px rgba(45, 212, 168, 0.45)',
          borderRadius: '2px',
        },
      }}
    >
      {children}
    </Text>
  )
}
