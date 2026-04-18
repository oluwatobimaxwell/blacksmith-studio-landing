import { Link } from 'react-router-dom'
import { Box, VStack, Text } from '@chakra-ui/react'
import { Path } from '@/router/paths'

interface Section {
  id: string
  title: string
}

interface LegalSidebarProps {
  sections: Section[]
  currentDoc: string
  activeSection: string
}

const docs = [
  { key: 'privacy', label: 'Privacy Policy', path: Path.Privacy },
  { key: 'terms', label: 'Terms of Service', path: Path.Terms },
  { key: 'acceptable-use', label: 'Acceptable Use', path: Path.AcceptableUse },
  { key: 'licence', label: 'Licence', path: Path.Licence },
]

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text
      fontFamily="mono"
      fontSize="11px"
      fontWeight={600}
      color="rgba(255, 255, 255, 0.3)"
      letterSpacing="0.07em"
      textTransform="uppercase"
      mb={4}
    >
      {children}
    </Text>
  )
}

export function LegalSidebar({ sections, currentDoc, activeSection }: LegalSidebarProps) {
  return (
    <Box
      as="aside"
      role="complementary"
      aria-label="Page navigation"
      display={{ base: 'none', lg: 'block' }}
      position="sticky"
      top="64px"
      h="calc(100vh - 64px)"
      w="220px"
      flexShrink={0}
      py={10}
      pl={8}
      pr={6}
      overflowY="auto"
      borderRight="1px solid var(--studio-landing-border)"
      sx={{
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-track': { background: 'transparent' },
        '&::-webkit-scrollbar-thumb': {
          background: 'var(--studio-landing-border)',
          borderRadius: '9999px',
        },
      }}
    >
      <SidebarLabel>On this page</SidebarLabel>

      <VStack as="ul" align="stretch" spacing={0.5} listStyleType="none" mb={0}>
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <Box as="li" key={section.id}>
              <Box
                as="a"
                href={`#${section.id}`}
                display="block"
                fontSize="13px"
                color={isActive ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-muted)'}
                px={3}
                py={2}
                borderRadius="6px"
                borderLeft="2px solid"
                borderLeftColor={isActive ? 'var(--studio-landing-text-accent)' : 'transparent'}
                bg={isActive ? 'var(--studio-brand-green-subtle)' : 'transparent'}
                ml="-2px"
                textDecoration="none"
                transition="color 0.15s ease, background 0.15s ease"
                _hover={{
                  color: isActive ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-secondary)',
                  bg: isActive ? 'var(--studio-brand-green-subtle)' : 'var(--studio-landing-surface)',
                  opacity: 1,
                }}
                sx={{
                  '&:focus-visible': {
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(45, 212, 168, 0.4)',
                  },
                }}
              >
                {section.title}
              </Box>
            </Box>
          )
        })}
      </VStack>

      <Box h="1px" bg="var(--studio-landing-border)" my={6} />

      <SidebarLabel>Documents</SidebarLabel>

      <VStack as="ul" align="stretch" spacing={0.5} listStyleType="none">
        {docs.map((doc) => {
          const isCurrent = currentDoc === doc.key
          return (
            <Box as="li" key={doc.key}>
              <Box
                as={Link}
                to={doc.path}
                display="block"
                fontSize="12px"
                fontWeight={isCurrent ? 500 : 400}
                color={isCurrent ? 'var(--studio-landing-text-primary)' : 'var(--studio-landing-text-muted)'}
                px={3}
                py={1}
                borderRadius="6px"
                textDecoration="none"
                transition="color 0.15s ease, background 0.15s ease"
                _hover={{
                  color: 'var(--studio-landing-text-secondary)',
                  bg: 'var(--studio-landing-surface)',
                  opacity: 1,
                }}
              >
                {doc.label}
              </Box>
            </Box>
          )
        })}
      </VStack>
    </Box>
  )
}
