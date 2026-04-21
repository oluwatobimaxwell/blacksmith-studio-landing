import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { ArrowUpRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { buildPath, Path } from '@/router/paths'
import type { BlogPost } from '../data/blog-posts'

interface BlogFeaturedProps {
  post: BlogPost
}

export function BlogFeatured({ post }: BlogFeaturedProps) {
  return (
    <Container as="section" maxW="1200px" px="32px" pb={{ base: '64px', md: '96px' }}>
      <Link
        as={RouterLink}
        to={buildPath(Path.BlogPost, { slug: post.slug })}
        className="cl-reveal in"
        display="block"
        p={{ base: '32px', md: '48px' }}
        border="1px solid var(--hairline)"
        borderRadius="var(--r-xl)"
        bg="var(--paper-2)"
        textDecoration="none"
        transition="border-color 160ms var(--ease), background 160ms var(--ease)"
        _hover={{
          bg: 'var(--paper-3)',
          borderColor: 'var(--hairline-strong)',
          textDecoration: 'none',
        }}
      >
        <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '32px', md: '64px' }}>
          <VStack
            align="flex-start"
            spacing="16px"
            flexShrink={0}
            minW={{ md: '180px' }}
          >
            <Text
              as="span"
              fontSize="11px"
              lineHeight="14px"
              fontWeight={500}
              fontFamily="var(--font-mono)"
              color="var(--fg-1)"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Latest
            </Text>
            <HStack
              spacing="8px"
              fontSize="11px"
              lineHeight="14px"
              fontWeight={500}
              fontFamily="var(--font-mono)"
              color="var(--fg-4)"
              letterSpacing="0.08em"
              textTransform="uppercase"
              flexWrap="wrap"
            >
              <Text as="span">{post.tag}</Text>
              <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
              <Text as="span">{post.date}</Text>
              <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
              <Text as="span">{post.read}</Text>
            </HStack>
          </VStack>

          <VStack align="flex-start" spacing="20px" flex="1">
            <Heading
              as="h2"
              fontSize={{ base: '32px', md: '44px' }}
              lineHeight={{ base: '36px', md: '48px' }}
              fontWeight={600}
              letterSpacing="-0.02em"
              color="var(--fg-1)"
              m={0}
              sx={{ textWrap: 'balance' }}
            >
              {post.title}
            </Heading>
            <Text
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight={{ base: '26px', md: '30px' }}
              color="var(--fg-2)"
              maxW="640px"
              m={0}
              sx={{ textWrap: 'pretty' }}
            >
              {post.body}
            </Text>
            <HStack
              spacing="6px"
              fontSize="12px"
              lineHeight="14px"
              fontWeight={500}
              fontFamily="var(--font-mono)"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color="var(--fg-1)"
              mt="8px"
            >
              <Text as="span">Read the piece</Text>
              <ArrowUpRight size={14} />
            </HStack>
          </VStack>
        </Flex>
      </Link>
    </Container>
  )
}
