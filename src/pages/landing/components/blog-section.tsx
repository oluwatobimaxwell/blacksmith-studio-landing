import { Box, Container, Flex, Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { ArrowRight } from 'lucide-react'
import { Link as RouterLink } from 'react-router-dom'
import { Path } from '@/router/paths'
import { BlogPostCard } from '@/pages/blog/components/blog-post-card'
import { blogPosts } from '@/pages/blog/data/blog-posts'
import { Eyebrow } from './eyebrow'
import { ClButton } from './cl-button'

export function BlogSection() {
  const preview = blogPosts.slice(0, 3)

  return (
    <Container as="section" id="blog" maxW="1200px" px="32px" py={{ base: '96px', md: '128px' }}>
      <Flex
        className="cl-reveal"
        align="flex-end"
        justify="space-between"
        gap="32px"
        flexWrap="wrap"
      >
        <VStack align="stretch" spacing="16px">
          <Eyebrow>Writing</Eyebrow>
          <Heading
            as="h2"
            fontSize={{ base: '40px', md: '56px' }}
            lineHeight={{ base: '44px', md: '60px' }}
            fontWeight={600}
            letterSpacing="-0.03em"
            m={0}
            sx={{ textWrap: 'balance' }}
            color="var(--fg-1)"
          >
            Notes from the forge.
          </Heading>
        </VStack>
        <ClButton
          as={RouterLink}
          to={Path.Blog}
          clVariant="ghost"
          rightIcon={<ArrowRight size={14} />}
        >
          All writing
        </ClButton>
      </Flex>

      <Box mt="56px">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
          {preview.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  )
}
