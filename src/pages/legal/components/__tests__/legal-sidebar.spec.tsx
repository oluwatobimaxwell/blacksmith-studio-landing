import { screen, within } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LegalSidebar } from '../legal-sidebar'
import { Path } from '@/router/paths'

// The sidebar is responsive (display: none on mobile, block on lg+).
// Under jsdom the base breakpoint is active, so the sidebar is in the
// accessibility "hidden" tree. We query with { hidden: true } to see it.
const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'details', title: 'The Details' },
  { id: 'summary', title: 'Summary' },
]

describe('LegalSidebar', () => {
  describe('complementary landmark', () => {
    it('renders an aside with the "Page navigation" label', () => {
      const { container } = renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="intro" />,
      )
      const aside = container.querySelector('aside[role="complementary"]')
      expect(aside).not.toBeNull()
      expect(aside).toHaveAttribute('aria-label', 'Page navigation')
    })
  })

  describe('sections list', () => {
    it('renders an anchor link for every section', () => {
      renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="intro" />,
      )
      sections.forEach((section) => {
        const link = screen.getByRole('link', { name: section.title, hidden: true })
        expect(link).toHaveAttribute('href', `#${section.id}`)
      })
    })

    it('renders nothing when no sections are provided', () => {
      const { container } = renderWithProviders(
        <LegalSidebar sections={[]} currentDoc="privacy" activeSection="" />,
      )
      expect(
        container.querySelectorAll('a[href^="#"]'),
      ).toHaveLength(0)
    })
  })

  describe('docs list', () => {
    it('renders a link to each legal document', () => {
      renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="intro" />,
      )
      expect(
        screen.getByRole('link', { name: 'Privacy Policy', hidden: true }),
      ).toHaveAttribute('href', Path.Privacy)
      expect(
        screen.getByRole('link', { name: 'Terms of Service', hidden: true }),
      ).toHaveAttribute('href', Path.Terms)
      expect(
        screen.getByRole('link', { name: 'Acceptable Use', hidden: true }),
      ).toHaveAttribute('href', Path.AcceptableUse)
      expect(screen.getByRole('link', { name: 'Licence', hidden: true })).toHaveAttribute(
        'href',
        Path.Licence,
      )
    })
  })

  describe('labels', () => {
    it('renders the "On this page" label', () => {
      renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="intro" />,
      )
      expect(screen.getByText(/On this page/i)).toBeInTheDocument()
    })

    it('renders the "Documents" label', () => {
      renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="intro" />,
      )
      expect(screen.getByText(/Documents/i)).toBeInTheDocument()
    })
  })

  describe('active section styling', () => {
    it('renders every section link regardless of which is active', () => {
      const { container } = renderWithProviders(
        <LegalSidebar sections={sections} currentDoc="privacy" activeSection="details" />,
      )
      const aside = container.querySelector('aside[role="complementary"]')!
      sections.forEach((section) => {
        expect(within(aside as HTMLElement).getByText(section.title)).toBeInTheDocument()
      })
    })

    it('does not crash when activeSection does not match any section id', () => {
      expect(() =>
        renderWithProviders(
          <LegalSidebar sections={sections} currentDoc="privacy" activeSection="nonexistent" />,
        ),
      ).not.toThrow()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() =>
        renderWithProviders(
          <LegalSidebar sections={sections} currentDoc="licence" activeSection="intro" />,
        ),
      ).not.toThrow()
    })
  })
})
