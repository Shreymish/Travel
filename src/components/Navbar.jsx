import React from 'react'

const Navbar = () => {
    return (
        <div className="bg-blue-800 text-white">
            <div className='container mx-auto p-4 flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Travel App</h1>
                <nav>
                    <ul className='flex space-x-4'>
                        <li className='text-lg'>Home</li>
                        <li className='text-lg'>Destinations</li>
                        <li className='text-lg'>Bookings</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
