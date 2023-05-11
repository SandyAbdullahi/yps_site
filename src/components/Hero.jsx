import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const textAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2, delay: 0.5 },
  };

  return (
    <section className="h-full flex">
      <div className="absolute h-[80vh]">
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

           <div className="bg-gradient-to-b from-secondary to-transparent opacity-50 absolute inset-0"></div>
      <motion.div
        className="absolute bottom-0 right-3 z-10 text-white text-right  pl-6 pb-6"
     
      >
        <motion.h1 className="text-6xl sm:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl font-bold mb-6 text-primary"
         initial = {{ y: 100, opacity: 0 }}
         animate = {{ y: 0, opacity: 1 }}
         transition={{duration: 1, delay: 0}}
        >
          Unleash Your <br /> Film Dreams
        </motion.h1>
        <motion.p className="text-md sm:text-xl lg:text-2xl  xl:text-4xl 2xl:text-5xl"
            initial = {{ y: 100, opacity: 0 }}
            animate = {{ y: 0, opacity: 1 }}
            transition={{duration: 1, delay: 0.5}}
        >
          Experience the Power of Visual Storytelling
        </motion.p>
      </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
