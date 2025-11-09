import React from "react";
import { motion } from "framer-motion";
import bannerImage from '../assets/banner.png'
import { NavLink } from "react-router";
const Banner = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-5 pb-20 px-6 bg-linear-to-br from-indigo-800 via-violet-600 to-violet-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/20 to-transparent pointer-events-none"></div>


      <motion.img
        src={bannerImage}
        alt="Community illustration"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 md:w-72 mb-5 drop-shadow-lg"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
      >
        Act locally, impact globally.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-lg md:text-xl max-w-2xl mb-8 text-white/90"
      >
        Be part of real change. Join, create, and track social impact events that make our community stronger.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex gap-4"
      >
        <NavLink to='/create-event'><button className="bg-white text-violet-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition-all">
          Create Event
        </button></NavLink>
        <NavLink to='/upcoming-events'><button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white/10 transition-all">
          Explore Events
        </button></NavLink>
      </motion.div>
    </section>
  );
};

export default Banner;
