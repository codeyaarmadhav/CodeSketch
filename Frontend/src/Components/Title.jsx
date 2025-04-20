import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='inline-flex gap-2 items-center my-4 sm:mb-7  sm:mt-8 text-2xl sm:text-3xl '>
        <p className='text-gray-500'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-500'></p>
    </div>
  )
}

export default Title