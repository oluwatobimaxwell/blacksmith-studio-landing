import { useState, useEffect, useRef } from 'react'

interface ScrollProgressResult {
  sectionRef: React.RefObject<HTMLDivElement>
  activeIndex: number
  segmentProgress: number // 0–1 progress within the current segment
  totalProgress: number  // 0–1 total progress through the section
}

/**
 * Tracks scroll progress through a tall sticky section.
 * Divides total scroll range evenly into `count` segments.
 */
export function useScrollProgress(count: number): ScrollProgressResult {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [segmentProgress, setSegmentProgress] = useState(0)
  const [totalProgress, setTotalProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const scrolled = Math.max(0, -rect.top)
      const totalScrollable = Math.max(1, el.offsetHeight - window.innerHeight)
      const p = Math.min(1, scrolled / totalScrollable)

      const raw = p * count
      const idx = Math.min(Math.floor(raw), count - 1)
      const seg = raw - Math.floor(raw)

      setTotalProgress(p)
      setActiveIndex(idx)
      setSegmentProgress(seg)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [count])

  return { sectionRef, activeIndex, segmentProgress, totalProgress }
}
