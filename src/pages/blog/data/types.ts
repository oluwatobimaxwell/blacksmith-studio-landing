export type BlogTag = 'Engineering' | 'Field notes' | 'Community' | 'Manifesto'

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'list'; items: string[] }

export interface BlogPost {
  slug: string
  tag: BlogTag
  date: string
  read: string
  title: string
  body: string
  content: BlogContentBlock[]
}
