import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router'
import Layout from './Layout.jsx'
import UseCase from './pages/Usecase.jsx'
import Create from './pages/Create.jsx'
import Home from './pages/Home.jsx'
import CrtContextProvider from './context/CrtContext.jsx'
import Class from './pages/Class.jsx'
import Sequence from './pages/Sequence.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Gantt from './pages/Gantt.jsx'
import Activity from './pages/Activity.jsx'
import LoginPage from './pages/LoginPage.jsx'
import State from './pages/State.jsx'
import UserProjects from './pages/UserProjects.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="create" >
        <Route path="" element={<Create />} />
        <Route path="usecase" element={<UseCase />} />
        <Route path="class" element={<Class />} />
        <Route path="sequence" element={<Sequence />} />
        <Route path="gantt" element={<Gantt />} />
        <Route path="activity" element={<Activity />} />
        <Route path='state' element={<State />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<UserProjects />} />
      <Route path="*" element={<NotFound />} />
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
