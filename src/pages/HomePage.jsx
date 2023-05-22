import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

import { HeroSection, VelocityScrollAnimation, Partners } from '../components';


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
 
<div className="flex items-center justify-center my-10">
<h2 className='text-2xl text-center text-primary font-light px-8 uppercase'>Experience the epitome <br /> of quality in our productions.</h2>
</div>
  <section className='h-full mt-52 text-primary '>

    <h1 className='text-7xl w-80 px-10'>We Bring To Life Visions</h1>
    <p className='px-10 text-[1.5rem] font-light mt-20'>Collaborations that create masterpieaces.</p>

    <div className="p-10">
      <h2 className='text-4xl'>World Class production quality and a unique attention to detail</h2>
    </div>
    <div className="px-10 pb-10">
      <p className='text-lg'>
At Yare Picture Studio&#174;, our mission is to deliver quality storytelling that captivates audiences. We are dedicated to crafting narratives that resonate, inspire, and leave a lasting impact. Through our commitment to excellence, we strive to push creative boundaries and bring forth compelling stories that transcend boundaries.</p>
    </div>

  </section>

<div className="my-10 overflow-hidden">
  <div className="p-10">
    <h3 className='text-primary'>OUR AMAZING PARTNERS</h3>
  </div>
<Partners />
</div>

<section className='my-10 h-full overflow-hidden'>
  <div className="text-primary w-full p-10">
    <h2 className='uppercase text-4xl'>Some Of Our Features</h2>
    <div className="items-left w-[45vw] mt-10">
      <a href="/features" className='text-left leading-7 text-secondary font-light hover:text-white'>The Work We've Done  <hr className='border-secondary my-1'/></a>
     
    </div>
  </div>
<div className="row mb-20">
<div className="flex">
 <img src="./cards/comm.png" alt="" className='p-10 object-fit'/>

 </div>
 <p className='text-primary px-10'>Feature One</p>
</div>
<div className="row mb-20">
<div className="flex">
 <img src="./cards/docu.png" alt="" className='p-10 object-fit'/>

 </div>
 <p className='text-primary px-10'>Feature two</p>
</div>
<div className="row mb-20">
<div className="flex">
 <img src="./cards/narr.png" alt="" className='p-10 object-fit'/>

 </div>
 <p className='text-primary px-10'>Feature three</p>
</div>
</section>
<hr />
</motion.div>

);
}

export default HomePage;