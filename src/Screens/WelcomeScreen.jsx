import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css/pagination';
import 'swiper/css';               
import 'swiper/css/navigation';
import WelcomeScreen1 from './WelcomeScreen1';
import WelcomScreen2 from './WelcomScreen2';
import WelcomeScreen3 from './WelcomeScreen3';
import { Pagination } from 'swiper/modules';

function WelcomeScreen() {
  return (
    <>

<div>
         <div className="relative w-screen h-screen bg-gray-100  " >
         <Swiper
          pagination={true} modules={[Pagination]}
        spaceBetween={0}            
        slidesPerView={1}               
        className="h-full "
        
      >
        
         
        <SwiperSlide>
          <WelcomeScreen1/> 
        </SwiperSlide>
        <SwiperSlide>
          <WelcomScreen2 />   
        </SwiperSlide>
        <SwiperSlide>
          <WelcomeScreen3 />   
        </SwiperSlide>
        
      </Swiper>
            </div>
  
</div>











<div>
         <div className=" bg-white flex items-center justify-center  " >
         <Swiper
        spaceBetween={0}         
        slidesPerView={1}            
        className="h-full"
      >
       
        
      </Swiper>
            </div>
  
</div>
    </>
  )
}

export default WelcomeScreen