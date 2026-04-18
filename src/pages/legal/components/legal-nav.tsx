import { Link } from 'react-router-dom'
import { Box, Flex, Text } from '@chakra-ui/react'
import { Path } from '@/router/paths'

export function LegalNav() {
  return (
    <Box
      as="header"
      role="banner"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      h="64px"
      bg="rgba(0, 0, 0, 0.82)"
      backdropFilter="blur(20px)"
      borderBottom="1px solid var(--studio-landing-border)"
    >
      <Flex h="full" align="center" justify="space-between" px={8}>
        <Text
          as={Link}
          to={Path.Home}
          fontFamily="mono"
          fontSize="14px"
          fontWeight={600}
          color="var(--studio-landing-text-primary)"
          letterSpacing="-0.01em"
          textDecoration="none"
          flexShrink={0}
          transition="opacity 0.15s ease"
          _hover={{ opacity: 0.75 }}
        >
          Blacksmith Studio
        </Text>

        <Flex
          as={Link}
          to={Path.Home}
          align="center"
          gap={2}
          fontSize="13px"
          color="var(--studio-landing-text-secondary)"
          textDecoration="none"
          transition="color 0.15s ease"
          _hover={{ color: 'var(--studio-landing-text-primary)', opacity: 1 }}
          sx={{
            '&:focus-visible': {
              outline: 'none',
              boxShadow: '0 0 0 2px rgba(45, 212, 168, 0.4)',
              borderRadius: '4px',
            },
          }}
        >
          <Box as="span" fontSize="15px" transition="transform 0.15s ease" _groupHover={{ transform: 'translateX(-2px)' }}>
            ←
          </Box>
          Back to Home
        </Flex>
      </Flex>
    </Box>
  )
}
