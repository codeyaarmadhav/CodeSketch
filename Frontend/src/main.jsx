import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import Layout from './Layout.jsx'
import UseCase from './pages/UseCase.jsx'
import Create from './pages/Create.jsx'
import Home from './pages/Home.jsx'
import CrtContextProvider from './context/crtContext.jsx'
import Class from './pages/Class.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="create" >
        <Route path="" element={<Create />} />
        <Route path="usecase" element={<UseCase />} />
        <Route path="class" element={<Class />} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CrtContextProvider>
      <RouterProvider router={router} />
    </CrtContextProvider>
  </StrictMode>,
)
