import React, { useContext } from "react";
import { ThemeContext } from "../provider/ThemeProvider";
import { Link } from "react-router-dom";

const CTA = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`py-16 text-center transition-all duration-500 ${
        isDarkMode
          ? "bg-black text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">
          Start Your Learning Journey Today! 🚀
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Join thousands of students and take your learning to the next level.
          Create, submit, and evaluate assignments with ease!
        </p>
        <Link to="/login">
          <button
            className="px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-xl
            bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-600 hover:to-blue-600"
          >
            Get Started Now
          </button>
        </Link>
      </div>

    </section>
  );
};

export default CTA;
