import type { RouteObject } from 'react-router-dom'
import { Path } from '@/router/paths'
import ManifestoPage from './manifesto'

export const manifestoRoutes: RouteObject[] = [
  { path: Path.Manifesto, element: <ManifestoPage /> },
]
