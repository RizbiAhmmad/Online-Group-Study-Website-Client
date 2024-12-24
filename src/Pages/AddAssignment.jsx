import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AddAssignment = () => {
  const [dueDate, setDueDate] = useState(new Date());

  const handleAddAssignment = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

   
    initialData.dueDate = dueDate.toISOString().split("T")[0]; 

    console.log(initialData);
    alert("Assignment created successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Add New Assignment</h1>
        <form onSubmit={handleAddAssignment}>
          {/* Title */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
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
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter assignment description"
              rows="4"
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
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
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
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
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
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
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
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              dateFormat="yyyy-MM-dd"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
          >
            Add Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAssignment;
