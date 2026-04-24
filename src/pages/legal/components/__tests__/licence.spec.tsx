import { render, screen } from '@testing-library/react'
import { Licence, licenceMeta } from '../licence'

describe('licenceMeta', () => {
  it('has the "Licence" title', () => {
    expect(licenceMeta.title).toBe('Licence')
  })

  it('exposes a lastUpdated string', () => {
    expect(typeof licenceMeta.lastUpdated).toBe('string')
    expect(licenceMeta.lastUpdated.length).toBeGreaterThan(0)
  })

  it('has section ids that match the sections rendered in the DOM', () => {
    const { container } = render(<Licence />)
    licenceMeta.sections.forEach((section) => {
      expect(container.querySelector(`#${section.id}`)).not.toBeNull()
    })
  })

  it('has a single mit-licence section', () => {
    expect(licenceMeta.sections).toHaveLength(1)
    expect(licenceMeta.sections[0]!.id).toBe('mit-licence')
  })
})

describe('Licence', () => {
  describe('MIT licence text', () => {
    it('renders an "MIT Licence" heading', () => {
      render(<Licence />)
      expect(screen.getByRole('heading', { name: /MIT Licence/i })).toBeInTheDocument()
    })

    it('includes the Copyright line for 2026 Blacksmith Studio Contributors', () => {
      render(<Licence />)
      expect(
        screen.getByText(/Copyright © 2026 Blacksmith Studio Contributors/i),
      ).toBeInTheDocument()
    })

    it('includes the core MIT permission grant', () => {
      render(<Licence />)
      expect(
        screen.getByText(/Permission is hereby granted, free of charge/i),
      ).toBeInTheDocument()
    })

    it('includes the MIT warranty disclaimer', () => {
      render(<Licence />)
      expect(
        screen.getByText(/THE SOFTWARE IS PROVIDED "AS IS"/i),
      ).toBeInTheDocument()
    })
  })

  describe('third-party notice', () => {
    it('mentions the THIRD_PARTY_LICENCES file', () => {
      render(<Licence />)
      expect(screen.getByText(/THIRD_PARTY_LICENCES/)).toBeInTheDocument()
    })
  })

  describe('contact info', () => {
    it('provides a legal contact mailto link', () => {
      render(<Licence />)
      const link = screen.getByRole('link', { name: /legal@blacksmith\.studio/i })
      expect(link).toHaveAttribute('href', 'mailto:legal@blacksmith.studio')
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => render(<Licence />)).not.toThrow()
    })
  })
})
