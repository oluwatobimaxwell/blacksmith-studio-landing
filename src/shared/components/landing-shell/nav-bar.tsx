import { Box, Flex, HStack, Button, IconButton, Image, Text } from '@chakra-ui/react'
import { Sun, Moon, Github, Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Path } from '@/router/paths'
import { GITHUB_URL } from '@/shared/constants'
import { navLinks, type NavLink } from '@/pages/landing/data/nav-links'
import { useScrolled } from './use-scrolled'
import { scrollToSection } from '@/pages/landing/utils/scroll-to-section'
import type { LandingTheme } from './use-landing-theme'

export type CurrentPage = 'landing' | 'agents' | 'manifesto' | 'community' | 'blog'

interface NavBarProps {
  theme: LandingTheme
  onToggleTheme: () => void
  active: string
  currentPage?: CurrentPage
}

export function NavBar({ theme, onToggleTheme, active, currentPage = 'landing' }: NavBarProps) {
  const scrolled = useScrolled(40)
  const navigate = useNavigate()
  const logoFilter = theme === 'dark' ? 'invert(1)' : 'none'

  const goHome = (hash?: string) => {
    navigate(hash ? `${Path.Home}#${hash}` : Path.Home)
  }

  const handleBrandClick = () => {
    if (currentPage === 'landing') scrollToSection('top')
    else goHome()
  }

  const handleLinkClick = (link: NavLink) => {
    if (link.kind === 'route') {
      navigate(link.to)
      return
    }
    if (currentPage === 'landing') scrollToSection(link.id)
    else goHome(link.id)
  }

  const handleDownloadClick = () => {
    if (currentPage === 'landing') scrollToSection('download')
    else goHome('download')
  }

  return (
    <Box
      as="nav"
      aria-label="Primary"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      h="56px"
      px="32px"
      display="flex"
      alignItems="center"
      gap="32px"
      transition="background 160ms var(--ease), border-color 160ms var(--ease), backdrop-filter 160ms var(--ease)"
      bg={scrolled ? 'var(--scrim)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(20px)' : undefined}
      borderBottom="1px solid"
      borderBottomColor={scrolled ? 'var(--hairline)' : 'transparent'}
    >
      <Flex
        as="button"
        type="button"
        onClick={handleBrandClick}
        align="center"
        gap="10px"
        color="var(--fg-1)"
        bg="transparent"
        border="none"
        p={0}
        cursor="pointer"
        aria-label="Blacksmith Community home"
      >
        <Image src="/assets/community/logo-mark.svg" alt="" w="22px" h="22px" style={{ filter: logoFilter }} />
        <Text as="span" fontSize="14px" fontWeight={600} letterSpacing="-0.01em" lineHeight="18px">
          Blacksmith{' '}
          <Text as="span" color="var(--fg-3)" fontWeight={300}>
            Community
          </Text>
        </Text>
      </Flex>

      <HStack spacing="4px" ml="8px" display={{ base: 'none', lg: 'flex' }}>
        {navLinks.map((link) => (
          <Button
            key={link.id}
            variant="unstyled"
            h="32px"
            px="12px"
            fontSize="13px"
            fontWeight={500}
            lineHeight="16px"
            borderRadius="var(--r-md)"
            color={active === link.id ? 'var(--fg-1)' : 'var(--fg-3)'}
            _hover={{ color: 'var(--fg-1)', bg: 'var(--paper-3)' }}
            transition="color 120ms var(--ease), background 120ms var(--ease)"
            onClick={() => handleLinkClick(link)}
          >
            {link.label}
          </Button>
        ))}
      </HStack>

      <Box flex="1" />

      <HStack spacing="8px">
        <IconButton
          aria-label="Toggle theme"
          variant="unstyled"
          minW="36px"
          w="36px"
          h="36px"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="var(--r-lg)"
          color="var(--fg-1)"
          _hover={{ bg: 'var(--paper-3)' }}
          onClick={onToggleTheme}
          icon={theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        />
        <Button
          as="a"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          variant="unstyled"
          h="30px"
          px="12px"
          fontSize="12px"
          fontWeight={500}
          borderRadius="var(--r-md)"
          border="1px solid var(--hairline)"
          color="var(--fg-1)"
          display={{ base: 'none', md: 'inline-flex' }}
          alignItems="center"
          gap="8px"
          _hover={{ bg: 'var(--paper-3)', borderColor: 'var(--hairline-strong)' }}
          leftIcon={<Github size={14} />}
        >
          GitHub
        </Button>
        <Button
          variant="unstyled"
          h="30px"
          px="12px"
          fontSize="12px"
          fontWeight={500}
          borderRadius="var(--r-md)"
          bg="var(--btn-primary-bg)"
          color="var(--btn-primary-fg)"
          display="inline-flex"
          alignItems="center"
          gap="8px"
          _hover={{ bg: 'var(--btn-primary-bg-hover)' }}
          leftIcon={<Download size={14} />}
          onClick={handleDownloadClick}
        >
          Download
        </Button>
      </HStack>
    </Box>
  )
}
