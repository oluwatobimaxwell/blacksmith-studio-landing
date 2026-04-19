import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { MockShell } from './mock-shell'

interface AgentN {
  id: string
  label: string
  x: number
  y: number
}

const NODES: AgentN[] = [
  { id: 'pm', label: 'Product Manager', x: 50, y: 10 },
  { id: 'arch', label: 'Architecture', x: 15, y: 40 },
  { id: 'eng', label: 'Engineering', x: 50, y: 40 },
  { id: 'qa', label: 'Quality', x: 85, y: 40 },
  { id: 'sa', label: 'Software Arch.', x: 5, y: 72 },
  { id: 'de', label: 'Database', x: 25, y: 72 },
  { id: 'fe', label: 'Frontend', x: 42, y: 72 },
  { id: 'be', label: 'Backend', x: 58, y: 72 },
  { id: 'cr', label: 'Code Review', x: 76, y: 72 },
  { id: 'sec', label: 'Security', x: 92, y: 72 },
]

const EDGES: [string, string][] = [
  ['pm', 'arch'], ['pm', 'eng'], ['pm', 'qa'],
  ['arch', 'sa'], ['arch', 'de'],
  ['eng', 'fe'], ['eng', 'be'],
  ['qa', 'cr'], ['qa', 'sec'],
]

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]))

export function MockAgents() {
  return (
    <MockShell title="blacksmith-studio-web / Agents">
      <Box position="relative" minH="420px" overflow="hidden" bg="var(--paper)">
        <Box position="absolute" inset={0} className="cl-card-grid-sm" opacity={0.5} pointerEvents="none" />
        <Box as="svg" viewBox="0 0 100 100" preserveAspectRatio="none" position="absolute" inset={0} w="full" h="full">
          {EDGES.map(([a, b], i) => {
            const A = byId[a]
            const B = byId[b]
            if (!A || !B) return null
            const midY = (A.y + B.y) / 2
            return (
              <path
                key={i}
                d={`M ${A.x} ${A.y + 3} C ${A.x} ${midY}, ${B.x} ${midY}, ${B.x} ${B.y - 3}`}
                stroke="var(--hairline-strong)"
                strokeWidth={0.2}
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            )
          })}
        </Box>
        {NODES.map((n) => {
          const active = n.id === 'pm'
          return (
            <HStack
              key={n.id}
              position="absolute"
              left={`${n.x}%`}
              top={`${n.y}%`}
              transform="translate(-50%, -50%)"
              bg={active ? 'var(--ink)' : 'var(--paper)'}
              color={active ? 'var(--paper)' : 'var(--fg-1)'}
              border="1px solid"
              borderColor={active ? 'var(--ink)' : 'var(--hairline)'}
              borderRadius="8px"
              px="10px"
              py="6px"
              fontSize="10px"
              lineHeight="14px"
              fontWeight={500}
              spacing="6px"
              whiteSpace="nowrap"
            >
              <Box w="12px" h="12px" borderRadius="3px" bg={active ? 'var(--paper)' : 'var(--paper-3)'} />
              <Text as="span">{n.label}</Text>
            </HStack>
          )
        })}
        <Flex position="absolute" bottom="12px" left="12px" right="12px" gap="8px">
          {['Chat', 'Tasks', 'Timeline'].map((tab) => (
            <Box
              key={tab}
              px="10px"
              py="5px"
              border="1px solid var(--hairline)"
              borderRadius="10px"
              fontSize="10px"
              lineHeight="14px"
              fontWeight={500}
              bg="var(--paper)"
            >
              {tab}
            </Box>
          ))}
        </Flex>
      </Box>
    </MockShell>
  )
}
