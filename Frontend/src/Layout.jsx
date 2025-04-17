import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './ScrollToTop'

function Layout() {
  return (
    <div className='px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw] '>
        <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout