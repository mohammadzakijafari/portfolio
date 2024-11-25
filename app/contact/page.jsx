"use client";

import React, { useRef } from 'react'
import {motion} from 'framer-motion';

const ContactPage = () => {
  const ref = useRef();

  return (
    <motion.div className="h-full"
      initial = {{ y: "-200vh"}}
      animate = {{y: "0%"}}
      transition={{duration: 1}} >
      Contact Page
    </motion.div>
  )
}

export default ContactPage