import { Container, SimpleGrid, Flex, Text, VStack, Heading } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { audienceRows } from '../data/audience'

export function AudienceSection() {
  return (
    <Container as="section" id="audience" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>Who this is for</Eyebrow>
      <SectionHeading>
        Anyone, anywhere,
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          with an idea.
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
    </Container>
  )
}
