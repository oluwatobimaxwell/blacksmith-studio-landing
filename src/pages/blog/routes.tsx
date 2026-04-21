import type { RouteObject } from 'react-router-dom'
import { Path } from '@/router/paths'
import BlogPage from './blog'
import BlogPostPage from './blog-post'

export const blogRoutes: RouteObject[] = [
  { path: Path.Blog, element: <BlogPage /> },
  { path: Path.BlogPost, element: <BlogPostPage /> },
]
