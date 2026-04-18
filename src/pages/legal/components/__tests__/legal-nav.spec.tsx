import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LegalNav } from '../legal-nav'
import { Path } from '@/router/paths'

describe('LegalNav', () => {
  describe('landmark', () => {
    it('renders a banner (header) landmark', () => {
      renderWithProviders(<LegalNav />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })
  })

  describe('brand link', () => {
    it('renders the Blacksmith Studio brand text', () => {
      renderWithProviders(<LegalNav />)
      expect(screen.getByText('Blacksmith Studio')).toBeInTheDocument()
    })

    it('links the brand to the Home path', () => {
      renderWithProviders(<LegalNav />)
      const brandLink = screen.getByText('Blacksmith Studio').closest('a')
      expect(brandLink).toHaveAttribute('href', Path.Home)
    })
  })

  describe('back to home link', () => {
    it('renders a "Back to Home" link', () => {
      renderWithProviders(<LegalNav />)
      expect(screen.getByText(/Back to Home/i)).toBeInTheDocument()
    })

    it('links back to the Home path', () => {
      renderWithProviders(<LegalNav />)
      const backLink = screen.getByText(/Back to Home/i).closest('a')
      expect(backLink).toHaveAttribute('href', Path.Home)
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<LegalNav />)).not.toThrow()
    })
  })
})
