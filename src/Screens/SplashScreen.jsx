import React from 'react'
import backgroundImage from '../assets/front.jpg'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

function SplashScreen() {

    const navigate =useNavigate();
    const handleClick = () =>{
        navigate('/wel')
      }
  return (
   

 <div onClick={handleClick}>
    <div className="min-w-screen min-h-screen bg-white flex flex-col items-center justify-center ">
    <img src={logo} alt="Logo" className="w-40 h-40 mb-5  " />
    <img src={backgroundImage} alt="Train" className="w-full h-75 mb-[-198px] " />
    
  </div>
  </div>
  )
}

export default SplashScreen