import React from 'react';

import { Link } from 'react-router-dom';

const NavMobileView = () => {
  return (
    <div className='rounded-sm sm:hidden flex flex-col justify-center items-center h-[145px] z-10 w-[70%] bg-slate-300 top-[91%] left-[15%] absolute gap-[5%] border-2 '>
      <Link
        className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'
        to='/'
      >
        Home
      </Link>
      <Link
        className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'
        to='/event'
      >
        Events
      </Link>
      <Link className='text-[19px] text-teal-600 cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
        About
      </Link>
    </div>
  );
};

export default NavMobileView;
