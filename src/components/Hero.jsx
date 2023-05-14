import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {

return (
<section className="fiexed top-0 -z-50 h-[60vh]">



  <div className="h-full">
    
  
    
    <img className="absolute top-0 -z-50 h-full  lg:h-[70vh] w-full object-cover"   src="./YPS_BACKGROUND.gif" alt="" />
   
  
    <div className="bg-gradient-to-b from-secondary to-transparent opacity-50 absolute inset-0 h-[80vh]"></div>
    <div className="videoBG">
      <div className="absolute inset-0 h-[70vh] lg:h-[65vh]">
        <div className="bottom-3 absolute right-3 text-right pl-5">
          <h1 className="text-primary font-bold text-7xl">There Will Be Some</h1>
          <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

    </div>
  </div>

</section>
);
};

export default HeroSection;