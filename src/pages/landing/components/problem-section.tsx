import { Container, SimpleGrid, Text } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { SectionSub } from './section-sub'
import { ProblemStat } from './problem-stat'

export function ProblemSection() {
  return (
    <Container as="section" id="problem" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>The problem</Eyebrow>
      <SectionHeading>
        AI makes it faster to build.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          Not automatically better to build.
        </Text>
      </SectionHeading>
      <SectionSub>
        AI-generated code works in a demo and breaks at scale. Engineers call this technical debt — at AI speed,
        across a whole codebase, it becomes a silent killer. We call it AI coding tech debt.
      </SectionSub>

      <SimpleGrid
        className="cl-reveal"
        mt="56px"
        columns={{ base: 1, md: 3 }}
        gap="1px"
        bg="var(--hairline)"
        border="1px solid var(--hairline)"
        borderRadius="var(--r-xl)"
        overflow="hidden"
      >
        <ProblemStat
          label="Tech debt reduction"
          value={
            <>
              80
              <Text as="sup" fontSize="32px" fontWeight={400} color="var(--fg-3)" ml="4px" verticalAlign="top">
                %
              </Text>
            </>
          }
          description="Less AI coding tech debt than standard AI tools — measured across structure, patterns, and testability."
        />
        <ProblemStat
          label="House of cards"
          value={<Text as="span">3×</Text>}
          description="Problems an AI typically creates while patching one. Speed without quality isn't progress — it's faster failure."
        />
        <ProblemStat
          label="Rework on handoff"
          value={
            <>
              60
              <Text as="sup" fontSize="32px" fontWeight={400} color="var(--fg-3)" ml="4px" verticalAlign="top">
                %
              </Text>
            </>
          }
          description="Of engineering time spent cleaning AI-generated code before it can be shipped. The speed gain disappears."
        />
      </SimpleGrid>
    </Container>
  )
}
