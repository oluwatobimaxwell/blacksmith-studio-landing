import { Link } from 'react-router-dom'
import { Box, Flex, HStack, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Path } from '@/router/paths'

const footerSections = [
  {
    title: 'Studio',
    links: [
      { label: 'Product', href: '#features' },
      { label: 'Hub', href: '#graphify' },
      { label: 'Showcase', href: '#showcase' },
      { label: 'Changelog', href: '#' },
      { label: 'Roadmap', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Forum', href: '#' },
      { label: 'Discord', href: 'https://discord.gg/blacksmithstudio', external: true },
      { label: 'GitHub', href: 'https://github.com/nicholasgriffintn/blacksmith-studio', external: true },
      { label: 'Contributing', href: '#' },
      { label: 'Principles', href: '#principles' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: Path.Privacy },
      { label: 'Terms', to: Path.Terms },
      { label: 'Acceptable Use', to: Path.AcceptableUse },
      { label: 'Licence', to: Path.Licence },
      { label: 'Press kit', href: '#' },
    ],
  },
]

function FooterLink({
  label,
  href,
  to,
  external,
}: {
  label: string
  href?: string
  to?: string
  external?: boolean
}) {
  if (to) {
    return (
      <Text
        as={Link}
        to={to}
        fontSize="13px"
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

  return (
    <Text
      as="a"
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      fontSize="13px"
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
      <Box maxW="1200px" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} gap={10} mb={12} justify="space-between">
          <VStack align="start" spacing={3} maxW="260px" flexShrink={0}>
            <Text
              fontSize="14px"
              fontWeight={600}
              color="var(--studio-landing-text-primary)"
              letterSpacing="-0.01em"
              fontFamily="mono"
            >
              Blacksmith Studio
            </Text>
            <Text fontSize="12px" color="var(--studio-landing-text-muted)" lineHeight={1.7}>
              A free, open source desktop IDE with a team of AI agents. Built in Helsinki for the world.
            </Text>
          </VStack>

          <SimpleGrid columns={3} spacing={{ base: 8, md: 12 }}>
            {footerSections.map((section) => (
              <VStack key={section.title} align="start" spacing={3}>
                <Text
                  fontSize="11px"
                  fontWeight={600}
                  color="rgba(255,255,255,0.3)"
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
          <Text fontSize="12px" color="var(--studio-landing-text-muted)">
            &copy; 2026 Blacksmith Studio
          </Text>
          <HStack spacing={4}>
            <Text fontSize="12px" color="var(--studio-landing-text-muted)">
              Built in Helsinki
            </Text>
            <Box w="1px" h="10px" bg="var(--studio-landing-border)" />
            <Text fontSize="12px" color="var(--studio-landing-text-accent)" fontWeight={500}>
              Open source
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  )
}

export default LandingFooter
