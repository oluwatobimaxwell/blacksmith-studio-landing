import { HStack, Box, Text } from '@chakra-ui/react'

export function HeroBadge() {
  return (
    <HStack
      className="cl-reveal"
      display="inline-flex"
      spacing="10px"
      h="30px"
      pr="12px"
      pl="8px"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-full)"
      bg="var(--paper)"
      color="var(--fg-2)"
      mb="28px"
      fontSize="12px"
      fontWeight={500}
      lineHeight="16px"
    >
      <Box w="6px" h="6px" borderRadius="50%" bg="var(--ink)" boxShadow="0 0 0 3px var(--paper-3)" />
      <Text as="span">Blacksmith Studio 0.8 — AI & Prompting</Text>
      <Box w="1px" h="12px" bg="var(--hairline)" />
      <Text as="span" fontFamily="var(--font-mono)" fontSize="11px" color="var(--fg-3)">
        read ↗
      </Text>
    </HStack>
  )
}
