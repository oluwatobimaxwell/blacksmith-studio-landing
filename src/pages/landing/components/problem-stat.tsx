import { Box, Text, VStack } from '@chakra-ui/react'

interface ProblemStatProps {
  label: string
  value: React.ReactNode
  description: string
}

export function ProblemStat({ label, value, description }: ProblemStatProps) {
  return (
    <VStack bg="var(--paper)" p={{ base: '32px 24px', md: '40px 32px' }} align="stretch" spacing="16px">
      <Text
        fontSize="12px"
        lineHeight="16px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        letterSpacing="0.08em"
        textTransform="uppercase"
        color="var(--fg-3)"
      >
        {label}
      </Text>
      <Box fontSize="72px" lineHeight="1" fontWeight={600} letterSpacing="-0.04em" color="var(--fg-1)">
        {value}
      </Box>
      <Text fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0}>
        {description}
      </Text>
    </VStack>
  )
}
