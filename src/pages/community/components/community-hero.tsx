import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'

export function CommunityHero() {
  return (
    <Container as="section" id="top" maxW="1200px" px="32px" pt="112px" pb="88px">
      <VStack align="flex-start" spacing="32px">
        <Eyebrow>The community</Eyebrow>
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
          You are not
          <br />
          building alone.
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
          A global room, with a Lagos pulse.
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
          Blacksmith Studio is the tool. The community is where you learn to use it, and
          where the people using it learn from each other. Builders from sixty-two countries,
          shipping, breaking, fixing, and asking the questions that unlock the next person.
          Come be one of them.
        </Text>
      </VStack>
    </Container>
  )
}
