import { Link } from 'react-router-dom'
import { Box, Flex, VStack, Text } from '@chakra-ui/react'
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
      fontSize="10px"
      fontWeight={600}
      color="var(--studio-landing-text-muted)"
      letterSpacing="0.14em"
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
      w="240px"
      flexShrink={0}
      py={12}
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

      <VStack as="ul" align="stretch" spacing={0} listStyleType="none" mb={0}>
        {sections.map((section) => {
          const isActive = activeSection === section.id
          return (
            <Box as="li" key={section.id}>
              <Flex
                as="a"
                href={`#${section.id}`}
                align="center"
                gap={3}
                fontSize="13px"
                fontWeight={isActive ? 500 : 400}
                color={
                  isActive
                    ? 'var(--studio-landing-text-primary)'
                    : 'var(--studio-landing-text-muted)'
                }
                pl={3}
                pr={3}
                py="7px"
                borderRadius="6px"
                textDecoration="none"
                transition="color 0.2s ease, background 0.2s ease"
                _hover={{
                  color: 'var(--studio-landing-text-secondary)',
                  bg: 'var(--studio-landing-surface)',
                  opacity: 1,
                }}
                sx={{
                  '&:focus-visible': {
                    outline: 'none',
                    boxShadow: '0 0 0 2px rgba(45, 212, 168, 0.4)',
                  },
                }}
              >
                <Box
                  w="4px"
                  h="4px"
                  borderRadius="full"
                  flexShrink={0}
                  bg={isActive ? 'var(--studio-brand-green)' : 'transparent'}
                  border="1px solid"
                  borderColor={
                    isActive ? 'var(--studio-brand-green)' : 'var(--studio-landing-border-hover)'
                  }
                  boxShadow={isActive ? '0 0 8px rgba(45, 212, 168, 0.5)' : 'none'}
                  transition="all 0.2s ease"
                />
                <Box as="span" flex={1}>
                  {section.title}
                </Box>
              </Flex>
            </Box>
          )
        })}
      </VStack>

      <Box
        h="1px"
        my={6}
        background="linear-gradient(to right, var(--studio-landing-border), transparent)"
      />

      <SidebarLabel>Documents</SidebarLabel>

      <VStack as="ul" align="stretch" spacing={0} listStyleType="none">
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
                color={
                  isCurrent
                    ? 'var(--studio-landing-text-primary)'
                    : 'var(--studio-landing-text-muted)'
                }
                px={3}
                py="6px"
                borderRadius="6px"
                textDecoration="none"
                transition="color 0.2s ease, background 0.2s ease"
                bg={isCurrent ? 'var(--studio-landing-surface)' : 'transparent'}
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
