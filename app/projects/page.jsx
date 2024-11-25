"use client";

import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { PiMouseScroll } from "react-icons/pi";
import Image from '../../public/zaki_work.jpg';
import Link from 'next/link';

const projectlist = [
  {
    id: 1,
    title: "Kabul Zaffron",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Kabul Zaffron",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Kabul Zaffron",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
];

const ProjectPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div className="h-full"
      initial = {{ y: "-200vh"}}
      animate = {{y: "0%"}}
      transition={{duration: 1}} >
      <div className="h-[600vh] relative" ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl text-center font-semibold'>
          <div className=''>
            Scroll & Explore some of my Projects 
          </div>
          <div className=''>
          <PiMouseScroll size={40} />
          </div>
        </div>
        
        <div className='sticky top-0 flex h-screen gap-4 items-center'>
          <motion.div className='flex' style = {{x}}>
            <div className='h-screen w-screen flex items-center justify-center' />
            {projectlist.map((project) => (
              <div className='h-screen w-screen flex items-center justify-center' key={project.id}> 
                <div className='flex flex-col gap-8 text-black'> 
                  <h1 className='text-7xl'> {project.title} </h1>
                  <div className='relative'> 
                    <img src  = './zaki_work.jpg' alt='' className='h-full w-[50%]' />
                  </div>
                  <p className=''> {project.desc} </p>
                  <div className=''> 
                    <Link href = {project.demoLink}>
                      <button> See Demo </button>
                    </Link>
                    <Link href = {project.githubLink}>
                      <button> Github </button>
                    </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectPage