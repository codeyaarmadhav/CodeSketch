import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout