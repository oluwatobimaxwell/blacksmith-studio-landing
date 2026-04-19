import { useState } from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'

interface CliBlockProps {
  command: string
}

export function CliBlock({ command }: CliBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // ignore
    }
  }

  return (
    <HStack
      bg="var(--paper-2)"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-lg)"
      px="16px"
      py="14px"
      fontFamily="var(--font-mono)"
      fontSize="13px"
      lineHeight="20px"
      color="var(--fg-2)"
      spacing="12px"
      mt="16px"
    >
      <Text as="span" color="var(--fg-4)">
        $
      </Text>
      <Text as="span" flex="1" minW={0} whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
        {command}
      </Text>
      <Button
        variant="unstyled"
        onClick={handleCopy}
        fontSize="11px"
        lineHeight="14px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        color={copied ? 'var(--fg-1)' : 'var(--fg-3)'}
        letterSpacing="0.08em"
        textTransform="uppercase"
        h="auto"
        minW="auto"
        _hover={{ color: 'var(--fg-1)' }}
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </HStack>
  )
}
