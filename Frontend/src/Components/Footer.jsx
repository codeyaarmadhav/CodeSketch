import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router'

function Footer() {
  return (
    <div className='flex flex-col mt-20 sm:mt-40'>
        <div className='flex flex-col sm:flex-row w-full mb-7'>
            <div className='flex flex-col w-full sm:w-4/6 mb-5 sm:mb-0'>
                <img className='w-30 my-5' src={assets.newlogo} alt="logo" />
                <p className='w-full sm:w-2/3 text-gray-700 text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum necessitatibus laboriosam, excepturi atque omnis cupiditate tempora nulla at veniam nesciunt similique temporibus tempore laudantium possimus. Laudantium, enim? Amet, repellendus hic?</p>
            </div>
            <div className='flex flex-col sm:flex-row w-full sm:w-2/6 justify-between'>
                <div className='flex flex-col mb-5 sm:mb-0'>
                    <h1 className='font-semibold text-xl my-5'>LINKS</h1>
                    <Link to="/"><p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Home</p></Link>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Create</p>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>About</p>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Contact</p>
                </div>
                <div className='flex flex-col mb-4 sm:mb-0'>
                    <h1 className='font-semibold text-xl my-5'>GET IN TOUCH</h1>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Instagram</p>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Facebook</p>
                    <p className='text-gray-500 text-sm cursor-pointer hover:text-gray-700 leading-6'>Twitter</p>
                </div> 
            </div>
        </div>
        <hr className='text-gray-300' />
        <div className='text-center my-5 text-sm flex items-center justify-center'>
            <p className='w-2/3 sm:w-full'>Copyright 2024@ CodeSketch - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer