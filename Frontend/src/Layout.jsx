import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ScrollToTop from './ScrollToTop'
import { ToastContainer } from 'react-toastify'
import './index.css'

function Layout() {
  return (
    <div className='px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw] 3xl:px-[12vw]'>
        <ScrollToTop />
        <ToastContainer autoClose={1000} toastClassName={'custom-toast-bg'} position='top-right' hideProgressBar={true}/>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout