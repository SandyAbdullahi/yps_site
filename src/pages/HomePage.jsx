import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

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

  <hr />
</motion.div>

);
}

export default HomePage;