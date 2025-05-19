import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

function NotFound() {
  return (
    <div className='flex flex-col sm:flex-row gap-10 justify-center items-center h-[90vh] sm:h-[70vh]'>
      <div>
        <img className='h-[20vh] sm:h-[50vh]' src={assets.notfound} />
      </div>
      <div className='flex flex-col gap-4 sm:gap-5 max-w-[60vh] items-center justify-center'>
        <h1 className='text-3xl sm:text-5xl font-semibold text-gray-800'>Error</h1>
        <p className='text-md sm:text-2xl text-gray-500'>The page you are looking for does not exist</p>
      </div>
    </div>
  )
}

export default NotFound