import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const HeroSection = () => {

return (
<section className="h-screen pt-10">
  <div className="flex flex-col justify-center h-full px-10">
    <h1 className='text-primary text-7xl font-regular'>&#8465; WE MAKE FILM MAGIC</h1>
    <p className='text-primary font-light p-8'>Yare Picture Studio&#174;, dolor sit amet consectetur adipisicing elit. Corrupti aut impedit dolorem alias assumenda quos minus.</p>
    <div className="items-left w-[45vw]">
      <a href="" className='text-left leading-7 text-secondary font-light'>The Work We've Done  <hr className='border-secondary my-1'/></a>
     
    </div>
  </div>

</section>
);
};

export default HeroSection;