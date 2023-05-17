import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const ServicesAccordion = () => {
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    return (
        <section className='h-screen bg-vampire-black text-white'>
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
                        <p className='text-white'>    We&apos;re not always in the position that we want to be at.
                      We&apos;re constantly growing. We&apos;re constantly making mistakes.
                      We&apos;re constantly trying to express ourselves and actualize our
                      dreams.</p>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>COMMERCIAL</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                      We&apos;re not always in the position that we want to be at.
                      We&apos;re constantly growing. We&apos;re constantly making mistakes.
                      We&apos;re constantly trying to express ourselves and actualize our
                      dreams.
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>NARRATIVE</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                      We&apos;re not always in the position that we want to be at.
                      We&apos;re constantly growing. We&apos;re constantly making mistakes.
                      We&apos;re constantly trying to express ourselves and actualize our
                      dreams.
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 4}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                    <div className="border-y-2 p-5 w-full">
            <h1 className='text-4xl'>PRODUCTION</h1>
          </div>
                    </AccordionHeader>
                    <AccordionBody>
                      We&apos;re not always in the position that we want to be at.
                      We&apos;re constantly growing. We&apos;re constantly making mistakes.
                      We&apos;re constantly trying to express ourselves and actualize our
                      dreams.
                    </AccordionBody>
                  </Accordion>
                </Fragment>
        
        </div>
       
        </section>
        
      );
}


export default ServicesAccordion

