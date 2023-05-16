import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

import { HeroSection, VelocityScrollAnimation } from '../components';

const HomePage = () => {

// const targetRef = useRef(null)
// const { scrollYProgress } = useScroll({
// target: targetRef,
// offset: ["end end", "end start"],
// });

// const  opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

return (
<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>

<motion.div >
  <HeroSection />
</motion.div>


<hr />
  <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>
  <hr />



  <section className="services container mx-auto py-8 lg:grid lg:grid-cols-2">
    <div className="container px-8">
      <h1 className='text-vampire-black font-bold text-6xl'>An Array of Services</h1>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur veniam totam blanditiis. Eum eligendi iste facilis alias, atque a rerum sint aut.</p>
    </div>
  <div className="grid grid-cols-1 gap-8 lg:flex flex-row m-5">
  <div className="relative">
          <div className="h-[60vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/docu.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-4xl font-bold mb-2">Documentary</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[60vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/comm.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-4xl font-bold mb-2">Commercial</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[60vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/narr.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-4xl font-bold mb-2">Narrative</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>
        <div className="relative">
          <div className="h-[60vh] bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-vampire-black opacity-60"></div>
            <img className="w-full h-full object-cover" src="../cards/film.png" alt="Card Background" />
          </div>
          <div className="absolute bottom-0 right-0 p-4">
            <h2 className="text-secondary text-4xl font-bold mb-2">Production</h2>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
          </div>
        </div>

      </div>
    </section>
    <hr />
    <section className="container mx-auto py-8 bg-secondary">
    <div className="container p-8">
      <h1 className='text-vampire-black font-bold text-5xl leading-[2.5rem]'>A Few of Our Partners</h1>

      </div>
      <div className="grid grid-cols-2 lg:flex gap-8 px-8">
        <div className="partner p-2">
          <img src="./logo/safaricom.png" alt="Partner Logo w-10" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/Unilever-Symbol.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/HAART.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/RefuSHE.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/VMLY&R_Logo.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/ramco.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
          <img src="./logo/vpGroup.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/alexanderForbes.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/bidco-africa.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/computerAid.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/crownPaints.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/I&M_Bank.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/Intel.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/SCANAD.png" alt="Partner Logo" className="w-full h-auto" />
        </div>
        <div className="partner p-2">
        <img src="./logo/showmax.png" alt="Partner Logo" className="w-full h-auto" />
        </div>

      </div>
    </section>
    <section className="py-10 bg-vampire-black text-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
        <div className="flex flex-col justify-center">
            <h2 className="text-2xl leading-[1.5rem] lg:text-5xl font-bold mb-6">
            Transforming Ordinary Moments into Cinematic Brilliance with Yare Picture Studio
            </h2>
     
          </div>
          <div>
            <img
              className="object-cover"
              src="./home_bottom.png"
              alt="Large Image"
            />
          </div>
          <div className="flex flex-col justify-center mt-9">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Yare Picture Studio stands out as the perfect choice for your film production needs. With our team of young and talented professionals, we bring a fresh and innovative approach to every project. From concept development to post-production, we are committed to delivering exceptional quality and attention to detail. Our passion for storytelling and dedication to excellence make us the right partner to bring your vision to life.
            </p>
          </div>
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