import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { MessageCircle, Users, Plus, Folder, GitBranch, Sparkles, Wrench, FileText, Terminal } from 'lucide-react'
import { FrameChrome } from './frame-chrome'

const RAIL_ICONS = [Plus, MessageCircle, Users, Folder, GitBranch, Sparkles, Wrench, FileText, Terminal] as const

export function HeroIdeFrame() {
  return (
    <Box
      className="cl-reveal"
      mx="auto"
      maxW="1120px"
      mt="72px"
      px="24px"
      w="full"
    >
      <Box
        position="relative"
        border="1px solid var(--hairline-strong)"
        borderRadius="var(--r-2xl)"
        bg="var(--paper)"
        overflow="hidden"
        boxShadow="0 1px 2px rgba(0,0,0,0.04), 0 40px 80px rgba(0,0,0,0.08)"
      >
        <FrameChrome title="blacksmith-studio-web" tabs={['Chat', 'Agent Team']} />
        <Flex minH="460px">
          <VStack
            spacing="10px"
            w="52px"
            borderRight="1px solid var(--hairline)"
            bg="var(--paper-2)"
            py="12px"
            align="center"
            flexShrink={0}
          >
            {RAIL_ICONS.map((IconCmp, i) => (
              <Flex
                key={i}
                w="30px"
                h="30px"
                align="center"
                justify="center"
                color={i === 1 ? 'var(--fg-1)' : 'var(--fg-3)'}
                bg={i === 1 ? 'var(--paper-3)' : 'transparent'}
                borderRadius="8px"
              >
                <IconCmp size={15} />
              </Flex>
            ))}
          </VStack>

          <VStack
            flex="1"
            align="center"
            justify="center"
            spacing="20px"
            py="48px"
            px="32px"
            className="cl-card-grid"
          >
            <Text
              as="h2"
              fontSize="28px"
              lineHeight="34px"
              fontWeight={600}
              letterSpacing="-0.02em"
              textAlign="center"
              m={0}
            >
              Good evening,{' '}
              <Text as="span" fontFamily="var(--font-mono)" fontWeight={500}>
                blacksmith-studio-web
              </Text>
            </Text>

            <Box
              w="full"
              maxW="520px"
              border="1px solid var(--hairline)"
              borderRadius="20px"
              bg="var(--paper)"
              p="16px 18px"
              display="flex"
              flexDirection="column"
              gap="12px"
              boxShadow="0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)"
            >
              <Text fontSize="14px" lineHeight="20px" color="var(--fg-3)">
                Ask Claude to build something…
              </Text>
              <HStack spacing="8px" fontFamily="var(--font-mono)" fontSize="11px" color="var(--fg-3)">
                <Box px="8px" py="2px" border="1px solid var(--hairline)" borderRadius="6px">
                  Opus
                </Box>
                <HStack spacing="4px" px="8px" py="2px" border="1px solid var(--hairline)" borderRadius="6px">
                  <Box w="5px" h="5px" borderRadius="50%" bg="var(--fg-1)" />
                  <Text as="span">Graph</Text>
                </HStack>
                <Text as="span" ml="auto">⌘ ↵</Text>
              </HStack>
            </Box>

            <Flex wrap="wrap" gap="8px" justify="center" maxW="480px">
              {['Create a resource', 'Add a page', 'Build an API', 'Add auth', 'Fix a bug', 'Write tests'].map(
                (action) => (
                  <Flex
                    key={action}
                    h="28px"
                    px="14px"
                    border="1px solid var(--hairline)"
                    borderRadius="14px"
                    align="center"
                    fontSize="12px"
                    fontWeight={500}
                    color="var(--fg-2)"
                    bg="var(--paper)"
                  >
                    {action}
                  </Flex>
                ),
              )}
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </Box>
  )
}
