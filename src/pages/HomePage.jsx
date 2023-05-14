import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import { HeroSection, VelocityScrollAnimation } from '../components';

const HomePage = () => {

const targetRef = useRef(null)
const { scrollYProgress } = useScroll({
target: targetRef,
offset: ["end end", "end start"],
});

const scale = useTransform(scrollYProgress, [1, 0.5], [0, 1]);
const  opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

return (
<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

<motion.div  ref={targetRef} style={{ opacity }}>
  <HeroSection />

  <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>
</motion.div>


  <section className="services container mx-auto py-8">
    <div className="container px-8">
      <h1 className='text-accent font-bold text-6xl'>An Array of Services</h1>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam totam blanditiis. Eum eligendi iste facilis alias, atque a rerum sint aut.</p>
    </div>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-5">
        <div className="bg-gray-100 p-4 h-96 bg">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        <div className="bg-gray-100 p-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
  
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-5">
        <div className="bg-gray-100 p-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        <div className="bg-gray-100 p-4 h-96">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
 
      </div>
    </section>
    <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>
</motion.div>

);
}

export default HomePage;