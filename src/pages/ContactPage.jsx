import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen bg-secondary"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1>CONTACT PAGE</h1>
    </motion.div>
  );
};

export default ContactPage;
