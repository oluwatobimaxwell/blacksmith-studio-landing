import { Box, Container, Flex, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { footerColumns } from '../data/footer-links'
import type { LandingTheme } from '../hooks/use-landing-theme'

interface LandingFooterProps {
  theme: LandingTheme
}

export function LandingFooter({ theme }: LandingFooterProps) {
  return (
    <Box
      as="footer"
      borderTop="1px solid var(--hairline)"
      pt={{ base: '64px', md: '96px' }}
      pb="48px"
      bg="var(--paper)"
    >
      <Container maxW="1200px" px="32px">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '48px', md: '64px' }}
          align="flex-start"
          justify="space-between"
        >
          <VStack align="stretch" spacing="16px" maxW={{ md: '320px' }}>
            <HStack spacing="10px" align="center">
              <Image
                src="/assets/community/logo-mark.svg"
                alt=""
                width="22px"
                height="22px"
                filter={theme === 'dark' ? 'invert(1)' : 'none'}
              />
              <Text
                as="span"
                fontSize="14px"
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
            <Text fontSize="13px" lineHeight="20px" color="var(--fg-3)" m={0}>
              A global community for anyone who wants to build software. Free, open source, and for the long term.
            </Text>
          </VStack>

          <Flex gap={{ base: '32px', md: '48px' }} flexWrap="wrap">
            {footerColumns.map((column) => (
              <VStack key={column.heading} align="stretch" spacing="14px" minW="120px">
                <Text
                  as="h5"
                  fontSize="11px"
                  lineHeight="14px"
                  fontWeight={500}
                  fontFamily="var(--font-mono)"
                  color="var(--fg-4)"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                  m={0}
                >
                  {column.heading}
                </Text>
                <VStack as="ul" align="stretch" spacing="10px" listStyleType="none" m={0} p={0}>
                  {column.links.map((link) => (
                    <Box as="li" key={link.label}>
                      <Link
                        href={link.href}
                        fontSize="13px"
                        lineHeight="18px"
                        color="var(--fg-2)"
                        transition="color 160ms var(--ease)"
                        _hover={{ color: 'var(--fg-1)', textDecoration: 'none' }}
                      >
                        {link.label}
                      </Link>
                    </Box>
                  ))}
                </VStack>
              </VStack>
            ))}
          </Flex>
        </Flex>

        <Flex
          mt={{ base: '48px', md: '80px' }}
          pt="32px"
          borderTop="1px solid var(--hairline)"
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'flex-start', md: 'center' }}
          justify="space-between"
          gap="16px"
          fontSize="12px"
          lineHeight="16px"
          color="var(--fg-4)"
          fontFamily="var(--font-mono)"
          letterSpacing="0.04em"
        >
          <Text as="span">© 2026 Blacksmith Software · Helsinki · Lagos</Text>
          <HStack spacing="10px" flexWrap="wrap">
            <Text as="span">Free · Forever</Text>
            <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
            <Text as="span">Open source (Apache-2.0)</Text>
            <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
            <Text as="span">Built in the open</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
