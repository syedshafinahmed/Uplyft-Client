import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";

const Team = () => {
  const members = [
    { 
      name: 'Shafin Ahmed', 
      img: 'https://i.ibb.co.com/JR2YVTLG/Whats-App-Image-2026-01-03-at-12-08-30-AM.jpg', 
      role: 'Event Coordinator',
      linkedin: '#', 
      instagram: '#' 
    },
    { 
      name: 'Nafin Ahmed', 
      img: 'https://i.ibb.co.com/4njtfg1N/IMG-20240908-004438-350.jpg', 
      role: 'Community Manager',
      linkedin: '#', 
      instagram: '#' 
    },
    { 
      name: 'Anik Rubayet', 
      img: 'https://i.ibb.co.com/yFXsHxFs/Whats-App-Image-2026-01-02-at-11-37-26-PM-1.jpg', 
      role: 'Outreach Specialist',
      linkedin: '#', 
      instagram: '#' 
    },
    { 
      name: 'Tashfiq Talukder', 
      img: 'https://i.ibb.co.com/nqmtr5Lq/Whats-App-Image-2026-01-02-at-11-48-50-PM.jpg', 
      role: 'Social Media Manager',
      linkedin: '#', 
      instagram: '#' 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-800 dark:text-violet-600 text-center mb-6">
        Meet the Uplyft Team
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
        Collaborating as a team to organize impactful events that bring communities together and drive positive change.
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-25">
        {members.map((member, index) => (
          <motion.div
            key={index}
            className="relative w-28 sm:w-32 md:w-40 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {/* Rotating Border Wrapper */}
            <div className="relative rounded-full w-28 sm:w-32 md:w-60 h-28 sm:h-32 md:h-60">
              <div className="absolute inset-0 rounded-full spin-border"></div>
              <div className="absolute inset-1 md:inset-1.5 rounded-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-300 ease-in"
                />
              </div>
            </div>

            {/* Member Info */}
            <div className="text-center mt-3">
              <p className="font-bold text-indigo-800 dark:text-violet-600 text-sm sm:text-base">
                {member.name}
              </p>
              <p className="text-gray-500 dark:text-gray-300 font-semibold text-xs sm:text-sm">{member.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-2 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <SiLinkedin className="text-indigo-800 dark:text-violet-600" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <FaSquareXTwitter className="text-indigo-800 dark:text-violet-600" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
