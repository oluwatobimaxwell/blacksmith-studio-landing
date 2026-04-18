import type { RouteObject } from 'react-router-dom'
import LegalPage from './legal'

export const legalRoutes: RouteObject[] = [
  {
    path: '/legal/:document',
    element: <LegalPage />,
  },
]
