import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Router/AppRoutes.jsx'
import Shorts from './Components/Shorts.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <AppRoutes/>
  </StrictMode>
  </BrowserRouter>
)
