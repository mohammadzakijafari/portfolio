"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavLink from './navLink';

const menuLink = [
  { url: "/", title: "Home"},
  { url: "/about", title: "About"},
  { url: "/portfolio", title: "Portfolio"},
  { url: "/contact", title: "Contact"},
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
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
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
        {/* ------------- Menu List --------------- */}
        { open && (
          <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-2xl'>
            { menuLink.map(link => (
              <Link href={link.url} key={ link.title }> { link.title } </Link>
            ))}
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar