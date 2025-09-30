import React from 'react'
import Navbar from './components/Navbar'
import DestinationList from './components/DestinationList'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <DestinationList />
    </div>
  )
}

export default App
