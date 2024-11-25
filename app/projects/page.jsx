"use client";

import React, { useRef } from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'
import { PiMouseScroll } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import Image from '../../public/zaki_work.jpg';
import Link from 'next/link';

const projectlist = [
  {
    id: 1,
    title: "Kabul Zaffron",
    tech: "HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, Cloudinary, Stripe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
  {
    id: 2,
    title: "Kabul Zaffron",
    tech: "HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, Cloudinary, Stripe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
  {
    id: 3,
    title: "Kabul Zaffron",
    tech: "HTML, CSS, Tailwind CSS, JavaScript, React.js, Node.js, Express, MongoDB, Cloudinary, Stripe",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione consectetur tempore exercitationem delectus quod praesentium perspiciatis sit aliquam asperiores eveniet inventore non aspernatur perferendis at id, qui vel blanditiis totam.",
    img: Image,
    demoLink: "",
    githubLink: "",
  },
];

const ProjectPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
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
                <div className='sm:flex sm:flex-col md:flex md:flex md:flex-row gap-14 text-black border-2 rounded-xl p-20 w-[85%]'> 
                  <div className='w-1/2'>
                    <div className='relative w-80 h-64 md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-[100%] xl:w-[100%] xl:h-[100%]'> 
                      <img src  = './zaki_work.jpg' alt='' className='rounded-xl' />
                    </div>
                  </div>
                  <div className='w-1/2 flex flex-col justify-center gap-10'>
                    <p className='text-xl text-gray-600 font-semibold'> FEATURED PROJECT </p>
                    <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-semibold'> {project.title} </h1>
                    <div className='flex gap-2'>
                      <p className='text-xl font-semibold text-nowrap'> Tech Stack: </p>
                      <p className='text-xl text-gray-700'> {project.tech} </p>
                    </div>
                    <p className='text-xl'> {project.desc} </p>
                    <div className='flex pt-10 gap-10'> 
                      <Link href = {project.demoLink}>
                        <FaGithub size={45} /> 
                      </Link>
                      <Link href = {project.githubLink}>
                        <button className='px-6 py-3 bg-black text-white rounded'> View Demo </button>
                      </Link>
                  </div>
                  </div>
                  {/* <h1 className='text-2xl md:text-4xl lg:text-6xl xl:text-8xl'> {project.title} </h1>
                  <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'> 
                    <img src  = './zaki_work.jpg' alt='' className='h-full' />
                  </div>
                  <p className=''> {project.desc} </p>
                  <div className=''> 
                    <Link href = {project.demoLink}>
                      <button> See Demo </button>
                    </Link>
                    <Link href = {project.githubLink}>
                      <button> Github </button>
                    </Link>
                  </div> */}
                </div>
                
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='h-screen w-screen flex flex-col items-center justify-center text-center gap-16'>
        <div className='relative'>
          <motion.svg animate = {{rotate:360}} transition={{duration: 8, ease: "linear", repeat:Infinity}} viewBox='0 0 300 300' className='w-96 h-96'>
            <defs>
              <path id='circlePath' d='M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0' />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath'  className='text-3xl'> Full Stack Web Developer </textPath>
            </text>
          </motion.svg>
          <Link href = '/contact' className='w-28 h-28 absolute top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full flex items-center justify-center'> Hire Me </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectPage