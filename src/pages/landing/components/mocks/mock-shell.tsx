import { Box } from '@chakra-ui/react'
import { FrameChrome } from '../frame-chrome'

interface MockShellProps {
  title: string
  children: React.ReactNode
  bodySx?: React.CSSProperties
}

export function MockShell({ title, children }: MockShellProps) {
  return (
    <Box
      position="relative"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-xl)"
      bg="var(--paper)"
      overflow="hidden"
      boxShadow="0 1px 2px rgba(0,0,0,0.04), 0 24px 48px rgba(0,0,0,0.06)"
    >
      <FrameChrome title={title} compact />
      {children}
    </Box>
  )
}
