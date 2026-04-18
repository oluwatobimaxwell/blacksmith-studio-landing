import { useState, useEffect } from 'react'

export function useLegalScrollSpy(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')
  const idsKey = sectionIds.join(',')

  useEffect(() => {
    const ids = idsKey.split(',').filter(Boolean)
    if (ids.length === 0) return

    setActiveSection(ids[0])

    const observers = ids.flatMap((id) => {
      const el = document.getElementById(id)
      if (!el) return []

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-80px 0px -50% 0px', threshold: 0 },
      )
      observer.observe(el)
      return [observer]
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [idsKey])

  return activeSection
}
