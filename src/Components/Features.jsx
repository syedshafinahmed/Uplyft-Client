import React from "react";
import { motion } from "framer-motion";
import { FaPlusCircle, FaCalendarAlt, FaTasks, FaUserPlus } from "react-icons/fa";

const features = [
  {
    icon: <FaPlusCircle className="text-indigo-800 text-4xl mb-4" />,
    title: "Create Events",
    description: "Easily create social development events and invite your community to join and participate.",
  },
  {
    icon: <FaCalendarAlt className="text-indigo-800 text-4xl mb-4" />,
    title: "Upcoming Events",
    description: "Stay updated with a list of upcoming events in your area and plan your participation.",
  },
  {
    icon: <FaTasks className="text-indigo-800 text-4xl mb-4" />,
    title: "Manage Events",
    description: "Track, edit, and manage the events you’ve created, ensuring smooth organization.",
  },
  {
    icon: <FaUserPlus className="text-indigo-800 text-4xl mb-4" />,
    title: "Join Events",
    description: "Browse and join events that match your interests and contribute to community impact.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-indigo-800 mb-6"
      >
        Explore Our Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 font-medium max-w-2xl mx-auto mb-12"
      >
        Our platform empowers you to create, manage, join, and track events — making social impact easy and engaging.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-violet-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center">
              {feature.icon}
              <h3 className="text-xl font-semibold text-indigo-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 font-medium">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
