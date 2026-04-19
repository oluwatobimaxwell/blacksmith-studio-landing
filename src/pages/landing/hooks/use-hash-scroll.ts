import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll-to-section'

export function useHashScroll() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = hash.replace(/^#/, '')
    if (!id) return
    const scroll = () => scrollToSection(id)
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scroll)
    })
    return () => window.cancelAnimationFrame(raf)
  }, [hash])
}
