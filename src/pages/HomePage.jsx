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
  <div className='luxy-el h-min-[100%]'>

  <HeroSection />
  <div className="h-screen bg-primary"></div>
  <div className="h-screen bg-accent"></div>
  </div>
  

  <hr />
</motion.div>

);
}

export default HomePage;