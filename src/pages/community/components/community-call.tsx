import { Box, Container, Divider, Grid, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { ArrowRight, Github, MessageCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { ClButton } from '@/pages/landing/components/cl-button'
import { Path } from '@/router/paths'
import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

export function CommunityCall() {
  const navigate = useNavigate()
  return (
    <Box as="section" id="join" py={{ base: '112px', md: '160px' }} borderTop="1px solid var(--hairline)">
      <Container maxW="1200px" px="32px">
        <VStack align="flex-start" spacing="32px" mb={{ base: '56px', md: '72px' }}>
          <Eyebrow>Come in</Eyebrow>
          <Heading
            as="h2"
            className="cl-reveal"
            fontSize={{ base: '40px', md: '64px' }}
            lineHeight={{ base: '44px', md: '68px' }}
            fontWeight={600}
            letterSpacing="-0.03em"
            color="var(--fg-1)"
            maxW="960px"
            m={0}
            sx={{ textWrap: 'balance' }}
          >
            Come build with us.
            <br />
            <Text as="span" color="var(--fg-3)" fontWeight={300}>
              Whatever you are making, however rough it is.
            </Text>
          </Heading>
        </VStack>

        <Grid
          templateColumns={{ base: '1fr', lg: '1fr 320px' }}
          gap={{ base: '48px', lg: '96px' }}
          alignItems="end"
        >
          <VStack align="stretch" spacing="32px" maxW="720px" className="cl-reveal">
            <Text
              fontSize={{ base: '18px', md: '20px' }}
              lineHeight={{ base: '30px', md: '32px' }}
              color="var(--fg-2)"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              The fastest way in is the Discord. The deepest way in is a pull request. The
              warmest way in is showing up to office hours with whatever you are making,
              however rough it is. Pick one. Start.
            </Text>
            <HStack spacing="12px" flexWrap="wrap">
              <ClButton
                as="a"
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                clSize="lg"
                leftIcon={<MessageCircle size={16} />}
              >
                Join on Discord
              </ClButton>
              <ClButton
                as="a"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                clVariant="ghost"
                clSize="lg"
                leftIcon={<Github size={16} />}
              >
                Contribute on GitHub
              </ClButton>
            </HStack>
          </VStack>

          <VStack align={{ base: 'flex-start', lg: 'flex-end' }} spacing="16px">
            <Divider borderColor="var(--hairline-strong)" w="64px" opacity={1} m={0} />
            <Text
              as="span"
              fontSize="12px"
              lineHeight="18px"
              fontFamily="var(--font-mono)"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="var(--fg-3)"
              m={0}
              textAlign={{ base: 'left', lg: 'right' }}
            >
              The same belief
              <br />
              runs through everything
            </Text>
            <ClButton
              clVariant="ghost"
              clSize="md"
              onClick={() => navigate(Path.Manifesto)}
              rightIcon={<ArrowRight size={14} />}
            >
              Read the manifesto
            </ClButton>
          </VStack>
        </Grid>
      </Container>
    </Box>
  )
}
