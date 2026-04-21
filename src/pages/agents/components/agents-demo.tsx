import { Box, Container, Text } from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { agentsById } from '@/shared/components/agent-modal'
import { demoSteps } from '../data/demo-steps'

export function AgentsDemo() {
  return (
    <Container as="section" id="demo" className="ag-demo" maxW="1200px" px="32px">
      <Eyebrow>One task · the full team</Eyebrow>
      <SectionHeading>
        &ldquo;Build a booking page.&rdquo;
        <br />
        <Text as="span" color="var(--fg-3)" fontWeight={300}>
          48 seconds. Eleven agents. One passing test suite.
        </Text>
      </SectionHeading>

      <Box className="ag-timeline cl-reveal">
        <Box className="ag-timeline-rail" aria-hidden />
        {demoSteps.map((step, i) => {
          const agent = agentsById[step.agent]
          if (!agent) return null
          return (
            <Box key={`${step.agent}-${i}`} className="ag-step" style={{ ['--d' as never]: `${i * 60}ms` }}>
              <Box className="ag-step-dot">
                <Text as="span">{agent.initials}</Text>
              </Box>
              <Box className="ag-step-time">{step.t}</Box>
              <Box className="ag-step-card">
                <Box className="ag-step-head">
                  <Text as="span" className="ag-step-name">
                    {agent.name}
                  </Text>
                  <Text as="span" className="ag-step-role">
                    {agent.short}
                  </Text>
                </Box>
                <Text as="h3" className="ag-step-title">
                  {step.title}
                </Text>
                <Text as="p" className="ag-step-body">
                  {step.body}
                </Text>
              </Box>
            </Box>
          )
        })}
        <Box className="ag-step ag-step-done" style={{ ['--d' as never]: `${demoSteps.length * 60}ms` }}>
          <Box className="ag-step-dot done">
            <Check size={12} strokeWidth={2.25} />
          </Box>
          <Box className="ag-step-time">00:48</Box>
          <Box className="ag-step-card done">
            <Text as="h3" className="ag-step-title">
              Quenched.
            </Text>
            <Text as="p" className="ag-step-body">
              Booking page deployed to preview. All acceptance tests green. Changelog written. Zero open review
              comments.
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
