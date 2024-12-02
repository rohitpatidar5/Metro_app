import React from 'react'
import backgroundImage from '../assets/image2.jpg'
function WelcomeScreen1() {
  return (
    
         <div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
           
          <div className="w-full h-screen bg-cover  "  style={{ backgroundImage: `url(${backgroundImage})` }}  > 
            <div className='absolute left-1/2 transform -translate-x-1/2 text-center bottom-10'>
            <h2 className="text-2xl font-semibold mb-2 text-white">Welcome to the Dhaka Metro App!
            </h2>
            <p className="text-gray-500 mb-10">
              Travelling via the Dhaka Metro has never been easier.
            </p>
            <button className="bg-green-600 text-white py-2 px-6 rounded-full w-[300px]">Let's get started</button>
            </div>
          </div>
    </div>
  )
}

export default WelcomeScreen1