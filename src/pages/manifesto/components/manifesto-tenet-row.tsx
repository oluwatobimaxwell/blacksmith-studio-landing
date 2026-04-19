import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import type { Tenet } from '../data/tenets'

interface ManifestoTenetRowProps {
  tenet: Tenet
  index: number
  isLast: boolean
}

export function ManifestoTenetRow({ tenet, index, isLast }: ManifestoTenetRowProps) {
  return (
    <Box
      as="article"
      className="cl-reveal"
      py={{ base: '32px', md: '40px' }}
      borderBottom={isLast ? 'none' : '1px solid var(--hairline)'}
    >
      <Grid
        templateColumns={{ base: '1fr', md: '96px 1fr' }}
        gap={{ base: '16px', md: '48px' }}
        alignItems="start"
      >
        <Text
          as="span"
          fontFamily="var(--font-mono)"
          fontSize="13px"
          lineHeight="20px"
          letterSpacing="0.08em"
          color="var(--fg-3)"
          pt={{ md: '8px' }}
        >
          {String(index + 1).padStart(2, '0')}
        </Text>
        <VStack align="stretch" spacing="16px">
          <Heading
            as="h3"
            fontSize={{ base: '22px', md: '28px' }}
            lineHeight={{ base: '30px', md: '36px' }}
            fontWeight={600}
            letterSpacing="-0.02em"
            color="var(--fg-1)"
            m={0}
            sx={{ textWrap: 'balance' }}
          >
            {tenet.title}
          </Heading>
          <Text
            fontSize={{ base: '16px', md: '17px' }}
            lineHeight={{ base: '26px', md: '28px' }}
            color="var(--fg-2)"
            m={0}
            maxW="640px"
            sx={{ textWrap: 'pretty' }}
          >
            {tenet.body}
          </Text>
        </VStack>
      </Grid>
    </Box>
  )
}
