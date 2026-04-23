import type { ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

export function DocParagraph({ children }: { children: ReactNode }) {
  return (
    <Text
      as="p"
      fontSize={{ base: '14px', md: '15px' }}
      lineHeight={1.8}
      color="var(--studio-landing-text-secondary)"
      mb={4}
    >
      {children}
    </Text>
  )
}
