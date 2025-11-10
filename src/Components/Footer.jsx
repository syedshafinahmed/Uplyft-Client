import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiCommunityFill } from "react-icons/ri";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-indigo-800 via-indigo-600 to-violet-500 text-gray-100 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-base-200 pb-10">
        <div>
          <div>
            <div className='flex'>
              <RiCommunityFill size={40} className='text-base-200' />
              <NavLink to='/'><span className='text-base-200 text-4xl font-black'>Uplyft</span></NavLink>
            </div>
          </div>
          <p className="text-base-200 font-medium leading-relaxed mt-5 text-justify w-full md:w-72">
            Empowering communities through events, collaboration, and awareness.
            Join us to make a positive social impact together.
          </p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/share/172vjragcm/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-base-200 text-base-200 hover:bg-base-200 hover:text-indigo-900 transition-all duration-300">        <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/__shafin__ahmed?igsh=mta0agj0odbqawv2yq==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-base-200 text-base-200 hover:bg-base-200 hover:text-indigo-900 transition-all duration-300">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/syed-shafin-ahmed-760533351/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-base-200 text-base-200 hover:bg-base-200 hover:text-indigo-900 transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-base-200 text-base-200 hover:bg-base-200 hover:text-indigo-900 transition-all duration-300">
              <FaXTwitter />
            </a>

          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-base-200 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-base-200">
            <li><a href="#" className="hover:underline transition-all">Home</a></li>
            <li><NavLink className='hover:underline transition-all' to='/upcoming-events'>Upcoming Events</NavLink></li>
            <li><NavLink className='hover:underline transition-all' to='/joined-events'>Joined Events</NavLink></li>
            <li><NavLink className='hover:underline transition-all' to='/manage-events'>Manage Events</NavLink></li>
            <li><NavLink className='hover:underline transition-all' to='/create-event'>Create Event</NavLink></li>

          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-base-200 mb-4">Contact Us</h3>
          <p className="text-base-200 font-medium">Dhaka, Bangladesh</p>
          <p className="text-base-200 font-medium">Email: shafinahmed.cse@gmail.com</p>
          <p className="text-base-200 font-medium">Phone: +880 1630216932</p>
        </div>
      </div>

      <div className="text-center pt-6 text-base-200 text-sm">
        © {new Date().getFullYear()} <span className="font-bold text-base-200">Uplyft</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
