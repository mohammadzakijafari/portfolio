"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavLink from './navLink';
import {motion} from 'framer-motion';

const menuLink = [
  { url: "/", title: "Home"},
  { url: "/about", title: "About"},
  { url: "/projects", title: "Projects"},
  { url: "/contact", title: "Contact"},
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants  = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }

  const centerVariants  = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  }

  const bottomVariants  = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  /* -------------------- Menu List Variants -------------------- */
  const menuListVariant = {
     closed: {
      x: "100vw",
     },
     opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
     },
  };
  /* -------------------- Menu Item Variants -------------------- */
  const menuItemVariants = {
    closed: {
     x: -10,
     opacity: 0,
    },
    opened: {
     x: 0,
     opacity: 1,
    },
 };

  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
      {/* --------------------- Links -------------------- */}
      <div className='hidden text-md md:flex gap-4 w-1/3'>
        {menuLink.map(link => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* ------------- Logo --------------- */}
      <div className='md:hidden lg:flex justify-center w-1/3 '>
        <Link
          href = "/"
          className='text-md bg-black rounded p-1 font-semibold flex items-center justify-center'>
            <span className = 'text-white mr-1'> Zaki </span>
            <span className = 'w-12 h-8 rounded bg-white text-black flex items-center justify-center'> .dev </span>
          </Link>
      </div>
      {/* -------------- social accounts ---------------- */}
      <div className='hidden md:flex items-center justify-end gap-8 w-1/3'>
        <Link href = "">
          <FaGithub size={40} />
        </Link>
        <Link href = "">
          <FaLinkedin size={40} />
        </Link>
      </div>
      {/* ------------- Responsive Menu --------------- */}
      <div className='md:hidden'>
        {/* ------------- Menu Button --------------- */}
        <button 
          onClick={() => setOpen((prev) => !prev)}
          className='w-10 h-8 flex flex-col justify-between z-50 relative'>
          <motion.div variants={topVariants}
            animate = {open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left' />

          <motion.div variants={centerVariants}
            animate = {open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded' />

          <motion.div variants={bottomVariants}
            animate = {open ? "opened" : "closed"}
            className='w-10 h-1 bg-black rounded origin-left' />
        </button>
        {/* ------------- Menu List --------------- */}
        { open && (
          <motion.div
            variants={menuListVariant}
            initial = "closed"
            animate = "opened"
            className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl z-10'>
            { menuLink.map(link => (
              <motion.div variants={menuItemVariants} key={ link.title }>  
                <Link href={link.url}> { link.title } </Link>
              </motion.div>
            ))}
          </motion.div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar