import { renderWithProviders } from '@/__tests__/test-utils'
import { ManifestoStake } from '../manifesto-stake'

describe('ManifestoStake', () => {
  it('renders the eyebrow and section heading', () => {
    const { getByText } = renderWithProviders(<ManifestoStake />)
    expect(getByText('The stake')).toBeInTheDocument()
    expect(getByText(/The problem is not speed\./i)).toBeInTheDocument()
    expect(getByText(/It is what speed leaves behind\./i)).toBeInTheDocument()
  })

  it('rewrites opener to two sentences and uses parentheses for the aside', () => {
    const { container } = renderWithProviders(<ManifestoStake />)
    const text = container.textContent ?? ''
    expect(text).toContain('AI writes code fast. Most of it becomes someone else\'s problem.')
    expect(text).toContain('It stops the next engineer (usually you, three months later)')
  })

  it('rewrites the second paragraph to use a comma instead of em dash', () => {
    const { container } = renderWithProviders(<ManifestoStake />)
    expect(container.textContent).toContain(
      'A model subscription here, a dev platform there, and',
    )
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<ManifestoStake />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<ManifestoStake />)).not.toThrow()
  })
})
