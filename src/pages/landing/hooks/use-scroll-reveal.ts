import { useEffect } from 'react'
import { useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

export function useScrollReveal(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return { ref, controls }
}
