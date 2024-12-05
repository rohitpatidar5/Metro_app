import React from 'react'
import backgroundImage from '../assets/image3.jpg'
import { Link } from 'react-router-dom'

function WelcomScreen2() {
  return (
    <div>
        <div className="min-w-screen min-h-screen bg-white flex flex-col justify-between">
        
        <div className="w-full h-screen bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }} >
          
          <div className='absolute left-1/2 transform -translate-x-1/2 text-center bottom-10'>
            <h2 className="text-2xl font-semibold mb-2 text-white ">Plan <br /> your Journey</h2>
            <p className="text-gray-400 w-[300px] mb-14">
              Routes, Maps, Schedules, Fares and Timings — All at Your Fingertips.
            </p>
            <Link to="/lang">
            <button className="bg-green-600 text-white py-2 px-6 rounded-full w-[300px]">Let's get started</button>
            </Link>
          </div>
          
          </div>
        </div>
    </div>
  )
}

export default WelcomScreen2