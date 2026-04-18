// Mock each section so the orchestrator test focuses on composition
// rather than section internals (those are tested in their own specs).
vi.mock('../components/nav-bar', () => ({
  NavBar: () => <div data-testid="nav-bar" />,
}))
vi.mock('../components/hero-section', () => ({
  HeroSection: () => <div data-testid="hero-section" />,
}))
vi.mock('../components/two-ways-section', () => ({
  TwoWaysSection: () => <div data-testid="two-ways-section" />,
}))
vi.mock('../components/dispatch-section', () => ({
  DispatchSection: () => <div data-testid="dispatch-section" />,
}))
vi.mock('../components/feature-bento-section', () => ({
  FeatureBentoSection: () => <div data-testid="feature-bento-section" />,
}))
vi.mock('../components/graphify-section', () => ({
  GraphifySection: () => <div data-testid="graphify-section" />,
}))
vi.mock('../components/principles-section', () => ({
  PrinciplesSection: () => <div data-testid="principles-section" />,
}))
vi.mock('../components/showcase-section', () => ({
  ShowcaseSection: () => <div data-testid="showcase-section" />,
}))
vi.mock('../components/cta-section', () => ({
  CtaSection: () => <div data-testid="cta-section" />,
}))
vi.mock('../components/landing-footer', () => ({
  LandingFooter: () => <div data-testid="landing-footer" />,
}))

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import LandingPage from '../landing'

const RENDERED_SECTIONS = [
  'nav-bar',
  'hero-section',
  'two-ways-section',
  'dispatch-section',
  'feature-bento-section',
  'graphify-section',
  'principles-section',
  'showcase-section',
  'cta-section',
  'landing-footer',
] as const

const MAIN_SECTIONS = [
  'hero-section',
  'two-ways-section',
  'dispatch-section',
  'feature-bento-section',
  'graphify-section',
  'principles-section',
  'showcase-section',
  'cta-section',
] as const

describe('LandingPage (orchestrator)', () => {
  describe('section composition', () => {
    it.each(RENDERED_SECTIONS.map((id) => [id] as const))(
      'renders the %s component',
      (id) => {
        renderWithProviders(<LandingPage />)
        expect(screen.getByTestId(id)).toBeInTheDocument()
      },
    )
  })

  describe('main landmark', () => {
    it('renders a <main> landmark wrapping the content sections', () => {
      renderWithProviders(<LandingPage />)
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    it.each(MAIN_SECTIONS.map((id) => [id] as const))(
      'places %s inside the <main> landmark',
      (id) => {
        renderWithProviders(<LandingPage />)
        expect(screen.getByRole('main')).toContainElement(screen.getByTestId(id))
      },
    )

    it('renders the NavBar outside of <main>', () => {
      renderWithProviders(<LandingPage />)
      const main = screen.getByRole('main')
      expect(main).not.toContainElement(screen.getByTestId('nav-bar'))
    })

    it('renders the LandingFooter outside of <main>', () => {
      renderWithProviders(<LandingPage />)
      const main = screen.getByRole('main')
      expect(main).not.toContainElement(screen.getByTestId('landing-footer'))
    })
  })

  describe('section ordering', () => {
    it('renders sections in the required top-to-bottom visual order', () => {
      const { container } = renderWithProviders(<LandingPage />)
      const rendered = RENDERED_SECTIONS.map(
        (id) => container.querySelector(`[data-testid="${id}"]`)!,
      )
      rendered.forEach((el) => expect(el).not.toBeNull())

      for (let i = 0; i < rendered.length - 1; i++) {
        const current = rendered[i]!
        const next = rendered[i + 1]!
        const relation = current.compareDocumentPosition(next)
        // Node.DOCUMENT_POSITION_FOLLOWING === 4
        expect(relation & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
      }
    })
  })

  describe('no-throw rendering', () => {
    it('renders the landing page without throwing', () => {
      expect(() => renderWithProviders(<LandingPage />)).not.toThrow()
    })
  })
})
