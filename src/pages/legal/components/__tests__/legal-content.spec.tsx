import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { LegalContent } from '../legal-content'

describe('LegalContent', () => {
  describe('main landmark', () => {
    it('renders a <main> landmark', () => {
      renderWithProviders(
        <LegalContent title="Privacy" lastUpdated="April 18, 2026">
          <p>content</p>
        </LegalContent>,
      )
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    it('renders an <article> inside main', () => {
      const { container } = renderWithProviders(
        <LegalContent title="Privacy" lastUpdated="April 18, 2026">
          <p>content</p>
        </LegalContent>,
      )
      expect(container.querySelector('main article')).toBeInTheDocument()
    })
  })

  describe('title', () => {
    it('renders the title as an h1', () => {
      renderWithProviders(
        <LegalContent title="Privacy Policy" lastUpdated="April 18, 2026">
          <p>body</p>
        </LegalContent>,
      )
      const h1 = screen.getByRole('heading', { level: 1 })
      expect(h1).toHaveTextContent('Privacy Policy')
    })
  })

  describe('last updated badge', () => {
    it('renders the last updated text', () => {
      renderWithProviders(
        <LegalContent title="Privacy" lastUpdated="April 18, 2026">
          <p>body</p>
        </LegalContent>,
      )
      expect(screen.getByText(/Last updated April 18, 2026/i)).toBeInTheDocument()
    })
  })

  describe('children', () => {
    it('renders the provided children inside the content area', () => {
      renderWithProviders(
        <LegalContent title="Privacy" lastUpdated="April 18, 2026">
          <p data-testid="child-content">This is the body content.</p>
        </LegalContent>,
      )
      expect(screen.getByTestId('child-content')).toBeInTheDocument()
      expect(screen.getByTestId('child-content')).toHaveTextContent('This is the body content.')
    })

    it('renders multiple children', () => {
      renderWithProviders(
        <LegalContent title="Privacy" lastUpdated="April 18, 2026">
          <p data-testid="one">one</p>
          <p data-testid="two">two</p>
        </LegalContent>,
      )
      expect(screen.getByTestId('one')).toBeInTheDocument()
      expect(screen.getByTestId('two')).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() =>
        renderWithProviders(
          <LegalContent title="" lastUpdated="">
            <p>empty</p>
          </LegalContent>,
        ),
      ).not.toThrow()
    })
  })
})
