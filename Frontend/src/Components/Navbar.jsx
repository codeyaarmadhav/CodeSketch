import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { Link, NavLink } from 'react-router';

function Navbar() {
    let [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between py-5 font-medium mb-2'>
        <Link to="/"><img className='w-24 sm:w-30 ' src={assets.newlogo} alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'> 

            <NavLink to="/" className="flex flex-col group items-center gap-1 pt-2">
                <p>HOME</p>
                <hr className='w-2/4 group-hover:w-3/4 border-none h-[2px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/create" className="flex flex-col items-center gap-1 pt-2">
                <p>CREATE</p>
                <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/about" className="flex flex-col items-center gap-1 pt-2">
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[2px] bg-gray-700 hidden' />
            </NavLink>

            <NavLink to="/contact" className="flex flex-col items-center gap-1 pt-2">
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[2px] bg-[#4856fa] hidden' />
            </NavLink>

        </ul>

        <div className='flex items-center gap-6 '>
            <img  className='w-5 cursor-pointer' src={assets.search_icon} alt="" />

            <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

                <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='hover:text-black cursor-pointer'>My Profile</p>
                        <p className='hover:text-black cursor-pointer'>Projects</p>
                        <p className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>

            <img onClick={() => setVisible(true)} className='sm:hidden w-5 cursor-pointer' src={assets.menu_icon} alt="" />
        </div>

        {/* Mobile Menu */}
        <div className={`absolute right-0 bottom-0 top-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Menu</p>
                </div>

                <NavLink onClick={() => setVisible(flase)} className='pl-6 py-2 border' to="/">HOME</NavLink>
                <NavLink onClick={() => setVisible(flase)} className='pl-6 py-2 border' to="/create">CREATE</NavLink>
                <NavLink onClick={() => setVisible(flase)} className='pl-6 py-2 border' to="/about">ABOUT</NavLink>
                <NavLink onClick={() => setVisible(flase)} className='pl-6 py-2 border' to="/contact">CONTACT</NavLink>

            </div>
        </div>
    </div>
  )
}

export default Navbar