import React, { useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth'; 
import { useNavigate } from 'react-router-dom'; 
import { ThemeContext } from '../provider/ThemeProvider'; // Import ThemeContext

const AddAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());
  const { user } = useAuth(); 
  const navigate = useNavigate(); 
  const { isDarkMode } = useContext(ThemeContext); // Use ThemeContext

  const handleAddAssignment = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); 
    const initialData = Object.fromEntries(formData.entries());

    initialData.dueDate = dueDate.toISOString().split("T")[0];
    initialData.status = 'Pending'; 

    fetch('https://online-group-study-server-umber.vercel.app/assignments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(initialData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Your Assignment has been successfully added.',
            icon: 'success',
            draggable: true,
          });

          navigate('/assignments');
        }
      });
  };

  return (
    <div className={`${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"} flex justify-center items-center min-h-screen py-4`}>
      <div className={`${isDarkMode ? "bg-gray-800" : "bg-white"} w-full max-w-3xl p-8 rounded-lg shadow-md`}>
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Assignment</h1>
        <form onSubmit={handleAddAssignment}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user?.email || ''}
              readOnly
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200"} w-full px-4 py-2 border rounded cursor-not-allowed focus:outline-none`}
              required
            />
          </div>

          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              placeholder="Enter assignment title"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              placeholder="Enter assignment description"
              rows="2"
              required
            />
          </div>

          {/* Marks */}
          <div className="mb-4">
            <label htmlFor="marks" className="block text-sm font-medium mb-2">
              Marks
            </label>
            <input
              type="number"
              id="marks"
              name="marks"
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              placeholder="Enter total marks"
              required
            />
          </div>

          {/* Thumbnail URL */}
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block text-sm font-medium mb-2">
              Thumbnail Image URL
            </label>
            <input
              type="url"
              id="thumbnail"
              name="thumbnail"
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              placeholder="Enter thumbnail URL"
              required
            />
          </div>

          {/* Difficulty Level */}
          <div className="mb-4">
            <label htmlFor="difficulty" className="block text-sm font-medium mb-2">
              Difficulty Level
            </label>
            <select
              id="difficulty"
              name="difficulty"
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="mb-6">
            <label htmlFor="dueDate" className="block text-sm font-medium mb-2">
              Due Date
            </label>
            <DatePicker
              id="dueDate"
              selected={dueDate}
              onChange={(date) => setDueDate(date)}
              className={`${isDarkMode ? "bg-gray-700 text-white" : "bg-white"} w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300`}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 hover:text-white transition duration-200"
          >
            Add Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;
