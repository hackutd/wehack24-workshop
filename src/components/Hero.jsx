import React from 'react'

function Hero() {
  return (
    <div className='py-4 px-4 '>
        <div className='relative  h-[500px]'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 text-gray-200'>
                {/* Hook Text */}
                <div className='text-center my-48 p-2'>

                <h1 className='font-bold text-6xl'>Live in the Moment</h1>
                <p className='text-xl'>Your next night to remember.</p>
                <p className='text-xl'>Find tickets with us.</p>
                </div>

            </div>
        <img src="https://images.pexels.com/photos/1763067/pexels-photo-1763067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
        className='object-cover w-full h-full' />

        </div>
        
    </div>
  )
}

export default Hero