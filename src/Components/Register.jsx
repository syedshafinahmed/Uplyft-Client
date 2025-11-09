import React, { useState } from 'react';
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';
import { NavLink } from 'react-router';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-violet-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='text-2xl pb-2 text-center font-black bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent'>Unite, Upgrade, Uplyft.</h1>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
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

            <button className="btn text-base bg-linear-to-b from-indigo-800 to-violet-500 text-white mt-3">Register</button>
            <p className='mt-2 text-center'>Already have an account? <NavLink to='/login' className='text-indigo-800 font-bold'>Login</NavLink></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;