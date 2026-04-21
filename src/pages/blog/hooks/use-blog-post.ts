import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts, findBlogPost } from '../data/blog-posts'
import { findRelatedPosts } from '../utils/find-related-posts'

export function useBlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? findBlogPost(slug) : undefined

  const related = useMemo(
    () => (post ? findRelatedPosts(post, blogPosts) : []),
    [post],
  )

  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    if (!post || typeof document === 'undefined') return
    const previous = document.title
    document.title = `${post.title} · Blacksmith`
    return () => {
      document.title = previous
    }
  }, [post])

  return { post, related, notFound: !post }
}
