import type { BlogPost } from '../data/blog-posts'

const DEFAULT_LIMIT = 3

export function findRelatedPosts(
  current: BlogPost,
  all: readonly BlogPost[],
  limit: number = DEFAULT_LIMIT,
): BlogPost[] {
  const others = all.filter((post) => post.slug !== current.slug)
  const sameTag = others.filter((post) => post.tag === current.tag)
  const rest = others.filter((post) => post.tag !== current.tag)
  return [...sameTag, ...rest].slice(0, limit)
}
