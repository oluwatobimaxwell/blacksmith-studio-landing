import { Box, Container, Divider, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'

export function ManifestoCall() {
  return (
    <Box
      as="section"
      id="call"
      py={{ base: '112px', md: '160px' }}
      borderTop="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="32px" mb={{ base: '56px', md: '72px' }}>
          <Eyebrow>The call</Eyebrow>
          <Heading
            as="h2"
            className="cl-reveal"
            fontSize={{ base: '40px', md: '64px' }}
            lineHeight={{ base: '44px', md: '68px' }}
            fontWeight={600}
            letterSpacing="-0.03em"
            color="var(--fg-1)"
            maxW="960px"
            m={0}
            sx={{ textWrap: 'balance' }}
          >
            If you are building from home —
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              we are building for you.
            </Text>
          </Heading>
        </VStack>

        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 320px' }}
          gap={{ base: '48px', lg: '96px' }}
          alignItems="end"
        >
          <VStack align="stretch" spacing="24px" maxW="720px" className="cl-reveal">
            <Text
              fontSize={{ base: '18px', md: '20px' }}
              lineHeight={{ base: '30px', md: '32px' }}
              color="var(--fg-1)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              Whether home is Lagos or Abuja, Nairobi or Kigali, a dorm room in Ibadan or a
              coworking desk in Accra — if the old tools were not priced for you, come build
              with us. And if home is farther still — Jakarta, São Paulo, Karachi — you are
              here too. Same gate. Same answer.
            </Text>
            <Text
              fontSize={{ base: '17px', md: '19px' }}
              lineHeight={{ base: '28px', md: '32px' }}
              color="var(--fg-2)"
              fontWeight={500}
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              The era of software that changes the world is not a spectator sport. We refuse
              to sit this one out. Neither should you.
            </Text>
          </VStack>

          <VStack align={{ base: 'flex-start', lg: 'flex-end' }} spacing="14px">
            <Divider borderColor="var(--hairline-strong)" w="64px" opacity={1} m={0} />
            <Text as="span" fontSize="15px" lineHeight="22px" fontWeight={500} color="var(--fg-1)" m={0}>
              Tobi Sholanke
            </Text>
            <Text
              as="span"
              fontSize="12px"
              lineHeight="18px"
              fontFamily="var(--font-mono)"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="var(--fg-3)"
              m={0}
              textAlign={{ base: 'left', lg: 'right' }}
            >
              Founder, Blacksmith Studio
              <br />
              Helsinki · Lagos · 2026
            </Text>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
