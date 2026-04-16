// Mock each section so the orchestrator test focuses on composition
// rather than section internals (those are tested in their own specs).
vi.mock('../components/nav-bar', () => ({
  NavBar: () => <div data-testid="nav-bar" />,
}))
vi.mock('../components/hero-section', () => ({
  HeroSection: () => <div data-testid="hero-section" />,
}))
vi.mock('../components/feature-walkthrough-section', () => ({
  FeatureWalkthroughSection: () => <div data-testid="feature-walkthrough-section" />,
}))
vi.mock('../components/agent-team-section', () => ({
  AgentTeamSection: () => <div data-testid="agent-team-section" />,
}))
vi.mock('../components/community-section', () => ({
  CommunitySection: () => <div data-testid="community-section" />,
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
  'feature-walkthrough-section',
  'agent-team-section',
  'community-section',
  'cta-section',
  'landing-footer',
] as const

const MAIN_SECTIONS = [
  'hero-section',
  'feature-walkthrough-section',
  'agent-team-section',
  'community-section',
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
        const current = rendered[i]
        const next = rendered[i + 1]
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
