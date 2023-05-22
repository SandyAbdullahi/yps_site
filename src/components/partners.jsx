import { motion } from "framer-motion"

const Partners = () => {
    return (

         <motion.div className="flex flex-row items-center w-auto"
         animate={{
            x: -1000,
         }}
         transition={{
            type: 'tween',
            duration: 100,
          }}
          drag="x"
          dragConstraints={{ left: '20px', right: 0 }}

         >
         <img src="./logo/alexanderForbes.png" alt="" className="h-10 m-10" />
            <img src="./logo/bidco-africa.png" alt="" className="h-10 m-10" />
            <img src="./logo/computerAid.png" alt="" className="h-10 m-10" />
            <img src="./logo/crownPaints.png" alt="" className="h-10 m-10" />
            <img src="./logo/HAART.png" alt="" className="h-10 m-10" />
            <img src="./logo/I&M_Bank.png" alt="" className="h-10 m-10" />
            <img src="./logo/Intel.png" alt="" className="h-10 m-10" />
            <img src="./logo/ramco.png" alt="" className="h-10 m-10" />
            <img src="./logo/RefuSHE.png" alt="" className="h-10 m-10" />
            <img src="./logo/SCANAD.png" alt="" className="h-10 m-10" />
            <img src="./logo/safaricom.png" alt="" className="h-10 m-10" />
            <img src="./logo/showmax.png" alt="" className="h-10 m-10" />
            <img src="./logo/Unilever-Symbol.png" alt="" className="h-10 m-10" />
            <img src="./logo/VMLY&R_Logo.png" alt="" className="h-10 m-10" />
            <img src="./logo/vpGroup.png" alt="" className="h-10 m-10" />

        </motion.div>    

    )
}

export default Partners