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
import { CommunitySection } from '../community-section'

const AUDIENCES = [
  'Developers',
  'Founders',
  'Students',
  'PMs & Designers',
  'Small Businesses',
  'Anyone, Anywhere',
] as const

const STAT_VALUES = ['4.9', '10k+', '2k+', '50+'] as const

const STAT_LABELS = ['Star rating', 'Downloads', 'Active developers', 'Countries'] as const

describe('CommunitySection', () => {
  describe('section landmark', () => {
    it('renders a section element with id="community"', () => {
      renderWithProviders(<CommunitySection />)
      expect(document.getElementById('community')).toBeInTheDocument()
    })

    it('renders as an HTML <section>', () => {
      renderWithProviders(<CommunitySection />)
      expect(document.getElementById('community')?.tagName).toBe('SECTION')
    })
  })

  describe('heading and copy', () => {
    it('renders the "Community" eyebrow label', () => {
      renderWithProviders(<CommunitySection />)
      expect(screen.getByText('Community')).toBeInTheDocument()
    })

    it('renders the main headline as an h2', () => {
      renderWithProviders(<CommunitySection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2.textContent).toMatch(/Built for every builder/)
      expect(h2.textContent).toMatch(/Everywhere/)
    })

    it('renders the descriptive subtext', () => {
      renderWithProviders(<CommunitySection />)
      expect(
        screen.getByText(/Not a community for a specific type of person/i),
      ).toBeInTheDocument()
    })
  })

  describe('social proof stats', () => {
    it.each(STAT_VALUES.map((v) => [v] as const))(
      'renders the %s stat value',
      (value) => {
        renderWithProviders(<CommunitySection />)
        expect(screen.getByText(value)).toBeInTheDocument()
      },
    )

    it.each(STAT_LABELS.map((l) => [l] as const))(
      'renders the %s stat label',
      (label) => {
        renderWithProviders(<CommunitySection />)
        expect(screen.getByText(label)).toBeInTheDocument()
      },
    )
  })

  describe('audience cards', () => {
    it.each(AUDIENCES.map((a) => [a] as const))(
      'renders an h3 heading for %s',
      (title) => {
        renderWithProviders(<CommunitySection />)
        expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      },
    )

    it('renders an h3 heading for each of the six audiences', () => {
      renderWithProviders(<CommunitySection />)
      const h3s = screen.getAllByRole('heading', { level: 3 })
      expect(h3s).toHaveLength(AUDIENCES.length)
    })
  })

  describe('founder quote', () => {
    it('renders the quote text', () => {
      renderWithProviders(<CommunitySection />)
      expect(
        screen.getByText(/The world has extraordinary talent in every country/i),
      ).toBeInTheDocument()
    })

    it('renders the founder name', () => {
      renderWithProviders(<CommunitySection />)
      expect(screen.getByText('Tobi Sholanke')).toBeInTheDocument()
    })

    it('renders the founder affiliation', () => {
      renderWithProviders(<CommunitySection />)
      expect(screen.getByText(/Founder, Blacksmith · Helsinki/i)).toBeInTheDocument()
    })

    it('renders the "Built in" / "For the" labels', () => {
      renderWithProviders(<CommunitySection />)
      expect(screen.getByText('Built in')).toBeInTheDocument()
      expect(screen.getByText('For the')).toBeInTheDocument()
      expect(screen.getByText('Nigeria')).toBeInTheDocument()
      expect(screen.getByText('World')).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<CommunitySection />)).not.toThrow()
    })
  })
})
