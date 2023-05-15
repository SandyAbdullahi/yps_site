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
<hr />
  <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>
  <hr />
</motion.div>


  <section className="services container mx-auto py-8">
    <div className="container px-8">
      <h1 className='text-vampire-black font-bold text-5xl'>An Array of Services</h1>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam totam blanditiis. Eum eligendi iste facilis alias, atque a rerum sint aut.</p>
    </div>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-5">
  <div className="relative">
          <div className="h-[80vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/docu.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-xl font-bold mb-2">Documentary</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[80vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/comm.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-xl font-bold mb-2">Commercial</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[80vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/narr.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-xl font-bold mb-2">Narrative</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[80vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/film.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-xl font-bold mb-2">Production</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>

      </div>
    </section>
    <hr />
    <section className="container mx-auto py-8">
    <div className="container p-8">
      <h1 className='text-vampire-black font-bold text-5xl'>An Array of Partners</h1>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 px-8">
        <div className="partner p-2">
          <img src="./logo/dummy_logo.png" alt="Partner Logo w-10" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/dummy_logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>

      </div>
    </section>
    <hr />
    <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>
  <hr />
</motion.div>

);
}

export default HomePage;