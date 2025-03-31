import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import Layout from './Layout.jsx'
import UseCase from './Components/Create/UseCase.jsx'
import Create from './Components/Create/Create.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="create" >
        <Route path="" element={<Create />} />
        <Route path="usecase" element={<UseCase />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
