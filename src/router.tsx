import { createBrowserRouter, Navigate } from 'react-router'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/home/HomePage'

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])
