import { Box, Container, Divider, VStack } from '@chakra-ui/react'
import { BlogPostBlock } from './blog-post-block'
import type { BlogContentBlock } from '../data/blog-posts'

interface BlogPostBodyProps {
  content: BlogContentBlock[]
}

export function BlogPostBody({ content }: BlogPostBodyProps) {
  return (
    <Container as="article" maxW="820px" px="32px" pb={{ base: '96px', md: '128px' }}>
      <Divider borderColor="var(--hairline)" mb={{ base: '48px', md: '64px' }} />
      <VStack align="stretch" spacing="24px">
        {content.map((block, index) => (
          <Box key={index}>
            <BlogPostBlock block={block} />
          </Box>
        ))}
      </VStack>
    </Container>
  )
}
