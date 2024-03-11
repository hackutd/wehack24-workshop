import React from 'react'

function Card(props) {
  return (
    <div className='my-4'>
        <div className='h-[200px] w-[400px] overflow-hidden rounded-lg shadow-xl my-4'>

        <img src={props.image} alt={props.name} 
        className='h-full w-full object-cover bg-blue-500 hover:scale-110 duration-300'/>
        </div>
        <h1 className='font-bold  text-xl'>{props.name}</h1>
        <div className='flex justify-between w-[350px]'>

        <div className='flex '>

        <h2 className='text-lg text-gray-600'>{props.date} |</h2>
        <h2 className='text-lg text-gray-400 px-1'>{props.venue}</h2>
        </div>
        <img src={props.icon} alt="" className='w-[20px] h-[20px] '/>
        </div>
        <h2 className='text-lg text-red-500 text-center'>

            

        </h2>

    </div>
  )
}

export default Card