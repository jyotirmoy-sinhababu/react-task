import React from 'react';

import cardOne from '../../assets/card-one.avif';
import hero from '../../assets/hero-2.avif';
import header from '../../assets/header.avif';

const IntroSection = () => {
  return (
    <>
      <section className='mt-[5%]'>
        <div className='flex sm:flex-row flex-col justify-between sm:mx-[7%] mx-[3%]'>
          <div className='sm:block flex justify-center sm:mb-0 mb-7 sm:mt-0 mt-6'>
            <p className='text-[rgb(31,42,55)] sm:text-4xl text-3xl font-bold leading-none sm:mr-40 mr-0 '>
              Join the Conversation
            </p>
          </div>
          <div>
            <p className='text-gray-600 text-base leading-6 sm:ml-28 ml-0 sm:max-w-[600px]'>
              Discover a vibrant community, share your thoughts, and connect
              with like-minded individuals. Together, we grow.
            </p>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col sm:justify-between justify-normal sm:mx-[7%] mx-1 sm:mr-[19%] mr-[11%]'>
          <div className='flex items-center'>
            <span className='text-[rgb(75,159,255)] text-[3.25rem] animate-slideInUp'>
              ✦
            </span>
            <p className='sm:text-[2rem] text-[1.7rem] font-bold text-[rgb(75,159,255)] text-[700] animate-fadeInLeft'>
              Build Connections
            </p>
          </div>
          <div className='sm:block flex items-start'>
            <button className='inline-flex items-center bg-gradient-to-r from-[#1f2a37] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#1f2a37] border-none rounded-md text-white cursor-pointer text-sm font-medium ml-28 max-w-[600px] px-7 py-1 h-[2.2rem]'>
              Join conversion
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='flex sm:flex-row flex-col sm:justify-center items-center mt-[5%] gap-5'>
          <img
            className='sm:w-[591px] w-[321px] rounded-[7px]'
            src={hero}
            alt='image'
          />
          <img
            className='sm:w-[591px] w-[321px] rounded-[7px]'
            src={header}
            alt='image'
          />
        </div>
      </section>
      <section className='flex sm:flex-row flex-col justify-between items-center mx-[7%] sm:mt-[3%] mt-[5%] mb-[3%]'>
        <div className='text-[#1f2a37] flex flex-col text-2xl font-bold gap-2 sm:text-left text-center sm:mb-0 mb-[2%]'>
          <div>
            <p className='text-2xl leading-[1.2] m-0'>
              Where Connections Thrive
            </p>
          </div>
          <div className='flex '>
            <p>and Ideas Flourish</p>
            <span className='flex flex-row items-center gap-3 ml-0 pl-0 text-transparent bg-gradient-to-r from-[#03b8f5] to-black bg-clip-text'>
              ✦ 2x
            </span>
          </div>
        </div>
        <div className='flex sm:flex-row flex-col gap-2'>
          <div className='w-11 flex items-center bg-[#f7f5f5] rounded-lg  gap-4 min-w-[200px] p-4 transition-all duration-300 ease-in-out text-[#4b5563] text-base font-medium hover:shadow-lg hover:translate-y-[-7px]'>
            <span>⦿</span>
            <p>Happy Community</p>
          </div>
          <div className='w-11 flex items-center bg-[#f7f5f5] rounded-lg  gap-4 min-w-[200px] p-4 transition-all duration-300 ease-in-out text-[#4b5563] text-base font-medium hover:shadow-lg hover:translate-y-[-7px]'>
            <span>⦿</span>
            <p>210% Boost in Engagement</p>
          </div>
          <div className='w-11 flex items-center bg-[#f7f5f5] rounded-lg  gap-4 min-w-[200px] p-4 transition-all duration-300 ease-in-out text-[#4b5563] text-base font-medium hover:shadow-lg hover:translate-y-[-7px]'>
            <span>⦿</span>
            <p>172+ Ranked Communities</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroSection;
