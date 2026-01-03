import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import about from "../assets/about.jpg";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const stats = [
    { count: 120, label: "Events Organized", delay: 0.1 },
    { count: 3000, label: "Participants", delay: 0.2 },
    { count: 50, label: "Cities Covered", delay: 0.3 },
    { count: 350, label: "Organizers Joined", delay: 0.4 },
  ];

  if (loading) return <AboutSkeleton />;

  return (
    <div className="min-h-screen bg-base-200 pb-32 relative">
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img src={about} alt="About Uplyft" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-indigo-800/90 to-indigo-800/90 dark:via-violet-600/90 dark:to-violet-600/90" />

        <h1 className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-6xl font-black text-white dark:text-gray-900 z-10 text-center px-4">
          About Uplyft
        </h1>

        <div className="absolute -bottom-24 md:-bottom-16 left-1/2 -translate-x-1/2 w-full px-4 max-w-7xl z-20">
          <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible scrollbar-hide">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                className="bg-base-100 dark:bg-gray-900 p-6 rounded-xl shadow-2xl text-center min-w-[240px] md:min-w-0"
              >
                <div className="text-indigo-800 dark:text-violet-600 text-4xl font-bold">
                  <CountUp end={stat.count} duration={2} />+
                </div>
                <div className="text-gray-700 dark:text-gray-300 mt-2 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-40 md:h-24" />

      {/* SUCCESS STORIES */}
      <div className="max-w-7xl mx-auto px-2">
        <h1 className="font-black text-indigo-800 dark:text-violet-600 text-3xl sm:text-4xl md:text-5xl mt-10 mb-10">
          Our Success Stories
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="grid gap-4">
            <MotionImage h="h-64 sm:h-80 md:h-96" src="https://i.ibb.co.com/WvgTjHxW/premium-photo-1664301693251-bf47e081b79b.avif" />
            <MotionImage h="h-48 sm:h-56 md:h-64" src="https://i.ibb.co.com/jZfF9wNT/premium-photo-1733306621909-1d63c088a93e.avif" />
            <MotionImage h="h-56 sm:h-64 md:h-72" src="https://i.ibb.co.com/C5NnVr2w/premium-photo-1705882849180-ce62b3d1a2de.avif" />
          </div>

          {/* Column 2 */}
          <div className="grid gap-4">
            <MotionImage h="h-56 sm:h-64 md:h-76" src="https://i.ibb.co.com/FbjHkWyr/premium-photo-1663089162887-403fb53108cd.avif" />
            <MotionImage h="h-64 sm:h-80 md:h-107" src="https://i.ibb.co.com/8nqtqN6W/premium-photo-1679547203075-0e38c2bc51cc.avif" />
            <MotionImage h="h-40 sm:h-44 md:h-48" src="https://i.ibb.co.com/JRR8djpM/premium-photo-1665990294372-a9720725afaa.avif" />
          </div>

          {/* Column 3 */}
          <div className="grid gap-4">
            <MotionImage h="h-64 sm:h-80 md:h-107" src="https://i.ibb.co.com/Kj9XF8RH/premium-photo-1681064887301-d393d8b4e2c1.avif" />
            <MotionImage h="h-48 sm:h-56 md:h-60" src="https://i.ibb.co.com/VYYvpB1c/premium-photo-1663100464641-b49622bf1fc0.avif" />
            <MotionImage h="h-48 sm:h-56 md:h-65" src="https://i.ibb.co.com/wh98Q9CN/premium-photo-1705717318393-fc1b452f6de8.avif" />
          </div>

          {/* Column 4 */}
          <div className="grid gap-4">
            <MotionImage h="h-40 sm:h-48 md:h-53" src="https://i.ibb.co.com/n5HZwQC/premium-photo-1679547202572-bb3a34c54130.avif" />
            <MotionImage h="h-72 sm:h-96 md:h-129" src="https://i.ibb.co.com/S1yNqpB/premium-photo-1679862571044-a7f2494d09a7.avif" />
            <MotionImage h="h-40 sm:h-44 md:h-51" src="https://i.ibb.co.com/bRRfmnLv/premium-photo-1683141173692-aba4763bce41.avif" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MotionImage = ({ src, h }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="rounded-xl overflow-hidden"
  >
    <img
      src={src}
      alt=""
      className={`${h} w-full rounded-xl hover:scale-110 transition-transform duration-300 object-cover`}
    />
  </motion.div>
);


const AboutSkeleton = () => (
  <div className="min-h-screen bg-base-200 animate-pulse">
    <div className="w-full h-[50vh] md:h-[60vh] bg-gray-300 dark:bg-gray-700" />

    <div className="-mt-24 px-4 max-w-7xl mx-auto flex md:grid md:grid-cols-4 gap-4 overflow-x-auto">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-28 min-w-60 md:min-w-0 bg-gray-300 dark:bg-gray-700 rounded-xl" />
      ))}
    </div>

    <div className="mt-32 max-w-7xl mx-auto px-2">
      <div className="h-10 w-64 bg-gray-300 dark:bg-gray-700 rounded mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl" />
        ))}
      </div>
    </div>
  </div>
);

export default About;
