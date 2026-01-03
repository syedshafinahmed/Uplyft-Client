import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      className="py-15 px-4"
    >
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-2 px-5">

        {/* Info Card */}
        <motion.div
          className="relative p-8 sm:p-10 bg-indigo-800/90 dark:bg-violet-600/80 text-white dark:text-gray-900 rounded-3xl shadow-2xl overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute w-28 h-28 bg-white/10 rounded-full -top-10 -left-10 animate-bounce-slow"></div>
          <div className="absolute w-28 h-28 bg-white/10 rounded-full -bottom-10 -right-10 animate-bounce-slow-reverse"></div>

          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Let's Talk
          </h2>
          <p className="mb-6 text-sm sm:mb-8 text-white dark:text-gray-900 leading-relaxed">
            Questions? Feedback? Or just want to say hi? Reach out and we'll get
            back to you in no time.
          </p>

          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 flex items-center gap-2">
              <FaClock /> Opening Hours
            </h3>
            <ul className="space-y-1 text-sm text-white dark:text-gray-900">
              <li>Monday - Friday: 10:00 AM - 10:00 PM</li>
              <li>Saturday: 10:00 AM - 11:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          <div className="space-y-1  mb-6">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-white dark:text-gray-900 text-lg" />
              <span>+880 1630216932</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-white dark:text-gray-900 text-lg" />
              <span>info@uplyft.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white dark:text-gray-900 text-lg" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>


        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="relative p-8 sm:p-10 bg-base-200 rounded-3xl shadow-2xl"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8 text-indigo-800 dark:text-violet-600">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl border border-indigo-200 dark:border-violet-500/40 bg-indigo-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl border border-indigo-200 dark:border-violet-500/40 bg-indigo-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none transition"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl border border-indigo-200 dark:border-violet-500/40 bg-indigo-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-600 outline-none h-20 resize-none transition"
            ></textarea>

            <motion.button
              type="submit"
              className="w-full py-3 sm:py-4 rounded-2xl bg-indigo-800 dark:bg-violet-600 text-white dark:text-gray-900 text-lg shadow-md hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        @keyframes bounce-slow-reverse {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow-reverse {
          animation: bounce-slow-reverse 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
