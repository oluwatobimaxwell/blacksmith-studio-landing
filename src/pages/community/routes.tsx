import type { RouteObject } from 'react-router-dom'
import { Path } from '@/router/paths'
import CommunityPage from './community'

export const communityRoutes: RouteObject[] = [
  { path: Path.Community, element: <CommunityPage /> },
]
