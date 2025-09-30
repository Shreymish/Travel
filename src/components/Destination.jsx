import React from 'react'

const Destination = ({ destination }) => {
        
    // props-properties
    const { name, state,description, image, rating, price, category, bestTimeToVisit, link } = destination

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm mx-auto">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    src={image} 
                    alt={name}
                    onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
                    }}
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full px-2 py-1 text-sm font-semibold text-gray-800">
                    ⭐ {rating}
                </div>
                <div className="absolute top-3 left-3 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-medium">
                    {category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-3">
                {/* Title and State */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
                    <p className="text-sm text-gray-600 flex items-center">
                        <span className="mr-1">📍</span>
                        {state}
                    </p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Price and Best Time */}
                <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-1">💰</span>
                        <span className="font-semibold text-green-600">{price}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-gray-600 mr-1">🗓️</span>
                        <span className="text-gray-600 text-xs">{bestTimeToVisit}</span>
                    </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm"
                    >
                        <span className="mr-2">🔗</span>
                        Visit Official Site
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Destination
