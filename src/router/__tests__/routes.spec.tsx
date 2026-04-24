import { routes } from '../routes'
import { Path } from '../paths'

function flattenPaths(items: readonly { path?: string; children?: readonly any[] }[]): string[] {
  const out: string[] = []
  for (const item of items) {
    if (typeof item.path === 'string') out.push(item.path)
    if (item.children) out.push(...flattenPaths(item.children))
  }
  return out
}

describe('routes', () => {
  it('exports an array of route objects', () => {
    expect(Array.isArray(routes)).toBe(true)
    expect(routes.length).toBeGreaterThan(0)
  })

  it('keeps the marketing layout group with landing, agents, manifesto, and community', () => {
    const layoutGroup = routes[0]
    expect(layoutGroup).toBeDefined()
    expect(layoutGroup!.children?.length).toBeGreaterThanOrEqual(4)
    const childPaths = flattenPaths(layoutGroup!.children ?? [])
    expect(childPaths).toContain(Path.Home)
    expect(childPaths).toContain(Path.Agents)
    expect(childPaths).toContain(Path.Manifesto)
    expect(childPaths).toContain(Path.Community)
  })

  it('does not register the /blog or /blog/:slug paths anywhere in the router tree', () => {
    const all = flattenPaths(routes as any)
    expect(all).not.toContain('/blog')
    expect(all).not.toContain('/blog/:slug')
  })

  it('keeps a catch-all 404 route at the end', () => {
    const catchAll = routes[routes.length - 1]
    expect(catchAll).toBeDefined()
    expect(catchAll!.path).toBe('*')
    expect(catchAll!.element).toBeDefined()
  })

  it('still includes the legal routes at the top level', () => {
    const all = flattenPaths(routes as any)
    expect(all).toContain('/legal/:document')
  })
})
