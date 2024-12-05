import React from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../assets/image4.jpg'

function WelcomeScreen3() {
  return (
    
        <div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
          <div className="w-full h-screen bg-cover"  style={{ backgroundImage: `url(${backgroundImage})` }} >
            <div className='absolute left-1/2 transform -translate-x-1/2 text-center bottom-10'>
            <h2 className="text-2xl font-semibold mb-2 text-white">Don't Miss Out on Any Updates</h2>
            <p className="text-gray-400 mb-14">
              Get notified for any new metro updates, alerts and news.
            </p>
            <Link to="/lang">
            <button className="bg-green-600 text-white py-2 px-6 rounded-full w-[300px]">Let's get started</button>
            </Link>
          </div>
          </div>
          
        </div>
    
  )
}

export default WelcomeScreen3