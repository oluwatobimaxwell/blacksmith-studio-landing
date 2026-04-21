import { Heading, Text, VStack } from '@chakra-ui/react'

interface HowStepCardProps {
  step: string
  title: string
  body: string
}

export function HowStepCard({ step, title, body }: HowStepCardProps) {
  return (
    <VStack bg="var(--paper)" p={{ base: '28px 24px', md: '32px' }} align="stretch" spacing="14px">
      <Text
        fontSize="11px"
        lineHeight="14px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        letterSpacing="0.08em"
        color="var(--fg-4)"
        m={0}
      >
        {step}
      </Text>
      <Heading
        as="h3"
        fontSize="22px"
        lineHeight="28px"
        fontWeight={600}
        letterSpacing="-0.015em"
        m={0}
        color="var(--fg-1)"
      >
        {title}
      </Heading>
      <Text fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0} sx={{ textWrap: 'pretty' }}>
        {body}
      </Text>
    </VStack>
  )
}
