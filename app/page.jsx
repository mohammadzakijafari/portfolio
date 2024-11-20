"use client";

import styles from "./style.module.css";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <motion.div className="h-full"
      initial = {{ y: "-200vh"}}
      animate = {{y: "0%"}}
      transition={{duration: 1}} >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* ------------------- Text Section --------------- */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col justify-center gap-8">
          <h1 className="text-7xl font-semibold"> ZAKI JAFARI </h1>
          <div className="flex items-center gap-2 py-4">
            <h1 className="text-xl"> Hi, I am a </h1>
            <h1 className="text-3xl font-bold"> Full Stack Web Developer </h1>
          </div>
          <p className=""> I am a dedicated Full Stack Web Developer with a passion for building user-centered applications that deliver real value. 
            I thrive on learning new technologies and continuously challenging myself to solve real-world problems through innovative solutions 
          </p>
          {/* ------------- Buttons Call to Action ---------------  */}
          <div className="flex gap-8 py-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white relative z-0"> View My Work </button>
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black relative z-0"> Contact Me </button>
          </div>
        </div>
        {/* ------------------- Image Section --------------- */}
        <div className = {`h-1/2 lg:h-full lg:w-1/2 relative ${styles['hero-profile']}`}>
          <img src = "/zaki_jafari.jpg" alt="" className = {`${styles['profile-img']}`}/>
        </div>
      </div>
    </motion.div>
  );
}
