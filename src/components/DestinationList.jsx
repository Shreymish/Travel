import React from 'react'
import Destination from './Destination'
import { traveldata } from '../data/data'

const DestinationList = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    Explore Amazing Destinations
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Discover incredible places across India, from historical monuments to pristine beaches, 
                    mountain adventures to cultural experiences.
                </p>
            </div>

            {/* Destinations Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {traveldata.map((destination) => (
                    <Destination 
                        key={destination.id} 
                        destination={destination} 
                    />
                ))}
            </div>
        </div>
    )
}

export default DestinationList