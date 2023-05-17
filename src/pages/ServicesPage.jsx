import React from 'react';
import { motion } from 'framer-motion';
import '../styles/marquee.css';
import { ServicesAccordion } from '../components';


const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      }, 
  },
}
};



const ScrollingHeader = () => {

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
    <div className="overflow-hidden w-full relative h-96 -mb-36">
      {/* 3. Using framer motion */}
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className='text-9xl m-20 uppercase'>what we do &#9900; what we do &#9900; what we do &#9900; what we do &#9900;</h1>
      </motion.div>
    </div>
  </motion.div>
  )
}



const ServicesPage = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
       <header className="h-screen bg-vampire-black text-white py-10">

      <div className="container mx-auto">
      <ScrollingHeader />
        <p className="text-[1.8rem] p-5">
        At Yare Picture Studio, we are passionate about bringing your vision to life through high-quality film production. With our team of young and talented professionals, we provide innovative and creative solutions for your film projects. 
        </p>
      </div>
    </header>
       <header className="h-screen bg-gray-900 text-white py-10 bg-services bg-cover bg-[-80vw] bg-no-repeat">
       <div className="flex relative top-[60vh]">
       <img src="./ROUNDED_TEXT.png" alt="" className='h-[10rem] relative z-10'/>
       </div>

    </header>
    <div className="">
    <ServicesAccordion />
    </div>
    <hr />
    </motion.div>
  );
};

export default ServicesPage;
