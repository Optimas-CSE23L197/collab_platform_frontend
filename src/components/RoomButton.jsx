import React from 'react'

function RoomButton({ title }) {
    return (
        <div>
            <button className='px-5 py-2 bg-indigo-500 text-white rounded-2xl shadow-2xl hover:bg-indigo-600 transition duration-300 ease-in-out'>
                {title}
            </button>
        </div>
    )
}

export default RoomButton