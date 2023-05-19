import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { HeroSection, VelocityScrollAnimation } from '../components';


const HomePage = () => {



return (
<motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{
   type: "spring",
   stiffness: 260,
   damping: 20,
 }}

>
 

  <HeroSection />
  <div className="flex -mt-2">
  <video className='object-fit' src="./YPS_BACKGROUND.webm" autoPlay={true} playsInline={true} muted={true} loop={true}></video>
  </div>
<div className="flex items-center justify-center my-10">
<h2 className='text-center text-primary font-light w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus qui commodi dolorum suscipit</h2>
</div>
  <section className='h-screen mt-52'>
    <div className="text-primary ">

    <h1 className='text-7xl w-80 px-10'>We Bring To Life Visions</h1>
    <p className='px-10 text-[0.9rem] font-light mt-20'>Collaborations that create masterpieaces.</p>

    </div>
  </section>
  

  <hr />
</motion.div>

);
}

export default HomePage;