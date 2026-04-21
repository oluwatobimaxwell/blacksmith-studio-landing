import { Box, Container, Heading, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { ArrowLeft } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { Path } from '@/router/paths'
import type { BlogPost } from '../data/blog-posts'

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <Container as="header" id="top" maxW="820px" px="32px" pt="96px" pb="48px">
      <VStack align="flex-start" spacing="32px">
        <Link
          as={RouterLink}
          to={Path.Blog}
          display="inline-flex"
          alignItems="center"
          gap="8px"
          fontSize="12px"
          lineHeight="14px"
          fontWeight={500}
          fontFamily="var(--font-mono)"
          color="var(--fg-3)"
          letterSpacing="0.08em"
          textTransform="uppercase"
          textDecoration="none"
          transition="color 160ms var(--ease)"
          _hover={{ color: 'var(--fg-1)', textDecoration: 'none' }}
        >
          <ArrowLeft size={14} />
          <Text as="span">All writing</Text>
        </Link>

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

        <Heading
          as="h1"
          className="cl-reveal in"
          fontSize={{ base: '40px', md: '64px' }}
          lineHeight={{ base: '44px', md: '68px' }}
          fontWeight={600}
          letterSpacing="-0.03em"
          color="var(--fg-1)"
          m={0}
          sx={{ textWrap: 'balance' }}
        >
          {post.title}
        </Heading>

        <Text
          as="p"
          fontSize={{ base: '19px', md: '22px' }}
          lineHeight={{ base: '30px', md: '34px' }}
          color="var(--fg-3)"
          fontWeight={300}
          letterSpacing="-0.01em"
          m={0}
          sx={{ textWrap: 'pretty' }}
        >
          {post.body}
        </Text>
      </VStack>
    </Container>
  )
}
