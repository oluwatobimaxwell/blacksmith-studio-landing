import { Box, Container, Grid, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'

export function ManifestoSection() {
  return (
    <Box
      as="section"
      id="manifesto"
      py={{ base: '96px', md: '128px' }}
      bg="var(--paper-2)"
      borderTop="1px solid var(--hairline)"
      borderBottom="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <Grid
          templateColumns={{ base: '1fr', lg: '320px 1fr' }}
          gap={{ base: '32px', lg: '96px' }}
          alignItems="start"
        >
          <VStack align="stretch" spacing="24px">
            <Eyebrow>Manifesto</Eyebrow>
            <Text
              fontSize="13px"
              lineHeight="20px"
              fontFamily="var(--font-mono)"
              color="var(--fg-3)"
              letterSpacing="0.01em"
              m={0}
            >
              Founded 2026
              <br />
              Helsinki · Lagos
              <br />
              Global, by principle.
            </Text>
          </VStack>

          <VStack align="stretch" spacing="28px">
            <Text fontSize={{ base: '19px', md: '22px' }} lineHeight={{ base: '30px', md: '34px' }} color="var(--fg-1)" m={0} sx={{ textWrap: 'pretty' }}>
              This is the greatest era in history to build software. The tools to do it should be free and accessible
              to every person on earth.
            </Text>
            <Text fontSize="18px" lineHeight="30px" color="var(--fg-3)" m={0} sx={{ textWrap: 'pretty' }}>
              A student in Lagos, a business owner in Jakarta, a first-time founder in São Paulo, a teacher in Nairobi
              — if you have something worth building, you belong here. Not a community for a specific type of person,
              a specific country, or a specific level of experience.
            </Text>
            <Box
              as="blockquote"
              mt="12px"
              pt="24px"
              borderTop="1px solid var(--hairline)"
              fontSize="15px"
              lineHeight="24px"
              color="var(--fg-3)"
            >
              Blacksmith was built in Nigeria. But it was built for the world. Because the belief that drives it — that
              every person with an idea deserves the tools to build it — has no borders.
              <br />
              <br />
              — Tobi Sholanke, founder
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
