import { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Features', href: '/features' },
  { name: 'Contact', href: '/contact'}
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("");
    let [isOpen, setIsOpen] = useState(true)

  return (
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="./logo_no_text.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden bg-primary rounded-full p-5">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
        
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
          <div className="hidden lg:flex lg:justify-center  lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={`${item.href}`} className={`${active === item.name ? "text-white" : "text-black"} hover:text-red-400 active:text-white`}  onClick={() => setActive(item.name)}>
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      
          </div>
        </nav>
        
        <AnimatePresence>
      {open && (
     
        <Dialog as={motion.div} className="lg:hidden relative z-50" open={mobileMenuOpen} onClose={setMobileMenuOpen}
        
        initial={{opacity: 0, width: 0}}
        animate={{opacity: 1, width: "100%"}}
        exit={{opacity: 0, width: 0, duration:0.5}}
        transition={{staggerChildren: 0.07, delayChildren: 0.2, duration: 0.5}}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[15rem] overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="./logo_no_text.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="p-5 rounded-full bg-secondary text-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
   
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        
        )}
       </AnimatePresence>
      </header>

)
};

export default Header;