import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from './Routers/Router.jsx'
import ContextAuthProvider from './components/Auth/ContextAuthProvider.jsx'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAuthProvider>
      <RouterProvider router={Router}>
      </RouterProvider>
    </ContextAuthProvider>
  </StrictMode>,
)
