export interface FooterColumn {
  heading: string
  links: { label: string; href: string }[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#product' },
      { label: 'Agent Team', href: '#agents' },
      { label: 'Download', href: '#download' },
      { label: 'Blacksmith CLI', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Discord', href: '/community' },
      { label: 'GitHub', href: '#' },
      { label: 'Office hours', href: '#' },
      { label: 'Code of conduct', href: '#' },
      { label: 'Governance', href: '#' },
    ],
  },
  {
    heading: 'Writing',
    links: [
      { label: 'All posts', href: '/blog' },
      { label: 'Engineering', href: '/blog' },
      { label: 'Field notes', href: '/blog' },
      { label: 'Manifesto', href: '/manifesto' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Docs', href: '#' },
      { label: 'Contribute', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]
