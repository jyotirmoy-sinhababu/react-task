import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import one from './../../assets/download-one.png';
import two from './../../assets/download-two.png';
import three from './../../assets/download-three.png';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className='mt-[3%]'>
        <div className='flex flex-col justify-between items-center'>
          <p className='sm:text-[3.8rem] text-[2.8rem] text-center font-[1000] font-vollkorn'>
            Connect Communities
          </p>
          <p className='text-[1rem] font-[300] opacity-[.6] font-vollkorn text-center'>
            Connecting people of all faiths through events and community
            support.
          </p>
          <div>
            <button
              className='border-2 px-5 py-3 mt-5 text-[1rem] font-vollkorn bg-slate-400 hover:bg-slate-500'
              onClick={() => {
                navigate('event');
              }}
            >
              Check our events!
            </button>
          </div>
        </div>
      </section>
      <section className='bg-[#0f0f0f] sm:mx-[5%] mx-[2px] p-[2rem] mt-[1.8rem] px-[6%] pt-11 pb-11'>
        <div className='flex justify-center'>
          <p className='text-white font-[600] sm:text-[2.1rem] text-[1.8rem] mb-[2.4rem] font-vollkorn text-center'>
            Why Communion Rocks!
          </p>
        </div>
        <div className='flex sm:flex-row flex-col sm:justify-normal justify-between gap-[9%]'>
          <div className='flex flex-col justify-center sm:w-[47%] w-[100%]'>
            <p className='text-white animate-fadeInLeft box-border font-vollkorn sm:text-left text-center text-[1rem] mb-[1.2rem]'>
              Communion is not just another platform—it's a vibrant space that
              unites diverse faiths, beliefs, and traditions. By promoting
              collaboration and connection, we're fostering a world where
              differences become strengths and unity becomes the norm
            </p>
            <button className='text-white gap-2 mt-3 h-10 w-40 sm:mb-0 mb-[1.2rem] flex items-center justify-center bg-[#0f0f0f] rounded-[999px] cursor-pointer hover:bg-[#1f1e1e]'>
              <span className='text-[.9rem]'>Why Join Us?</span>
              <FaLongArrowAltRight />
            </button>
          </div>
          <div className='flex sm:gap-[9%] gap-[17px] sm:flex-row flex-col sm:justify-normal justify-center items-center'>
            <div className='sm:w-[27%] w-[80%] h-[350px] animate-slideInUp bg-featuresCardDarkGrey border-none rounded-xl flex flex-col  p-6 opacity-0 transition-transform duration-300 ease-in-out '>
              <img className='w-9' src={one} alt='profile' />
              <p className='text-white text-[1.2rem] mb-[1.2rem]'>
                Unifying Communities
              </p>
              <p className='text-white mb-[1.2rem]'>
                Communion bridges diverse religious communities, becoming the
                social
              </p>
              <button className='text-white flex items-center justify-center gap-1 border-2 w-32 rounded-[21px] p-2'>
                <span className='text-[.8rem]'>Learn More</span>{' '}
                <FaLongArrowAltRight />
              </button>
            </div>
            <div className='sm:w-[27%] w-[80%] animate-slideInUp bg-featuresCardDarkGrey border-none rounded-xl flex flex-col h-full  p-6 opacity-0 transition-transform duration-300 ease-in-out'>
              <img className='w-9' src={two} alt='picture' />
              <p className='text-white text-[1.2rem] mb-[1.2rem]'>
                Innovative and Fun
              </p>
              <p className='text-white  mb-[1.2rem]'>
                Experience faith in a fresh way through our interactive
                features, engaging events, and modern approach to
              </p>
              <button className='text-white flex items-center justify-center gap-1 border-2 w-32 rounded-[21px] p-2'>
                <span className='text-[.8rem]'>Learn More</span>
                <FaLongArrowAltRight />
              </button>
            </div>
            <div className='sm:w-[27%] w-[80%] animate-slideInUp bg-featuresCardDarkGrey border-none rounded-xl flex flex-col h-full  p-6 opacity-0 transition-transform duration-300 ease-in-out'>
              <img className='w-9' src={three} alt='picture' />
              <p className='text-white text-[1.2rem] mb-[1.2rem]'>
                Promoting Unity
              </p>
              <p className='text-white mb-[3rem]'>
                We foster understanding and harmony between different faith
                communities through
              </p>
              <button className='text-white flex items-center justify-center gap-1 border-2 w-32 rounded-[21px] p-2'>
                <span className='text-[.8rem]'>Learn More</span>{' '}
                <FaLongArrowAltRight />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
