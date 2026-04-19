import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Pencil } from 'lucide-react'
import { MockShell } from './mock-shell'

export function MockChat() {
  return (
    <MockShell title="blacksmith-studio-web">
      <VStack spacing="10px" align="stretch" p="18px 20px" minH="360px" bg="var(--paper)">
        <Box
          alignSelf="flex-end"
          maxW="80%"
          bg="var(--ink)"
          color="var(--paper)"
          p="10px 14px"
          borderRadius="16px 16px 4px 16px"
          fontSize="12px"
          lineHeight="18px"
        >
          Refactor ChatComposer so the chip logic lives in a hook.
        </Box>
        <HStack
          alignSelf="flex-start"
          spacing="6px"
          fontSize="10px"
          fontFamily="var(--font-mono)"
          fontWeight={500}
          color="var(--fg-3)"
        >
          <Box w="4px" h="4px" borderRadius="50%" bg="currentColor" />
          <Text as="span">Forged plan · 3 steps</Text>
        </HStack>
        <Box
          alignSelf="flex-start"
          maxW="80%"
          bg="var(--paper)"
          border="1px solid var(--hairline)"
          p="10px 14px"
          borderRadius="16px 16px 16px 4px"
          fontSize="12px"
          lineHeight="18px"
        >
          Extracting{' '}
          <Text
            as="code"
            fontFamily="var(--font-mono)"
            fontSize="11px"
            bg="var(--paper-2)"
            px="5px"
            py="1px"
            borderRadius="4px"
            border="1px solid var(--hairline)"
          >
            useComposerChips
          </Text>{' '}
          and threading it through props.
        </Box>

        <Box w="full" border="1px solid var(--hairline)" borderRadius="14px" overflow="hidden">
          <Flex
            px="12px"
            py="6px"
            bg="var(--paper-2)"
            borderBottom="1px solid var(--hairline)"
            gap="8px"
            align="center"
            fontSize="11px"
            lineHeight="14px"
            fontWeight={500}
          >
            <Pencil size={12} />
            <Text as="span">edit_file</Text>
            <Text as="span" fontFamily="var(--font-mono)" color="var(--fg-3)">
              ChatComposer.tsx
            </Text>
            <Text
              as="span"
              ml="auto"
              fontFamily="var(--font-mono)"
              fontSize="9px"
              color="var(--fg-3)"
              letterSpacing="0.08em"
              textTransform="uppercase"
            >
              Tempered · 1.2s
            </Text>
          </Flex>
          <Box px="12px" py="8px" fontFamily="var(--font-mono)" fontSize="11px" lineHeight="16px" color="var(--fg-2)">
            <Text color="var(--fg-4)">- const [chips, setChips] = useState([]);</Text>
            <Text color="var(--fg-1)">{'+ const { chips, add, remove } = useComposerChips();'}</Text>
          </Box>
        </Box>

        <HStack
          alignSelf="flex-start"
          spacing="6px"
          fontSize="10px"
          fontFamily="var(--font-mono)"
          fontWeight={500}
          color="var(--fg-3)"
        >
          <Box w="4px" h="4px" borderRadius="50%" bg="currentColor" />
          <Text as="span">Quenched · changes staged</Text>
        </HStack>
      </VStack>
    </MockShell>
  )
}
