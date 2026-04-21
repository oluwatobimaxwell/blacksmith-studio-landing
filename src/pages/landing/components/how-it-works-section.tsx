import { Box, Container, SimpleGrid, Text } from '@chakra-ui/react'
import { AgentModal, useAgentModal } from '@/shared/components/agent-modal'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { SectionSub } from './section-sub'
import { AgentNode } from './agent-node'
import { HowStepCard } from './how-step-card'
import { agentNodes, agentEdges } from '../data/agents'
import { howSteps } from '../data/how-it-works'

const byId = Object.fromEntries(agentNodes.map((n) => [n.id, n]))

export function HowItWorksSection() {
  const { agent, index, total, isOpen, open, close } = useAgentModal()

  return (
    <Container as="section" id="how" maxW="1200px" px="32px" py={{ base: '72px', md: '96px' }}>
      <Eyebrow>How it works</Eyebrow>
      <SectionHeading>
        You describe it.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          A senior AI team builds it.
        </Text>
      </SectionHeading>
      <SectionSub>
        Not a single autocomplete model. A coordinated team of agents, each with a defined role — architecture,
        code, review, QA. Each one does what a human specialist would do, in the right order. Tap any agent to
        see their profile.
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
        {howSteps.map((step) => (
          <HowStepCard key={step.step} step={step.step} title={step.title} body={step.body} />
        ))}
      </SimpleGrid>

      <Box
        className="cl-reveal"
        position="relative"
        mt="32px"
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
            <AgentNode key={n.id} node={n} onSelect={open} />
          ))}
        </Box>
      </Box>

      <AgentModal agent={agent} index={index} total={total} isOpen={isOpen} onClose={close} />
    </Container>
  )
}
