import type { ReactNode } from 'react'
import { Text } from '@chakra-ui/react'

export function DocSubHeading({ children }: { children: ReactNode }) {
  return (
    <Text
      as="h3"
      fontFamily="body"
      fontSize={{ base: '16px', md: '17px' }}
      fontWeight={600}
      color="var(--studio-landing-text-primary)"
      letterSpacing="-0.015em"
      lineHeight={1.4}
      mt={10}
      mb={4}
    >
      {children}
    </Text>
  )
}
