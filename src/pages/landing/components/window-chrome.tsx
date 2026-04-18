import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface WindowChromeProps {
  title?: string
  children: ReactNode
}

export function WindowChrome({ title = 'blacksmith-studio', children }: WindowChromeProps) {
  return (
    <Box
      borderRadius="10px"
      overflow="hidden"
      borderWidth="1px"
      borderColor="rgba(255,255,255,0.06)"
      bg="var(--walkthrough-window-bg)"
      boxShadow="0 24px 60px rgba(0,0,0,0.45)"
    >
      <Flex
        align="center"
        px={3}
        py="10px"
        gap={3}
        bg="var(--walkthrough-titlebar-bg)"
        borderBottomWidth="1px"
        borderColor="var(--walkthrough-titlebar-border)"
      >
        <HStack spacing={1.5}>
          <Box w="10px" h="10px" borderRadius="full" bg="var(--walkthrough-dot-red)" opacity={0.75} />
          <Box w="10px" h="10px" borderRadius="full" bg="var(--walkthrough-dot-yellow)" opacity={0.75} />
          <Box w="10px" h="10px" borderRadius="full" bg="var(--walkthrough-dot-green)" opacity={0.75} />
        </HStack>
        <Text
          fontSize="11px"
          fontFamily="mono"
          color="rgba(255,255,255,0.35)"
          flex={1}
          textAlign="center"
          noOfLines={1}
        >
          {title}
        </Text>
        <Box w={8} />
      </Flex>
      <Box>{children}</Box>
    </Box>
  )
}
