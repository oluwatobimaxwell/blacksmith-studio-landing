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
            Two gates.
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              One answer.
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
              In Lagos, twenty dollars a month is not a rounding error. It is a week of
              groceries. It is the difference between trying and staying on the sidelines.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '18px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              color="var(--fg-2)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              When the tools that will shape the next generation of software are priced in
              dollars, the builders with the most to build are the ones locked out. That is
              not a pricing tier. It is a gate.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '18px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              color="var(--fg-2)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              And the tools that do make it through the gate too often return code that works
              today and collapses tomorrow. AI-generated tech debt is still tech debt. It
              compounds. It costs. It stops the next engineer — who is usually you, three
              months later — from building on top of what the AI left behind.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '18px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              color="var(--fg-3)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              Blacksmith is our refusal of both. Free, because price is the first barrier and
              the first barrier decides who gets to start. Engineered to code like a senior
              engineer, because the first draft should be the one that ships.
            </Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
