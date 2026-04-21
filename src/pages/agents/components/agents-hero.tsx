import { Box, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { AgentGraphNode } from './agent-graph-node'
import { heroGraphEdges, heroGraphNodes } from '../data/hero-graph'
import { agentsById } from '@/shared/components/agent-modal'

interface AgentsHeroProps {
  onSelectAgent: (id: string) => void
}

const HERO_STATS = [
  { n: '11', l: 'specialists' },
  { n: '1', l: 'process' },
  { n: 'every', l: 'project' },
]

const posById = Object.fromEntries(heroGraphNodes.map((n) => [n.id, n]))

export function AgentsHero({ onSelectAgent }: AgentsHeroProps) {
  return (
    <Container
      as="section"
      id="top"
      className="ag-hero"
      maxW="1200px"
      px="32px"
      pt="96px"
      pb="56px"
      textAlign="center"
    >
      <Box display="inline-flex">
        <Eyebrow>The agent team</Eyebrow>
      </Box>
      <Heading as="h1" className="ag-hero-title cl-reveal in">
        A senior team,
        <br />
        <Text as="span" className="quiet">
          inside your IDE.
        </Text>
      </Heading>
      <Text as="p" className="ag-hero-sub cl-reveal in">
        Eleven specialised agents — PM, Architect, Designer, Engineers, DevOps, Security, Reviewer, QA, and Technical
        Writer — coordinated through a real engineering process. Run the full team for a feature, or pick a single
        specialist for a focused task. Tap any agent to see their profile.
      </Text>

      <Box className="ag-hero-graph cl-reveal in">
        <Box className="ag-graph-bg" aria-hidden />
        <Box
          as="svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="ag-hero-svg"
          aria-hidden
        >
          {heroGraphEdges.map(([a, b], i) => {
            const A = posById[a]
            const B = posById[b]
            if (!A || !B) return null
            const midY = (A.y + B.y) / 2
            return (
              <path
                key={`${a}-${b}-${i}`}
                d={`M ${A.x} ${A.y + 3} C ${A.x} ${midY}, ${B.x} ${midY}, ${B.x} ${B.y - 3}`}
                stroke="var(--hairline-strong)"
                strokeWidth={0.18}
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeDasharray="0.35 0.35"
              />
            )
          })}
        </Box>
        {heroGraphNodes.map((node) => {
          const agent = node.ref ? agentsById[node.ref] : agentsById[node.id]
          return <AgentGraphNode key={node.id} node={node} agent={agent} onSelect={onSelectAgent} />
        })}
      </Box>

      <HStack className="ag-hero-meta" as="dl" spacing="96px">
        {HERO_STATS.map((stat) => (
          <VStack key={stat.l} as="div" spacing="14px">
            <Text as="dt" className="n">
              {stat.n}
            </Text>
            <Text as="dd" className="l">
              {stat.l}
            </Text>
          </VStack>
        ))}
      </HStack>
    </Container>
  )
}
