import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { BsLinkedin } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";


function ProfilePage({ isOpen, onClose }) {
  return (
    <div
    className={`fixed inset-0 bg-black bg-opacity-30 z-50 transform ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300`}
  >
    <div className="bg-white h-full w-[70%] max-w-md shadow-lg text-black ">
      <div className="p-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-black font-bold">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        {/* Profile Information */}
        <div className="flex space-x-4 my-4 -mx-1 border rounded-lg shadow-md py-1 border-slate-200">
          <img
            src="https://www.shutterstock.com/image-vector/passport-photo-young-handsome-redhead-260nw-754397068.jpg"
            alt="profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Amir Shaw</h3>
            <p className="text-sm text-gray-500">+088 0000000000</p>
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-1">
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>💾</span>
            <span className="ml-3">Saved Places</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>🌐</span>
            <span className="ml-3">Language</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>📖</span>
            <span className="ml-3">User Guide</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>🛠️</span>
            <span className="ml-3">Help and Support</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>🔒</span>
            <span className="ml-3">Privacy Policy</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>📜</span>
            <span className="ml-3">Terms and Conditions</span>
          </button>
          <button className="flex items-center w-full text-left py-2 px-4 hover:bg-gray-100 rounded-lg shadow-md">
            <span>⚙️</span>
            <span className="ml-3">Account Settings</span>
          </button>
        </div>

        {/* Footer */}
        <div className='text-3xl mt-[240px] flex gap-4 justify-center max-w-full border rounded-lg -mx-1 py-2  shadow-md'>
        <div><FaFacebook /></div>
       <div> <PiInstagramLogoFill /></div>
        <div><BsLinkedin /></div>
        <div><RiTwitterXFill /></div>

            
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfilePage