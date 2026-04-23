import type { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

export function DocList({ children }: { children: ReactNode }) {
  return (
    <Box
      as="ul"
      listStyleType="none"
      pl={0}
      mt={2}
      mb={6}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      {children}
    </Box>
  )
}
