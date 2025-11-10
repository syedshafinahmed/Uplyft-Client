import React, { use, useState } from 'react';
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { BeatLoader } from 'react-spinners';
const Register = () => {
  const { createUser, updateUserProfile } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    if (!/(?=.*[a-z])/.test(password) || !/(?=.*[A-Z])/.test(password) || password.length < 6) {
      setPasswordError(
        'Password must have at least 1 uppercase, 1 lowercase, and be 6+ characters long.'
      );
    } else {
      setPasswordError('');
    }
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value;
    const photoURL = event.target.photoURL.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (passwordError) return;
    setLoading(true);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(displayName, photoURL);
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: `Welcome, ${displayName}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location.state || '/');
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed!',
          text: error.message,
        });
      });
  };
  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">
      <BeatLoader color="#4338CA" />
    </div>
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div data-aos="fade-up" className="card bg-violet-50 w-full border-2 border-indigo-800 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='text-[26px] pb-2 text-center font-black bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent'>Unite, Upgrade, Uplyft.</h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" name="displayName" className="input rounded-full focus:border-0 focus:outline-indigo-800" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" name="email" className="input rounded-full focus:border-0 focus:outline-indigo-800" placeholder="Email" />
              <label className="label">Photo URL</label>
              <input type="text" name="photoURL" className="input rounded-full focus:border-0 focus:outline-indigo-800" placeholder="Photo URL" />
              <label className="label">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} className="input rounded-full focus:border-0 focus:outline-indigo-800" name="password" onChange={handlePasswordChange} placeholder="Password" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute z-10 right-8 top-1/2 -translate-y-1/2 text-indigo-800">
                  {showPassword ? (
                    <PiEyeSlashDuotone size={15} />
                  ) : (
                    <PiEyeDuotone size={15} />
                  )}
                </button>
              </div>

              <button className="btn rounded-full text-base bg-linear-to-b from-indigo-800 to-violet-500 text-white mt-3">Register</button>
              {passwordError && (
                <p className="text-red-600 text-sm mt-2 text-center font-medium">
                  {passwordError}
                </p>
              )}
              <p className='mt-2 text-center'>Already have an account? <NavLink to='/login' className='text-indigo-800 font-bold'>Login</NavLink></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;