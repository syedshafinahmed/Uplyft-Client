import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaSearch,
  FaCalendarPlus,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discover Events",
    desc: "Find meaningful events and causes that align with your passion.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Discover a wide range of community-driven events tailored to your interests. Explore causes, browse curated listings, and stay informed about opportunities where your presence can make a real difference. Whether it's volunteering, awareness campaigns, or local initiatives, finding the right event is effortless and inspiring.",
  },
  {
    icon: <FaCalendarPlus />,
    title: "Create & Organize",
    desc: "Host events and manage everything effortlessly.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Plan, create, and organize events with powerful yet simple tools. Manage schedules, registrations, volunteers, and logistics in one place. From small meetups to large-scale initiatives, Uplyft helps you stay organized and focused on delivering impactful experiences.",
  },
  {
    icon: <FaUsers />,
    title: "Collaborate",
    desc: "Work with volunteers, organizers, and communities.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "Collaboration is at the heart of impact. Connect with volunteers, organizers, and partners seamlessly. Coordinate tasks, communicate effectively, and build strong community networks that amplify reach and strengthen collective efforts.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Make an Impact",
    desc: "Turn participation into real social change.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
    longDesc:
      "See the real-world results of your actions. Track participation, measure outcomes, and share success stories that inspire others. Uplyft transforms collective efforts into lasting social impact, empowering communities to grow and thrive together.",
  },
];

const How = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="text-start mb-10">
            <h1 className="text-4xl sm:text-5xl font-black text-indigo-800 dark:text-violet-600">
              How Uplyft Works
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm mt-4 max-w-3xl">
              A simple journey from discovering events to creating real community
              impact.
            </p>
          </div>

          {/* Morphing Icon with Circular Progress */}
          <div className="flex justify-center mb-10">
            <div className="relative w-28 h-28">
              <svg
                className="absolute inset-0 -rotate-90"
                width="112"
                height="112"
                viewBox="0 0 112 112"
              >
                <circle
                  cx="56"
                  cy="56"
                  r="50"
                  strokeWidth="6"
                  className="fill-none stroke-indigo-200 dark:stroke-gray-700"
                />
                <motion.circle
                  cx="56"
                  cy="56"
                  r="50"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="fill-none stroke-indigo-800 dark:stroke-violet-600"
                  strokeDasharray={2 * Math.PI * 50}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 50 *
                      (1 - (activeStep + 1) / steps.length),
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.6, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="w-20 h-20 rounded-full bg-transparent flex items-center justify-center text-5xl text-indigo-800 dark:text-violet-600"
                  >
                    {steps[activeStep].icon}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveStep(index)}
              className={`relative cursor-pointer p-6 rounded-2xl border transition-all
        ${activeStep === index
                  ? "bg-white dark:bg-gray-800 border-indigo-800 dark:border-violet-600 shadow-xl scale-105"
                  : "bg-white/70 dark:bg-gray-800/50 border-transparent hover:shadow-lg"
                }`}
              whileHover={{ y: -6 }}
            >
              <h3 className="font-black text-xl text-end text-indigo-800 dark:text-violet-600">
                {step.title}
              </h3>
              <div
                className="absolute -top-5 left-5 w-10 h-10 
             text-indigo-800 dark:text-violet-600 border border-indigo-800 dark:border-violet-600 rounded-xl bg-white dark:bg-gray-900
             flex items-center justify-center text-2xl shadow-xl"
              >
                {step.icon}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Step Detail Section */}
        <div className="max-w-7xl mx-auto mt-10 mb-20 px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-tl-2xl rounded-bl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl">
                <motion.img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-64 sm:h-64 md:h-64 object-cover"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Text */}
              <div className="px-4 sm:px-6 md:px-8 py-4 md:pr-20">
                <h2 className="text-2xl font-black text-indigo-800 dark:text-violet-600 mb-3 text-center md:text-left">
                  {steps[activeStep].title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-justify leading-relaxed ">
                  {steps[activeStep].longDesc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default How;
