import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {

return (
<section className="h-[60vh] lg:h-[80vh]">



  <div className="h-full">
    <video className='w-full h-[80vh] lg:object-cover hidden lg:block' src="./YPS_BACKGROUND.webm" autoPlay={true} loop={true} muted={true} playsInline={true}></video>
  
    
    <img className="w-full h-full object-cover lg:hidden"   src="./YPS_BACKGROUND.gif" alt="" />
   
  
    <div className="bg-gradient-to-b from-secondary to-vampire-black opacity-50 absolute inset-0 h-[60vh] lg:h-[80vh]"></div>

      <div className="absolute inset-0 h-[60vh] lg:h-[80vh] z-20">
        <div className="bottom-3 absolute right-3 text-right pl-5 max-w-4xl">
          <motion.h1 className="text-primary font-bold text-7xl xl:text-9xl"
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 1,
          }}
          >There Will Be Some</motion.h1>
          <motion.p className="text-white lg:text-3xl"
            initial={{
              y: 50,
              opacity: 0
            }}
            animate={{
              y: 0,
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</motion.p>
        </div>
      </div>

    </div>


</section>
);
};

export default HeroSection;