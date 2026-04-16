import * as landing from '../index'

describe('landing module public API (barrel)', () => {
  it('re-exports LandingPage as a React component', () => {
    expect(landing.LandingPage).toBeDefined()
    expect(typeof landing.LandingPage).toBe('function')
  })

  it('re-exports landingRoutes as an array', () => {
    expect(landing.landingRoutes).toBeDefined()
    expect(Array.isArray(landing.landingRoutes)).toBe(true)
  })

  it('landingRoutes has exactly one route for the home path', () => {
    expect(landing.landingRoutes).toHaveLength(1)
    expect(landing.landingRoutes[0]).toEqual(
      expect.objectContaining({ path: '/' }),
    )
  })

  it('landingRoutes home route renders a LandingPage element', () => {
    const route = landing.landingRoutes[0] as { element: any }
    // JSX transforms to an object with a `type` field pointing to the component
    expect(route.element).toBeDefined()
    expect(route.element.type).toBe(landing.LandingPage)
  })
})
