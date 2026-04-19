import { Box, Container, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { ManifestoTenetRow } from './manifesto-tenet-row'
import { tenets } from '../data/tenets'

export function ManifestoTenets() {
  return (
    <Box
      as="section"
      id="tenets"
      py={{ base: '96px', md: '128px' }}
      bg="var(--paper-2)"
      borderTop="1px solid var(--hairline)"
      borderBottom="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="24px" mb={{ base: '48px', md: '72px' }}>
          <Eyebrow>What we stand for</Eyebrow>
          <SectionHeading>
            Five things
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              we hold to be true.
            </Text>
          </SectionHeading>
        </VStack>

        <Box>
          {tenets.map((tenet, i) => (
            <ManifestoTenetRow
              key={tenet.id}
              tenet={tenet}
              index={i}
              isLast={i === tenets.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
