import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { MockShell } from './mock-shell'

const ACTIONS = ['Create a resource', 'Add a page', 'Build an API', 'Add auth', 'Fix a bug']

export function MockHome() {
  return (
    <MockShell title="Blacksmith Studio">
      <VStack
        spacing="18px"
        align="center"
        position="relative"
        className="cl-card-grid-sm"
        bg="var(--paper)"
        pt="40px"
        pb="28px"
        px="28px"
      >
        <Flex
          w="44px"
          h="44px"
          bg="var(--ink)"
          color="var(--paper)"
          align="center"
          justify="center"
          borderRadius="10px"
          fontWeight={700}
          fontSize="22px"
        >
          B
        </Flex>
        <VStack spacing="4px" textAlign="center">
          <Text fontSize="22px" lineHeight="28px" fontWeight={600} letterSpacing="-0.02em">
            Good evening, builder
          </Text>
          <Text fontSize="12px" lineHeight="18px" color="var(--fg-3)">
            AI-native IDE. Build with Claude, solo or with a team of agents.
          </Text>
        </VStack>

        <Box
          w="full"
          maxW="360px"
          border="1px solid var(--hairline)"
          borderRadius="18px"
          bg="var(--paper)"
          p="12px 14px"
          boxShadow="0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)"
        >
          <Text fontSize="13px" lineHeight="18px" color="var(--fg-3)" mb="10px">
            Ask Claude to build something…
          </Text>
          <HStack spacing="6px" fontSize="10px" fontFamily="var(--font-mono)" color="var(--fg-3)" fontWeight={500}>
            <Box border="1px solid var(--hairline)" borderRadius="6px" px="6px" py="2px">
              Opus
            </Box>
            <Text as="span" ml="auto">
              ⌘ ↵
            </Text>
          </HStack>
        </Box>

        <Flex wrap="wrap" gap="8px" justify="center" maxW="360px">
          {ACTIONS.map((action) => (
            <Flex
              key={action}
              h="26px"
              px="12px"
              border="1px solid var(--hairline)"
              borderRadius="13px"
              align="center"
              fontSize="11px"
              fontWeight={500}
              color="var(--fg-2)"
            >
              {action}
            </Flex>
          ))}
        </Flex>
      </VStack>
    </MockShell>
  )
}
