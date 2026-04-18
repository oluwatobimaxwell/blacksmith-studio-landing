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
      flex={1}
      minW={0}
      display="flex"
      justifyContent="center"
      px={{ base: 4, md: 8, lg: 12, xl: 16 }}
      pt={{ base: 8, md: 12 }}
      pb={{ base: 16, md: 16 }}
    >
      <Box as="article" maxW="720px" w="full">
        <Box
          mb={12}
          pb={8}
          borderBottom="1px solid var(--studio-landing-border)"
          className="legal-fade-up"
          opacity={0}
        >
          <Text
            as="h1"
            fontFamily="body"
            fontSize={{ base: '28px', md: '36px', xl: '40px' }}
            fontWeight={500}
            color="var(--studio-landing-text-primary)"
            letterSpacing="-0.035em"
            lineHeight={1.15}
            mb={4}
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
            <Box w="6px" h="6px" borderRadius="full" bg="var(--studio-brand-green)" flexShrink={0} />
            Last updated {lastUpdated}
          </Flex>
        </Box>

        <Box className="legal-prose">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
