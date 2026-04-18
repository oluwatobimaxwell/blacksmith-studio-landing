import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LegalFooter } from '../legal-footer'
import { Path } from '@/router/paths'

describe('LegalFooter', () => {
  describe('footer landmark', () => {
    it('renders a <footer> element', () => {
      const { container } = renderWithProviders(<LegalFooter currentDoc="privacy" />)
      expect(container.querySelector('footer')).toBeInTheDocument()
    })

    it('renders a navigation labeled "Legal documents"', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      expect(screen.getByRole('navigation', { name: /Legal documents/i })).toBeInTheDocument()
    })
  })

  describe('copyright', () => {
    it('renders the 2026 Blacksmith Studio copyright', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      expect(screen.getByText(/© 2026 Blacksmith Studio/i)).toBeInTheDocument()
    })
  })

  describe('legal doc links', () => {
    it('renders the Privacy link pointing to the Privacy path', () => {
      renderWithProviders(<LegalFooter currentDoc="terms" />)
      const link = screen.getByRole('link', { name: 'Privacy' })
      expect(link).toHaveAttribute('href', Path.Privacy)
    })

    it('renders the Terms link pointing to the Terms path', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      const link = screen.getByRole('link', { name: 'Terms' })
      expect(link).toHaveAttribute('href', Path.Terms)
    })

    it('renders the Acceptable Use link pointing to the AcceptableUse path', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      const link = screen.getByRole('link', { name: 'Acceptable Use' })
      expect(link).toHaveAttribute('href', Path.AcceptableUse)
    })

    it('renders the Licence link pointing to the Licence path', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      const link = screen.getByRole('link', { name: 'Licence' })
      expect(link).toHaveAttribute('href', Path.Licence)
    })

    it('renders exactly four doc links', () => {
      renderWithProviders(<LegalFooter currentDoc="privacy" />)
      const nav = screen.getByRole('navigation', { name: /Legal documents/i })
      expect(nav.querySelectorAll('a')).toHaveLength(4)
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing for an unknown currentDoc', () => {
      expect(() =>
        renderWithProviders(<LegalFooter currentDoc="unknown" />),
      ).not.toThrow()
    })
  })
})
