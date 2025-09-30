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

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {traveldata.map((destination) => (
                    <Destination 
                        key={destination.id} 
                        destination={destination} 
                    />
                ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-2">{traveldata.length}+</h3>
                        <p className="text-blue-100">Amazing Destinations</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-2">
                            {new Set(traveldata.map(d => d.state)).size}+
                        </h3>
                        <p className="text-blue-100">States Covered</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold mb-2">
                            {new Set(traveldata.map(d => d.category)).size}+
                        </h3>
                        <p className="text-blue-100">Categories</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationList