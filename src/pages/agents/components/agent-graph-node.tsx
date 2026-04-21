import { Box, chakra } from '@chakra-ui/react'
import type { HeroGraphNode } from '../data/hero-graph'
import type { AgentProfileData } from '@/shared/components/agent-modal'

interface AgentGraphNodeProps {
  node: HeroGraphNode
  agent: AgentProfileData | undefined
  onSelect: (id: string) => void
}

const NodeButton = chakra('button')

export function AgentGraphNode({ node, agent, onSelect }: AgentGraphNodeProps) {
  const label = node.label ?? agent?.name ?? ''
  const isReal = !!agent
  const classes = [
    'ag-node',
    node.primary ? 'primary' : '',
    node.tier ? `tier-${node.tier}` : '',
    isReal ? 'real' : 'cluster',
    node.compact ? 'compact' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const avatarText = agent ? agent.initials : label.slice(0, 2)
  const showLabel = !node.compact

  return (
    <NodeButton
      type="button"
      className={classes}
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
      onClick={() => isReal && agent && onSelect(agent.id)}
      disabled={!isReal}
      title={isReal && agent ? agent.name : label}
      data-caption={isReal && agent ? agent.name : label}
      aria-label={isReal && agent ? `Open ${agent.name} profile` : label}
    >
      <Box as="span" className="ag-avatar">
        {avatarText}
      </Box>
      {showLabel && (
        <Box as="span" className="ag-name">
          {label}
        </Box>
      )}
    </NodeButton>
  )
}
