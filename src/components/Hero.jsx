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
  <div className="flex flex-col items-center justify-center h-full object-cover">
  <video src="./YPS_BACKGROUND.webm" type="video/webm" poster="./YPS_BACKGROUND.gif" playsInline autoPlay loop muted className="rounded-xl h-full object-cover -z-10 opacity-70 ">

      </video>
<div className="w-full relative -top-[25vh]">
<h1 className='relative  text-primary text-4xl font-regular lg:text-9xl text-center font-bold'>YPS&#174; <br /> AMAZING <br /> MOTIONS</h1>
    <div className="flex relative items-center justify-between w-full px-5">
      <div className="rounded-full bg-white h-2 w-5"></div>
      <hr className="mx-2 w-full opacity-30"/>

      <div className="rounded-full bg-primary h-2 w-5"></div>
      <hr className="mx-2 w-full opacity-30"/>

      <div className="rounded-full bg-white h-2 w-5"></div>
    </div>
</div>
<div className="flex-col">
<p className="text-primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos totam, vero sit, reiciendis doloribus, tenetur sequi ipsam illo ipsa praesentium fugiat modi debitis harum! Dolore veritatis minus tempore maiores?</p>
</div>

  </div>


</motion.section>
);
};

export default HeroSection;