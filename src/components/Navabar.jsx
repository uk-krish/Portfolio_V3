import React, { useState, useEffect } from 'react';
import { NavbarContent } from '../config/index';
import Hamburger from './Hamburger';
import "../assets/style/Hamburger.css"
import { Link } from 'react-scroll';
import { fadeIn } from '../assets/Varients';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import { GetNav } from '../config/Varients';
motion
const Navabar = () => {
  const [Menu, setMenu] = useState(false);
  const [color, setColor] = useState(false)

  const changeColor = () => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  }

  const HandleCLick = () => {
    setMenu(!Menu);
    document.body.style.overflowY = Menu ? 'hidden' : 'auto';
  };
  const HanldeLogo = () => {
    window.scrollTo(0, 0);
  }
  window.addEventListener('scroll', changeColor);

  useEffect(()=>{
    document.body.style.overflowY = Menu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflowY = 'auto';
    };
  },[Menu])
  return (
    <section
      className={`
        ${color ? ' bg-[#192b3886] backdrop-blur-3xl	' : ''}
      top-0 scroll-smooth	 fixed  w-full z-20  delay-150 h-max`}>
      <div className='m-3 top-0 w-full flex z-10 items-center justify-between'>
        <h1 onClick={HanldeLogo} className='ml-3 tracking-wider cursor-pointer  space-mono-regular'>
          {'< '} <span className='aguafina-script-regular text-3xl  tracking-widest'>uk_krish</span> {'/>'}
        </h1>
        <div className='mr-10 md:flex hidden'>
          {NavbarContent.map((nav) => (
            <motion.div
              variants={GetNav(nav.id)}
              initial="hidden"
              animate="visible"
              key={nav.id}>
              <Link
                to={nav.link} className='mx-5 hover:scale-110 flex cursor-pointer hover:text-primary'
              >
                <p className='mr-1  text-primary'>0{nav.id}.</p>
                <p>{nav.name}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Responsive Navbar */}
        <div className={`md:hidden block mr-6 z-20 ${Menu ? 'show' : ''}`}>
          <label onClick={HandleCLick} htmlFor='check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <nav className={`bg-[#0a1e29] md:hidden block transition-transform duration-500 ease-in-out -mr-3 text-white z-10 absolute w-72 right-0  h-screen top-0 ${Menu ? '-translate-x-2' : 'translate-x-80'} `}>
          <div className='mt-40 space-y-12'>
            {NavbarContent.map((nav) => (
              <Link to={nav.link} onClick={HandleCLick} className='mx-5 flex justify-center w-full' key={nav.id}>
                <p className='hover:text-primary hover:scale-x-110 cursor-pointer w-full text-center'>
                  <span className='mr-1 text-primary'>0{nav.id}.</span>
                  {nav.name}
                </p>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navabar;
