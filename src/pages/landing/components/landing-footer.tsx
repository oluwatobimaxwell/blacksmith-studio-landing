import { Box, Flex, HStack, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Hammer } from 'lucide-react'

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Agents', href: '#agents' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Discord', href: 'https://discord.gg/blacksmithstudio', external: true },
      { label: 'Twitter / X', href: 'https://twitter.com/blacksmithstudio', external: true },
      { label: 'GitHub', href: 'https://github.com/nicholasgriffintn/blacksmith-studio', external: true },
      { label: 'Changelog', href: '#', external: false },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://docs.blacksmith.studio', external: true },
      { label: 'Privacy', href: '#', external: false },
      { label: 'Terms', href: '#', external: false },
    ],
  },
]

function FooterLink({ label, href, external }: { label: string; href: string; external?: boolean }) {
  return (
    <Text
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      fontSize="14px"
      color="var(--studio-landing-text-muted)"
      transition="color 0.15s ease"
      _hover={{ color: 'var(--studio-landing-text-secondary)', textDecoration: 'none' }}
      cursor="pointer"
      display="block"
    >
      {label}
    </Text>
  )
}

export function LandingFooter() {
  return (
    <Box
      as="footer"
      borderTop="1px solid var(--studio-landing-border)"
      pt={12}
      pb={8}
      px={{ base: 5, md: 8 }}
      bg="var(--studio-landing-bg)"
    >
      <Box maxW="1100px" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} gap={10} mb={12} justify="space-between">
          {/* Brand */}
          <VStack align="start" spacing={4} maxW="260px" flexShrink={0}>
            <HStack spacing={2}>
              <Box color="var(--studio-landing-text-accent)">
                <Hammer size={17} />
              </Box>
              <Text fontSize="15px" fontWeight={600} color="var(--studio-landing-text-primary)" letterSpacing="-0.02em">
                Blacksmith
              </Text>
            </HStack>
            <Text fontSize="13px" color="var(--studio-landing-text-muted)" lineHeight={1.7}>
              The free, open source AI-native IDE for building production-ready software with a coordinated team of agents.
            </Text>
            <VStack align="start" spacing={0.5}>
              <Text fontSize="11px" color="var(--studio-landing-text-muted)">
                Founded by{' '}
                <Text as="span" color="rgba(255,255,255,0.35)" fontWeight={500}>Tobi Sholanke</Text>
              </Text>
              <Text fontSize="11px" color="var(--studio-landing-text-muted)">
                Built in Nigeria · Free, Open Source & Global
              </Text>
            </VStack>
          </VStack>

          {/* Link columns */}
          <SimpleGrid columns={3} spacing={{ base: 8, md: 12 }}>
            {footerSections.map((section) => (
              <VStack key={section.title} align="start" spacing={3}>
                <Text
                  fontSize="11px"
                  fontWeight={600}
                  color="rgba(255,255,255,0.25)"
                  letterSpacing="0.07em"
                  textTransform="uppercase"
                >
                  {section.title}
                </Text>
                <VStack align="start" spacing={2}>
                  {section.links.map((link) => (
                    <FooterLink key={link.label} {...link} />
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </Flex>

        <Box h="1px" bg="var(--studio-landing-border)" mb={6} />

        <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between" gap={3}>
          <Text fontSize="13px" color="var(--studio-landing-text-muted)">
            &copy; 2026 Blacksmith Software Community · Free &amp; Open Source · Founded by Tobi Sholanke
          </Text>
          <HStack spacing={4}>
            <Text fontSize="13px" color="var(--studio-landing-text-muted)">
              Built with Claude AI
            </Text>
            <Box w="1px" h="12px" bg="var(--studio-landing-border)" />
            <Text fontSize="13px" color="var(--studio-landing-text-accent)" fontWeight={500}>
              Free forever
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default LandingFooter
