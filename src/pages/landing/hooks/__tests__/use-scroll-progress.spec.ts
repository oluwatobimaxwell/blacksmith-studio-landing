import { renderHook, act } from '@testing-library/react'
import { useScrollProgress } from '../use-scroll-progress'

function makeSectionElement(offsetHeight: number, offsetTop = 0) {
  const el = document.createElement('div')
  Object.defineProperty(el, 'offsetHeight', { value: offsetHeight, configurable: true })
  Object.defineProperty(el, 'offsetTop', { value: offsetTop, configurable: true })
  return el
}

describe('useScrollProgress', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'innerHeight', { value: 768, writable: true, configurable: true })
  })

  describe('initial state', () => {
    it('returns activeIndex 0', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      expect(result.current.activeIndex).toBe(0)
    })

    it('returns totalProgress 0', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      expect(result.current.totalProgress).toBe(0)
    })

    it('returns segmentProgress 0', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      expect(result.current.segmentProgress).toBe(0)
    })

    it('returns a ref object', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      expect(result.current.sectionRef).toBeDefined()
      expect(result.current.sectionRef).toHaveProperty('current')
    })
  })

  describe('scroll listener lifecycle', () => {
    it('registers a passive scroll listener on mount', () => {
      const addSpy = vi.spyOn(window, 'addEventListener')
      renderHook(() => useScrollProgress(5))
      expect(addSpy).toHaveBeenCalledWith('scroll', expect.any(Function), { passive: true })
      addSpy.mockRestore()
    })

    it('removes scroll listener on unmount', () => {
      const removeSpy = vi.spyOn(window, 'removeEventListener')
      const { unmount } = renderHook(() => useScrollProgress(5))
      unmount()
      expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
      removeSpy.mockRestore()
    })
  })

  describe('activeIndex progression', () => {
    it('stays at 0 when section has not scrolled into view', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      const el = makeSectionElement(3000)
      el.getBoundingClientRect = () =>
        ({ top: 200, bottom: 3200, left: 0, right: 0, width: 0, height: 3000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.activeIndex).toBe(0)
      expect(result.current.totalProgress).toBe(0)
    })

    it('advances to index 1 after scrolling ~22% through the section', () => {
      // totalScrollable = 3000 - 768 = 2232; 22% = ~491px → activeIndex 1 of 5
      const { result } = renderHook(() => useScrollProgress(5))
      const el = makeSectionElement(3000)
      el.getBoundingClientRect = () =>
        ({ top: -700, bottom: 2300, left: 0, right: 0, width: 0, height: 3000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.activeIndex).toBe(1)
    })

    it('advances to index 2 after scrolling ~42% through the section', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      const el = makeSectionElement(3000)
      // scrolled = 940, p = 940/2232 ≈ 0.421, raw = 2.1, idx = 2
      el.getBoundingClientRect = () =>
        ({ top: -940, bottom: 2060, left: 0, right: 0, width: 0, height: 3000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.activeIndex).toBe(2)
    })

    it('clamps to last index (4) when scrolled past section end', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      const el = makeSectionElement(3000)
      el.getBoundingClientRect = () =>
        ({ top: -10000, bottom: -7000, left: 0, right: 0, width: 0, height: 3000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.activeIndex).toBe(4)
      expect(result.current.totalProgress).toBe(1)
    })
  })

  describe('segmentProgress', () => {
    it('returns fractional progress within the current segment', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      const el = makeSectionElement(3000)
      // scrolled=558, totalScrollable=2232, p=0.25, raw=1.25 → idx=1, seg=0.25
      el.getBoundingClientRect = () =>
        ({ top: -558, bottom: 2442, left: 0, right: 0, width: 0, height: 3000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.segmentProgress).toBeCloseTo(0.25, 1)
    })
  })

  describe('edge cases', () => {
    it('handles count=1 without division errors', () => {
      const { result } = renderHook(() => useScrollProgress(1))
      const el = makeSectionElement(1000)
      el.getBoundingClientRect = () =>
        ({ top: -500, bottom: 500, left: 0, right: 0, width: 0, height: 1000 } as DOMRect)
      ;(result.current.sectionRef as any).current = el

      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })

      expect(result.current.activeIndex).toBe(0)
    })

    it('does nothing when sectionRef.current is null', () => {
      const { result } = renderHook(() => useScrollProgress(5))
      // sectionRef.current stays null — handler is a no-op
      act(() => {
        window.dispatchEvent(new Event('scroll'))
      })
      expect(result.current.activeIndex).toBe(0)
    })
  })
})
