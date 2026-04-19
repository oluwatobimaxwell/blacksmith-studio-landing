import { Box, Container, Text } from '@chakra-ui/react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { SectionSub } from './section-sub'
import { AgentNode } from './agent-node'
import { agentNodes, agentEdges } from '../data/agents'

const byId = Object.fromEntries(agentNodes.map((n) => [n.id, n]))

export function AgentGraphSection() {
  return (
    <Container as="section" id="agents" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>The agent team</Eyebrow>
      <SectionHeading>
        Eleven specialists.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          One process. Every project.
        </Text>
      </SectionHeading>
      <SectionSub>
        You bring the idea. Blacksmith brings the expertise. Every agent works at the level of a senior professional
        in their role — PM, Architect, Reviewer, QA — each doing their specific job, in the right order. You don't need
        to know how to code to ship a codebase that's structured the way a senior team would structure it.
      </SectionSub>

      <Box
        className="cl-reveal"
        position="relative"
        mt="56px"
        py={{ base: '40px', md: '48px' }}
        px={{ base: '20px', md: '32px' }}
        border="1px solid var(--hairline)"
        borderRadius="var(--r-2xl)"
        bg="var(--paper)"
        overflow="hidden"
      >
        <Box className="cl-graph-bg" />
        <Box position="relative" w="full" sx={{ aspectRatio: '2.2 / 1' }}>
          <Box
            as="svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            position="absolute"
            inset={0}
            w="full"
            h="full"
          >
            {agentEdges.map(([a, b], i) => {
              const A = byId[a]
              const B = byId[b]
              if (!A || !B) return null
              const midY = (A.y + B.y) / 2
              return (
                <path
                  key={i}
                  d={`M ${A.x} ${A.y + 3} C ${A.x} ${midY}, ${B.x} ${midY}, ${B.x} ${B.y - 3}`}
                  stroke="var(--hairline-strong)"
                  strokeWidth={0.15}
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="0.3 0.3"
                />
              )
            })}
          </Box>
          {agentNodes.map((n) => (
            <AgentNode key={n.id} node={n} />
          ))}
        </Box>
      </Box>
    </Container>
  )
}
