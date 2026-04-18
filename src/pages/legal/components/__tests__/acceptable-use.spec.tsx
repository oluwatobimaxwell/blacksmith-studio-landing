import { render, screen } from '@testing-library/react'
import { AcceptableUse, acceptableUseMeta } from '../acceptable-use'

describe('acceptableUseMeta', () => {
  it('has the "Acceptable Use Policy" title', () => {
    expect(acceptableUseMeta.title).toBe('Acceptable Use Policy')
  })

  it('exposes a lastUpdated string', () => {
    expect(typeof acceptableUseMeta.lastUpdated).toBe('string')
    expect(acceptableUseMeta.lastUpdated.length).toBeGreaterThan(0)
  })

  it('has section ids that match the section headings in the DOM', () => {
    const { container } = render(<AcceptableUse />)
    acceptableUseMeta.sections.forEach((section) => {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull()
    })
  })

  it('has the expected section ids', () => {
    expect(acceptableUseMeta.sections.map((s) => s.id)).toEqual([
      'permitted-use',
      'prohibited',
      'reporting',
    ])
  })
})

describe('AcceptableUse', () => {
  describe('section headings', () => {
    it.each(acceptableUseMeta.sections.map((s) => [s.title] as const))(
      'renders the "%s" heading',
      (title) => {
        render(<AcceptableUse />)
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      },
    )
  })

  describe('permitted use content', () => {
    it('permits building web applications and APIs', () => {
      render(<AcceptableUse />)
      expect(
        screen.getByText(/Developing web applications, APIs/i),
      ).toBeInTheDocument()
    })

    it('permits authorized security research', () => {
      render(<AcceptableUse />)
      expect(
        screen.getByText(/authorised penetration testing/i),
      ).toBeInTheDocument()
    })
  })

  describe('prohibited use content', () => {
    it('prohibits weaponization (malware, ransomware)', () => {
      render(<AcceptableUse />)
      expect(screen.getByText(/Weaponization/i)).toBeInTheDocument()
    })

    it('prohibits mass targeting and credential stuffing', () => {
      render(<AcceptableUse />)
      expect(screen.getByText(/Mass targeting/i)).toBeInTheDocument()
    })

    it('prohibits denial-of-service attacks', () => {
      render(<AcceptableUse />)
      expect(
        screen.getByText(/denial-of-service attacks/i),
      ).toBeInTheDocument()
    })
  })

  describe('reporting contact info', () => {
    it('provides an abuse contact mailto link', () => {
      render(<AcceptableUse />)
      const link = screen.getByRole('link', { name: /abuse@blacksmith\.studio/i })
      expect(link).toHaveAttribute('href', 'mailto:abuse@blacksmith.studio')
    })

    it('provides a security contact mailto link', () => {
      render(<AcceptableUse />)
      const link = screen.getByRole('link', { name: /security@blacksmith\.studio/i })
      expect(link).toHaveAttribute('href', 'mailto:security@blacksmith.studio')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => render(<AcceptableUse />)).not.toThrow()
    })
  })
})
