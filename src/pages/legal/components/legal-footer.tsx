import { Link } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Path } from '@/router/paths'

interface LegalFooterProps {
  currentDoc: string
}

const docs = [
  { key: 'privacy', label: 'Privacy', path: Path.Privacy },
  { key: 'terms', label: 'Terms', path: Path.Terms },
  { key: 'acceptable-use', label: 'Acceptable Use', path: Path.AcceptableUse },
  { key: 'licence', label: 'Licence', path: Path.Licence },
]

export function LegalFooter({ currentDoc }: LegalFooterProps) {
  return (
    <Box
      as="footer"
      borderTop="1px solid var(--studio-landing-border)"
      px={8}
      py={6}
    >
      <Flex align="center" justify="space-between" flexWrap="wrap" gap={4}>
        <Text fontSize="12px" color="var(--studio-landing-text-muted)">
          &copy; 2026 Blacksmith Studio. All rights reserved.
        </Text>

        <Flex as="nav" aria-label="Legal documents" align="center" gap={6}>
          {docs.map((doc) => {
            const isCurrent = currentDoc === doc.key
            return (
              <Text
                key={doc.key}
                as={Link}
                to={doc.path}
                fontSize="12px"
                fontWeight={isCurrent ? 500 : 400}
                color={isCurrent ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-muted)'}
                textDecoration="none"
                transition="color 0.15s ease"
                _hover={{ color: isCurrent ? 'var(--studio-landing-text-accent)' : 'var(--studio-landing-text-secondary)', opacity: 1 }}
              >
                {doc.label}
              </Text>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}
