import { useEffect, useState } from 'react'

export type LandingTheme = 'light' | 'dark'

const STORAGE_KEY = 'bs-community-theme'

const readStored = (): LandingTheme => {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : 'dark'
}

export function useLandingTheme() {
  const [theme, setTheme] = useState<LandingTheme>(readStored)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return { theme, setTheme, toggle }
}
