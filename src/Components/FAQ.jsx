import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What is Uplyft?",
    answer:
      "Uplyft is a platform to discover, join, and manage events in your city. You can explore upcoming events, join them, and track your participation.",
  },
  {
    question: "How do I join an event?",
    answer:
      "To join an event, navigate to the event details page and click on 'Join Event'. Make sure you are logged in first.",
  },
  {
    question: "Can I create my own events?",
    answer:
      "Yes! Registered users can create events by filling out the event creation form available on the dashboard.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "Currently, Uplyft does not charge a subscription fee. Some premium events may have separate charges as indicated.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact our support team via the 'Contact' section in the homepage or by emailing support@uplyft.com.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20 px-5 md:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-800 dark:text-violet-600 mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              className="bg-base-100 dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-indigo-800/20 dark:border-violet-600/20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-indigo-800 dark:text-violet-600 font-semibold text-lg md:text-xl">
                  {faq.question}
                </span>

                {/* Smooth rotating icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="text-indigo-800 dark:text-violet-600"
                >
                  <FiChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-700 dark:text-gray-300 text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
