import React from 'react'

function Navbar() {
  return (
    <div className='mx-auto flex flex-row justify-between py-4 px-24 '>
        {/* Left Side */}
        <div className='flex cursor-pointer'>
            {/* LOGO */}
            <div className='font-bold text-2xl'>
                <p>Show<span className='text-blue-500'>Me</span> |</p>
            </div>
            {/* Categories */}
            <div className='flex gap-4 py-1 px-2 '>
                <p>Concerts</p>
                <p>Sports</p>
                <p>Shows</p>

            </div>
        </div>
        {/* Right Side */}
        <div className='flex gap-4 '>
            <div className='py-1'>
            <p>Your Tickets</p>
            </div>
            
            <button className='border border-black rounded-xl px-3 py-1 hover:bg-black hover:text-white duration-300'>login</button>
        </div>
    </div>
  )
}

export default Navbar