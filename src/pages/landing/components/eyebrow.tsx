import { HStack, Text, Box } from '@chakra-ui/react'

interface EyebrowProps {
  children: React.ReactNode
  lead?: boolean
  color?: string
}

export function Eyebrow({ children, lead = true, color = 'var(--fg-3)' }: EyebrowProps) {
  return (
    <HStack spacing="10px" color={color} className="cl-reveal">
      {lead && <Box w="16px" h="1px" bg="currentColor" opacity={0.6} />}
      <Text
        as="span"
        fontSize="11px"
        fontWeight={500}
        lineHeight="14px"
        letterSpacing="0.12em"
        textTransform="uppercase"
      >
        {children}
      </Text>
    </HStack>
  )
}
