import type { RouteObject } from 'react-router-dom'
import { Path } from '@/router/paths'
import AgentsPage from './agents'

export const agentsRoutes: RouteObject[] = [
  { path: Path.Agents, element: <AgentsPage /> },
]
