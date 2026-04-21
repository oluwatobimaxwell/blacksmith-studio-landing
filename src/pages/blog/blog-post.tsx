import { Navigate } from 'react-router-dom'
import { Path } from '@/router/paths'
import { LandingShell } from '@/shared/components/landing-shell'
import { BlogPostHeader } from './components/blog-post-header'
import { BlogPostBody } from './components/blog-post-body'
import { BlogRelated } from './components/blog-related'
import { BlogSubscribe } from './components/blog-subscribe'
import { useBlogPost } from './hooks/use-blog-post'

export default function BlogPostPage() {
  const { post, related, notFound } = useBlogPost()

  if (notFound || !post) return <Navigate to={Path.Blog} replace />

  return (
    <LandingShell active="blog" currentPage="blog">
      <BlogPostHeader post={post} />
      <BlogPostBody content={post.content} />
      <BlogRelated posts={related} />
      <BlogSubscribe />
    </LandingShell>
  )
}
