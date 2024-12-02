import React from 'react'
import { IoArrowBack } from "react-icons/io5";

function NumberScreen() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col    bg-gradient-to-r from-[#99C3AF] from-opacity-90 to-[#FEF08A] to-opacity-80">
     <div className='flex justify-between'>
     <IoArrowBack className='text-2xl mt-6 ml-6' />
      <p className='mt-5 mr-4'>continue as a guest </p>
    
     </div>
    <div className=' rounded-xl m-4 bg-white p-4 '>
  <h1 className="text-3xl font-bold mb-8"> Enter mobile number</h1>
  <p className=''>You will receive OTP</p>
  <input type="tel" placeholder='Enter Mobile Number' className='p-2 border border-black rounded-md w-full'/>
  <button className="bg-green-500 text-white py-2 px-4 rounded-2xl w-[250px] ml-6 mt-5">Get OTP</button>


  </div>
</div>
  )
}

export default NumberScreen