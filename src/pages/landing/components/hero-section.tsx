import { Box, Container, Flex, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { Download, Users } from 'lucide-react'
import { HeroBadge } from './hero-badge'
import { HeroMeta } from './hero-meta'
import { HeroVideoFrame } from './hero-video-frame'
import { ClButton } from './cl-button'
import { scrollToSection } from '../utils/scroll-to-section'

export function HeroSection() {
  return (
    <Box
      as="section"
      id="top"
      position="relative"
      minH="100vh"
      pt={{ base: '112px', md: '140px' }}
      pb={{ base: '80px', md: '96px' }}
      overflow="hidden"
      display="flex"
      alignItems="center"
      bg="var(--paper)"
    >
      <Box className="cl-hero-grid" />
      <Container
        maxW="1440px"
        px={{ base: '24px', md: '40px' }}
        position="relative"
        zIndex={2}
      >
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'flex-start', lg: 'center' }}
          gap={{ base: '56px', lg: '64px' }}
        >
          <VStack
            align="flex-start"
            spacing={0}
            flex={{ base: '1', lg: '0 0 480px' }}
            maxW={{ base: 'full', lg: '480px' }}
          >
            <HeroBadge />
            <Heading
              as="h1"
              className="cl-reveal"
              fontSize={{ base: '42px', sm: '54px', md: '64px', lg: '72px' }}
              lineHeight="1.02"
              fontWeight={600}
              letterSpacing="-0.035em"
              m={0}
              sx={{ textWrap: 'balance' }}
            >
              AI writes code in seconds.{' '}
              <Text as="span" color="var(--fg-3)" fontWeight={300}>
                Someone still has to maintain it.
              </Text>
            </Heading>
            <Text
              className="cl-reveal"
              mt="24px"
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight="1.6"
              color="var(--fg-3)"
              maxW="500px"
              sx={{ textWrap: 'pretty' }}
            >
              Blacksmith Studio runs a coordinated team of specialist AI agents: Architect,
              Engineer, Reviewer, QA. Each one does the job the way a senior engineer would.
              The code you get isn't just fast. It's structured, tested, and clean from line one.
            </Text>
            <HStack className="cl-reveal" spacing="12px" mt="36px" flexWrap="wrap">
              <ClButton
                clSize="lg"
                leftIcon={<Download size={16} />}
                onClick={() => scrollToSection('download')}
              >
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

          <Box flex="1" w="full" minW={0} className="cl-reveal">
            <HeroVideoFrame />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}
