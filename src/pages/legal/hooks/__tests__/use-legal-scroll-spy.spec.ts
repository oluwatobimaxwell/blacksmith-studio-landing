import { act, renderHook } from '@testing-library/react'
import { useLegalScrollSpy } from '../use-legal-scroll-spy'

type ObserverCallback = (entries: { isIntersecting: boolean; target: Element }[]) => void

class FakeIntersectionObserver {
  static instances: FakeIntersectionObserver[] = []

  readonly callback: ObserverCallback
  readonly options: IntersectionObserverInit | undefined
  readonly observedTargets: Element[] = []
  disconnected = false

  constructor(callback: ObserverCallback, options?: IntersectionObserverInit) {
    this.callback = callback
    this.options = options
    FakeIntersectionObserver.instances.push(this)
  }

  observe(target: Element) {
    this.observedTargets.push(target)
  }

  disconnect() {
    this.disconnected = true
  }

  unobserve() {}
  takeRecords() {
    return []
  }

  trigger(isIntersecting: boolean) {
    const target = this.observedTargets[0]
    this.callback([{ isIntersecting, target }])
  }
}

function setupDomIds(ids: string[]) {
  for (const id of ids) {
    const el = document.createElement('section')
    el.id = id
    document.body.appendChild(el)
  }
}

describe('useLegalScrollSpy', () => {
  beforeEach(() => {
    FakeIntersectionObserver.instances = []
    ;(window as unknown as { IntersectionObserver: unknown }).IntersectionObserver =
      FakeIntersectionObserver
  })

  describe('initial state', () => {
    it('returns the first section id when ids are provided', () => {
      setupDomIds(['intro', 'body', 'end'])
      const { result } = renderHook(() => useLegalScrollSpy(['intro', 'body', 'end']))
      expect(result.current).toBe('intro')
    })

    it('returns an empty string when the sectionIds array is empty', () => {
      const { result } = renderHook(() => useLegalScrollSpy([]))
      expect(result.current).toBe('')
    })
  })

  describe('observer wiring', () => {
    it('observes every section element that exists in the DOM', () => {
      setupDomIds(['a', 'b', 'c'])
      renderHook(() => useLegalScrollSpy(['a', 'b', 'c']))
      expect(FakeIntersectionObserver.instances).toHaveLength(3)
    })

    it('skips section ids that are not present in the DOM', () => {
      setupDomIds(['only-one'])
      renderHook(() => useLegalScrollSpy(['only-one', 'missing']))
      expect(FakeIntersectionObserver.instances).toHaveLength(1)
    })
  })

  describe('active section updates', () => {
    it('updates the active section when a section intersects', () => {
      setupDomIds(['a', 'b'])
      const { result } = renderHook(() => useLegalScrollSpy(['a', 'b']))

      act(() => {
        FakeIntersectionObserver.instances[1].trigger(true)
      })
      expect(result.current).toBe('b')
    })

    it('does not update the active section when intersection ends', () => {
      setupDomIds(['a', 'b'])
      const { result } = renderHook(() => useLegalScrollSpy(['a', 'b']))

      act(() => {
        FakeIntersectionObserver.instances[1].trigger(true)
      })
      expect(result.current).toBe('b')

      act(() => {
        FakeIntersectionObserver.instances[1].trigger(false)
      })
      expect(result.current).toBe('b')
    })
  })

  describe('cleanup', () => {
    it('disconnects observers on unmount', () => {
      setupDomIds(['a', 'b'])
      const { unmount } = renderHook(() => useLegalScrollSpy(['a', 'b']))
      unmount()
      FakeIntersectionObserver.instances.forEach((inst) => {
        expect(inst.disconnected).toBe(true)
      })
    })
  })
})
