import { Box, Container, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { Download, Users } from 'lucide-react'
import { HeroBadge } from './hero-badge'
import { HeroMeta } from './hero-meta'
import { HeroIdeFrame } from './hero-ide-frame'
import { ClButton } from './cl-button'
import { scrollToSection } from '../utils/scroll-to-section'

export function HeroSection() {
  return (
    <Box
      as="section"
      id="top"
      position="relative"
      minH="100vh"
      pt="128px"
      pb="80px"
      overflow="hidden"
      display="flex"
      flexDir="column"
      justifyContent="center"
      bg="var(--paper)"
    >
      <Box className="cl-hero-grid" />
      <Container maxW="1200px" px="32px" position="relative" zIndex={2} textAlign="center">
        <VStack spacing={0} align="center">
          <HeroBadge />
          <Heading
            as="h1"
            className="cl-reveal"
            fontSize={{ base: '44px', sm: '56px', md: '72px', lg: '84px' }}
            lineHeight="0.98"
            fontWeight={600}
            letterSpacing="-0.035em"
            m={0}
            mx="auto"
            maxW="16ch"
            sx={{ textWrap: 'balance' }}
          >
            A free AI IDE that ships{' '}
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              production-ready software.
            </Text>
          </Heading>

          <Text
            className="cl-reveal"
            mt="28px"
            mx="auto"
            maxW="620px"
            fontSize={{ base: '15px', md: '19px' }}
            lineHeight="1.55"
            color="var(--fg-3)"
            sx={{ textWrap: 'pretty' }}
          >
            Blacksmith Studio runs a team of senior-level AI agents — PM, Architect, Engineer, Reviewer, QA — so the
            code you ship is structured the way a senior team would structure it.
          </Text>

          <HStack className="cl-reveal" spacing="12px" mt="36px" flexWrap="wrap" justify="center">
            <ClButton clSize="lg" leftIcon={<Download size={16} />} onClick={() => scrollToSection('download')}>
              Download Blacksmith Studio
            </ClButton>
            <ClButton
              clVariant="ghost"
              clSize="lg"
              leftIcon={<Users size={16} />}
              onClick={() => scrollToSection('download')}
            >
              Join the community
            </ClButton>
          </HStack>

          <HeroMeta />
        </VStack>
      </Container>

      <HeroIdeFrame />
    </Box>
  )
}
