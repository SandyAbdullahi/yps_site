import React from 'react';
import { motion } from 'framer-motion';


const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Shuria Abdi',
      position: 'Director',
      image: './team/shuria_abdi.png',
    },
    {
      name: 'Kahiga Muriuki',
      position: 'Cinematographer',
      image: './team/kahiga_muriuki.png',
    },
    {
      name: 'Dinah',
      position: 'Editor',
      image: './team/dinah.png',
    },
  ];


  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <header className="relative w-full bg-about  bg-no-repeat bg-[-80vw] bg-cover lg:bg-center h-[80vh]">
      <div className="absolute inset-0 opacity-50 bg-black"></div>
      <div className="flex items-end justify-end h-full opacity-100">
        <div className="p-8 relative z-10">
          <div className="flex items-center">
          <div className='bg-secondary h-10 w-5 m-5'></div> 
          <h1 className="text-7xl lg:text-9xl font-bold text-white">About Us</h1>
          </div>
          <p className="text-lg text-white">Learn more about our company and our mission</p>
        </div>
      </div>
    </header>
    <section>
      <div className="container grid lg:grid-cols-2 mx-auto p-10 lg:p-20 gap-5 text-vampire-black ">
        <div className="flex items-center justify-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold ">
          Innovative Storytelling at Yare Picture Studio
        </h2>
           <div className='bg-secondary h-[20vh] w-5'></div> 
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed">
          Yare Picture Studio is a dynamic and innovative film production company based in Kenya. With a team of young and talented individuals, we are dedicated to bringing stories to life through the power of visual storytelling. From concept development to post-production, we handle every aspect of the filmmaking process with creativity, passion, and meticulous attention to detail.
        </p>
      </div>
    </section>
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          <div className="text-white bg-vampire-black p-10 lg:p-20 border-2 border-accent shadow-lg drop-shadow-2xl">
     
            <h3 className="text-xl font-bold mb-2">We are</h3>
            <p className="text-gray-500">
              Yare Picture Studio is a team of passionate filmmakers dedicated to pushing the boundaries of storytelling through film. We strive to create captivating visuals and compelling narratives that leave a lasting impact on our audiences.
            </p>
          </div>
          <div className="text-white  p-10 lg:p-20 border-2 border-accent shadow-lg drop-shadow-2xl">

            <h3 className="text-xl font-bold mb-2">We are not</h3>
            <p className="text-gray-500">
              We are not your average production studio. We believe in taking risks, challenging conventions, and thinking outside the box. We embrace innovation, creativity, and the pursuit of excellence to deliver exceptional results.
            </p>
          </div>
          <div className="text-white bg-vampire-black p-10 lg:p-20 border-2 border-accent shadow-lg drop-shadow-2xl">
     
            <h3 className="text-xl font-bold mb-2">What We Do</h3>
            <p className="text-gray-500">
              At Yare Picture Studio, we specialize in various aspects of film production, including concept development, scriptwriting, cinematography, editing, and post-production. We offer end-to-end services to bring your vision to life and create captivating films that resonate with audiences.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-10">
      <div className="flex items-end justify-center h-full my-5">
        <div className="relative bg-primary h-9 w-5 m-2"></div>
        <h1 className='font-bold text-vampire-black text-center text-5xl'>The Crew</h1>
       
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-white bg-vampire-black p-6">
              <div className="flex justify-center">
                <img
                  className="w-full h-full max-h-96 object-cover"
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <h3 className="text-xl font-bold my-4">{member.name}</h3>
              <p className="text-gray-700">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className='bg-vampire-black h-full text-white font-bold leading-none'>
      <img src="./team/team.png" alt="team" className='object-cover w-full my-10 h-[30vh] inset-0' />
      <h3 className='p-10'>With an unwavering dedication to delivering exceptional quality workmanship, we pride ourselves on setting the highest standards in everything we do. From meticulous attention to detail to utilizing the latest technologies, we go above and beyond to ensure that every project we undertake exceeds expectations</h3>
    </section>
    <hr />
    </motion.div>
  );
};

export default AboutPage;
