import React, { useState } from 'react'

import '../index.css'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='flex items-center justify-center h-[70vh]'>
        <div className='flex flex-col gap-7 w-full sm:w-2/5'>
            <div className='flex items-center justify-center gap-2 text-3xl'>
                <p className='prata-regular'>Login</p>
                <p className='bg-black h-[2px] w-10'></p>
            </div>

            <div className='flex flex-col gap-3 w-full'>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className='border p-2' type="text" placeholder='Email' />

                <input onChange={(e) => setPassword(e.target.value)} value={password} className='border p-2' type="text" placeholder='Password' />

                <div className='flex items-center justify-between'>
                    <p>Forgot Password?</p>
                    <p>Create Account</p>
                </div>
            </div>

            <button className='bg-black text-white p-2'>Sign In</button>
        </div>
    </div>
  )
}

export default Login