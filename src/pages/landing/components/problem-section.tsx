import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { SectionSub } from './section-sub'

export function ProblemSection() {
  return (
    <Container as="section" id="problem" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>The real cost of AI coding</Eyebrow>
      <SectionHeading>
        Fast became a new kind of slow.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          AI debt is the next technical debt.
        </Text>
      </SectionHeading>
      <SectionSub>
        Developers now spend more time reviewing, fixing, and rewriting AI-generated code than they saved generating
        it. Inconsistent architecture. Missing tests. Brittle patterns. All shipped at speed. Blacksmith eliminates
        that at the source, not after the fact.
      </SectionSub>

      <Grid
        className="cl-reveal"
        mt="56px"
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gap={{ base: '24px', md: '48px' }}
        alignItems="center"
        p={{ base: '40px 28px', md: '56px 48px' }}
        border="1px solid var(--hairline)"
        borderRadius="var(--r-2xl)"
        bg="var(--paper)"
      >
        <VStack align="flex-start" spacing="8px">
          <Box
            fontSize={{ base: '88px', md: '120px' }}
            lineHeight="0.95"
            fontWeight={600}
            letterSpacing="-0.04em"
            color="var(--fg-1)"
          >
            80
            <Text
              as="sup"
              fontSize={{ base: '36px', md: '48px' }}
              fontWeight={400}
              color="var(--fg-3)"
              ml="4px"
              verticalAlign="top"
            >
              %
            </Text>
          </Box>
          <Text
            fontSize="12px"
            lineHeight="16px"
            fontWeight={500}
            fontFamily="var(--font-mono)"
            letterSpacing="0.08em"
            textTransform="uppercase"
            color="var(--fg-3)"
            m={0}
          >
            Reduction in AI coding debt
          </Text>
        </VStack>
        <Text fontSize="17px" lineHeight="26px" color="var(--fg-2)" m={0} sx={{ textWrap: 'pretty' }}>
          Measured across structure, consistency, and testability, Blacksmith reduces AI coding debt by over 80%
          compared to standard AI tools. Code you can maintain, extend, and trust in production.
        </Text>
      </Grid>
    </Container>
  )
}
