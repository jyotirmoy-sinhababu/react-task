import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
// import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.png';
import NavMobileView from './NavMobileView';

const Navbar = () => {
  const [isOpen, setIsOPen] = useState();
  return (
    <header className='sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-20 '>
      <nav className='flex justify-between items-center sm:mx-44 mx-5 pt-8'>
        <div>
          {/* <p className='text-3xl text-cyan-900 font-extrabold'>CH</p> */}
          {/* <p className='text-cyan-400'>Connecting people</p> */}
          <img src={logo} alt='logo' className='h-14 w-32' />
        </div>
        <div className='sm:flex gap-14 hidden'>
          <button className='text-[1rem]  text-slate-950 cursor-pointer font-vollkorn hover:text-cyan-600 font-medium '>
            Home
          </button>
          <button className='text-[1rem]  text-slate-950 cursor-pointer font-vollkorn hover:text-cyan-600 font-medium'>
            Events
          </button>
          <button className='text-[0.9rem]  text-slate-950 cursor-pointer font-vollkorn hover:text-cyan-600 font-medium border-2 px-4 pt-2 pb-2 border-[#d4e0f1]'>
            About me
          </button>
        </div>
        <div className='sm:hidden'>
          <button
            onClick={() => {
              setIsOPen(!isOpen);
            }}
          >
            {isOpen ? (
              <RxCross2 className='text-2xl text-cyan-600 font-extrabold' />
            ) : (
              <RxHamburgerMenu className='text-2xl text-cyan-600 font-extrabold' />
            )}
          </button>
          {isOpen ? <NavMobileView /> : null}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
