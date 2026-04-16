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
  { label: 'Features', href: '#features' },
  { label: 'Agents', href: '#agents' },
  { label: 'Community', href: '#community' },
] as const

beforeEach(() => {
  vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: false })
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

    it('renders the Blacksmith brand text', () => {
      renderWithProviders(<NavBar />)
      expect(screen.getByText('Blacksmith')).toBeInTheDocument()
    })

    it('renders a logo link pointing to the home path', () => {
      renderWithProviders(<NavBar />)
      const logoText = screen.getByText('Blacksmith')
      const link = logoText.closest('a')
      expect(link).toHaveAttribute('href', '/')
    })
  })

  describe('navigation links', () => {
    // Chakra's responsive display props produce CSS media queries. In jsdom
    // the matchMedia mock returns matches:false so desktop elements are
    // visually hidden. We pass { hidden: true } to query them anyway.
    it('renders a nav element labelled "Main"', () => {
      const { container } = renderWithProviders(<NavBar />)
      // Query the <nav> element directly: in jsdom it may have display:none
      // applied by Chakra's responsive props, which causes getByRole to
      // exclude it even with hidden:true in some configurations.
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

    it('renders a "Log in" link pointing to /login', () => {
      renderWithProviders(<NavBar />)
      const loginLinks = screen.getAllByRole('link', { name: 'Log in', hidden: true })
      expect(loginLinks.length).toBeGreaterThan(0)
      expect(loginLinks[0]).toHaveAttribute('href', '/login')
    })

    it('renders a "Get Started Free" button', () => {
      renderWithProviders(<NavBar />)
      const buttons = screen.getAllByRole('button', {
        name: 'Get Started Free',
        hidden: true,
      })
      expect(buttons.length).toBeGreaterThan(0)
    })
  })

  describe('scrolled-state re-render', () => {
    // We verify behaviour by asserting that the rendered class list changes
    // between scrolled/not-scrolled — without coupling to specific CSS.
    it('updates the banner className when isScrolled changes from false to true', () => {
      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: false })
      const { rerender } = renderWithProviders(<NavBar />)
      const initialClass = screen.getByRole('banner').className

      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: true })
      rerender(<NavBar />)
      const scrolledClass = screen.getByRole('banner').className

      expect(scrolledClass).not.toBe(initialClass)
    })

    it('renders without throwing when isScrolled is true', () => {
      vi.mocked(useLandingScroll).mockReturnValue({ isScrolled: true })
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
      // The Chakra Drawer renders a role="dialog" when open
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

      const featuresInDrawer = within(dialog).getByRole('link', { name: 'Features' })
      await user.click(featuresInDrawer)

      // After clicking the link, the drawer is no longer open — wait for the
      // dialog to disappear from the tree.
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
