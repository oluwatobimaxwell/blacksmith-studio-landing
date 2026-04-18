import { Box, Flex, HStack, VStack, Text } from '@chakra-ui/react'
import {
  Network,
  Sparkles,
  Plug,
  Play,
  Wand2,
  LayoutTemplate,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ComponentType } from 'react'

const FEATURE_ICONS: Record<string, LucideIcon> = {
  graphify: Network,
  'project-builder': Sparkles,
  mcp: Plug,
  runner: Play,
  skills: Wand2,
  templates: LayoutTemplate,
}

export function getFeatureIcon(id: string): LucideIcon | undefined {
  return FEATURE_ICONS[id]
}

function GraphifyVisual() {
  return (
    <Box w="full" h="80px" position="relative" aria-hidden>
      <svg viewBox="0 0 200 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <g stroke="rgba(255,255,255,0.18)" strokeWidth={1} fill="none">
          <line x1="40" y1="40" x2="90" y2="25" />
          <line x1="40" y1="40" x2="90" y2="55" />
          <line x1="90" y1="25" x2="140" y2="20" />
          <line x1="90" y1="55" x2="140" y2="55" />
          <line x1="140" y1="20" x2="170" y2="40" />
          <line x1="140" y1="55" x2="170" y2="40" />
          <line x1="90" y1="25" x2="90" y2="55" />
        </g>
        <g>
          <circle cx="40" cy="40" r="4" fill="#2dd4a8" />
          <circle cx="90" cy="25" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="90" cy="55" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="140" cy="20" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="140" cy="55" r="3" fill="rgba(255,255,255,0.6)" />
          <circle cx="170" cy="40" r="4" fill="#2dd4a8" />
        </g>
      </svg>
    </Box>
  )
}

function ProjectBuilderVisual() {
  return (
    <VStack align="stretch" spacing={1.5} fontFamily="mono" aria-hidden>
      <HStack spacing={2}>
        <Box w="6px" h="6px" borderRadius="full" bg="rgba(45,212,168,0.85)" />
        <Text fontSize="10px" color="rgba(255,255,255,0.55)">
          scaffold &middot; next.js + supabase
        </Text>
      </HStack>
      <HStack spacing={2}>
        <Box w="6px" h="6px" borderRadius="full" bg="rgba(45,212,168,0.85)" />
        <Text fontSize="10px" color="rgba(255,255,255,0.55)">
          writing auth &amp; schema
        </Text>
      </HStack>
      <HStack spacing={2}>
        <Box
          w="6px"
          h="6px"
          borderRadius="full"
          bg="rgba(255,184,84,0.85)"
          sx={{ animation: 'graphPulse 1.4s ease-in-out infinite' }}
        />
        <Text fontSize="10px" color="rgba(255,255,255,0.85)">
          starting dev server&hellip;
        </Text>
      </HStack>
    </VStack>
  )
}

function McpVisual() {
  const servers = ['github', 'postgres', 'notion', 'figma']
  return (
    <Flex wrap="wrap" gap={1.5} aria-hidden>
      {servers.map((s) => (
        <Flex
          key={s}
          align="center"
          gap={1.5}
          px={2}
          py="4px"
          borderRadius="full"
          bg="rgba(255,255,255,0.04)"
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.08)"
        >
          <Box w="5px" h="5px" borderRadius="full" bg="rgba(45,212,168,0.75)" />
          <Text fontSize="10px" color="rgba(255,255,255,0.65)" fontFamily="mono">
            {s}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

function RunnerVisual() {
  return (
    <VStack align="stretch" spacing={1} fontFamily="mono" aria-hidden>
      <HStack spacing={2}>
        <Text fontSize="10px" color="rgba(45,212,168,0.8)">$</Text>
        <Text fontSize="10px" color="rgba(255,255,255,0.75)">npm run dev</Text>
      </HStack>
      <Text fontSize="10px" color="rgba(255,255,255,0.45)">&#9656; ready at :5173</Text>
      <Text fontSize="10px" color="rgba(255,184,84,0.7)">! Warning: missing env APP_URL</Text>
      <HStack spacing={2}>
        <Text fontSize="10px" color="rgba(45,212,168,0.8)">AI</Text>
        <Text fontSize="10px" color="rgba(255,255,255,0.6)">Add APP_URL to .env.local?</Text>
      </HStack>
    </VStack>
  )
}

function SkillsVisual() {
  const skills = [
    { cmd: '/release', hint: 'bump, changelog, tag' },
    { cmd: '/review', hint: 'check pending PR' },
    { cmd: '/test-gap', hint: 'find untested code' },
  ]
  return (
    <VStack align="stretch" spacing={1.5} aria-hidden>
      {skills.map((s) => (
        <Flex
          key={s.cmd}
          align="center"
          gap={2}
          px={2.5}
          py="5px"
          borderRadius="6px"
          bg="rgba(255,255,255,0.03)"
          borderWidth="1px"
          borderColor="rgba(255,255,255,0.07)"
        >
          <Text fontSize="10px" color="#2dd4a8" fontFamily="mono" fontWeight={600}>
            {s.cmd}
          </Text>
          <Text fontSize="10px" color="rgba(255,255,255,0.5)">
            {s.hint}
          </Text>
        </Flex>
      ))}
    </VStack>
  )
}

function TemplatesVisual() {
  const tpls = [
    { name: 'SaaS starter', stack: 'Next · Supabase' },
    { name: 'CRM', stack: 'Django · React' },
    { name: 'Bot', stack: 'FastAPI · Redis' },
  ]
  return (
    <HStack spacing={1.5} align="stretch" aria-hidden>
      {tpls.map((t, i) => (
        <Box
          key={t.name}
          flex={1}
          p={2}
          borderRadius="8px"
          bg="rgba(255,255,255,0.03)"
          borderWidth="1px"
          borderColor={i === 0 ? 'rgba(45,212,168,0.35)' : 'rgba(255,255,255,0.07)'}
          minW={0}
        >
          <Text fontSize="10px" color="rgba(255,255,255,0.8)" fontWeight={600} noOfLines={1}>
            {t.name}
          </Text>
          <Text fontSize="9px" color="rgba(255,255,255,0.4)" fontFamily="mono" noOfLines={1}>
            {t.stack}
          </Text>
        </Box>
      ))}
    </HStack>
  )
}

const VISUALS: Record<string, ComponentType> = {
  graphify: GraphifyVisual,
  'project-builder': ProjectBuilderVisual,
  mcp: McpVisual,
  runner: RunnerVisual,
  skills: SkillsVisual,
  templates: TemplatesVisual,
}

export function getFeatureVisual(id: string): ComponentType | undefined {
  return VISUALS[id]
}
