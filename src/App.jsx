import { useState } from 'react'
import SplashScreen from './Screens/SplashScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WelcomeScreen from './Screens/WelcomeScreen'
import LanguageScreen from './Screens/LanguageScreen'
import NumberScreen from './Screens/NumberScreen'
import Otpverification from './Screens/Otpverification'
import SuccessScreen from './Screens/SuccessScreen'
import HomePage from './Pages/HomePage'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SplashScreen/>}/>
      <Route path='/wel' element={<WelcomeScreen/>}/>
      <Route path='/lang' element={<LanguageScreen/>}/>
      <Route path='/lang/number' element={<NumberScreen/>}/>
      <Route path='/lang/number/otp' element={<Otpverification/>}/>
      <Route path='/lang/number/otp/success' element={<SuccessScreen/>}/>
      <Route path='/homepage' element={<HomePage/>}/>

      
    

     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
