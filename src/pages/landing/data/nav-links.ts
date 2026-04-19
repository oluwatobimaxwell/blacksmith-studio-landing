import { Path } from '@/router/paths'

export type NavLink =
  | { kind: 'section'; id: string; label: string }
  | { kind: 'route'; id: string; label: string; to: string }

export const navLinks: readonly NavLink[] = [
  { kind: 'section', id: 'product', label: 'Product' },
  { kind: 'route', id: 'manifesto', label: 'Manifesto', to: Path.Manifesto },
  { kind: 'route', id: 'agents', label: 'Agents', to: Path.Agents },
  { kind: 'route', id: 'community', label: 'Community', to: Path.Community },
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
