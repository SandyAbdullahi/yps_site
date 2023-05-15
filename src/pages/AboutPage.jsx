import React from 'react';
import { motion } from 'framer-motion';


const AboutPage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <header className="relative w-full bg-about  bg-no-repeat bg-[-80vw] bg-cover lg:bg-center h-[80vh]">
      <div className="absolute inset-0 opacity-50 bg-black"></div>
      <div className="flex items-end justify-end h-full opacity-100">
        <div className="p-8 relative z-10">
          <div className="flex items-center">
          <div className='bg-secondary h-10 w-5 m-5'></div> 
          <h1 className="text-8xl font-bold text-white">About Us</h1>
          </div>
          <p className="text-lg text-white">Learn more about our company and our mission</p>
        </div>
      </div>
    </header>
    <section>
      <div className="container mx-auto p-10 text-vampire-black">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Innovative Storytelling at Yare Picture Studio
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Yare Picture Studio is a dynamic and innovative film production company based in Kenya. With a team of young and talented individuals, we are dedicated to bringing stories to life through the power of visual storytelling. From concept development to post-production, we handle every aspect of the filmmaking process with creativity, passion, and meticulous attention to detail.
        </p>
      </div>
    </section>
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="text-white bg-vampire-black p-6">
     
            <h3 className="text-xl font-bold mb-2">We are</h3>
            <p className="text-gray-700">
              Yare Picture Studio is a team of passionate filmmakers dedicated to pushing the boundaries of storytelling through film. We strive to create captivating visuals and compelling narratives that leave a lasting impact on our audiences.
            </p>
          </div>
          <div className="text-white bg-gray-900 p-6">

            <h3 className="text-xl font-bold mb-2">We are not</h3>
            <p className="text-gray-700">
              We are not your average production studio. We believe in taking risks, challenging conventions, and thinking outside the box. We embrace innovation, creativity, and the pursuit of excellence to deliver exceptional results.
            </p>
          </div>
          <div className="text-white bg-vampire-black p-6">
     
            <h3 className="text-xl font-bold mb-2">What We Do</h3>
            <p className="text-gray-700">
              At Yare Picture Studio, we specialize in various aspects of film production, including concept development, scriptwriting, cinematography, editing, and post-production. We offer end-to-end services to bring your vision to life and create captivating films that resonate with audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default AboutPage;
