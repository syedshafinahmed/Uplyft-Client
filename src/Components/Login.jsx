import React, { use, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { BeatLoader } from 'react-spinners';
import Swal from 'sweetalert2';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogIn = (event) => {
    event.preventDefault();
    setLoading(true);
    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        setLoading(false);
        event.target.reset();

        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          text: `Welcome back, ${result.user.displayName || 'User'}!`,
          timer: 2000,
          showConfirmButton: false,
        });

        navigate(location.state || '/');
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!',
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        setLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Google Sign-In Successful!',
          text: `Welcome, ${result.user.displayName}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location.state || '/');
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Google Sign-In Failed!',
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
      <div data-aos="fade-up" className="card bg-violet-50 border-2 border-indigo-800 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className='text-3xl pb-2 text-center font-black bg-linear-to-b from-indigo-800 to-violet-500 bg-clip-text text-transparent'>Time to Uplyft!</h1>
          <form onSubmit={handleLogIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input rounded-full focus:border-0 focus:outline-indigo-800" placeholder="Email" required />

              <label className="label">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" className="input rounded-full focus:border-0 focus:outline-indigo-800" placeholder="Password" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute z-10 right-8 top-1/2 -translate-y-1/2 text-indigo-800">
                  {showPassword ? (
                    <PiEyeSlashDuotone size={15} />
                  ) : (
                    <PiEyeDuotone size={15} />
                  )}
                </button>
              </div>
              <div className='flex justify-center mt-3'><a className="link link-hover text-indigo-800">Forgot password?</a></div>

              <button onClick={handleGoogleSignIn} className="btn text-base border border-indigo-800 text-indigo-800 mt-3 rounded-full">
                <div className='flex items-center gap-3'>
                  <FaGoogle />
                  <span>Continue with Google</span>
                </div>
              </button>

              <button className="btn rounded-full text-base bg-linear-to-b from-indigo-800 to-violet-500 text-base-200 mt-3">Login</button>
              <p className='mt-2 text-center'>Don't have an account? <NavLink to='/register' className='text-indigo-800 font-bold'>Register</NavLink></p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;