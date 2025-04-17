import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router'

function HeroSection() {
  return (
    <div className='mb-5 mt-8'>
        <Link to="/create" >
            <div className='flex flex-col sm:flex-row border border-gray-300 leading-8 mb-5'>
                <div className='w-full sm:w-1/2 flex flex-col justify-center items-center p-10'>
                    <div className='gap-2 flex flex-col '> 
                        <div className='flex items-center gap-2'>
                            <p className='w-12 h-[2px] bg-gray-700'></p>
                            <p className='text-sm md:text-lg'>HASSLE FREE</p>
                        </div>
                        <p className='prata-regular text-2xl md:text-3xl lg:ltext-4xl'>Diagram Generation</p>
                        <div className='flex items-center gap-2  justify-end'>
                            <p className='text-sm md:text-lg'>CREATE NOW</p>
                            <p className='w-5 h-[1.5px] bg-gray-700'></p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-1/2'>
                    <img src={assets.hero2} alt="hero" />
                </div>
            </div>
        </Link>
    </div>
    
  )
}

export default HeroSection