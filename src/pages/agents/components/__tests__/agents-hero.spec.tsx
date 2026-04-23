import { vi } from 'vitest'
import { renderWithProviders } from '@/__tests__/test-utils'
import { AgentsHero } from '../agents-hero'

describe('AgentsHero', () => {
  it('renders the eyebrow and h1 heading', () => {
    const { getByText, getByRole } = renderWithProviders(<AgentsHero onSelectAgent={vi.fn()} />)
    expect(getByText('Meet the team')).toBeInTheDocument()
    const h1 = getByRole('heading', { level: 1 })
    expect(h1.textContent).toMatch(/Eleven specialists\./i)
    expect(h1.textContent).toMatch(/One codebase that lasts\./i)
  })

  it('rewrites the subhead to two short sentences in active voice', () => {
    const { container } = renderWithProviders(<AgentsHero onSelectAgent={vi.fn()} />)
    const text = container.textContent ?? ''
    expect(text).toContain('Blacksmith gives you a coordinated team. Each')
    expect(text).toContain('specialist does their part of the job, in the right order, with explicit hand-offs.')
  })

  it('renders the three hero stats', () => {
    const { container } = renderWithProviders(<AgentsHero onSelectAgent={vi.fn()} />)
    const text = container.textContent ?? ''
    expect(text).toContain('11')
    expect(text).toContain('specialists')
    expect(text).toContain('process')
    expect(text).toContain('zero')
    expect(text).toContain('debt')
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<AgentsHero onSelectAgent={vi.fn()} />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<AgentsHero onSelectAgent={vi.fn()} />)).not.toThrow()
  })
})
