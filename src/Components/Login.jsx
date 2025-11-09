import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';
import { NavLink } from 'react-router';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-violet-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='text-3xl pb-2 text-center font-black bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent'>Time to Uplyft!</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} className="input" placeholder="Password" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute z-10 right-8 top-1/2 -translate-y-1/2 text-indigo-800">
                {showPassword ? (
                  <PiEyeSlashDuotone size={15} />
                ) : (
                  <PiEyeDuotone size={15} />
                )}
              </button>
            </div>
            <div className='flex justify-center mt-3'><a className="link link-hover text-indigo-800">Forgot password?</a></div>
            <button className="btn text-base border border-indigo-800 text-indigo-800 mt-3">
              <div className='flex items-center gap-3'>
                <FaGoogle />
                <span>Continue with Google</span>
              </div>
            </button>
            <button className="btn text-base bg-linear-to-b from-indigo-800 to-violet-500 text-white mt-3">Login</button>
            <p className='mt-2 text-center'>Don't have an account? <NavLink to='/register' className='text-indigo-800 font-bold'>Register</NavLink></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;