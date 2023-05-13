import { motion } from 'framer-motion';
import { HeroSection, VelocityScrollAnimation } from '../components';

const HomePage = () => {
return (
<motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>



  <HeroSection />

  <div className="overflow-hidden">
    <VelocityScrollAnimation />
  </div>

  <section className="services container mx-auto py-8">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-5">
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        {/* Add more cards here */}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 m-5">
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        <div className="bg-gray-100 p-4">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, maiores!</p>
        </div>
        {/* Add more cards here */}
      </div>
    </section>

</motion.div>

);
}

export default HomePage;