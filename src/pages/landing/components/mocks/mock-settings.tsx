import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Database } from 'lucide-react'
import { MockShell } from './mock-shell'

const SIDEBAR_ITEMS = [
  { group: 'Claude', items: ['AI & Prompting', 'MCP Servers', 'Skills'], activeIndex: 0 },
  { group: 'Preferences', items: ['Appearance', 'Editor'], activeIndex: -1 },
]

export function MockSettings() {
  return (
    <MockShell title="blacksmith-studio-web / AI & Prompting">
      <Flex minH="360px" bg="var(--paper)">
        <VStack
          w="140px"
          borderRight="1px solid var(--hairline)"
          bg="var(--paper-2)"
          py="12px"
          px="8px"
          align="stretch"
          spacing="2px"
          flexShrink={0}
        >
          {SIDEBAR_ITEMS.map((group) => (
            <VStack key={group.group} align="stretch" spacing="2px" pt="2px">
              <Text
                px="8px"
                py="6px"
                fontSize="10px"
                lineHeight="14px"
                fontWeight={500}
                fontFamily="var(--font-mono)"
                letterSpacing="0.08em"
                textTransform="uppercase"
                color="var(--fg-4)"
              >
                {group.group}
              </Text>
              {group.items.map((item, i) => {
                const active = i === group.activeIndex
                return (
                  <Box
                    key={item}
                    position="relative"
                    px="8px"
                    py="6px"
                    borderRadius="6px"
                    bg={active ? 'var(--paper-3)' : 'transparent'}
                    fontSize="12px"
                    lineHeight="16px"
                    fontWeight={active ? 500 : 400}
                    color={active ? 'var(--fg-1)' : 'var(--fg-3)'}
                  >
                    {active && (
                      <Box position="absolute" left={0} top="8px" bottom="8px" w="2px" bg="var(--ink)" borderRadius="2px" />
                    )}
                    {item}
                  </Box>
                )
              })}
            </VStack>
          ))}
        </VStack>

        <VStack flex="1" p="20px 22px" align="stretch" spacing="16px" overflow="hidden">
          <Box>
            <Text fontSize="14px" lineHeight="18px" fontWeight={600}>
              Provider
            </Text>
            <Text fontSize="11px" lineHeight="16px" color="var(--fg-3)" mt="2px">
              The AI provider powering code generation and chat.
            </Text>
          </Box>

          <HStack border="1px solid var(--hairline)" borderRadius="12px" p="12px" spacing="12px" align="center">
            <Flex
              w="28px"
              h="28px"
              border="1px solid var(--hairline)"
              borderRadius="8px"
              align="center"
              justify="center"
              fontFamily="var(--font-mono)"
              fontSize="13px"
            >
              ›_
            </Flex>
            <Box flex="1">
              <HStack spacing="6px" align="center">
                <Text fontSize="12px" lineHeight="16px" fontWeight={600}>
                  Claude Code CLI
                </Text>
                <Box
                  px="6px"
                  py="1px"
                  border="1px solid var(--hairline)"
                  borderRadius="4px"
                  fontSize="9px"
                  color="var(--fg-3)"
                  fontFamily="var(--font-mono)"
                  letterSpacing="0.04em"
                  textTransform="uppercase"
                >
                  Installed
                </Box>
              </HStack>
              <HStack spacing="6px" mt="4px" fontSize="10px" lineHeight="14px" color="var(--fg-3)" fontFamily="var(--font-mono)">
                <Box w="5px" h="5px" borderRadius="50%" bg="var(--fg-2)" />
                <Text as="span">Active — uses your local Claude Code installation</Text>
              </HStack>
            </Box>
          </HStack>

          <Box>
            <Text fontSize="14px" lineHeight="18px" fontWeight={600}>
              Local Models
            </Text>
            <Text fontSize="11px" lineHeight="16px" color="var(--fg-3)" mt="2px">
              Run open-source LLMs on-device. Free forever, no API keys, fully private.
            </Text>
          </Box>

          <VStack
            border="1px solid var(--hairline)"
            borderRadius="12px"
            p="24px"
            spacing="8px"
            align="center"
          >
            <Flex w="32px" h="32px" border="1px solid var(--hairline)" borderRadius="8px" align="center" justify="center">
              <Database size={16} />
            </Flex>
            <HStack spacing="8px">
              <Text fontSize="13px" lineHeight="16px" fontWeight={600}>
                On-device AI
              </Text>
              <Box
                px="6px"
                py="1px"
                border="1px solid var(--hairline)"
                borderRadius="4px"
                fontSize="9px"
                color="var(--fg-3)"
                fontFamily="var(--font-mono)"
                letterSpacing="0.04em"
                textTransform="uppercase"
              >
                Coming soon
              </Box>
            </HStack>
            <Text fontSize="10px" lineHeight="14px" color="var(--fg-3)" textAlign="center" maxW="260px">
              Download Llama, Codestral, Qwen directly to your machine.
            </Text>
          </VStack>
        </VStack>
      </Flex>
    </MockShell>
  )
}
