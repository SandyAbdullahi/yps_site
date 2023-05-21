import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "../utils";


const HeroSection = (props) => {
  const placeholderText = [
    { type: "heading1", text: `WE MAKE FILM MAGIC`  },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

return (
<motion.section className="h-full my-14 pt-20">
  <div className="flex flex-col justify-center h-full px-10 lg:h-screen">
    <h1 className='text-primary text-7xl font-regular lg:text-9xl'>&#8465; WE MAKE FILM MAGIC</h1>
    {/* <motion.div
      
      initial="hidden"
      // animate="visible"
      animate="visible"
      variants={container}
    >

        {placeholderText.map((item, index) => {
          return (
              <h1 className="text-primary text-7xl font-regular">&#8465; <AnimatedText {...item} key={index} /></h1>
          ) 
        })}
    
   
    </motion.div>
  */}
    <p className='text-primary font-light my-8 p-4 text-lg'>Yare Picture Studio&#174;, Unleash your imagination with the creative powerhouse.</p>
    <div className="items-left w-[45vw]">
      <a href="/services" className='text-left leading-7 text-secondary font-light hover:text-white'>The Work We've Done  <hr className='border-secondary my-1'/></a>
     
    </div>
  </div>


</motion.section>
);
};

export default HeroSection;