import type { ReactNode } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

interface LegalContentProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

export function LegalContent({ title, lastUpdated, children }: LegalContentProps) {
  return (
    <Box
      as="main"
      position="relative"
      flex={1}
      minW={0}
      display="flex"
      justifyContent="center"
      px={{ base: 4, md: 8, lg: 12, xl: 16 }}
      pt={{ base: 10, md: 16 }}
      pb={{ base: 16, md: 24 }}
    >
      <Box
        aria-hidden
        position="absolute"
        top={0}
        left="50%"
        transform="translateX(-50%)"
        w="min(720px, 90%)"
        h="420px"
        pointerEvents="none"
        background="radial-gradient(ellipse at top, rgba(45, 212, 168, 0.07), transparent 70%)"
        zIndex={0}
      />

      <Box as="article" maxW="720px" w="full" position="relative" zIndex={1}>
        <Box
          mb={{ base: 12, md: 16 }}
          pb={{ base: 8, md: 10 }}
          className="legal-fade-up"
          opacity={0}
          sx={{
            borderBottom: '1px solid transparent',
            borderImage:
              'linear-gradient(to right, var(--studio-landing-border), transparent) 1',
          }}
        >
          <Flex align="center" gap={2} mb={5}>
            <Box
              w="5px"
              h="5px"
              borderRadius="full"
              bg="var(--studio-brand-green)"
              boxShadow="0 0 10px rgba(45, 212, 168, 0.6)"
            />
            <Text
              as="span"
              fontFamily="mono"
              fontSize="11px"
              fontWeight={600}
              color="var(--studio-landing-text-muted)"
              letterSpacing="0.14em"
              textTransform="uppercase"
            >
              Blacksmith Studio · Legal
            </Text>
          </Flex>

          <Text
            as="h1"
            fontFamily="body"
            fontSize={{ base: '32px', md: '44px', xl: '52px' }}
            fontWeight={500}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.04em"
            lineHeight={1.08}
            mb={6}
          >
            {title}
          </Text>

          <Flex
            as="span"
            display="inline-flex"
            align="center"
            gap={2}
            fontFamily="mono"
            fontSize="12px"
            fontWeight={500}
            color="var(--studio-landing-text-muted)"
            bg="var(--studio-landing-surface)"
            border="1px solid var(--studio-landing-border)"
            borderRadius="9999px"
            px={3}
            py={1}
          >
            <Box
              w="6px"
              h="6px"
              borderRadius="full"
              bg="var(--studio-brand-green)"
              flexShrink={0}
              boxShadow="0 0 8px rgba(45, 212, 168, 0.5)"
            />
            Last updated {lastUpdated}
          </Flex>
        </Box>

        <Box>{children}</Box>
      </Box>
    </Box>
  )
}
