import {ReactDOM, useState} from 'react'
import data from '../data/data.json'

import Card from './Card'


function Dashboard() {
    const [events, setEvents] = useState(data);

    const filterType = (type) => {
        setEvents(
            data.filter( (event) => {
                return event.type === type;
            })
        )
    }

  return (
    <div className=' px-16 '>
        <h1 className='p-8 text-center font-bold text-4xl '>Events</h1>
        {/* Filter */}
        <div className='flex gap-4 mb-8'>
            <h2 className='font-semibold text-xl py-1'>Filter:</h2>

            <button onClick={() => setEvents(data)} 
            className='border border-black rounded-xl px-3 hover:bg-black hover:text-white duration-300'>all</button>
            <button onClick={() => filterType('concert')}
            className='border border-black rounded-xl px-3 hover:bg-black hover:text-white duration-300'>concerts</button>
            <button onClick={() => filterType('comedy')} 
            className='border border-black rounded-xl px-3 py-1 hover:bg-black hover:text-white duration-300'>comedy shows</button>
            <button onClick={() => filterType('event')} 
            className='border border-black rounded-xl px-3 py-1 hover:bg-black hover:text-white duration-300'>events</button>
        </div>

        {/* Event List */}
        <div className=' grid grid-cols-3'>

        {events.map( (event, index) => (
            <Card
            key={index}
            name={event.name}
            image={event.image}
            date={event.date}
            venue={event.venue}
            icon={event.typeIcon}
            />
        ) )}
        </div>
    </div>
  )
}

export default Dashboard