import { renderWithProviders } from '@/__tests__/test-utils'
import { AgentsCompare } from '../agents-compare'

describe('AgentsCompare', () => {
  it('renders the eyebrow and section heading', () => {
    const { getByText } = renderWithProviders(<AgentsCompare />)
    expect(getByText('Two ways to build')).toBeInTheDocument()
    expect(getByText(/Single agent, or the full team\./i)).toBeInTheDocument()
    expect(getByText(/Different jobs\. Both ship clean\./i)).toBeInTheDocument()
  })

  it('rewrites the subhead with comma-set asides instead of em dashes', () => {
    const { container } = renderWithProviders(<AgentsCompare />)
    expect(container.textContent).toContain(
      'For a feature that has to last, the kind you',
    )
    expect(container.textContent).toContain('will not rewrite at month six, run the full team.')
  })

  it('uses a colon (not an em dash) in the table aria-label', () => {
    const { getByRole } = renderWithProviders(<AgentsCompare />)
    const table = getByRole('table')
    expect(table).toHaveAttribute(
      'aria-label',
      'Single agent and AI team: when to use each',
    )
    expect(table.getAttribute('aria-label')).not.toMatch(/—/)
  })

  it('renders all eight comparison row labels', () => {
    const { container } = renderWithProviders(<AgentsCompare />)
    const text = container.textContent ?? ''
    for (const label of [
      'Best for',
      'You drive',
      'Scope',
      'Hand-offs',
      'Tests',
      'Review',
      'Docs',
      'Time to first output',
    ]) {
      expect(text).toContain(label)
    }
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<AgentsCompare />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<AgentsCompare />)).not.toThrow()
  })
})
