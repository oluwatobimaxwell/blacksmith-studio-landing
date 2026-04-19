import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'

export function ManifestoHero() {
  return (
    <Container as="section" id="top" maxW="1200px" px="32px" pt="112px" pb="88px">
      <VStack align="flex-start" spacing="32px">
        <Eyebrow>The manifesto</Eyebrow>
        <Heading
          as="h1"
          className="mf-hero-title cl-reveal in"
          fontSize={{ base: '48px', md: '88px' }}
          lineHeight={{ base: '50px', md: '92px' }}
          fontWeight={600}
          letterSpacing="-0.035em"
          color="var(--fg-1)"
          maxW="1040px"
          m={0}
          sx={{ textWrap: 'balance' }}
        >
          This time,
          <br />
          Africa builds too.
        </Heading>
        <Text
          as="p"
          fontSize={{ base: '19px', md: '22px' }}
          lineHeight={{ base: '30px', md: '34px' }}
          color="var(--fg-3)"
          fontWeight={300}
          letterSpacing="-0.01em"
          m={0}
          sx={{ textWrap: 'balance' }}
        >
          A continent of builders, in the era of building.
        </Text>
        <Box w="64px" h="1px" bg="var(--hairline-strong)" mt="8px" aria-hidden />
        <Text
          as="p"
          className="cl-reveal in"
          fontSize={{ base: '17px', md: '19px' }}
          lineHeight={{ base: '28px', md: '32px' }}
          color="var(--fg-2)"
          maxW="720px"
          m={0}
          sx={{ textWrap: 'pretty' }}
        >
          The AI era is the largest shift in how software gets made since software got made.
          It will happen with us, or it will happen to us. Blacksmith Studio exists to make
          sure it happens with us — the builders of Lagos, Nairobi, Accra, Abidjan, Cairo, and
          everywhere the old tools were not priced for.
        </Text>
      </VStack>
    </Container>
  )
}
