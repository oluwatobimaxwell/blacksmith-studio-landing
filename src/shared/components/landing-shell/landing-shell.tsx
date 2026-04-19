import { createContext, useContext, type ReactNode } from 'react'
import { Box } from '@chakra-ui/react'
import { NavBar, type CurrentPage } from './nav-bar'
import { LandingFooter } from './landing-footer'
import { useLandingTheme, type LandingTheme } from './use-landing-theme'
import { useScrollReveal } from './use-scroll-reveal'

interface LandingShellContextValue {
  theme: LandingTheme
  toggle: () => void
}

const LandingShellContext = createContext<LandingShellContextValue | null>(null)

export function useLandingShell() {
  const ctx = useContext(LandingShellContext)
  if (!ctx) throw new Error('useLandingShell must be used inside <LandingShell>')
  return ctx
}

interface LandingShellProps {
  active: string
  currentPage?: CurrentPage
  mainPt?: string | number
  children: ReactNode
}

export function LandingShell({
  active,
  currentPage = 'landing',
  mainPt = '56px',
  children,
}: LandingShellProps) {
  const { theme, toggle } = useLandingTheme()
  useScrollReveal()

  return (
    <LandingShellContext.Provider value={{ theme, toggle }}>
      <Box
        className="cl-root"
        data-theme={theme}
        bg="var(--paper)"
        color="var(--fg-1)"
        minH="100vh"
      >
        <NavBar theme={theme} onToggleTheme={toggle} active={active} currentPage={currentPage} />
        <Box as="main" pt={mainPt}>
          {children}
        </Box>
        <LandingFooter theme={theme} />
      </Box>
    </LandingShellContext.Provider>
  )
}
