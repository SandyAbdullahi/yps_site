import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div className="flex items-center justify-center h-screen bg-primary"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h1>HOMEPAGE</h1>
        </motion.div>

  );
}

export default HomePage;
