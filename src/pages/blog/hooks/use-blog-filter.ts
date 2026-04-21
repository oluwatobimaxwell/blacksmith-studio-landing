import { useMemo, useState } from 'react'
import type { BlogPost } from '../data/blog-posts'
import type { BlogFilterTag } from '../data/blog-tags'

export function useBlogFilter(posts: readonly BlogPost[]) {
  const [activeTag, setActiveTag] = useState<BlogFilterTag>('All')

  const visible = useMemo(
    () => (activeTag === 'All' ? posts : posts.filter((p) => p.tag === activeTag)),
    [activeTag, posts],
  )

  return { activeTag, setActiveTag, visible }
}
