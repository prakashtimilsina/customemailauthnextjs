import Link from 'next/link';
import React from 'react'

const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-pink-200'>
            <h1 className='text-xl font-bold my-4'>Login</h1>
            <form className='flex flex-col gap-4'>
                <input type='text' placeholder='Email' />
                <input type='password' placeholder='password' />
                <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-lg' type='submit'>Login</button>

                <div className='bg-red-400 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>
                    Error Message
                </div>
                <Link className='text-sm mt-2 text-right' href='/register'>
                    Don't have an account? <span className='underline'>
                        Register
                    </span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default LoginForm;