import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { BlogPostCard } from './blog-post-card'
import { BlogTagFilter } from './blog-tag-filter'
import type { BlogPost } from '../data/blog-posts'
import type { BlogFilterTag } from '../data/blog-tags'

interface BlogGridProps {
  posts: readonly BlogPost[]
  activeTag: BlogFilterTag
  onChangeTag: (tag: BlogFilterTag) => void
}

export function BlogGrid({ posts, activeTag, onChangeTag }: BlogGridProps) {
  return (
    <Container as="section" maxW="1200px" px="32px" pb={{ base: '96px', md: '128px' }}>
      <VStack align="stretch" spacing="40px">
        <BlogTagFilter activeTag={activeTag} onChange={onChangeTag} />
        {posts.length === 0 ? (
          <Text
            fontSize="14px"
            lineHeight="22px"
            color="var(--fg-3)"
            fontFamily="var(--font-mono)"
            py="48px"
          >
            No posts under {activeTag} yet. Check back soon.
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="20px">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  )
}
