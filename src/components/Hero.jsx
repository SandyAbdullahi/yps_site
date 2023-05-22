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
<motion.section className="h-screen p-4">
  <div className="flex flex-col items-center justify-center h-96 object-cover">
  <video src="./YPS_BACKGROUND.webm" type="video/webm" poster="./YPS_BACKGROUND.gif" playsInline autoPlay loop muted className="rounded-xl h-96 object-cover -z-10 opacity-70 -mb-20">

      </video>
    <h1 className='relative -top-[15vh] text-primary text-4xl font-regular lg:text-9xl text-center font-bold'>&#8465;YARE <br /> PICTURE <br /> STUDIO&#174;</h1>
    <div className="flex relative items-center justify-between w-full -top-[12vh] px-5">
      <div className="rounded-full bg-white h-5 w-5"></div>
      <hr className="mx-2 w-full"/>

      <div className="rounded-full bg-primary h-5 w-5"></div>
      <hr className="mx-2 w-full"/>

      <div className="rounded-full bg-white h-5 w-5"></div>
    </div>


  </div>


</motion.section>
);
};

export default HeroSection;