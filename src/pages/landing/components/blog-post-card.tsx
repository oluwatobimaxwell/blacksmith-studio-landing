import { Box, Flex, Heading, HStack, Link, Text } from '@chakra-ui/react'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '../data/blog-posts'

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href="#"
      onClick={(e) => e.preventDefault()}
      className="cl-reveal"
      display="flex"
      flexDirection="column"
      p="32px"
      border="1px solid var(--hairline)"
      borderRadius="var(--r-xl)"
      bg="var(--paper)"
      textDecoration="none"
      transition="border-color 160ms var(--ease), background 160ms var(--ease), transform 160ms var(--ease)"
      _hover={{
        bg: 'var(--paper-2)',
        borderColor: 'var(--hairline-strong)',
        transform: 'translateY(-2px)',
        textDecoration: 'none',
      }}
    >
      <HStack
        spacing="8px"
        fontSize="11px"
        lineHeight="14px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        color="var(--fg-4)"
        letterSpacing="0.08em"
        textTransform="uppercase"
      >
        <Text as="span">{post.tag}</Text>
        <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
        <Text as="span">{post.date}</Text>
        <Box w="3px" h="3px" borderRadius="50%" bg="currentColor" opacity={0.5} />
        <Text as="span">{post.read}</Text>
      </HStack>
      <Heading
        as="h4"
        mt="20px"
        fontSize="20px"
        lineHeight="26px"
        fontWeight={600}
        letterSpacing="-0.01em"
        color="var(--fg-1)"
        m={0}
        sx={{ textWrap: 'balance' }}
      >
        {post.title}
      </Heading>
      <Text mt="12px" fontSize="14px" lineHeight="22px" color="var(--fg-3)" m={0} sx={{ textWrap: 'pretty' }}>
        {post.body}
      </Text>
      <Flex
        mt="28px"
        align="center"
        gap="6px"
        fontSize="11px"
        lineHeight="14px"
        fontWeight={500}
        fontFamily="var(--font-mono)"
        letterSpacing="0.08em"
        textTransform="uppercase"
        color="var(--fg-2)"
      >
        Read <ArrowUpRight size={14} />
      </Flex>
    </Link>
  )
}
