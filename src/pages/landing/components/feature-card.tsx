import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import type { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  body: string
  index: number
  total: number
}

export function FeatureCard({ icon: Icon, title, body, index, total }: FeatureCardProps) {
  return (
    <VStack
      bg="var(--paper)"
      p="32px 28px 36px"
      minH="280px"
      align="stretch"
      spacing="14px"
      transition="background 160ms var(--ease)"
      _hover={{ bg: 'var(--paper-2)' }}
    >
      <Flex
        w="36px"
        h="36px"
        border="1px solid var(--hairline)"
        borderRadius="var(--r-md)"
        align="center"
        justify="center"
        color="var(--fg-1)"
        bg="var(--paper)"
        mb="8px"
      >
        <Icon size={18} />
      </Flex>
      <Heading
        as="h3"
        fontSize="20px"
        lineHeight="26px"
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
      <Box
        mt="auto"
        fontSize="11px"
        lineHeight="14px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        color="var(--fg-4)"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </Box>
    </VStack>
  )
}
