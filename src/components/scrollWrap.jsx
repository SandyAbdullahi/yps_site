import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion';


const VelocityScrollAnimation = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1],  [0, -600]);
    return (
        <motion.div className="relative flex flex-col p-4 parallax-text bg-black text-white overflow-hidden" 
           
        >
            <motion.h1 className="text-9xl whitespace-nowrap m-0 text-left"
             initial = {{ x: '-1500%' }}
             animate = {{
                 x: 1500,
                 transition: {
                    repeat: Infinity,
                    repeatType: 'reverse',
                     duration: 70,
                     ease: 'linear',
                    
                 }
             }}
            > Immerse your audience in captivating stories, evoke deep emotions, and ignite powerful conversations with the art of film. Harness the magic of visual storytelling to bring ideas to life, transport viewers to new worlds, and challenge perspectives. Through vivid imagery, compelling narratives, and masterful techniques, you can captivate hearts, inspire change, and leave a lasting impact. Join Yare Picture Studio and discover the limitless possibilities that film offers. It's time to tell your story, leave your mark, and create an unforgettable cinematic experience. </motion.h1> 
        </motion.div>
    )


}


export default VelocityScrollAnimation