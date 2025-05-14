

import React from 'react'
import { useLocation } from 'react-router'

function PaymentSuccess() {

    const query = new URLSearchParams(useLocation().search);
    const referenceId = query.get("reference");
  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
        <div className='flex flex-col items-center justify-center border border-gray-100 shadow-md rounded-lg p-7  gap-5'>
            <h1 className='text-green-600 font-semibold text-2xl'>Payment Successful</h1>

            <p>Successfull ! thank you for your pay</p>

            <div className='bg-gray-100 rounded w-full p-1 px-2'>
                <p className='text-center'>Reference Id: {referenceId}</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentSuccess