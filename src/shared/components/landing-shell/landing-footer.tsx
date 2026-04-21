import { Box, Container, Flex, HStack, Image, Link, Text } from '@chakra-ui/react'
import { footerLinks, legalLinks } from './footer-links'
import type { LandingTheme } from './use-landing-theme'

interface LandingFooterProps {
  theme: LandingTheme
}

export function LandingFooter({ theme }: LandingFooterProps) {
  return (
    <Box
      as="footer"
      borderTop="1px solid var(--hairline)"
      py={{ base: '40px', md: '48px' }}
      bg="var(--paper)"
    >
      <Container maxW="1200px" px="32px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify="space-between"
          gap={{ base: '24px', md: '32px' }}
        >
          <HStack spacing="10px" align="center">
            <Image
              src="/assets/community/logo-mark.svg"
              alt=""
              width="20px"
              height="20px"
              filter={theme === 'dark' ? 'invert(1)' : 'none'}
            />
            <Text
              as="span"
              fontSize="13px"
              lineHeight="18px"
              fontWeight={600}
              letterSpacing="-0.01em"
              color="var(--fg-1)"
            >
              Blacksmith{' '}
              <Text as="span" color="var(--fg-3)" fontWeight={300}>
                Community
              </Text>
            </Text>
          </HStack>

          <HStack as="nav" aria-label="Footer" spacing={{ base: '16px', md: '24px' }} flexWrap="wrap">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                fontSize="13px"
                lineHeight="18px"
                color="var(--fg-2)"
                transition="color 160ms var(--ease)"
                _hover={{ color: 'var(--fg-1)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        <Flex
          mt={{ base: '24px', md: '32px' }}
          pt={{ base: '20px', md: '24px' }}
          borderTop="1px solid var(--hairline)"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify="space-between"
          gap="12px"
          fontSize="12px"
          lineHeight="16px"
          color="var(--fg-4)"
          fontFamily="var(--font-mono)"
          letterSpacing="0.04em"
        >
          <Text as="span">© 2026 Blacksmith · Free · Open source (Apache-2.0)</Text>
          <HStack spacing="16px" flexWrap="wrap">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                color="var(--fg-4)"
                transition="color 160ms var(--ease)"
                _hover={{ color: 'var(--fg-1)', textDecoration: 'none' }}
              >
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
