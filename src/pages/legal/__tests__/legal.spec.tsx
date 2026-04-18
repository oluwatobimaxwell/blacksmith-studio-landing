vi.mock('../components/legal-layout', () => ({
  LegalLayout: ({
    title,
    lastUpdated,
    currentDoc,
    children,
  }: {
    title: string
    lastUpdated: string
    currentDoc: string
    children: React.ReactNode
  }) => (
    <div
      data-testid="legal-layout"
      data-title={title}
      data-last-updated={lastUpdated}
      data-current={currentDoc}
    >
      {children}
    </div>
  ),
}))
vi.mock('../components/privacy-policy', () => ({
  PrivacyPolicy: () => <div data-testid="privacy-policy" />,
  privacyMeta: {
    title: 'Privacy Policy',
    lastUpdated: 'April 18, 2026',
    sections: [{ id: 's1', title: 'S1' }],
  },
}))
vi.mock('../components/terms-of-service', () => ({
  TermsOfService: () => <div data-testid="terms-of-service" />,
  termsMeta: {
    title: 'Terms of Service',
    lastUpdated: 'April 18, 2026',
    sections: [{ id: 's1', title: 'S1' }],
  },
}))
vi.mock('../components/acceptable-use', () => ({
  AcceptableUse: () => <div data-testid="acceptable-use" />,
  acceptableUseMeta: {
    title: 'Acceptable Use Policy',
    lastUpdated: 'April 18, 2026',
    sections: [{ id: 's1', title: 'S1' }],
  },
}))
vi.mock('../components/licence', () => ({
  Licence: () => <div data-testid="licence" />,
  licenceMeta: {
    title: 'Licence',
    lastUpdated: 'April 18, 2026',
    sections: [{ id: 's1', title: 'S1' }],
  },
}))
vi.mock('@/shared/components/not-found-page', () => ({
  default: () => <div data-testid="not-found" />,
}))

import { screen } from '@testing-library/react'
import { Route, Routes } from 'react-router-dom'
import { renderWithProviders } from '@/__tests__/test-utils'
import LegalPage from '../legal'

function renderAtPath(path: string) {
  return renderWithProviders(
    <Routes>
      <Route path="/legal/:document" element={<LegalPage />} />
      <Route path="/legal" element={<LegalPage />} />
    </Routes>,
    { routerEntries: [path] },
  )
}

describe('LegalPage (orchestrator)', () => {
  describe('document routing', () => {
    it('renders the PrivacyPolicy for /legal/privacy', () => {
      renderAtPath('/legal/privacy')
      expect(screen.getByTestId('privacy-policy')).toBeInTheDocument()
    })

    it('renders the TermsOfService for /legal/terms', () => {
      renderAtPath('/legal/terms')
      expect(screen.getByTestId('terms-of-service')).toBeInTheDocument()
    })

    it('renders the AcceptableUse document for /legal/acceptable-use', () => {
      renderAtPath('/legal/acceptable-use')
      expect(screen.getByTestId('acceptable-use')).toBeInTheDocument()
    })

    it('renders the Licence document for /legal/licence', () => {
      renderAtPath('/legal/licence')
      expect(screen.getByTestId('licence')).toBeInTheDocument()
    })
  })

  describe('layout integration', () => {
    it('wraps the document in LegalLayout with meta props', () => {
      renderAtPath('/legal/privacy')
      const layout = screen.getByTestId('legal-layout')
      expect(layout).toHaveAttribute('data-title', 'Privacy Policy')
      expect(layout).toHaveAttribute('data-last-updated', 'April 18, 2026')
      expect(layout).toHaveAttribute('data-current', 'privacy')
    })

    it('places the document inside the layout', () => {
      renderAtPath('/legal/terms')
      expect(screen.getByTestId('legal-layout')).toContainElement(
        screen.getByTestId('terms-of-service'),
      )
    })
  })

  describe('unknown document', () => {
    it('renders the NotFoundPage when the :document is unknown', () => {
      renderAtPath('/legal/something-else')
      expect(screen.getByTestId('not-found')).toBeInTheDocument()
      expect(screen.queryByTestId('legal-layout')).not.toBeInTheDocument()
    })

    it('renders the NotFoundPage when :document is missing', () => {
      renderAtPath('/legal')
      expect(screen.getByTestId('not-found')).toBeInTheDocument()
    })
  })
})
