import type { ReactNode } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

interface DocSectionProps {
  id: string
  title: string
  index: number
  children: ReactNode
}

export function DocSection({ id, title, index, children }: DocSectionProps) {
  const delayClass = `legal-fade-up-${Math.min(Math.max(index, 1), 5)}`
  const label = String(index).padStart(2, '0')

  return (
    <Box
      as="section"
      id={id}
      mb={{ base: 14, md: 20 }}
      scrollMarginTop="96px"
      className={`legal-fade-up ${delayClass}`}
      opacity={0}
      sx={{
        '& + &': { borderTop: 'none' },
      }}
    >
      <Flex align="center" gap={4} mb={6}>
        <Text
          fontFamily="mono"
          fontSize="11px"
          fontWeight={600}
          color="var(--studio-landing-text-muted)"
          letterSpacing="0.12em"
          textTransform="uppercase"
          flexShrink={0}
        >
          {label}
        </Text>
        <Box
          flex={1}
          h="1px"
          background="linear-gradient(to right, var(--studio-landing-border), transparent)"
        />
      </Flex>

      <Text
        as="h2"
        fontFamily="body"
        fontSize={{ base: '22px', md: '26px' }}
        fontWeight={600}
        color="var(--studio-landing-text-primary)"
        letterSpacing="-0.025em"
        lineHeight={1.25}
        mb={6}
      >
        {title}
      </Text>

      <Box>{children}</Box>
    </Box>
  )
}
