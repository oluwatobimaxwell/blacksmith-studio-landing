import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import { Check } from 'lucide-react'
import type { AgentProfileData } from './agents-data'

interface AgentProfileProps {
  agent: AgentProfileData
  index: number
  total: number
}

export function AgentProfile({ agent, index, total }: AgentProfileProps) {
  const numLabel = `${String(index + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`

  return (
    <Box as="article" className="ag-profile">
      <Box className="ag-profile-head">
        <Box className="ag-profile-avatar">{agent.initials}</Box>
        <Box className="ag-profile-id">
          <Heading as="h3">{agent.name}</Heading>
          <Box className="ag-profile-short">{agent.short}</Box>
        </Box>
        <Box className="ag-profile-no">{numLabel}</Box>
      </Box>

      <Text as="p" className="ag-lede">
        {agent.lede}
      </Text>

      <Box as="blockquote" className="ag-principle">
        <Text as="span" className="ag-principle-label">
          How they think
        </Text>
        {agent.principle}
      </Box>

      <Grid className="ag-profile-grid">
        <Box>
          <Box className="ag-profile-h">Responsibilities</Box>
          <Box as="ul" className="ag-list">
            {agent.resp.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </Box>
        </Box>
        <Box>
          <Box className="ag-profile-h">I / O</Box>
          <Box className="ag-io">
            <Box className="ag-io-label">Receives</Box>
            <Box className="ag-io-items">
              {agent.inputs.map((x, i) => (
                <Box as="span" key={`in-${i}`} className="ag-chip">
                  {x}
                </Box>
              ))}
            </Box>
            <Box className="ag-io-label">Produces</Box>
            <Box className="ag-io-items">
              {agent.outputs.map((x, i) => (
                <Box as="span" key={`out-${i}`} className="ag-chip out">
                  {x}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box className="ag-profile-h">Quality gates</Box>
          <Box as="ul" className="ag-list gates">
            {agent.gates.map((g, i) => (
              <li key={i}>
                <Check size={12} />
                <span>{g}</span>
              </li>
            ))}
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}
