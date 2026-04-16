vi.mock('framer-motion', async () => {
  const React = await import('react')
  return {
    motion: {
      create: (Component: any) =>
        React.forwardRef(
          (
            {
              initial,
              animate,
              exit,
              transition,
              variants,
              whileHover,
              whileTap,
              whileInView,
              viewport,
              ...props
            }: any,
            ref: any,
          ) => React.createElement(Component, { ...props, ref }),
        ),
    },
    AnimatePresence: ({ children }: any) =>
      React.createElement(React.Fragment, null, children),
    useReducedMotion: vi.fn().mockReturnValue(false),
    useAnimation: () => ({ start: vi.fn() }),
    useInView: () => true,
  }
})

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { PricingSection } from '../pricing-section'

describe('PricingSection', () => {
  describe('section landmark', () => {
    it('renders a section element with id="pricing"', () => {
      renderWithProviders(<PricingSection />)
      expect(document.getElementById('pricing')).toBeInTheDocument()
    })

    it('renders as an HTML <section>', () => {
      renderWithProviders(<PricingSection />)
      expect(document.getElementById('pricing')?.tagName).toBe('SECTION')
    })
  })

  describe('heading & copy', () => {
    it('renders the "Pricing" eyebrow label', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('Pricing')).toBeInTheDocument()
    })

    it('renders the main headline as an h2', () => {
      renderWithProviders(<PricingSection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2.textContent).toMatch(/Free forever/)
      expect(h2.textContent).toMatch(/Scale when ready/)
    })

    it('renders the descriptive subtext', () => {
      renderWithProviders(<PricingSection />)
      expect(
        screen.getByText(/Blacksmith Studio is free to download, free to use/i),
      ).toBeInTheDocument()
    })

    it('renders the footer commitment copy about not charging', () => {
      renderWithProviders(<PricingSection />)
      expect(
        screen.getByText(/We will never charge for access to Blacksmith Studio/i),
      ).toBeInTheDocument()
    })
  })

  describe('tiers', () => {
    it('renders both the Community and Pro tier names', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('Community')).toBeInTheDocument()
      expect(screen.getByText('Pro')).toBeInTheDocument()
    })

    it('renders the Community tier price as $0', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('$0')).toBeInTheDocument()
      expect(screen.getByText('forever')).toBeInTheDocument()
    })

    it('renders the Pro tier price as $20/month', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('$20')).toBeInTheDocument()
      expect(screen.getByText('/month')).toBeInTheDocument()
    })

    it('renders the Community tier description', () => {
      renderWithProviders(<PricingSection />)
      expect(
        screen.getByText(/The full IDE — free, always\. No credit card\. No expiry\. No catch\./i),
      ).toBeInTheDocument()
    })

    it('renders the Pro tier description', () => {
      renderWithProviders(<PricingSection />)
      expect(
        screen.getByText(/For developers who want priority access/i),
      ).toBeInTheDocument()
    })

    it('renders the "Always Free" badge for the Community tier', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('Always Free')).toBeInTheDocument()
    })

    it('renders the "Most Popular" badge for the Pro tier', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByText('Most Popular')).toBeInTheDocument()
    })
  })

  describe('tier features', () => {
    const communityFeatures = [
      'Full IDE with all tools',
      'AI chat with Claude',
      'Terminal & dev services',
      'Git integration',
      'Multi-agent canvas',
      'Community support',
    ]

    const proFeatures = [
      'Everything in Community',
      'Priority AI responses',
      'Custom MCP servers',
      'Extended context windows',
      'Priority support',
    ]

    it.each(communityFeatures.map((f) => [f] as const))(
      'renders the Community feature "%s"',
      (feature) => {
        renderWithProviders(<PricingSection />)
        expect(screen.getByText(feature)).toBeInTheDocument()
      },
    )

    it.each(proFeatures.map((f) => [f] as const))(
      'renders the Pro feature "%s"',
      (feature) => {
        renderWithProviders(<PricingSection />)
        expect(screen.getByText(feature)).toBeInTheDocument()
      },
    )
  })

  describe('CTAs', () => {
    it('renders the "Download Free" button for Community', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByRole('button', { name: /Download Free/i })).toBeInTheDocument()
    })

    it('renders the "Start Free Trial" button for Pro', () => {
      renderWithProviders(<PricingSection />)
      expect(screen.getByRole('button', { name: /Start Free Trial/i })).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<PricingSection />)).not.toThrow()
    })
  })
})
