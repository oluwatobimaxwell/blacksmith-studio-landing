import type { ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

export function DocEmphasis({ children }: { children: ReactNode }) {
  return (
    <Text
      as="strong"
      display="inline"
      fontWeight={600}
      color="var(--studio-landing-text-primary)"
    >
      {children}
    </Text>
  )
}
