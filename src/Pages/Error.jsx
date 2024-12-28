import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";


const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-red-100">
      {/* Animated Icon */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 2,
        }}
      >
        {/* Using Sad Icon */}
        <FaSadTear className="w-36 h-36 text-red-600" />
      </motion.div>

      {/* Error Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-red-700 mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Oops! Page Not Found
      </motion.h1>

      {/* Error Description */}
      <motion.p
        className="text-gray-600 text-center mb-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        The page you’re looking for doesn’t exist or might have been moved.
      </motion.p>

      {/* Back to Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-700 transition duration-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go Back Home
      </motion.button>
    </div>
  );
};

export default Error;
