import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { refusals } from '../data/refusals'

export function ManifestoRefusals() {
  return (
    <Box
      as="section"
      id="refusals"
      py={{ base: '96px', md: '128px' }}
      bg="var(--ink)"
      color="var(--on-ink-1)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="24px" mb={{ base: '48px', md: '72px' }}>
          <Eyebrow color="var(--on-ink-3)">What we refuse</Eyebrow>
          <Heading
            as="h2"
            className="cl-reveal"
            fontSize={{ base: '36px', md: '48px' }}
            lineHeight={{ base: '40px', md: '52px' }}
            fontWeight={600}
            letterSpacing="-0.025em"
            maxW="820px"
            color="var(--on-ink-1)"
            m={0}
            sx={{ textWrap: 'balance' }}
          >
            Three things we will not do,
            <br />
            <Text as="span" color="var(--on-ink-3)" fontWeight={300}>
              no matter who asks.
            </Text>
          </Heading>
        </VStack>

        <VStack align="stretch" spacing={0}>
          {refusals.map((refusal, i) => (
            <Grid
              key={refusal.claim}
              templateColumns={{ base: '1fr', md: '64px 1fr 1fr' }}
              gap={{ base: '12px', md: '48px' }}
              alignItems="start"
              py={{ base: '28px', md: '36px' }}
              borderTop={i === 0 ? '1px solid var(--on-ink-line)' : 'none'}
              borderBottom="1px solid var(--on-ink-line)"
              className="cl-reveal"
            >
              <Text
                as="span"
                fontFamily="var(--font-mono)"
                fontSize="12px"
                lineHeight="20px"
                letterSpacing="0.08em"
                color="var(--on-ink-3)"
                pt={{ md: '4px' }}
              >
                {String(i + 1).padStart(2, '0')}
              </Text>
              <Text
                as="p"
                fontSize={{ base: '20px', md: '24px' }}
                lineHeight={{ base: '28px', md: '32px' }}
                fontWeight={600}
                letterSpacing="-0.015em"
                color="var(--on-ink-1)"
                m={0}
              >
                {refusal.claim}
              </Text>
              <Text
                as="p"
                fontSize={{ base: '15px', md: '16px' }}
                lineHeight={{ base: '24px', md: '26px' }}
                color="var(--on-ink-2)"
                m={0}
                sx={{ textWrap: 'pretty' }}
              >
                {refusal.reason}
              </Text>
            </Grid>
          ))}
        </VStack>
      </Container>
    </Box>
  )
}
