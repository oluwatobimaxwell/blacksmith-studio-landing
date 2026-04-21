import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { Github, MessageCircle, Rss } from 'lucide-react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { GITHUB_URL } from '@/shared/constants'

const channels = [
  {
    icon: Github,
    label: 'GitHub',
    description: 'Commits, RFCs, and the agent graph in code.',
    href: GITHUB_URL,
  },
  {
    icon: MessageCircle,
    label: 'Discord',
    description: 'Where the conversation about these posts happens.',
    href: '/community',
  },
  {
    icon: Rss,
    label: 'RSS',
    description: 'Every post, in your reader of choice.',
    href: '/blog.rss',
  },
] as const

export function BlogSubscribe() {
  return (
    <Box
      as="section"
      bg="var(--ink)"
      color="var(--on-ink-1)"
      borderTop="1px solid var(--hairline)"
    >
      <Container maxW="1200px" px="32px" py={{ base: '96px', md: '128px' }}>
        <VStack align="flex-start" spacing="24px" maxW="820px">
          <Eyebrow color="var(--on-ink-3)">Follow along</Eyebrow>
          <Heading
            as="h2"
            className="cl-reveal"
            fontSize={{ base: '36px', md: '48px' }}
            lineHeight={{ base: '40px', md: '52px' }}
            fontWeight={600}
            letterSpacing="-0.025em"
            color="var(--on-ink-1)"
            m={0}
            sx={{ textWrap: 'balance' }}
          >
            Built in the open. Read in the open.
          </Heading>
          <Text
            fontSize={{ base: '16px', md: '18px' }}
            lineHeight={{ base: '26px', md: '30px' }}
            color="var(--on-ink-2)"
            maxW="640px"
            m={0}
            sx={{ textWrap: 'pretty' }}
          >
            Field notes land here first. The conversation happens in Discord. The code — every
            agent, every RFC, every decision — is on GitHub. Pick a channel and come along.
          </Text>
        </VStack>

        <Flex
          mt={{ base: '48px', md: '72px' }}
          direction={{ base: 'column', md: 'row' }}
          gap="16px"
        >
          {channels.map(({ icon: Icon, label, description, href }) => (
            <Link
              key={label}
              href={href}
              isExternal={href.startsWith('http')}
              className="cl-reveal"
              flex="1"
              p="28px"
              borderRadius="var(--r-xl)"
              border="1px solid var(--on-ink-line)"
              bg="transparent"
              textDecoration="none"
              transition="background 160ms var(--ease), border-color 160ms var(--ease)"
              _hover={{
                bg: 'var(--on-ink-hover)',
                borderColor: 'var(--on-ink-line-strong)',
                textDecoration: 'none',
              }}
            >
              <VStack align="flex-start" spacing="16px">
                <HStack spacing="12px" color="var(--on-ink-1)">
                  <Icon size={18} />
                  <Text as="span" fontSize="15px" fontWeight={600} lineHeight="20px">
                    {label}
                  </Text>
                </HStack>
                <Text
                  fontSize="14px"
                  lineHeight="22px"
                  color="var(--on-ink-2)"
                  m={0}
                  sx={{ textWrap: 'pretty' }}
                >
                  {description}
                </Text>
              </VStack>
            </Link>
          ))}
        </Flex>
      </Container>
    </Box>
  )
}
