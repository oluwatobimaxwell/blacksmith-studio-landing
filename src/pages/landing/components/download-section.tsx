import { Box, Container, Flex, Grid, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { CheckCircle2, GitBranch, MessageCircle, Github } from 'lucide-react'
import { Eyebrow } from './eyebrow'
import { SectionHeading } from './section-heading'
import { DownloadPlatform } from './download-platform'
import { CliBlock } from './cli-block'
import { ClButton } from './cl-button'
import { platforms } from '../data/platforms'
import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

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
          Ship fast. Ship clean.
          <br />
          <Text as="span" color="var(--fg-3)" fontWeight={300}>
            Ship once.
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

        <Flex
          className="cl-reveal"
          mt={{ base: '32px', md: '40px' }}
          p={{ base: '28px', md: '32px 40px' }}
          border="1px solid var(--hairline)"
          bg="var(--paper)"
          borderRadius="var(--r-2xl)"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify="space-between"
          gap={{ base: '20px', md: '24px' }}
        >
          <VStack align="flex-start" spacing="6px">
            <Heading
              as="h3"
              fontSize={{ base: '22px', md: '24px' }}
              lineHeight={{ base: '28px', md: '30px' }}
              fontWeight={600}
              letterSpacing="-0.015em"
              m={0}
              color="var(--fg-1)"
            >
              Stop fixing AI code. Start shipping it.
            </Heading>
            <Text fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0}>
              Ask questions, share what you're making, and build with people who've already been through it.
            </Text>
          </VStack>
          <HStack spacing="10px" flexWrap="wrap">
            <ClButton
              as="a"
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              clSize="md"
              leftIcon={<MessageCircle size={14} />}
            >
              Join on Discord
            </ClButton>
            <ClButton
              as="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              clVariant="ghost"
              clSize="md"
              leftIcon={<Github size={14} />}
            >
              GitHub
            </ClButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
