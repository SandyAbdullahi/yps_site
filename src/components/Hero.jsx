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
      <div className="h-[60vh]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="./Picture13.png"  
        >
          <source src="./YPS_BACKGROUND.webm" type="video/webm" />
          {/* Add additional source tags for different video formats if needed */}
        </video>

           <div className="bg-gradient-to-b from-secondary to-transparent opacity-50 absolute inset-0 h-[60vh]">
            
           </div>
        <div className='absolute text-right right-5 bottom-0 z-10 h-[60vh]'>
          <h1 className='text-primary text-6xl'>Text</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
