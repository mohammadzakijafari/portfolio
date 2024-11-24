"use client";

import React, { useRef } from 'react'
import {motion, useInView, useScroll} from 'framer-motion'

const AboutPage = () => {
  const containerRef = useRef();
  const {scrollYProgress} = useScroll({container: containerRef});

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  return (
    <motion.div className="h-full"
      initial = {{ y: "-200vh"}}
      animate = {{y: "0%"}}
      transition={{duration: 1}} >
      {/* ----------------- main container ---------------- */}
      <div className="h-full flex justify-center items-center" ref={containerRef}>
        {/* ----------------- Image container ---------------- */}
        <div className='w-1/2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
          <div className=''>
            <img src='/zaki_work.jpg' alt='' className='rounded-lg' />
          </div>
        </div>

        {/* ----------------- Text container ---------------- */}
        <div className='w-1/2 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

          {/* ----------------- About me Text container ---------------- */}
          <div className='h-full flex flex-col justify-center items-left gap-8'>
            <h1 className='text-4xl'> Zaki Jafari </h1>
            <h1 className='text-7xl font-semibold'> Backend & Frontend Developer </h1>
            <p className=''>
              I am a dedicated Full Stack Web Developer with a passion for building user-centered applications that deliver real value. 
              I thrive on learning new technologies and continuously challenging myself to solve real-world problems through innovative solutions. 
            </p>
            <p className=''> Over the past year, I’ve honed my skills in writing clean, well-organized code, prioritizing maintainability and efficiency. 
            My commitment to both technical excellence and end-user experience drives me to create impactful software that makes a difference. </p>
            <button className="w-48 p-4 rounded-lg ring-1 ring-black bg-black text-white"> Download CV </button>
            
          </div>      
        </div>

      </div>
    </motion.div>
  )
}

export default AboutPage