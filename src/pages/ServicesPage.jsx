import React from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen bg-accent"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
    <h1>SERVICES PAGE</h1>
    </motion.div>
  );
};

export default ServicesPage;
