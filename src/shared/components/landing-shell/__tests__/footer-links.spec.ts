import { footerLinks, legalLinks } from '../footer-links'
import { Path } from '@/router/paths'
import { GITHUB_URL } from '@/shared/constants'

describe('footerLinks', () => {
  it('exports exactly four primary footer links after removing Writing', () => {
    expect(footerLinks).toHaveLength(4)
  })

  it('does not contain a Writing link or any link pointing at /blog', () => {
    const labels = footerLinks.map((l) => l.label)
    const hrefs = footerLinks.map((l) => l.href)
    expect(labels).not.toContain('Writing')
    expect(hrefs).not.toContain('/blog')
  })

  it('preserves the Manifesto, Agents, Community, and GitHub links', () => {
    expect(footerLinks).toEqual([
      { label: 'Manifesto', href: Path.Manifesto },
      { label: 'Agents', href: Path.Agents },
      { label: 'Community', href: Path.Community },
      { label: 'GitHub', href: GITHUB_URL },
    ])
  })

  it('every footer link has a non-empty label and href', () => {
    for (const link of footerLinks) {
      expect(link.label.length).toBeGreaterThan(0)
      expect(link.href.length).toBeGreaterThan(0)
    }
  })
})

describe('legalLinks', () => {
  it('exports the three legal links pointing at the Path enum values', () => {
    expect(legalLinks).toEqual([
      { label: 'Privacy', href: Path.Privacy },
      { label: 'Terms', href: Path.Terms },
      { label: 'Licence', href: Path.Licence },
    ])
  })
})
