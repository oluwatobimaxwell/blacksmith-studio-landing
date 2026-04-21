import { Box, Container, Text } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { compareRows } from '../data/compare-rows'

export function AgentsCompare() {
  return (
    <Container as="section" id="vs" className="ag-compare" maxW="1200px" px="32px">
      <Eyebrow>Two ways to build</Eyebrow>
      <SectionHeading>
        Single agent, or the full team.
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          Different jobs. Both ship clean.
        </Text>
      </SectionHeading>
      <Text
        as="p"
        className="ag-compare-sub"
        color="var(--fg-3)"
        maxW="640px"
        mt="16px"
        fontSize="15px"
        lineHeight="24px"
        textAlign="left"
      >
        For a quick fix or a focused task, one specialist is enough. For a feature that has to last — one you
        will not rewrite at month six — run the full team. Both ship clean.
      </Text>

      <Box
        className="ag-table cl-reveal"
        role="table"
        aria-label="Single agent and AI team — when to use each"
      >
        <Box className="ag-table-head" role="row">
          <Box role="columnheader" aria-label="Dimension" />
          <Box role="columnheader">
            <Box className="ag-th-label">Single agent</Box>
            <Box className="ag-th-sub">one specialist, one output</Box>
          </Box>
          <Box role="columnheader">
            <Box className="ag-th-label">AI team</Box>
            <Box className="ag-th-sub">eleven specialists, one process</Box>
          </Box>
        </Box>
        {compareRows.map((row) => (
          <Box key={row.label} className="ag-table-row" role="row">
            <Box className="ag-row-label" role="rowheader">
              {row.label}
            </Box>
            <Box className="ag-row-a" role="cell">
              {row.single}
            </Box>
            <Box className="ag-row-b" role="cell">
              {row.team}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}
