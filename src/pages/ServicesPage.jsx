import React from 'react';
import { motion } from 'framer-motion';
import '../styles/marquee.css';


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
  return (
    <div>
    <div className="overflow-hidden w-full relative h-96 -mb-48">
      {/* 3. Using framer motion */}
      <motion.div
        className="track"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className='text-9xl m-20 uppercase'>what we do X what we do X what we do</h1>
      </motion.div>
    </div>
  </div>
  )
}



const ServicesPage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
       <header className="h-screen bg-vampire-black text-white py-10">

      <div className="container mx-auto">
      <ScrollingHeader />
        <p className="text-2xl p-5">
        At Yare Picture Studio, we are passionate about bringing your vision to life through high-quality film production. With our team of young and talented professionals, we provide innovative and creative solutions for your film projects. 
        </p>
      </div>
    </header>
       <header className="h-screen bg-gray-900 text-white py-10 bg-services bg-cover bg-[-80vw] bg-no-repeat">
       <div className="flex relative top-[60vh]">
       <img src="./ROUNDED_TEXT.png" alt="" className='h-[10rem] relative z-10'/>
       </div>

    </header>
    <section className='h-screen bg-vampire-black text-white'>
      <div className="p-10">
      <h2 className='text-6xl uppercase '>Services Worth Your Time &#174;</h2>
      </div>
      <div className="service-dropdowns">
        <div className="border-y-2 p-5">
          <h1 className='text-4xl'>DOCUMENTARY</h1>
        </div>
        <div className="border-y-2 p-5">
          <h1 className='text-4xl'>COMMERCIAL</h1>
        </div>
        <div className="border-y-2 p-5">
          <h1 className='text-4xl'>NARRATIVE</h1>
        </div>
        <div className="border-y-2 p-5">
          <h1 className='text-4xl'>PRODUCTION</h1>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default ServicesPage;
