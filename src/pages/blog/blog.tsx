import { LandingShell } from '@/shared/components/landing-shell'
import { BlogHero } from './components/blog-hero'
import { BlogFeatured } from './components/blog-featured'
import { BlogGrid } from './components/blog-grid'
import { BlogSubscribe } from './components/blog-subscribe'
import { useBlogFilter } from './hooks/use-blog-filter'
import { blogPosts } from './data/blog-posts'

export default function BlogPage() {
  const [featured, ...rest] = blogPosts
  const { activeTag, setActiveTag, visible } = useBlogFilter(rest)

  if (!featured) return null

  return (
    <LandingShell active="blog" currentPage="blog">
      <BlogHero />
      <BlogFeatured post={featured} />
      <BlogGrid posts={visible} activeTag={activeTag} onChangeTag={setActiveTag} />
      <BlogSubscribe />
    </LandingShell>
  )
}
