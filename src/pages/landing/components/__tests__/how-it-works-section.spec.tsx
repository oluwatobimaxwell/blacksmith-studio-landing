import { renderWithProviders } from '@/__tests__/test-utils'
import { LandingShell } from '@/shared/components/landing-shell'
import { HowItWorksSection } from '../how-it-works-section'

function renderSection() {
  const result = renderWithProviders(
    <LandingShell active="how">
      <HowItWorksSection />
    </LandingShell>,
  )
  const section = result.container.querySelector('#how') as HTMLElement | null
  if (!section) throw new Error('HowItWorksSection did not render the #how section element')
  return { ...result, section }
}

describe('HowItWorksSection', () => {
  it('renders the eyebrow and section heading inside the #how section', () => {
    const { section } = renderSection()
    expect(section.textContent).toContain('How it works')
    expect(section.textContent).toMatch(/You describe it\./i)
    expect(section.textContent).toMatch(/A senior AI team builds it\./i)
  })

  it('renders the rewritten subhead with colon-introduced role list', () => {
    const { section } = renderSection()
    expect(section.textContent).toContain(
      'A coordinated team of agents, each with a defined role: architecture, code, review, QA.',
    )
  })

  it('renders the three how-it-works step titles', () => {
    const { section } = renderSection()
    expect(section.textContent).toContain('Describe what you want')
    expect(section.textContent).toContain('Agents do their jobs')
    expect(section.textContent).toContain('You get clean code')
  })

  it('renders the rewritten step 03 body sentence', () => {
    const { section } = renderSection()
    expect(section.textContent).toContain(
      'Production-ready. Built to maintain, extend, and scale. Not just to demo.',
    )
  })

  it('contains no em dash anywhere inside the rendered section', () => {
    const { section } = renderSection()
    expect(section.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderSection()).not.toThrow()
  })
})
