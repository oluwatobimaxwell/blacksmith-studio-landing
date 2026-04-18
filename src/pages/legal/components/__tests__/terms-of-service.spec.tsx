import { render, screen } from '@testing-library/react'
import { TermsOfService, termsMeta } from '../terms-of-service'

describe('termsMeta', () => {
  it('has the "Terms of Service" title', () => {
    expect(termsMeta.title).toBe('Terms of Service')
  })

  it('exposes a lastUpdated string', () => {
    expect(typeof termsMeta.lastUpdated).toBe('string')
    expect(termsMeta.lastUpdated.length).toBeGreaterThan(0)
  })

  it('has section ids that match the section headings in the DOM', () => {
    const { container } = render(<TermsOfService />)
    termsMeta.sections.forEach((section) => {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull()
    })
  })

  it('has the expected section ids', () => {
    expect(termsMeta.sections.map((s) => s.id)).toEqual([
      'acceptance',
      'using',
      'conduct',
      'warranties',
      'liability',
    ])
  })
})

describe('TermsOfService', () => {
  describe('section headings', () => {
    it.each(termsMeta.sections.map((s) => [s.title] as const))(
      'renders the "%s" heading',
      (title) => {
        render(<TermsOfService />)
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      },
    )
  })

  describe('content guarantees', () => {
    it('declares the software as free and MIT-licensed', () => {
      render(<TermsOfService />)
      expect(
        screen.getByText(/free.*open-source software released under the MIT Licence/i),
      ).toBeInTheDocument()
    })

    it('declares the software is provided "as is" with no warranties', () => {
      render(<TermsOfService />)
      expect(screen.getByText(/as is/i)).toBeInTheDocument()
    })

    it('links to the Acceptable Use Policy', () => {
      render(<TermsOfService />)
      const link = screen.getByRole('link', { name: /Acceptable Use Policy/i })
      expect(link).toHaveAttribute('href', '/legal/acceptable-use')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => render(<TermsOfService />)).not.toThrow()
    })
  })
})
