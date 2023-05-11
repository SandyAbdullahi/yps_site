import { motion } from 'framer-motion';
import { HeroSection, VelocityScrollAnimation } from '../components';

const HomePage = () => {
return (
<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
  <HeroSection />
  <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>

  <div className="h-screen">
    <h1>HOMEPAGE</h1>
  </div>
</motion.div>

);
}

export default HomePage;