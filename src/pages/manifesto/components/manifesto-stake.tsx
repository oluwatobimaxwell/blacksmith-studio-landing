import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'

export function ManifestoStake() {
  return (
    <Box
      as="section"
      id="stake"
      py={{ base: '96px', md: '128px' }}
      borderTop="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="24px" mb={{ base: '48px', md: '64px' }}>
          <Eyebrow>The stake</Eyebrow>
          <SectionHeading>
            The problem is not speed.
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              It is what speed leaves behind.
            </Text>
          </SectionHeading>
        </VStack>

        <Grid templateColumns={{ base: '1fr', lg: '280px 1fr' }} gap={{ base: '32px', lg: '96px' }} alignItems="start">
          <Box />
          <VStack align="stretch" spacing="28px" className="cl-reveal" maxW="720px">
            <Text
              fontSize={{ base: '19px', md: '22px' }}
              lineHeight={{ base: '30px', md: '34px' }}
              color="var(--fg-1)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              AI writes code fast — and most of it becomes someone else's problem.
              Inconsistent patterns. Missing tests. Architecture that made sense at 2 a.m.
              and collapses at scale. AI-generated tech debt is still tech debt. It
              compounds. It stops the next engineer — usually you, three months later —
              from building on top of what the AI left behind.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '18px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              color="var(--fg-2)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              Most builders are already paying for AI tools that leave them with code they
              will have to rewrite. A model subscription here, a dev platform there — and
              still no guarantee the output is worth maintaining. Blacksmith changes the
              math. Not by being cheaper, but by being worth it the first time.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '18px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              color="var(--fg-3)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              Blacksmith is our answer to that. Engineered to code like a senior engineer,
              because the first draft is the one you live with. Free and open, because a
              tool that does not reach the people who need it most has already failed.
            </Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
