import { Box, Flex, HStack, Text, Button } from '@chakra-ui/react'
import { Anvil } from 'lucide-react'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/nicholasgriffintn/blacksmith-studio', external: true },
  { label: 'Docs', href: 'https://docs.blacksmith.studio', external: true },
  { label: 'Twitter / X', href: 'https://twitter.com/blacksmithstudio', external: true },
  { label: 'Discord', href: 'https://discord.gg/blacksmithstudio', external: true },
]

export function LandingFooter() {
  return (
    <Box as="footer" borderTop="1px solid var(--studio-border)" py="2xl" px="lg">
      <Flex
        maxW="6xl"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        gap="lg"
      >
        <HStack spacing="xs" color="var(--studio-text-muted)">
          <Box color="var(--studio-brand-green)" opacity={0.7}>
            <Anvil size={16} />
          </Box>
          <Text textStyle="bodySmall" color="var(--studio-text-muted)">
            &copy; {new Date().getFullYear()} Blacksmith Studio. All rights reserved.
          </Text>
        </HStack>
        <HStack spacing="sm">
          {footerLinks.map((link) => (
            <Button
              key={link.label}
              variant="ghost"
              size="sm"
              color="var(--studio-text-muted)"
              fontWeight={400}
              as="a"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              transition="color 0.12s ease"
              _hover={{ color: 'var(--studio-text-secondary)', bg: 'transparent' }}
            >
              {link.label}
            </Button>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
