import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PlanetPage from './components/PlanetPage.tsx'
import { createBrowserRouter,Navigate,RouterProvider } from 'react-router'
import Layout from './components/Layout.tsx'
import Provider from './components/Context.tsx'
const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Provider><Layout /></Provider>,
      children:[
        {
          path:'/',
          element:<Navigate to = {'/Mercury'} />
        },
        {
          path:'/:planetName',
          element:<PlanetPage />
        }
      ]
    }
  ]
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
