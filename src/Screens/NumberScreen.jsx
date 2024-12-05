// src/components/MobileNumberInputPage.jsx
import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function NumberScreen() {
  return (
    <div className=" min-h-screen flex flex-col bg-gradient-to-r from-[#99C3AF]/70 to-[#FEF08A]/70 p-4">
      <div className='flex justify-between'>
     <Link to='/lang'>
     <IoArrowBack className='text-2xl my-4' />
     </Link>
     <Link to='/homepage'>
     <button className=" text-sm mt-4 text-green-600 font-medium">
        Continue as a Guest
      </button>
     </Link>
    
     </div>
      <div className="w-full h-[650px] max-w-md bg-white rounded-2xl p-6 space-y-4 my-">
        <h1 className="text-xl font-semibold text-gray-800 ">Enter mobile number</h1>
        <p className="text-sm text-gray-500 ">You will receive OTP</p>

        <div className="flex items-center border rounded-lg overflow-hidden">
          <div className="px-3 py-2 bg-gray-100 border-r flex items-center">
            <img
              src="https://flagcdn.com/w40/bd.png"
              alt="Bangladesh Flag"
              className="h-5 w-5"
            />
            <span className="ml-2 text-gray-600 text-sm">+880</span>
          </div>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="flex-grow px-4 py-2 focus:outline-none text-sm"
          />
        </div>
        <div>
        <Link to='otp'>
        <button className="w-full py-2 bg-green-700 text-white font-semibold rounded-full hover:bg-green-600">
          Get OTP
        </button>
        </Link>
        </div>
        <div className="flex items-center space-x-2 py-3">
          <hr className="flex-grow border-gray-300" />
          <span className="text-sm text-gray-400">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 border rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="Google"
              className="h-5 w-5 "
            />
            <span className="text-sm text-gray-700 font-medium">Continue with Google</span>
          </button>
          <button className="w-full py-3 border rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700 font-medium">Continue with Facebook</span>
          </button>
          <button className="w-full py-3 border rounded-full flex items-center justify-center space-x-2 hover:bg-gray-50">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="h-5 w-5"
            />
            <span className="text-sm text-gray-700 font-medium">Continue with Apple</span>
          </button>
        </div>
        {/* <div className='h-40'>

        </div> */}
      </div>

     
    </div>
  );
};

export default NumberScreen;
