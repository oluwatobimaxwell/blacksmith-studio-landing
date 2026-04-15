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
  { label: 'Agents', href: '#agents' },
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
      transition="background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease"
      bg={isScrolled ? 'rgba(10,10,10,0.8)' : 'transparent'}
      backdropFilter={isScrolled ? 'blur(12px)' : 'none'}
      borderBottom={isScrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent'}
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 'lg', md: '2xl' }}
        h="64px"
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <HStack
          spacing="xs"
          as={Link}
          to={Path.Home}
          _hover={{ opacity: 0.7 }}
          transition="opacity 0.15s ease"
          textDecoration="none"
        >
          <Box color="var(--studio-landing-text-primary)">
            <Anvil size={18} />
          </Box>
          <Text
            fontSize="15px"
            fontWeight={600}
            color="var(--studio-landing-text-primary)"
            lineHeight={1}
          >
            Blacksmith Studio
          </Text>
        </HStack>

        {/* Desktop nav */}
        <HStack
          as="nav"
          aria-label="Main"
          spacing="xl"
          display={{ base: 'none', md: 'flex' }}
        >
          {navLinks.map((link) => (
            <Text
              key={link.label}
              as="a"
              href={link.href}
              fontSize="14px"
              fontWeight={400}
              color="var(--studio-landing-text-secondary)"
              transition="color 0.15s ease"
              _hover={{ color: 'var(--studio-landing-text-primary)', textDecoration: 'none' }}
              cursor="pointer"
            >
              {link.label}
            </Text>
          ))}
          <Button
            variant="brand"
            size="sm"
            h="36px"
            px="20px"
            fontSize="13px"
            fontWeight={500}
            borderRadius="full"
          >
            Download
          </Button>
        </HStack>

        {/* Mobile hamburger */}
        <IconButton
          aria-label="Open menu"
          aria-expanded={isOpen}
          variant="ghost"
          size="sm"
          display={{ base: 'flex', md: 'none' }}
          color="var(--studio-landing-text-primary)"
          _hover={{ bg: 'rgba(255,255,255,0.06)' }}
          onClick={onOpen}
          icon={<Menu size={20} />}
        />
      </Flex>

      {/* Mobile drawer */}
      <Drawer isOpen={isOpen} onClose={onClose} placement="right">
        <DrawerOverlay bg="blackAlpha.700" backdropFilter="blur(8px)" />
        <DrawerContent
          bg="var(--studio-landing-bg)"
          borderLeft="1px solid rgba(255,255,255,0.06)"
        >
          <DrawerCloseButton color="var(--studio-landing-text-secondary)" />
          <DrawerBody pt="5xl">
            <VStack spacing="md" align="stretch">
              <Box as="nav" aria-label="Main">
                <VStack spacing="xs" align="stretch">
                  {navLinks.map((link) => (
                    <Text
                      key={link.label}
                      as="a"
                      href={link.href}
                      fontSize="16px"
                      fontWeight={400}
                      color="var(--studio-landing-text-secondary)"
                      py="sm"
                      px="md"
                      borderRadius="md"
                      transition="color 0.15s ease"
                      _hover={{ color: 'var(--studio-landing-text-primary)', textDecoration: 'none' }}
                      onClick={onClose}
                      cursor="pointer"
                    >
                      {link.label}
                    </Text>
                  ))}
                </VStack>
              </Box>
              <Button
                variant="brand"
                borderRadius="full"
                fontSize="14px"
                fontWeight={500}
                onClick={onClose}
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
