import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LatestAssignments = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch("https://online-group-study-server-umber.vercel.app/assignments");
        if (!response.ok) throw new Error("Failed to fetch assignments");
        const data = await response.json();
        setAssignments(data.slice(-6)); // Get last 6 assignments
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <section className={`py-16 ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="container mx-auto px-8">
        {/* Title */}
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
          Latest Assignments
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <motion.div
              key={assignment._id}
              className={`w-full rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 
                ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", transition: { duration: 0.2 } }} 
              whileTap={{ scale: 0.95 }}
            >
              {/* Thumbnail */}
              <motion.img
                className="w-full h-60 object-cover rounded-t-2xl"
                src={assignment.thumbnail}
                alt={assignment.title}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Card Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                  {assignment.title}
                </h3>

                {/* Description */}
                <p className={`mt-3 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {assignment.description.slice(0, 80)}...
                </p>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <Link to={`/assignments`}>
                    <motion.button
                      className={`px-6 py-2 text-lg font-medium border-2 rounded-lg transition-all duration-300 
                        ${isDarkMode 
                          ? "text-white border-white hover:bg-white hover:text-black" 
                          : "text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white"
                        }`}
                      whileHover={{ scale: 1.1, rotate: -5, transition: { duration: 0.15 } }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      See More
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestAssignments;
