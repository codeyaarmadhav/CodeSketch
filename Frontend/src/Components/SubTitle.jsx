import React from 'react'

function SubTitle({text1}) {
  return (
    <div>
        <div className='inline-flex gap-2 items-center mb-4 text-md sm:text-xl leading-2 '>
            <p className='w-6 sm:w-10 h-[1px] sm:h-[2px] bg-gray-500'></p>
            <p className='text-gray-700'>{text1}</p>
        </div>
    </div>
  )
    
    
}

export default SubTitle