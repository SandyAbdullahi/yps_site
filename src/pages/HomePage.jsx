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
 
<h2 className='text-lg text-primary font-light px-8 uppercase'>Experience the epitome <br /> of quality in our productions.</h2>
<div className="flex px-4 h-96 my-10">
<video src="./safaricom_mfa (1080p).webm" type="video/webm" poster='./safaricom_mfa (1080p).gif' playsInline autoPlay loop muted className="rounded-xl h-full object-cover -z-10 opacity-60 ">

</video>
</div>
  <section className='h-full text-primary '>
 <div className="h-full border-[1px] m-4 flex flex-col items-center justify-center rounded-xl p-16">
 <h1 className='text-2xl w-80 px-10 font-bold text-center uppercase leading-none'>We Bring To Life Visions</h1>
 <p className='m-5 text-center'>YARE PICTURE STUDIO</p>
 <div className="items-center justify-center flex w-[45vw] mt-10">
      <a href="/services" className='leading-7 text-secondary font-light hover:text-white'>What we do  <hr className='border-secondary my-1'/></a>
     
    </div>
 </div>
 <div className="flex px-4 h-96 my-10">
<video src="./im_premium_banking (1080p).webm" type="video/webm" poster='./im_premium_banking (1080p).gif' playsInline autoPlay loop muted className="rounded-xl h-full object-cover -z-10 opacity-60 ">

</video>
</div>
<div className="px-4"> 
<div className="border-[1px] rounded-xl px-2">
<VelocityScrollAnimation />
</div>
</div>

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
<div className="row ">
<div className="flex flex-col p-10 h-96">
 <img src="./cards/comm.png" alt="" className='object-cover object-center h-full w-full rounded-xl opacity-60'/>
 <p className='text-white font-bold relative -top-[10vh] px-10'>Feature One</p>

 </div>
</div>
<div className="row">
<div className="flex flex-col p-10 h-96">
 <img src="./cards/docu.png" alt="" className='object-cover object-center h-full w-full rounded-xl opacity-60'/>
 <p className='text-white font-bold relative -top-[10vh] px-10'>Feature Two</p>

 </div>
</div>
<div className="row mb-20">
<div className="flex flex-col p-10 h-96">
 <img src="./cards/film.png" alt="" className='object-cover object-center h-full w-full rounded-xl opacity-60'/>
 <p className='text-white font-bold relative -top-[10vh] px-10'>Feature Three</p>

 </div>
</div>


</section>
<hr />
</motion.div>

);
}

export default HomePage;