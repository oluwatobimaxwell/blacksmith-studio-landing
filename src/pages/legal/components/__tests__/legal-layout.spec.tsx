vi.mock('../legal-nav', () => ({
  LegalNav: () => <div data-testid="legal-nav" />,
}))
vi.mock('../legal-footer', () => ({
  LegalFooter: ({ currentDoc }: { currentDoc: string }) => (
    <div data-testid="legal-footer" data-current={currentDoc} />
  ),
}))
vi.mock('../legal-sidebar', () => ({
  LegalSidebar: ({ currentDoc, activeSection }: { currentDoc: string; activeSection: string }) => (
    <div data-testid="legal-sidebar" data-current={currentDoc} data-active={activeSection} />
  ),
}))
vi.mock('../legal-content', () => ({
  LegalContent: ({ title, lastUpdated, children }: { title: string; lastUpdated: string; children: React.ReactNode }) => (
    <div data-testid="legal-content" data-title={title} data-last-updated={lastUpdated}>
      {children}
    </div>
  ),
}))
vi.mock('../../hooks/use-legal-scroll-spy', () => ({
  useLegalScrollSpy: vi.fn((ids: string[]) => ids[0] ?? ''),
}))

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LegalLayout } from '../legal-layout'
import { useLegalScrollSpy } from '../../hooks/use-legal-scroll-spy'

const sections = [
  { id: 'a', title: 'A' },
  { id: 'b', title: 'B' },
]

describe('LegalLayout', () => {
  describe('composition', () => {
    it('renders the nav, sidebar, content and footer', () => {
      renderWithProviders(
        <LegalLayout
          title="Privacy"
          lastUpdated="April 18, 2026"
          sections={sections}
          currentDoc="privacy"
        >
          <p data-testid="body">hello</p>
        </LegalLayout>,
      )
      expect(screen.getByTestId('legal-nav')).toBeInTheDocument()
      expect(screen.getByTestId('legal-sidebar')).toBeInTheDocument()
      expect(screen.getByTestId('legal-content')).toBeInTheDocument()
      expect(screen.getByTestId('legal-footer')).toBeInTheDocument()
    })

    it('forwards children into LegalContent', () => {
      renderWithProviders(
        <LegalLayout
          title="Privacy"
          lastUpdated="April 18, 2026"
          sections={sections}
          currentDoc="privacy"
        >
          <p data-testid="body">hello</p>
        </LegalLayout>,
      )
      expect(screen.getByTestId('legal-content')).toContainElement(screen.getByTestId('body'))
    })

    it('passes title and lastUpdated to LegalContent', () => {
      renderWithProviders(
        <LegalLayout
          title="Privacy Policy"
          lastUpdated="April 18, 2026"
          sections={sections}
          currentDoc="privacy"
        >
          <p />
        </LegalLayout>,
      )
      const content = screen.getByTestId('legal-content')
      expect(content).toHaveAttribute('data-title', 'Privacy Policy')
      expect(content).toHaveAttribute('data-last-updated', 'April 18, 2026')
    })

    it('passes currentDoc to sidebar and footer', () => {
      renderWithProviders(
        <LegalLayout
          title="Privacy"
          lastUpdated=""
          sections={sections}
          currentDoc="terms"
        >
          <p />
        </LegalLayout>,
      )
      expect(screen.getByTestId('legal-sidebar')).toHaveAttribute('data-current', 'terms')
      expect(screen.getByTestId('legal-footer')).toHaveAttribute('data-current', 'terms')
    })
  })

  describe('scroll spy integration', () => {
    it('passes section ids to useLegalScrollSpy', () => {
      renderWithProviders(
        <LegalLayout
          title="Privacy"
          lastUpdated=""
          sections={sections}
          currentDoc="privacy"
        >
          <p />
        </LegalLayout>,
      )
      expect(useLegalScrollSpy).toHaveBeenCalledWith(['a', 'b'])
    })

    it('forwards the active section id from the scroll spy to the sidebar', () => {
      vi.mocked(useLegalScrollSpy).mockReturnValueOnce('b')
      renderWithProviders(
        <LegalLayout
          title="Privacy"
          lastUpdated=""
          sections={sections}
          currentDoc="privacy"
        >
          <p />
        </LegalLayout>,
      )
      expect(screen.getByTestId('legal-sidebar')).toHaveAttribute('data-active', 'b')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing when sections is empty', () => {
      expect(() =>
        renderWithProviders(
          <LegalLayout title="T" lastUpdated="" sections={[]} currentDoc="privacy">
            <p />
          </LegalLayout>,
        ),
      ).not.toThrow()
    })
  })
})
