import React, { useState, useEffect } from 'react';
import { NavbarContent } from '../config';
import Hamburger from './Hamburger';
import "../assets/style/Hamburger.css"
const Navabar = () => {
  const [add, setadd] = useState('')
  const [Menu, setMenu] = useState(false);

  const HandleCLick = () => {
    setMenu(!Menu); 
    
  };

  return (
    <div className='m-5 flex items-center justify-between'>
      <h1 className='ml-3 tracking-wider space-mono-regular'>
        {'< '} <span className='aguafina-script-regular text-2xl tracking-widest'>uk_krish</span> {'/>'}
      </h1>
      <div className='mr-10 md:flex hidden'>
        {NavbarContent.map((nav) => (
          <div className='mx-5 flex' key={nav.id}>
            <p>{nav.name}</p>
          </div>
        ))}
      </div>
      <div className={`md:hidden block z-20 ${Menu ? 'show':''}`}>
          <label onClick={HandleCLick} htmlFor='check'>
            <span></span>
            <span></span>
            <span></span>
          </label>
      </div>
      <nav className={`bg-[#0a1e29] md:hidden block transition-transform duration-500 ease-in-out text-white z-10 absolute w-72 right-0 h-screen top-0 ${Menu ? '-translate-x-2' : 'translate-x-80'} `}>
        <div className='mt-40 space-y-20'>
          {NavbarContent.map((nav) => (
            <div className='mx-5 flex justify-center w-full' key={nav.id}>
              <p className='hover:text-[#6EACDA] cursor-pointer w-full text-center'>
                {nav.name}
              </p>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navabar;
