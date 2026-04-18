import { legalRoutes } from '../routes'
import { legalRoutes as barrelExport } from '../index'

describe('legalRoutes', () => {
  it('exports an array', () => {
    expect(Array.isArray(legalRoutes)).toBe(true)
  })

  it('has a single route entry for dynamic legal documents', () => {
    expect(legalRoutes).toHaveLength(1)
    expect(legalRoutes[0].path).toBe('/legal/:document')
  })

  it('attaches a non-null element to the route', () => {
    expect(legalRoutes[0].element).toBeDefined()
  })

  describe('barrel export', () => {
    it('re-exports the same legalRoutes from the index barrel', () => {
      expect(barrelExport).toBe(legalRoutes)
    })
  })
})
