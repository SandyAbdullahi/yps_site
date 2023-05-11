import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2, delay: 0.5 },
  };

  return (
    <section className="h-[60vh]">
      <div className="h-full fixed -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="./Picture13.png"  
          backgroundColor="white"
        >
          <source src="./YPS_BACKGROUND.webm" type="video/webm" />
          {/* Add additional source tags for different video formats if needed */}
        </video>

        <div className='absolute inset-0 h-[60vh]'>
           <div className="bg-gradient-to-b from-secondary to-transparent opacity-50 absolute inset-0"></div>
           <div className='bottom-3 absolute right-3 text-right pl-5'>
          <h1 className='text-primary font-bold text-7xl '>There Will Be Some</h1>
          <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            
           </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
