import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react'
import { Download, Menu } from 'lucide-react'
import { Path } from '@/router/paths'
import { useLandingScroll } from '../hooks/use-landing-scroll'

const navLinks = [
  { label: 'Product', href: '#features' },
  { label: 'Hub', href: '#graphify' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Docs', href: 'https://docs.blacksmith.studio', external: true },
  { label: 'Community', href: '#principles' },
]

export function NavBar() {
  const { isScrolled } = useLandingScroll()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      as="header"
      role="banner"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transition="background 0.25s ease, border-color 0.25s ease, backdrop-filter 0.25s ease, opacity 0.25s ease"
      opacity={isScrolled ? 1 : 0}
      pointerEvents={isScrolled ? 'auto' : 'none'}
      bg="rgba(0,0,0,0.82)"
      backdropFilter="blur(20px)"
      borderBottom="1px solid rgba(255,255,255,0.06)"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        h={{ base: '60px', md: '64px' }}
        align="center"
        justify="space-between"
      >
        <HStack
          spacing={2}
          as={Link}
          to={Path.Home}
          _hover={{ opacity: 0.75 }}
          transition="opacity 0.15s ease"
          textDecoration="none"
          flexShrink={0}
        >
          <Text
            fontSize="14px"
            fontWeight={600}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.01em"
            fontFamily="mono"
          >
            Blacksmith Studio
          </Text>
        </HStack>

        <HStack as="nav" aria-label="Main" spacing={7} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <Text
              key={link.label}
              as="a"
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              fontSize="13px"
              fontWeight={400}
              color="rgba(255,255,255,0.55)"
              transition="color 0.15s ease"
              cursor="pointer"
              letterSpacing="-0.005em"
              _hover={{ color: 'var(--studio-landing-text-primary)', textDecoration: 'none' }}
            >
              {link.label}
            </Text>
          ))}
        </HStack>

        <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
          <Button
            as="a"
            href="#download"
            h="36px"
            px={4}
            fontSize="13px"
            fontWeight={600}
            borderRadius="full"
            bg="var(--studio-landing-cta-bg)"
            color="var(--studio-landing-cta-text)"
            leftIcon={<Download size={13} />}
            _hover={{ bg: 'var(--studio-landing-cta-bg-hover)', transform: 'translateY(-1px)' }}
            transition="background 0.15s ease, transform 0.15s ease"
          >
            Download
          </Button>
        </HStack>

        <IconButton
          aria-label="Open menu"
          aria-expanded={isOpen}
          variant="ghost"
          size="sm"
          display={{ base: 'flex', md: 'none' }}
          color="var(--studio-landing-text-primary)"
          _hover={{ bg: 'var(--studio-landing-surface)' }}
          onClick={onOpen}
          icon={<Menu size={20} />}
        />
      </Flex>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay bg="rgba(0,0,0,0.75)" backdropFilter="blur(12px)" />
        <DrawerContent bg="#000" borderLeft="1px solid rgba(255,255,255,0.07)" maxW="280px">
          <DrawerCloseButton color="rgba(255,255,255,0.4)" />
          <DrawerBody pt={16} px={6}>
            <VStack spacing={1} align="stretch">
              <Box as="nav" aria-label="Main">
                <VStack spacing={0} align="stretch">
                  {navLinks.map((link) => (
                    <Text
                      key={link.label}
                      as="a"
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      fontSize="16px"
                      fontWeight={400}
                      color="rgba(255,255,255,0.6)"
                      py={3}
                      px={2}
                      borderRadius="lg"
                      _hover={{ color: 'white', textDecoration: 'none', bg: 'rgba(255,255,255,0.04)' }}
                      onClick={onClose}
                      cursor="pointer"
                    >
                      {link.label}
                    </Text>
                  ))}
                </VStack>
              </Box>

              <Box h="1px" bg="var(--studio-landing-border)" my={4} />

              <Button
                as="a"
                href="#download"
                borderRadius="full"
                fontSize="14px"
                fontWeight={600}
                bg="var(--studio-landing-cta-bg)"
                color="var(--studio-landing-cta-text)"
                leftIcon={<Download size={14} />}
                _hover={{ bg: 'var(--studio-landing-cta-bg-hover)' }}
                onClick={onClose}
                mt={2}
              >
                Download
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
