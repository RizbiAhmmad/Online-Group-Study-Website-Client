import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-white">Group Study</h2>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Collaborate, learn, and grow with friends. Build assignments, evaluate work, and excel together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/assignments" className="hover:text-teal-400 transition-colors">Assignments</Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li>Email: <a href="mailto:support@groupstudy.com" className="hover:text-teal-400">support@groupstudy.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-teal-400">+123-456-7890</a></li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-all">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-all">
              <FaTwitter size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-all">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 transition-all">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>&copy; {new Date().getFullYear()} Group Study. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
