import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header'
import DashboardAdmin from './components/DashboardAdmin'
import { 
  createBrowserRouter,
  RouterProvider
 } from 'react-router'

 const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "dashboardAdmin",
    element: <DashboardAdmin/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
