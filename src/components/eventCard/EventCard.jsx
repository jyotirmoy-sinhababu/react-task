import React from 'react';
import event from '../../assets/event-12.webp';
import buddha from '../../assets/event-budha.jpeg';
import diwali from '../../assets/event-diwali.webp';

import { SlCalender } from 'react-icons/sl';
import { FaClock } from 'react-icons/fa6';
import { IoMdStar } from 'react-icons/io';

const EventCard = () => {
  return (
    <>
      <div className='flex sm:flex-row flex-col mt-[3%] justify-around items-center sm:gap-0 gap-7 '>
        <div className=' animate-fadeInUp bg-white rounded-lg shadow-md flex flex-col gap-0 w-[19rem] h-[455px] opacity-0 overflow-hidden p-2 transition-transform duration-300 ease-out'>
          <img src={event} alt='rama' className='w-[18rem] rounded' />
          <div className='pl-3'>
            <div
              style={{
                backgroundColor: 'rgba(220, 252, 231, 0.5)',
                color: '#166534',
              }}
              className='w-[87px] mt-3 flex justify-center items-center rounded mb-4'
            >
              <p className='p-1 rounded-lg '>Free</p>
            </div>
            <h1 className='font-[600] text-[1.25rem] font-vollkorn'>
              Rama Navami Festival 2025
            </h1>
            <div className='flex items-center gap-2 font-vollkorn'>
              <SlCalender />{' '}
              <p className='text-[500] text-[1rem]'>
                Monday, March 17, 2025 - 19 Wednesday
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock />
              <p className='text-[500] text-[.8rem]'>
                4:00 PM IST - 10:00 PM IST
              </p>
            </div>
            <div className='flex  items-center gap-2 mt-5'>
              <IoMdStar className='text-[#d6c03f]' />
              <p className='text-blue-900 text-[15px]'>
                Join others in this event
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mt-7 bg-slate-900 mx-1 h-[41px] rounded'>
            <button className='text-white text-[0.9rem] font-abril '>
              Event Details
            </button>
          </div>
        </div>
        <div className=' animate-fadeInUp bg-white rounded-lg shadow-md flex flex-col gap-0 w-[19rem] h-[455px] opacity-0 overflow-hidden p-2 transition-transform duration-300 ease-out'>
          <img
            src={buddha}
            alt='rama'
            className='w-[18rem] h-[11rem] rounded'
          />
          <div className='pl-3'>
            <div
              style={{
                backgroundColor: 'rgba(220, 252, 231, 0.5)',
                color: '#166534',
              }}
              className='w-[87px] mt-3 flex justify-center items-center rounded mb-4'
            >
              <p className='p-1 rounded-lg '>Free</p>
            </div>
            <h1 className='font-[600] text-[1.25rem] font-vollkorn'>
              Rama Navami Festival 2025
            </h1>
            <div className='flex items-center gap-2 font-vollkorn'>
              <SlCalender />{' '}
              <p className='text-[500] text-[1rem]'>
                Monday, March 17, 2025 - 19 Wednesday
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock />
              <p className='text-[500] text-[.8rem]'>
                4:00 PM IST - 10:00 PM IST
              </p>
            </div>
            <div className='flex  items-center gap-2 mt-5'>
              <IoMdStar className='text-[#d6c03f]' />
              <p className='text-blue-900 text-[15px]'>
                Join others in this event
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mt-7 bg-slate-900 mx-1 h-[41px] rounded'>
            <button className='text-white text-[0.9rem] font-abril '>
              Event Details
            </button>
          </div>
        </div>
        <div className=' animate-fadeInUp bg-white rounded-lg shadow-md flex flex-col gap-0 w-[19rem] h-[455px] opacity-0 overflow-hidden p-2 transition-transform duration-300 ease-out'>
          <img
            src={diwali}
            alt='rama'
            className='w-[18rem] h-[11rem] rounded'
          />
          <div className='pl-3'>
            <div
              style={{
                backgroundColor: 'rgba(220, 252, 231, 0.5)',
                color: '#166534',
              }}
              className='w-[87px] mt-3 flex justify-center items-center rounded mb-4'
            >
              <p className='p-1 rounded-lg '>Free</p>
            </div>
            <h1 className='font-[600] text-[1.25rem] font-vollkorn'>
              Rama Navami Festival 2025
            </h1>
            <div className='flex items-center gap-2 font-vollkorn'>
              <SlCalender />{' '}
              <p className='text-[500] text-[1rem]'>
                Monday, March 17, 2025 - 19 Wednesday
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock />
              <p className='text-[500] text-[.8rem]'>
                4:00 PM IST - 10:00 PM IST
              </p>
            </div>
            <div className='flex  items-center gap-2 mt-5'>
              <IoMdStar className='text-[#d6c03f]' />
              <p className='text-blue-900 text-[15px]'>
                Join others in this event
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mt-7 bg-slate-900 mx-1 h-[41px] rounded'>
            <button className='text-white text-[0.9rem] font-abril '>
              Event Details
            </button>
          </div>
        </div>
        <div className=' animate-fadeInUp bg-white rounded-lg shadow-md flex flex-col gap-0 w-[19rem] h-[455px] opacity-0 overflow-hidden p-2 transition-transform duration-300 ease-out'>
          <img src={event} alt='rama' className='w-[18rem] rounded' />
          <div className='pl-3'>
            <div
              style={{
                backgroundColor: 'rgba(220, 252, 231, 0.5)',
                color: '#166534',
              }}
              className='w-[87px] mt-3 flex justify-center items-center rounded mb-4'
            >
              <p className='p-1 rounded-lg '>Free</p>
            </div>
            <h1 className='font-[600] text-[1.25rem] font-vollkorn'>
              Rama Navami Festival 2025
            </h1>
            <div className='flex items-center gap-2 font-vollkorn'>
              <SlCalender />{' '}
              <p className='text-[500] text-[1rem]'>
                Monday, March 17, 2025 - 19 Wednesday
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock />
              <p className='text-[500] text-[.8rem]'>
                4:00 PM IST - 10:00 PM IST
              </p>
            </div>
            <div className='flex  items-center gap-2 mt-5'>
              <IoMdStar className='text-[#d6c03f]' />
              <p className='text-blue-900 text-[15px]'>
                Join others in this event
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center mt-7 bg-slate-900 mx-1 h-[41px] rounded'>
            <button className='text-white text-[0.9rem] font-abril '>
              Event Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
