import { render, screen } from '@testing-library/react'
import { PrivacyPolicy, privacyMeta } from '../privacy-policy'

describe('privacyMeta', () => {
  it('has the "Privacy Policy" title', () => {
    expect(privacyMeta.title).toBe('Privacy Policy')
  })

  it('exposes a lastUpdated string', () => {
    expect(typeof privacyMeta.lastUpdated).toBe('string')
    expect(privacyMeta.lastUpdated.length).toBeGreaterThan(0)
  })

  it('has section ids that match the section headings in the DOM', () => {
    const { container } = render(<PrivacyPolicy />)
    privacyMeta.sections.forEach((section) => {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull()
    })
  })

  it('has stable section ids for deep-linking', () => {
    expect(privacyMeta.sections.map((s) => s.id)).toEqual([
      'information-we-collect',
      'how-we-use',
      'data-sharing',
      'your-rights',
    ])
  })
})

describe('PrivacyPolicy', () => {
  describe('section headings', () => {
    it.each(privacyMeta.sections.map((s) => [s.title] as const))(
      'renders the "%s" heading',
      (title) => {
        render(<PrivacyPolicy />)
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
      },
    )
  })

  describe('content guarantees', () => {
    it('states that we never collect source code or project files', () => {
      render(<PrivacyPolicy />)
      expect(
        screen.getByText(/collect, transmit, or store your source code, project files/i),
      ).toBeInTheDocument()
    })

    it('includes the privacy contact email as a mailto link', () => {
      render(<PrivacyPolicy />)
      const link = screen.getByRole('link', { name: /privacy@blacksmith\.studio/i })
      expect(link).toHaveAttribute('href', 'mailto:privacy@blacksmith.studio')
    })

    it('mentions GDPR and CCPA privacy rights', () => {
      render(<PrivacyPolicy />)
      expect(screen.getByText(/GDPR.*CCPA|CCPA.*GDPR/i)).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => render(<PrivacyPolicy />)).not.toThrow()
    })
  })
})
