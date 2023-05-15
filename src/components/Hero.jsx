import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {

return (
<section className="h-[60vh] lg:h-[80vh]">



  <div className="h-full">
    <video className='w-full h-[80vh] object-cover hidden' src="./YPS_BACKGROUND.webm" autoPlay={true} loop={true} muted={true} playsInline={true}></video>
  
    
    <img className="w-full h-full object-cover lg:hidden"   src="./YPS_BACKGROUND.gif" alt="" />
   
  
    <div className="bg-gradient-to-b from-secondary to-transparent opacity-50 absolute inset-0 h-[60vh]"></div>

      <div className="absolute inset-0 h-[60vh] lg:h-[80vh]">
        <div className="bottom-3 absolute right-3 text-right pl-5">
          <h1 className="text-primary font-bold text-7xl">There Will Be Some</h1>
          <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    </div>


</section>
);
};

export default HeroSection;