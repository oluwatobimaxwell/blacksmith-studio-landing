import { Box, Text } from '@chakra-ui/react'
import { railItems } from '../data/rail-items'

export function RailSection() {
  const repeated = [...railItems, ...railItems]
  return (
    <Box
      pt="48px"
      pb="24px"
      borderTop="1px solid var(--hairline)"
      borderBottom="1px solid var(--hairline)"
      bg="var(--paper-2)"
      overflow="hidden"
    >
      <Box className="cl-rail-inner" pl="32px">
        {repeated.map((item, i) => (
          <Text as="span" key={`${item}-${i}`}>
            {item}
            <Box as="span" className="cl-pip" />
          </Text>
        ))}
      </Box>
    </Box>
  )
}
