import React, { useState, useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "How do I create an assignment?",
    answer:
      "Navigate to the 'Create Assignment' page after logging in, and fill out the form with the assignment details.",
  },
  {
    question: "Can I evaluate my own assignments?",
    answer: "No, you can only evaluate assignments submitted by your friends.",
  },
  {
    question: "Is this platform free to use?",
    answer: "Yes, the Group Study platform is completely free for all users.",
  },
];

const Faq = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      } px-8 py-16 transition-all`}
    >
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden border-l-4 ${
                isDarkMode
                  ? "border-teal-400 bg-gray-900 text-white"
                  : "border-blue-500 bg-white text-gray-900"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold transition-all focus:outline-none"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-xl text-teal-400" />
                ) : (
                  <FaChevronDown className="text-xl text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p
                      className={`text-md ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
