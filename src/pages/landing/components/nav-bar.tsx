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
import { Anvil, Menu } from 'lucide-react'
import { Path } from '@/router/paths'
import { useLandingScroll } from '../hooks/use-landing-scroll'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Community', href: '#community' },
  { label: 'Pricing', href: '#pricing' },
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
      zIndex="sticky"
      transition="background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease"
      bg={isScrolled ? 'rgba(0,0,0,0.82)' : 'transparent'}
      backdropFilter={isScrolled ? 'blur(20px)' : 'none'}
      borderBottom={isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 5, md: 8 }}
        h={{ base: '60px', md: '68px' }}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <HStack
          spacing={2}
          as={Link}
          to={Path.Home}
          _hover={{ opacity: 0.75 }}
          transition="opacity 0.15s ease"
          textDecoration="none"
          flexShrink={0}
        >
          <Box color="var(--studio-landing-text-accent)">
            <Anvil size={18} />
          </Box>
          <Text fontSize="15px" fontWeight={600} color="var(--studio-landing-text-primary)" letterSpacing="-0.02em">
            Blacksmith
          </Text>
        </HStack>

        {/* Desktop nav */}
        <HStack as="nav" aria-label="Main" spacing={8} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <Text
              key={link.label}
              as="a"
              href={link.href}
              fontSize="14px"
              fontWeight={400}
              color="rgba(255,255,255,0.5)"
              transition="color 0.15s ease"
              cursor="pointer"
              letterSpacing="-0.01em"
              _hover={{ color: 'var(--studio-landing-text-primary)', textDecoration: 'none' }}
            >
              {link.label}
            </Text>
          ))}
        </HStack>

        {/* Desktop CTAs */}
        <HStack spacing={2} display={{ base: 'none', md: 'flex' }}>
          <Button
            as={Link}
            to={Path.Login}
            variant="ghost"
            size="sm"
            h="36px"
            px={4}
            fontSize="14px"
            fontWeight={400}
            color="rgba(255,255,255,0.5)"
            borderRadius="full"
            _hover={{ color: 'var(--studio-landing-text-primary)', bg: 'var(--studio-landing-surface)' }}
          >
            Log in
          </Button>
          <Button
            h="36px"
            px={5}
            fontSize="13px"
            fontWeight={600}
            borderRadius="full"
            bg="var(--studio-landing-cta-bg)"
            color="var(--studio-landing-cta-text)"
            _hover={{ bg: 'var(--studio-landing-cta-bg-hover)' }}
            transition="background 0.2s"
          >
            Download
          </Button>
        </HStack>

        {/* Mobile menu button */}
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

      {/* Mobile drawer */}
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
                as={Link}
                to={Path.Login}
                variant="ghost"
                borderRadius="lg"
                fontSize="14px"
                fontWeight={400}
                color="rgba(255,255,255,0.5)"
                justifyContent="flex-start"
                onClick={onClose}
                _hover={{ color: 'white', bg: 'rgba(255,255,255,0.04)' }}
              >
                Log in
              </Button>
              <Button
                borderRadius="full"
                fontSize="14px"
                fontWeight={600}
                bg="var(--studio-landing-cta-bg)"
                color="var(--studio-landing-cta-text)"
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
