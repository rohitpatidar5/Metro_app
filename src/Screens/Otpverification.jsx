import React from 'react'
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Otpverification() {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r from-[#99C3AF]/70 to-[#FEF08A]/70 p-4">
      
    <Link to='/lang/number'>
    <IoArrowBack className='text-2xl my-4' />
    </Link>
     
    
     
      <div className="w-full h-[650px] max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4 relative">


      <h2 className="text-lg font-medium text-gray-800 text-center mb-4">Enter OTP</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          OTP sent to <span className="font-medium">+880 **********</span>{' '}
          <button className="text-green-500 text-sm underline ml-1">Edit</button>
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
          <input
            type="text"
            maxLength="1"
            className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
          />
        </div>
        <p className="text-sm text-gray-500 text-center mb-4">
          Resend OTP in <span className="font-medium">00:00 min</span>
        </p>

        <Link to='success'>
        <button className=" w-60 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full shadow-md transition absolute bottom-4 left-1/2 -translate-x-1/2">
          Verify
        </button>
        </Link>
       
      </div>

     
    </div>
  )
}

export default Otpverification





