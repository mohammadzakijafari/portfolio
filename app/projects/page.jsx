"use client";

import React from 'react'
import {motion} from 'framer-motion'

const ProjectPage = () => {
  return (
    <motion.div className="h-full"
      initial = {{ y: "-200vh"}}
      animate = {{y: "0%"}}
      transition={{duration: 1}} >
      <div className="">
        Protfolio Page
      </div>
    </motion.div>
  )
}

export default ProjectPage