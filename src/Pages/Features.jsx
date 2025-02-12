import React, { useContext } from 'react';
import { ThemeContext } from '../provider/ThemeProvider';

const Features = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section
      className={`${
        isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'
      } px-8 py-12`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-gradient">
          Features that Make Learning Easier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            className={`${
              isDarkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800'
            } shadow-xl p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white`}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mb-6 inline-block">
              <i className="fas fa-clipboard-list text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Create Assignments</h3>
            <p className="text-gray-500 hover:text-white">
              Easily create assignments with a user-friendly interface and share them with your group.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className={`${
              isDarkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800'
            } shadow-xl p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-green-400 to-teal-500 hover:text-white`}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-green-400 to-teal-500 mb-6 inline-block">
              <i className="fas fa-pencil-alt text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Evaluate Work</h3>
            <p className="text-gray-500 hover:text-white">
              Grade your friends’ assignments and provide valuable feedback to help them improve.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className={`${
              isDarkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800'
            } shadow-xl p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-yellow-400 to-red-500 hover:text-white`}
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 mb-6 inline-block">
              <i className="fas fa-users text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Collaborate Seamlessly</h3>
            <p className="text-gray-500 hover:text-white">
              Work together in a shared environment to achieve better learning outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
