import { useEffect, useState } from 'react'

export function useActiveSection(ids: readonly string[], initial = 'top') {
  const [active, setActive] = useState<string>(initial)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActive((entry.target as HTMLElement).id)
          }
        }
      },
      { threshold: [0, 0.3, 0.6] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}
