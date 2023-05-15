import React from 'react';
import { motion } from 'framer-motion';


const AboutPage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <header className="relative w-full bg-about  bg-no-repeat bg-[-80vw] bg-cover lg:bg-center h-[80vh]">
      <div className="absolute inset-0 opacity-50 bg-black"></div>
      <div className="flex items-end justify-end h-full opacity-100">
        <div className="p-8 relative z-10">
          <div className="flex items-center">
          <div className='bg-secondary h-10 w-5 m-5'></div> 
          <h1 className="text-8xl font-bold text-white">About Us</h1>
          </div>
          <p className="text-lg text-white">Learn more about our company and our mission</p>
        </div>
      </div>
    </header>
    </motion.div>
  );
};

export default AboutPage;
