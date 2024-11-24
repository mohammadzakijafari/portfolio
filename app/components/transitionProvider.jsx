"use client";

import { AnimatePresence } from 'framer-motion';
import React from 'react'
import Navbar from './navbar';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {

    const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      {/* bg-gradient-to-b from-blue-50 to-red-50 */}
        <div key = {pathName} className="w-screen h-screen main-background">
            <motion.div className='w-screen h-screen fixed bg-black rounded-md z-40'
                animate = {{height: "0vh"}}
                exit = {{ height: "140vh"}}
                transition = {{duration: 2, ease: "easeOut"}} >

            </motion.div>

            <motion.div className='fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
                initial = {{opacity: 1}}
                animate = {{ opacity: 0 }}
                exit = {{ opacity: 0 }}
                transition = {{duration: 0.5, ease: "easeOut"}} > {pathName}
            </motion.div>

            <motion.div className='w-screen h-screen fixed bg-red-500 rounded-md bottom-0 z-30'
                initial = {{height: "100vh"}}
                animate = {{ height: "0vh", transition: {delay: 0.5}}} >
            </motion.div>
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
    </AnimatePresence>
  )
}

export default TransitionProvider