import type { ReactNode } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

export function DocListItem({ children }: { children: ReactNode }) {
  return (
    <Flex as="li" align="flex-start" gap={3}>
      <Box
        mt="11px"
        w="5px"
        h="5px"
        borderRadius="2px"
        bg="var(--studio-brand-green)"
        boxShadow="0 0 12px rgba(45, 212, 168, 0.35)"
        flexShrink={0}
      />
      <Text
        as="span"
        flex={1}
        fontSize={{ base: '14px', md: '15px' }}
        lineHeight={1.8}
        color="var(--studio-landing-text-secondary)"
      >
        {children}
      </Text>
    </Flex>
  )
}
