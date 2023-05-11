import { cubicBezier, motion, useScroll, useTransform } from 'framer-motion';


const VelocityScrollAnimation = () => {
    const { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 1],  [0, -600]);
    return (
        <motion.div className="relative flex flex-col p-8 parallax-text bg-vampire-black text-white overflow-hidden w-[900vw]" 
        style={{x}}
        >
            <motion.h1 className="text-2xl whitespace-nowrap text-left" > Immerse your audience in captivating stories, evoke deep emotions, and ignite powerful conversations with the art of film. </motion.h1> 
        </motion.div>
    )


}


export default VelocityScrollAnimation