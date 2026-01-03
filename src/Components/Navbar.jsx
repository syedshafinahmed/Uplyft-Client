import React, { use, useEffect, useState } from 'react';
import { RiCommunityFill } from 'react-icons/ri';
import { NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import Switch from '../toggle/Switch';
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light")
  }

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])
  const links =
    <>
      <li><NavLink className='text-indigo-800 dark:text-gray-300 font-bold text-sm' to='/'>Home</NavLink></li>
      <li><NavLink className='text-indigo-800 dark:text-gray-300 font-bold text-sm' to='/about'>About</NavLink></li>
      <li><NavLink className='text-indigo-800 dark:text-gray-300 font-bold text-sm' to='/how-it-works'>How it works</NavLink></li>
      <li><NavLink className='text-indigo-800 dark:text-gray-300 font-bold text-sm' to='/contact'>Contact</NavLink></li>
      <li><NavLink className='text-indigo-800 dark:text-gray-300 font-bold text-sm' to='/upcoming-events'>Upcoming Events</NavLink></li>
    </>
  return (
    <div className="sticky top-0 w-full z-50">
      <div className="backdrop-blur-lg  py-2 md:py-3 px-3 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="dropdown relative lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-sm md:btn-md">
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
            <div>
              <div className='flex'>
                <RiCommunityFill size={30} className='text-indigo-800 dark:text-gray-300 hidden md:block' />
                <NavLink to='/'><span className='bg-indigo-800 dark:bg-gray-300 bg-clip-text text-transparent text-2xl font-black'>Uplyft</span></NavLink>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal gap-3 px-1 font-bold">
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-4">
            <div className='w-full hidden md:block'>
              <div className='flex items-center'>
                <Switch theme={theme} handleTheme={handleTheme}></Switch>
              </div>
            </div>
            {
              user ?
                (<div className="flex items-center gap-3">
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-primary"
                      data-tip={user.displayName || "User"}
                    >
                      <div className="w-8 rounded-full border-2 border-indigo-800 dark:border-violet-600">
                        <img src={user.photoURL || "https://via.placeholder.com/150"} referrerPolicy="no-referrer" alt="User" />
                      </div>
                    </label>

                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-32 text-sm"
                    >
                      {/* <li className='text-violet-500 font-bold text-sm md:text-xl pl-3 py-2 text-start'>{user.displayName}</li> */}
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/'>Home</NavLink></li>
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/dashboard/profile'>Profile</NavLink></li>
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/dashboard'>Dashboard</NavLink></li>
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/joined-events'>Joined Events</NavLink></li>
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/manage-events'>Manage Events</NavLink></li>
                      <li><NavLink className='text-violet-500 font-medium text-xs' to='/create-event'>Create Event</NavLink></li>
                      <li><button
                        onClick={() =>
                          signOutUser()
                            .then(() => {
                              Swal.fire({
                                icon: 'success',
                                title: 'Logged Out!',
                                text: 'You have successfully logged out.',
                                timer: 2000,
                                showConfirmButton: false,
                              });
                            })
                            .catch(err => {
                              Swal.fire({
                                icon: 'error',
                                title: 'Logout Failed!',
                                text: err.message,
                              });
                            })
                        }
                        className="text-violet-500 font-medium text-xs"
                      >
                        Logout
                      </button></li>
                    </ul>
                  </div>
                </div>
                ) :
                (<div className="flex items-center gap-1 md:gap-3">
                  <NavLink to='/login'><button className='btn btn-xs md:btn-sm border-none font-bold text-base-200 rounded-full text-xs w-20 bg-linear-to-b from-indigo-800 to-violet-500'>Login</button></NavLink>
                  <NavLink to='/register'><button className='btn btn-xs md:btn-sm border-none font-bold text-base-200 rounded-full text-xs w-20 bg-linear-to-b from-indigo-800 to-violet-500'>Register</button></NavLink>
                </div>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;