import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen bg-lime-200'>
        <div className='shadow-lg p-8 bg-zinc-300 flex flex-col gap-2 my-6 rounded-lg'>
            <div>
                Name: <span className='font-bold'>Prakash Timilsina</span>
            </div>
            <div>
                Email: <span className='font-bold'>prakashexample@gmail.com</span>
            </div>
            <button className='bg-blue-400 text-black font-bold px-6 py-2 mt-3 rounded-lg cursor-pointer'>Log Out</button>
        </div>
    </div>
  )
}

export default UserInfo