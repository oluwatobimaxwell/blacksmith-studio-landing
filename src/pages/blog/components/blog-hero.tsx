import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'

export function BlogHero() {
  return (
    <Container as="section" id="top" maxW="1200px" px="32px" pt="112px" pb="64px">
      <VStack align="flex-start" spacing="32px">
        <Eyebrow>Writing</Eyebrow>
        <Heading
          as="h1"
          className="cl-reveal in"
          fontSize={{ base: '48px', md: '88px' }}
          lineHeight={{ base: '50px', md: '92px' }}
          fontWeight={600}
          letterSpacing="-0.035em"
          color="var(--fg-1)"
          maxW="1040px"
          m={0}
          sx={{ textWrap: 'balance' }}
        >
          Notes from
          <br />
          the forge.
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
          Field notes from the workshop floor.
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
          Engineering decisions, community updates, and the long version of what Blacksmith
          is becoming. Written in public, because the people it is for are reading.
        </Text>
      </VStack>
    </Container>
  )
}
