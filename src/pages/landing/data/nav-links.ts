import { Path } from '@/router/paths'

export type NavLink =
  | { kind: 'section'; id: string; label: string }
  | { kind: 'route'; id: string; label: string; to: string }

export const navLinks: readonly NavLink[] = [
  { kind: 'section', id: 'product', label: 'Product' },
  { kind: 'section', id: 'manifesto', label: 'Manifesto' },
  { kind: 'route', id: 'agents', label: 'Agents', to: Path.Agents },
  { kind: 'section', id: 'community', label: 'Community' },
  { kind: 'section', id: 'download', label: 'Download' },
  { kind: 'section', id: 'blog', label: 'Writing' },
] as const

export const sectionIds = [
  'top',
  'problem',
  'product',
  'features',
  'agents',
  'manifesto',
  'community',
  'download',
  'blog',
] as const
