import { renderWithProviders } from '@/__tests__/test-utils'
import { CommunityRooms } from '../community-rooms'

describe('CommunityRooms', () => {
  it('renders the eyebrow and section heading', () => {
    const { getByText } = renderWithProviders(<CommunityRooms />)
    expect(getByText('The rooms')).toBeInTheDocument()
    expect(getByText(/Four doors\./i)).toBeInTheDocument()
    expect(getByText(/One room\./i)).toBeInTheDocument()
  })

  it('rewrites the intro to make "They all lead to the same people." its own sentence', () => {
    const { container } = renderWithProviders(<CommunityRooms />)
    const text = container.textContent ?? ''
    expect(text).toContain('Come through whichever one fits')
    expect(text).toContain('your day. They all lead to the same people.')
  })

  it('renders the four room titles from the rooms data', () => {
    const { container } = renderWithProviders(<CommunityRooms />)
    const text = container.textContent ?? ''
    expect(text).toContain('The room is always open.')
    expect(text).toContain('The code is in the open.')
    expect(text).toContain('Weekly working sessions.')
    expect(text).toContain('A real developer, one click away.')
  })

  it('contains no em dash anywhere in its rendered text', () => {
    const { container } = renderWithProviders(<CommunityRooms />)
    expect(container.textContent ?? '').not.toMatch(/—/)
  })

  it('renders without throwing', () => {
    expect(() => renderWithProviders(<CommunityRooms />)).not.toThrow()
  })
})
