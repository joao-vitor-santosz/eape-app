import { createBrowserRouter, Navigate } from 'react-router'
import { SiteLayout } from './layouts/SiteLayout'
import { AboutPage } from './pages/about/AboutPage'
import { HomePage } from './pages/home/HomePage'
import { SpecialtyPage } from './pages/specialty/SpecialtyPage'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'sobre', element: <AboutPage /> },
      { path: 'especialidades/:slug', element: <SpecialtyPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
