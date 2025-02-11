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
    <section className={`py-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Assignments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assignments.map((assignment, index) => (
            <motion.div
              key={assignment._id}
              className="w-auto rounded-xl overflow-hidden shadow-md bg-white transform transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Thumbnail */}
              <img className="w-full h-48 object-cover rounded-t-xl" src={assignment.thumbnail} alt={assignment.title} />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{assignment.title}</h2>
                <p className="text-gray-600 mt-2">{assignment.description.slice(0, 50)}...</p>

                <div className="mt-4 flex justify-center">
                  <Link to={`/assignments/${assignment._id}`}>
                    <motion.button
                      className="px-5 py-2 font-medium text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
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
