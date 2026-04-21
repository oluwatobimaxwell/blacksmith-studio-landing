import { Container, SimpleGrid, VStack } from '@chakra-ui/react'
import { Eyebrow } from '@/pages/landing/components/eyebrow'
import { SectionHeading } from '@/pages/landing/components/section-heading'
import { BlogPostCard } from './blog-post-card'
import type { BlogPost } from '../data/blog-posts'

interface BlogRelatedProps {
  posts: BlogPost[]
}

export function BlogRelated({ posts }: BlogRelatedProps) {
  if (posts.length === 0) return null

  return (
    <Container as="section" maxW="1200px" px="32px" pb={{ base: '96px', md: '128px' }}>
      <VStack align="stretch" spacing="40px">
        <VStack align="flex-start" spacing="16px">
          <Eyebrow>Keep reading</Eyebrow>
          <SectionHeading>More from the forge.</SectionHeading>
        </VStack>
        <SimpleGrid columns={{ base: 1, md: posts.length >= 3 ? 3 : 2 }} gap="20px">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}
