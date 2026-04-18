// Hoisted mock — strips framer-motion animation/ref behavior so Chakra's
// Drawer (which relies on framer-motion) renders cleanly under jsdom.
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
    useIsPresent: () => true,
    usePresence: () => [true, () => {}],
  }
})

vi.mock('../../hooks/use-landing-scroll')

import { screen, within, waitFor } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { NavBar } from '../nav-bar'
import { useLandingScroll } from '../../hooks/use-landing-scroll'

const NAV_LINKS = [
  { label: 'Product', href: '#features' },
  { label: 'Hub', href: '#graphify' },
  { label: 'Showcase', href: '#showcase' },
  { label: 'Docs', href: 'https://docs.blacksmith.studio' },
  { label: 'Community', href: '#principles' },
] as const

beforeEach(() => {
  // Default to the scrolled state — the nav is only interactive (non
  // pointer-events:none) once the user scrolls past the hero. Tests that
  // specifically assert the pre-scroll behaviour override this.
  vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: true })
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('NavBar', () => {
  describe('banner landmark & logo', () => {
    it('renders a banner (header) landmark', () => {
      renderWithProviders(<NavBar />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    it('renders the Blacksmith Studio brand text', () => {
      renderWithProviders(<NavBar />)
      expect(screen.getByText('Blacksmith Studio')).toBeInTheDocument()
    })

    it('renders a logo link pointing to the home path', () => {
      renderWithProviders(<NavBar />)
      const logoText = screen.getByText('Blacksmith Studio')
      const link = logoText.closest('a')
      expect(link).toHaveAttribute('href', '/')
    })
  })

  describe('navigation links', () => {
    it('renders a nav element labelled "Main"', () => {
      const { container } = renderWithProviders(<NavBar />)
      const navs = container.querySelectorAll('nav[aria-label="Main"]')
      expect(navs.length).toBeGreaterThanOrEqual(1)
    })

    it.each(NAV_LINKS.map(({ label, href }) => [label, href] as const))(
      'renders a %s nav link pointing to %s',
      (label, href) => {
        renderWithProviders(<NavBar />)
        const links = screen.getAllByRole('link', { name: label, hidden: true })
        expect(links.length).toBeGreaterThan(0)
        expect(links[0]).toHaveAttribute('href', href)
      },
    )

    it('renders a Download CTA link in the header', () => {
      renderWithProviders(<NavBar />)
      const downloads = screen.getAllByRole('link', { name: /Download/, hidden: true })
      expect(downloads.length).toBeGreaterThan(0)
      expect(downloads[0]).toHaveAttribute('href', '#download')
    })
  })

  describe('scrolled-state re-render', () => {
    it('hides the banner from pointer events before scroll and shows it after', () => {
      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: false })
      const { rerender } = renderWithProviders(<NavBar />)
      const initialClass = screen.getByRole('banner').className

      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: true })
      rerender(<NavBar />)
      const scrolledClass = screen.getByRole('banner').className

      expect(scrolledClass).not.toBe(initialClass)
    })

    it('renders without throwing when isScrolled is false', () => {
      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: false })
      expect(() => renderWithProviders(<NavBar />)).not.toThrow()
    })
  })

  describe('mobile drawer', () => {
    it('renders the mobile menu button', () => {
      renderWithProviders(<NavBar />)
      expect(
        screen.getByRole('button', { name: 'Open menu', hidden: true }),
      ).toBeInTheDocument()
    })

    it('marks the mobile menu button as collapsed by default', () => {
      renderWithProviders(<NavBar />)
      const btn = screen.getByRole('button', { name: 'Open menu', hidden: true })
      expect(btn).toHaveAttribute('aria-expanded', 'false')
    })

    it('opens the drawer when the mobile menu button is clicked', async () => {
      const { user } = renderWithProviders(<NavBar />)
      await user.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('marks the mobile menu button as expanded once the drawer is open', async () => {
      const { user } = renderWithProviders(<NavBar />)
      const btn = screen.getByRole('button', { name: 'Open menu', hidden: true })
      await user.click(btn)
      await waitFor(() => {
        expect(btn).toHaveAttribute('aria-expanded', 'true')
      })
    })

    it('renders all nav links inside the drawer when open', async () => {
      const { user } = renderWithProviders(<NavBar />)
      await user.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
      const dialog = await screen.findByRole('dialog')
      for (const { label, href } of NAV_LINKS) {
        const link = within(dialog).getByRole('link', { name: label })
        expect(link).toHaveAttribute('href', href)
      }
    })

    it('closes the drawer when a nav link inside it is clicked', async () => {
      const { user } = renderWithProviders(<NavBar />)
      await user.click(screen.getByRole('button', { name: 'Open menu', hidden: true }))
      const dialog = await screen.findByRole('dialog')

      const featuresInDrawer = within(dialog).getByRole('link', { name: 'Product' })
      await user.click(featuresInDrawer)

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing in the not-scrolled state', () => {
      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: false })
      expect(() => renderWithProviders(<NavBar />)).not.toThrow()
    })
  })
})
