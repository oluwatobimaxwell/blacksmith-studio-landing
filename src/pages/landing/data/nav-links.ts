import { Path } from '@/router/paths'

export type NavLink =
  | { kind: 'section'; id: string; label: string }
  | { kind: 'route'; id: string; label: string; to: string }

export const navLinks: readonly NavLink[] = [
  { kind: 'section', id: 'how', label: 'How it works' },
  { kind: 'section', id: 'audience', label: 'Who it’s for' },
  { kind: 'route', id: 'manifesto', label: 'Manifesto', to: Path.Manifesto },
  { kind: 'section', id: 'download', label: 'Download' },
] as const

export const sectionIds = ['top', 'problem', 'how', 'audience', 'download'] as const
