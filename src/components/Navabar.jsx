import React, { useState, useEffect } from 'react';
import { NavbarContent } from '../config/index';
import Hamburger from './Hamburger';
import "../assets/style/Hamburger.css"
import { Link } from 'react-scroll';
const Navabar = () => {
  const [Menu, setMenu] = useState(false);

  const HandleCLick = () => {
    setMenu(!Menu); 
    
  };

  return (
    <div className='m-5 flex items-center justify-between'>
      <h1 className='ml-3 tracking-wider  space-mono-regular'>
        {'< '} <span className='aguafina-script-regular text-3xl  tracking-widest'>uk_krish</span> {'/>'}
      </h1>
      <div className='mr-10 mid:flex hidden'>
        {NavbarContent.map((nav) => (
          <Link to={nav.link} className='mx-5 hover:scale-110 flex cursor-pointer hover:text-primary' key={nav.id}>
            <p className='mr-1  text-primary'>0{nav.id}.</p>
            <p>{nav.name}</p>
          </Link>
        ))}
      </div>
      <div className={`mid:hidden block z-20 ${Menu ? 'show':''}`}>
          <label onClick={HandleCLick} htmlFor='check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
      </div>
      <nav className={`bg-[#0a1e29] md:hidden block transition-transform duration-500 ease-in-out text-white z-10 absolute w-72 right-0  h-screen top-0 ${Menu ? '-translate-x-2' : 'translate-x-80'} `}>
        <div className='mt-40 space-y-12'>
          {NavbarContent.map((nav) => (
            <Link to={nav.link} className='mx-5 flex justify-center w-full' key={nav.id}>
              <p className='hover:text-primary hover:scale-x-110 cursor-pointer w-full text-center'>
              <span className='mr-1 text-primary'>0{nav.id}.</span>
                {nav.name}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navabar;
