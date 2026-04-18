import { useEffect, useRef, useState } from 'react'

export function useActiveStep(stepCount: number) {
  const refs = useRef<Array<HTMLDivElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    refs.current[i] = el
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => refs.current.indexOf(e.target as HTMLDivElement))
          .filter((i) => i >= 0)
        if (visible.length > 0) {
          setActiveIndex(Math.min(...visible))
        }
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )

    refs.current.slice(0, stepCount).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [stepCount])

  return { setRef, activeIndex }
}
