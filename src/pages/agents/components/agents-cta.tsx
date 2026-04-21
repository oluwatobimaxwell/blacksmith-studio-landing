import { Box, Container, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { Github, MessageCircle } from 'lucide-react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

const META = [
  { n: '4.2k', l: 'Members' },
  { n: '62', l: 'Countries' },
  { n: '118', l: 'Contributors' },
  { n: 'Weekly', l: 'Office hours' },
]

export function AgentsCta() {
  return (
    <Box as="section" id="cta" className="ag-cta">
      <Container maxW="1200px" px="32px">
        <Box className="ag-cta-card cl-reveal">
          <Box className="ag-cta-copy">
            <Eyebrow color="var(--on-ink-3)">Join us</Eyebrow>
            <Heading as="h2">
              Build with eleven specialists
              <br />
              <Text as="span" className="quiet">
                and a few thousand builders.
              </Text>
            </Heading>
            <Text as="p">
              Share what you&apos;re making, ask for help, contribute to the agents themselves. The community is how
              the team gets better.
            </Text>
            <HStack className="ag-cta-actions" spacing="12px" flexWrap="wrap">
              <Box
                as="a"
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ag-cta-btn-primary"
              >
                <MessageCircle size={16} />
                Join on Discord
              </Box>
              <Box
                as="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ag-cta-btn-ghost"
              >
                <Github size={16} />
                Contribute on GitHub
              </Box>
            </HStack>
          </Box>
          <Box className="ag-cta-meta">
            {META.map((m) => (
              <VStack key={m.l} as="div" align="flex-start" spacing="6px">
                <Text as="span" className="n">
                  {m.n}
                </Text>
                <Text as="span" className="l">
                  {m.l}
                </Text>
              </VStack>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
