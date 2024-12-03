import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiSearchLine } from "react-icons/ri";

function HomePage() {
  return (
    <div className=" text-white min-h-screen ">
      {/* Header */}
      <div className="bg-green-900 flex flex-col px-4 py-3 pb-10">
        <div className="flex justify-between space-x-2 my-2 ">
          <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
          <GiHamburgerMenu />
          </div>
          <div className="bg-green-700 p-1 rounded-md">360 gm</div>
        </div>
        <div className='flex justify-between py-4'>
        <h1 className="text-lg font-semibold">Good Morning, Amir!</h1>
       
        <div className="flex items-center space-x-3">
          <span className="text-sm">27°C</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-4 -mt-6 ">
        <div className='flex rounded-lg border border-gray-500 bg-white'>
        <div className='text-black text-3xl p-2'><RiSearchLine /></div>
        <input
          type="text"
          placeholder="Plan your journey"
          className="w-full py-3 px-2 text-gray-800 rounded-lg border-none"
        />
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-4 mt-4 grid grid-cols-4 gap-3 ">
        <div>
        <div className="flex flex-col items-center bg-yellow-100 p-3 rounded-lg">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpADIP-lqiVqNS9ybvAnFJp3mMZT2FO1a09A&s" alt="" />
          </div>
          
        </div>
        <div className="text-sm text-gray-800 flex flex-col text-center "><span >My</span><span>Cards</span></div>

        </div>
        <div>
        <div className="flex flex-col items-center bg-purple-100      rounded-lg">
          
          <img src="https://img.freepik.com/free-vector/back-school-supply-calculator-icon-isolated_18591-84513.jpg?semt=ais_hybrid" alt="calulator" className='bg-transparent' />
        </div>
        <div className="text-sm text-gray-800 flex flex-col text-center "><span >Fare</span><span>Calculator</span></div>
        </div>
        <div>
        <div className="flex flex-col items-center bg-blue-100 p-3 rounded-lg">
         
         <div>
            <img src="https://png.pngtree.com/png-vector/20221013/ourmid/pngtree-calendar-icon-logo-2023-date-time-png-image_6310337.png" alt="" />
         </div>
       </div>
       <div className="text-sm text-gray-800 flex flex-col text-center "><span >Metro</span><span>Schedule</span></div>
        </div>
        <div>
        <div className="flex flex-col items-center bg-green-100 p-3 rounded-lg">
          
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWvtdvrc5uBlRkk_tgcoXCHr9_hxC7nNlqw&s" alt="" />
         </div>
        </div>
        <div className="text-sm text-gray-800 flex flex-col text-center "><span >Metro</span><span className='whitespace-nowrap overflow-auto scroll-smooth'>Netwok Map</span></div>
        </div>
      </div>

      {/* Metro Stations Section */}
      <div className="px-4 mt-6">
        <div className="bg-green-100 text-green-900 p-4 rounded-lg flex justify-between items-center">
          <span>Metro stations near you</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Recharge Section */}
      <div className="px-4 mt-4">
        <div className="bg-gray-100 text-gray-900 p-4 rounded-lg flex flex-col justify-between">
          <div className='flex '>
            <div>
            <h2 className="text-lg font-bold">Top-up your MRT/Rapid Card</h2>
            <p className="text-sm text-gray-600">
              Recharge instantly and keep your journeys seamless
            </p>
            </div>
            <div className='w-25 h-20'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpADIP-lqiVqNS9ybvAnFJp3mMZT2FO1a09A&s" alt="" />
            </div>
          </div>
          <button className="bg-green-600 text-white py-2 px-4 mt-2 w-[140px] rounded-full">
            Top up now
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0  w-full bg-white text-gray-700 flex justify-around py-2">
        <div className="text-center">
          
       <div className='text-3xl pl-1'><MdHomeFilled /></div>
          <span className="text-sm">Home</span>
        </div>
       
        <div className="text-center">
          <div className='text-3xl pl-3'><FaMapMarkedAlt /></div>
          <span className="text-sm">Stations</span>
        </div>
      </div>
    </div>
  )
}

export default HomePage