import { motion } from 'framer-motion';
import { HeroSection } from '../components';

const HomePage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <HeroSection />

      <h1>HOMEPAGE</h1>
        </motion.div>

  );
}

export default HomePage;
