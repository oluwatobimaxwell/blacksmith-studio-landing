export interface GraphifyNode {
  id: string
  label: string
  x: number
  y: number
  group: 'app' | 'hooks' | 'ui' | 'api' | 'utils'
}

export interface GraphifyEdge {
  from: string
  to: string
}

export const graphifyNodes: GraphifyNode[] = [
  { id: 'app', label: 'app.tsx', x: 300, y: 240, group: 'app' },
  { id: 'router', label: 'router.tsx', x: 200, y: 160, group: 'app' },
  { id: 'auth', label: 'auth-provider', x: 420, y: 160, group: 'app' },
  { id: 'query', label: 'query-client', x: 420, y: 320, group: 'app' },
  { id: 'login', label: 'login-page', x: 120, y: 260, group: 'ui' },
  { id: 'dash', label: 'dashboard', x: 130, y: 360, group: 'ui' },
  { id: 'land', label: 'landing', x: 200, y: 420, group: 'ui' },
  { id: 'useAuth', label: 'use-auth', x: 540, y: 240, group: 'hooks' },
  { id: 'useLand', label: 'use-landing', x: 340, y: 440, group: 'hooks' },
  { id: 'useQ', label: 'use-api-query', x: 560, y: 380, group: 'hooks' },
  { id: 'useM', label: 'use-api-mutation', x: 620, y: 300, group: 'hooks' },
  { id: 'client', label: 'api/client', x: 500, y: 420, group: 'api' },
  { id: 'err', label: 'api-error', x: 640, y: 420, group: 'utils' },
  { id: 'paths', label: 'paths', x: 80, y: 180, group: 'utils' },
  { id: 'theme', label: 'theme', x: 300, y: 100, group: 'utils' },
  { id: 'spin', label: 'loading-spinner', x: 60, y: 360, group: 'ui' },
]

export const graphifyEdges: GraphifyEdge[] = [
  { from: 'app', to: 'router' },
  { from: 'app', to: 'auth' },
  { from: 'app', to: 'query' },
  { from: 'app', to: 'theme' },
  { from: 'router', to: 'paths' },
  { from: 'router', to: 'login' },
  { from: 'router', to: 'dash' },
  { from: 'router', to: 'land' },
  { from: 'auth', to: 'useAuth' },
  { from: 'login', to: 'useAuth' },
  { from: 'dash', to: 'useAuth' },
  { from: 'dash', to: 'useQ' },
  { from: 'land', to: 'useLand' },
  { from: 'useQ', to: 'client' },
  { from: 'useM', to: 'client' },
  { from: 'client', to: 'err' },
  { from: 'useQ', to: 'err' },
  { from: 'auth', to: 'client' },
  { from: 'login', to: 'spin' },
  { from: 'dash', to: 'spin' },
  { from: 'query', to: 'client' },
]

export const GROUP_COLORS: Record<GraphifyNode['group'], string> = {
  app: '#2dd4a8',
  hooks: '#ffb854',
  ui: '#64b5f6',
  api: '#ef5350',
  utils: 'rgba(255,255,255,0.5)',
}
