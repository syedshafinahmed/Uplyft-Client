import React from 'react';
import { RiCommunityFill } from 'react-icons/ri';
import { NavLink } from 'react-router';
const Navbar = () => {
  const links =
    <>
      <li><NavLink className='text-indigo-600 font-medium' to='/'>Home</NavLink></li>
      <li><NavLink className='text-indigo-600 font-medium' to='/upcoming-events'>Upcoming Events</NavLink></li>
      <li><NavLink className='text-indigo-600 font-medium' to='/joined-events'>Joined Events</NavLink></li>
      <li><NavLink className='text-indigo-600 font-medium' to='/manage-events'>Manage Events</NavLink></li>
      <li><NavLink className='text-indigo-600 font-medium' to='/create-events'>Create Events</NavLink></li>
    </>
  return (
    <div className="sticky top-0 w-full z-50">
      <div className="bg-gray-200 backdrop-blur-lg border-b border-white/10 shadow-sm py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="dropdown relative lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-indigo-800" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <ul tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100/80 backdrop-blur-md rounded-box mt-3 w-52 p-2 shadow">
                {links}
              </ul>
            </div>
            <a className="text-3xl font-semibold tracking-tight md:font-black bg-linear-to-r from-indigo-800 to-indigo-500 bg-clip-text text-transparent">
              <div className='flex'>
                <RiCommunityFill size={40} className='text-indigo-700' />
                <span>Uplyft</span>
              </div>
            </a>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold">
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <NavLink to='/login'><button className='btn text-white text-xs w-20 bg-linear-to-r from-indigo-800 to-indigo-500'>Login</button></NavLink>
            <NavLink to='/register'><button className='btn text-white text-xs w-20 bg-linear-to-r from-indigo-800 to-indigo-500'>Register</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;