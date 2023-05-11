import React, { useEffect, useRef }from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    // After the component mounts, update the video source
    videoRef.current.src = './YPS_BACKGROUND.webm';
  }, []);


  return (
    <section className="h-[60vh]">
      <div className="h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover absolute -z-10"
          autoPlay
          loop
          muted
          playsInline
          // poster="./Picture13.png"  
        
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
