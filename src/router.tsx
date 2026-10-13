import { createBrowserRouter, Navigate } from 'react-router'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/home/HomePage'
import { SpecialtyPage } from './pages/specialty/SpecialtyPage'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'especialidades/:slug', element: <SpecialtyPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
