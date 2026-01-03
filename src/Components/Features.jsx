// import React from "react";
// import { motion } from "framer-motion";
// import { FaPlusCircle, FaCalendarAlt, FaTasks, FaUserPlus } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaPlusCircle className="text-indigo-800 text-4xl mb-4" />,
//     title: "Create Events",
//     description: "Easily create social development events and invite your community to join and participate.",
//   },
//   {
//     icon: <FaCalendarAlt className="text-indigo-800 text-4xl mb-4" />,
//     title: "Upcoming Events",
//     description: "Stay updated with a list of upcoming events in your area and plan your participation.",
//   },
//   {
//     icon: <FaTasks className="text-indigo-800 text-4xl mb-4" />,
//     title: "Manage Events",
//     description: "Track, edit, and manage the events you’ve created, ensuring smooth organization.",
//   },
//   {
//     icon: <FaUserPlus className="text-indigo-800 text-4xl mb-4" />,
//     title: "Join Events",
//     description: "Browse and join events that match your interests and contribute to community impact.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="py-20 px-6 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-5xl font-bold text-indigo-800 mb-6"
//       >
//         Explore Our Features
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.6 }}
//         className="text-gray-600 font-medium max-w-2xl mx-auto mb-12"
//       >
//         Our platform empowers you to create, manage, join, and track events — making social impact easy and engaging.
//       </motion.p>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
//         {features.map((feature, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             whileHover={{ scale: 1.05 }}
//             // transition={{ duration: 0.6 }}
//             className="bg-violet-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
//           >
//             <div className="flex flex-col items-center">
//               {feature.icon}
//               <h3 className="text-xl font-semibold text-indigo-800 mb-2">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600 font-medium">{feature.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;











import React from "react";
import { motion } from "framer-motion";
import { FaPlusCircle, FaCalendarAlt, FaTasks, FaUserPlus } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";

const features = [
  {
    icon: MdOutlineLibraryAdd,
    title: "Create Events",
    description: "Easily create social development events and invite your community to join and participate.",
  },
  {
    icon: FaCalendarAlt,
    title: "Upcoming Events",
    description: "Stay updated with a list of upcoming events in your area and plan your participation.",
  },
  {
    icon: FaTasks,
    title: "Manage Events",
    description: "Track, edit, and manage the events you’ve created, ensuring smooth organization.",
  },
  {
    icon: FaUserPlus,
    title: "Join Events",
    description: "Browse and join events that match your interests and contribute to community impact.",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-800 dark:text-violet-600 mb-6"
      >
        Explore Our Features
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto mb-16"
      >
        Our platform empowers you to create, manage, join, and track events — making social impact easy and engaging.
      </motion.p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              className="relative p-8 rounded-3xl backdrop-blur-sm bg-indigo-800/20 dark:bg-black/30 shadow-lg hover:shadow-2xl transition-all cursor-pointer flex flex-col items-center text-center"
            >
              {/* Floating Icon */}
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="bg-indigo-800/20 dark:bg-violet-600/20 p-3 rounded-full mb-6 shadow-md flex items-center justify-center transition-all"
              >
                <Icon className="text-indigo-800 dark:text-violet-600 text-4xl" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-700 to-indigo-900 dark:from-violet-500 dark:to-violet-700 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {feature.description}
              </p>

              {/* Decorative floating circle */}
              <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-indigo-100/20 dark:bg-violet-600/20 blur-2xl pointer-events-none"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;

