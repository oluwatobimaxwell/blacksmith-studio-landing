import { Path } from '@/router/paths'
import { GITHUB_URL } from '@/shared/constants'

export interface FooterLink {
  label: string
  href: string
}

export const footerLinks: FooterLink[] = [
  { label: 'Manifesto', href: Path.Manifesto },
  { label: 'Agents', href: Path.Agents },
  { label: 'Community', href: Path.Community },
  { label: 'GitHub', href: GITHUB_URL },
]

export const legalLinks: FooterLink[] = [
  { label: 'Privacy', href: Path.Privacy },
  { label: 'Terms', href: Path.Terms },
  { label: 'Licence', href: Path.Licence },
]
