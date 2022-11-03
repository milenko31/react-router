import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Homepage from './Pages/HomePage/Homepage'
import ErrorPage from './Pages/ErrorPage/Errorpage'
import About from './Pages/About'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])
