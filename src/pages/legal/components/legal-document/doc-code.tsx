import type { ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

export function DocCode({ children }: { children: ReactNode }) {
  return (
    <Text
      as="code"
      display="inline"
      fontFamily="mono"
      fontSize="0.875em"
      bg="var(--studio-landing-surface)"
      border="1px solid var(--studio-landing-border)"
      borderRadius="4px"
      px="6px"
      py="1px"
      color="var(--studio-landing-text-primary)"
    >
      {children}
    </Text>
  )
}
