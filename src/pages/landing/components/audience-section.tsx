import { Box, Container, SimpleGrid, Flex, Text, VStack, Heading } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { audienceRows } from '../data/audience'

export function AudienceSection() {
  return (
    <Container as="section" id="audience" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>Who it's for</Eyebrow>
      <SectionHeading>
        Built for anyone tired of
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          cleaning up after AI.
        </Text>
      </SectionHeading>

      <SimpleGrid
        className="cl-reveal"
        mt="56px"
        columns={{ base: 1, md: 2 }}
        gap="1px"
        bg="var(--hairline)"
        border="1px solid var(--hairline)"
        borderRadius="var(--r-xl)"
        overflow="hidden"
      >
        {audienceRows.map((row, i) => (
          <Flex
            key={row.name}
            bg="var(--paper)"
            p="28px 28px 32px"
            gap="20px"
            transition="background 160ms var(--ease)"
            _hover={{ bg: 'var(--paper-2)' }}
          >
            <Text
              fontSize="11px"
              lineHeight="14px"
              fontWeight={500}
              fontFamily="var(--font-mono)"
              color="var(--fg-4)"
              letterSpacing="0.08em"
              minW="32px"
              pt="4px"
            >
              {String(i + 1).padStart(2, '0')}
            </Text>
            <VStack align="stretch" spacing="8px">
              <Heading
                as="h4"
                fontSize="18px"
                lineHeight="24px"
                fontWeight={600}
                letterSpacing="-0.01em"
                m={0}
                color="var(--fg-1)"
              >
                {row.name}
              </Heading>
              <Text fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0} sx={{ textWrap: 'pretty' }}>
                {row.body}
              </Text>
            </VStack>
          </Flex>
        ))}
      </SimpleGrid>

      <Box
        className="cl-reveal"
        mt={{ base: '48px', md: '72px' }}
        py={{ base: '40px', md: '56px' }}
        px={{ base: '24px', md: '48px' }}
        borderTop="1px solid var(--hairline)"
        borderBottom="1px solid var(--hairline)"
        textAlign="center"
      >
        <Heading
          as="p"
          fontSize={{ base: '24px', md: '32px' }}
          lineHeight={{ base: '30px', md: '40px' }}
          fontWeight={500}
          letterSpacing="-0.02em"
          m={0}
          maxW="760px"
          mx="auto"
          color="var(--fg-1)"
          sx={{ textWrap: 'balance' }}
        >
          Free forever.{' '}
          <Text as="span" color="var(--fg-3)" fontWeight={300}>
            Open source. No $20/month barrier to building.
          </Text>
        </Heading>
      </Box>
    </Container>
  )
}
