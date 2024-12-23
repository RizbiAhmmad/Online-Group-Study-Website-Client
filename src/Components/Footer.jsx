import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-white">Group Study</h2>
          <p className="mt-3 text-gray-400">
            Collaborate with friends to learn, share, and grow together. Build
            assignments, evaluate, and excel as a group.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/assignments" className="hover:text-gray-300">
                Assignments
              </Link>
            </li>
            
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2">
            <li>Email: support@groupstudy.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: Dhaka, bangladesh</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-10 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Group Study. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
