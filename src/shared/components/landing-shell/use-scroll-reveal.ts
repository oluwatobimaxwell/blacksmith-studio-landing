import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) entry.target.classList.add('in')
        }
      },
      { threshold: 0.08 },
    )
    const nodes = document.querySelectorAll('.cl-reveal')
    nodes.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
