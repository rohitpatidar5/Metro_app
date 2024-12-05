import React from 'react'
import { useNavigate } from 'react-router-dom'

function SuccessScreen() {

  const navigate =useNavigate();
  const handleClick = () =>{
    navigate('/homepage')
  }
  return (
    <div onClick={handleClick} className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-600 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-lg font-semibold">Profile successfully created</h1>
        <p className="text-2xl font-bold text-gray-800 mt-2">Welcome!</p>
      </div>
    </div>
  )
}

export default SuccessScreen