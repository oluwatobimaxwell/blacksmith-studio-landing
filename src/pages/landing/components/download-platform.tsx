import { Button, Flex, Text, VStack } from '@chakra-ui/react'
import { ArrowRight, type LucideIcon } from 'lucide-react'

interface DownloadPlatformProps {
  icon: LucideIcon
  name: string
  meta: string
}

export function DownloadPlatform({ icon: Icon, name, meta }: DownloadPlatformProps) {
  return (
    <Button
      variant="unstyled"
      h="auto"
      w="100%"
      p="18px 20px"
      display="flex"
      alignItems="center"
      gap="16px"
      textAlign="left"
      bg="transparent"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-lg)"
      transition="border-color 160ms var(--ease), background 160ms var(--ease), transform 160ms var(--ease)"
      _hover={{
        bg: 'var(--paper-2)',
        borderColor: 'var(--hairline-strong)',
        transform: 'translateY(-1px)',
      }}
    >
      <Flex
        align="center"
        justify="center"
        w="40px"
        h="40px"
        borderRadius="var(--r-md)"
        bg="var(--paper-2)"
        color="var(--fg-1)"
        flexShrink={0}
      >
        <Icon size={20} />
      </Flex>
      <VStack align="stretch" spacing="4px" flex="1" minW={0}>
        <Text
          fontSize="14px"
          lineHeight="18px"
          fontWeight={600}
          color="var(--fg-1)"
          letterSpacing="-0.01em"
          m={0}
        >
          Download for {name}
        </Text>
        <Text fontSize="12px" lineHeight="16px" color="var(--fg-3)" m={0}>
          {meta}
        </Text>
      </VStack>
      <Flex align="center" justify="center" color="var(--fg-3)" flexShrink={0}>
        <ArrowRight size={16} />
      </Flex>
    </Button>
  )
}
