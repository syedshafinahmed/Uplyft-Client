import React from 'react';
import { motion } from 'framer-motion';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import portrait from '../assets/portrait.avif';
import team from '../assets/team.avif';
import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';
import l8 from '../assets/l8.png';
import { Link, NavLink } from 'react-router';
import { IoMail } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto mt-10 px-10 mb-20 md:px-0'>
      <div className='flex flex-col lg:flex-row justify-between gap-10'>

        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1 space-y-7'
        >
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-indigo-800 dark:text-violet-600'>
            Act Locally,<br /> Impact Globally.
          </h1>

          <p className='text-gray-600 dark:text-gray-300 font-semibold text-justify pr-0 md:pr-15 text-sm sm:text-base md:text-lg'>
            Be part of meaningful change by connecting with a community dedicated to making a real impact. Join and create social events, support important causes, and actively participate in initiatives that strengthen communities, inspire collaboration, and drive positive change at both local and broader levels.
          </p>

          <div className='flex gap-2 md:gap-3'>
            <NavLink to='/create-event'>
              <button className="bg-indigo-800 dark:bg-violet-600 text-base-200 font-semibold px-3 md:px-6 py-2 md:py-3 text-xs md:text-base rounded-full shadow-lg hover:scale-105 transition-all">
                Create Event
              </button>
            </NavLink>
            <NavLink to='/upcoming-events'>
              <button className="border border-indigo-800 dark:border-violet-600 font-black text-indigo-800 dark:text-violet-600 px-3 md:px-6 py-2 md:py-3 text-xs md:text-base rounded-full hover:scale-105 transition-all">
                Explore Events
              </button>
            </NavLink>
          </div>

          <div>
            <p className='text-gray-600 dark:text-gray-300 font-black text-sm sm:text-base'>Powered By</p>
            <div className='flex flex-wrap gap-3 mt-3'>
              {[l5, l8, l1, l6, l7, l2, l3, l4].map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt=""
                  className='h-12'
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-1 flex flex-col gap-1'
        >
          <div className='flex flex-col sm:flex-row gap-3'>

            <div className='flex-1'>
              <div className='bg-indigo-800 dark:bg-violet-600 p-8 sm:p-10 rounded-xl max-w-full'>
                <div className='flex relative overflow-hidden rounded-full'>
                  <img className='hover:scale-105 transition-transform ease-out duration-300 w-12 h-12 sm:w-17 sm:h-17 rounded-full object-cover border-2 border-indigo-800 dark:border-violet-600' src={one} alt="" />
                  <img className='hover:scale-105 transition-transform ease-out duration-300 w-12 h-12 sm:w-17 sm:h-17 -ml-3 sm:-ml-4 rounded-full object-cover border-2 border-indigo-800 dark:border-violet-600' src={two} alt="" />
                  <img className='hover:scale-105 transition-transform ease-out duration-300 w-12 h-12 sm:w-17 sm:h-17 -ml-3 sm:-ml-4 rounded-full object-cover border-2 border-indigo-800 dark:border-violet-600' src={three} alt="" />
                  <img className='hover:scale-105 transition-transform ease-out duration-300 w-12 h-12 sm:w-17 sm:h-17 -ml-3 sm:-ml-4 rounded-full object-cover border-2 border-indigo-800 dark:border-violet-600' src={four} alt="" />
                </div>
                <p className='font-black text-base-200 text-2xl sm:text-3xl mt-4'>3000+</p>
                <p className='text-base-100 font-semibold text-xs'>
                  Trusted by over 3,000 people who believe in making a real impact.
                </p>
              </div>

              <Link to='/contact' className='bg-indigo-800 dark:bg-violet-600 p-4 sm:p-5 rounded-xl text-base-200 font-black text-xl sm:text-2xl flex justify-center mt-3'>
                <span className='flex gap-2 items-center hover:scale-110 transition-all duration-300 ease-out'>
                  <IoMail /> Contact Us
                </span>
              </Link>
            </div>

            <div className='rounded-xl overflow-hidden flex-1'>
              <motion.img
                src={portrait}
                alt=""
                className='rounded-xl object-cover h-60 sm:h-79 w-full hover:scale-110 transition-transform ease-out duration-300'
              />
            </div>
          </div>

          <div className="relative mt-3">
            <motion.div
              className="absolute -top-10 font-semibold right-3 z-5 bg-indigo-800 dark:bg-violet-600 text-base-200 px-3 py-3 rounded-lg text-xs text-center shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <span className="font-black text-2xl sm:text-3xl">200+</span><br />
              Successful Events
            </motion.div>
            <div className="rounded-xl overflow-hidden">
              <motion.img
                src={team}
                alt=""
                className="rounded-xl object-cover w-full h-44 sm:h-50 hover:scale-110 transition-transform ease-out duration-300"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;
