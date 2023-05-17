import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

const ServicesAccordion = () => {
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    return (
        <section className='h-full bg-vampire-black text-white'>
        <div className="p-10">
        <h2 className='text-6xl uppercase '>Services Worth Your <br /> Time &#174;</h2>
        </div>
        <div className="service-dropdowns w-full">
        <Fragment >
                  <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>DOCUMENTARY</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                    
                    <motion.div className="grid grid-cols-2 gap-0 px-2 max-h-96"
                    initial={{width: 0, opacity: 0}}
                    transition={{delay: 0}}
                    whileInView={{width: "100%", opacity: 1}}
                    exit={{ width: 0, opacity: 0, transition: { duration: 0.5, ease: "easeInOut",  staggerChildren: 0.3  } }}
                    >
                        <motion.p className='text-white'
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        transition={{delay: 0.3, ease: "easeInOut"}}
                        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora suscipit impedit reiciendis nobis corporis illum itaque recusandae, eum at blanditiis amet voluptatum quo! Consectetur ullam ex officiis et est!</motion.p>
                        <img src="./Picture13.png" alt="" className='absoulte object-cover h-96 w-full' />
                    </motion.div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>COMMERCIAL</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                    <motion.div className="grid grid-cols-2 gap-0 px-2 max-h-96"
                    initial={{width: 0, opacity: 0}}
                    transition={{delay: 0}}
                    whileInView={{width: "100%", opacity: 1}}
                    exit={{width: 0, opacity: 0}}
                    >
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora suscipit impedit reiciendis nobis corporis illum itaque recusandae, eum at blanditiis amet voluptatum quo! Consectetur ullam ex officiis et est!</p>
                        <img src="./Picture13.png" alt="" className='object-cover h-96' />
                    </motion.div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>NARRATIVE</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                    <motion.div className="grid grid-cols-2 gap-0 px-2 max-h-96"
                    initial={{width: 0, opacity: 0}}
                    transition={{delay: 0}}
                    whileInView={{width: "100%", opacity: 1}}
                    exit={{width: 1, opacity: 1}}
                    >
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora suscipit impedit reiciendis nobis corporis illum itaque recusandae, eum at blanditiis amet voluptatum quo! Consectetur ullam ex officiis et est!</p>
                        <img src="./Picture13.png" alt="" className='object-cover h-96' />
                    </motion.div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 4}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>PRODUCTION</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                    <motion.div className="grid grid-cols-2 gap-0 px-2 max-h-96"
                    initial={{width: 0, opacity: 0}}
                    transition={{delay: 0}}
                    whileInView={{width: "100%", opacity: 1}}
                    exit={{width: 0, opacity: 0}}
                    >
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tempora suscipit impedit reiciendis nobis corporis illum itaque recusandae, eum at blanditiis amet voluptatum quo! Consectetur ullam ex officiis et est!</p>
                        <img src="./Picture13.png" alt="" className='object-cover h-96' />
                    </motion.div>
                    </AccordionBody>
                  </Accordion>
                </Fragment>
        
        </div>
       
        </section>
        
      );
}


export default ServicesAccordion

