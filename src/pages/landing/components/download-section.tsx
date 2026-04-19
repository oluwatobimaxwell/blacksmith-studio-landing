import { Box, Container, Flex, Grid, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { CheckCircle2, GitBranch } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { DownloadPlatform } from './download-platform'
import { CliBlock } from './cli-block'
import { platforms } from '../data/platforms'

export function DownloadSection() {
  return (
    <Box
      as="section"
      id="download"
      py={{ base: '96px', md: '128px' }}
      bg="var(--paper-2)"
      borderTop="1px solid var(--hairline)"
      borderBottom="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px">
        <Eyebrow>Get started</Eyebrow>
        <SectionHeading>
          Ship today.
          <br />
          <Text as="span" color="var(--fg-3)" fontWeight={300}>
            One command, any platform.
          </Text>
        </SectionHeading>

        <Grid
          className="cl-reveal"
          mt="56px"
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={{ base: '32px', lg: '48px' }}
          alignItems="center"
          p={{ base: '32px', md: '48px' }}
          border="1px solid var(--hairline)"
          bg="var(--paper)"
          borderRadius="var(--r-2xl)"
        >
          <VStack align="stretch" spacing="16px">
            <Heading as="h3" fontSize="32px" lineHeight="36px" fontWeight={600} letterSpacing="-0.02em" m={0}>
              Blacksmith Studio 0.8
            </Heading>
            <Text fontSize="15px" lineHeight="24px" color="var(--fg-3)" m={0}>
              The AI-native desktop IDE. Signed builds, SHA-256 verified, 48 MB.
            </Text>
            <CliBlock command="curl -fsSL get.blacksmith.dev | sh" />
            <HStack
              mt="8px"
              spacing="12px"
              flexWrap="wrap"
              fontSize="11px"
              lineHeight="14px"
              fontWeight={500}
              fontFamily="var(--font-mono)"
              color="var(--fg-3)"
              letterSpacing="0.04em"
            >
              <Flex align="center" gap="6px">
                <CheckCircle2 size={14} />
                <Text as="span">Signed builds</Text>
              </Flex>
              <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
              <Flex align="center" gap="6px">
                <GitBranch size={14} />
                <Text as="span">SHA-256 verified</Text>
              </Flex>
              <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
              <Text as="span">v0.8.2 · 48 MB</Text>
            </HStack>
          </VStack>

          <VStack align="stretch" spacing="10px">
            {platforms.map((p) => (
              <DownloadPlatform key={p.name} icon={p.icon} name={p.name} meta={p.meta} />
            ))}
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
