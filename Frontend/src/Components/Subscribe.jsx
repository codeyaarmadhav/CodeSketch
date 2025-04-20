import React, { useState } from 'react'

function Subscribe() {
  const [input, setInput] = useState('');

  return (
    <div className='flex flex-col items-center justify-between gap-1 sm:gap-4 my-20'>
        <h1 className='text-lg sm:text-2xl font-[500]'>Subscribe now & get early features</h1>

        <p className='text-gray-400 text-sm sm:text-base text-center mb-3 sm:mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className='flex w-7/8 md:w-1/2 '>
            <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='border border-gray-200 p-2 sm:p-3 w-3/4 rounded-0 text-sm sm:text-base' placeholder='Enter your email' />
            <div onClick={() => setInput("")} className='bg-black text-white flex items-center justify-center w-3/8 sm:w-1/4 cursor-pointer text-sm sm:text-base' ><p className='text-xs'>SUBSCRIBE</p></div>
        </div>
    </div>
  )
}

export default Subscribe