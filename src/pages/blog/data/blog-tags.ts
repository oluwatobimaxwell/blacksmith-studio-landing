import type { BlogTag } from './types'

export type BlogFilterTag = 'All' | BlogTag

export const blogFilterTags: readonly BlogFilterTag[] = [
  'All',
  'Engineering',
  'Field notes',
  'Community',
  'Manifesto',
] as const
