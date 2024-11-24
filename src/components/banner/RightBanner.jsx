import React, { useEffect } from 'react'
import { circleShape, design } from "../../assets/index";
import AOS from 'aos'

const RightBanner = () => {
  
  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out-sine',
      delay: 500
    })
  },[]);

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <div data-aos="zoom-in" data-aos-delay="500"  className='relative w-[80%] flex justify-center items-center '>
          <img src={design} alt="Design image" className='w-[65%] animate-pulse pb-3 pr-3' />

          <img src={circleShape} alt="circle shape" className='absolute w-[90%] lg:rotateAnimation'/>
        </div>
    </div>
  );
}

export default RightBanner