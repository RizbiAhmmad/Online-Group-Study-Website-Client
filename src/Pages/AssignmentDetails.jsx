import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AssignmentDetails = () => {
    const { title,
        description,
        marks,
        thumbnail,
        difficulty,
        dueDate,} = useLoaderData();
    // console.log(assignment);

    const difficultyColors = {
        easy: "bg-green-500",
        medium: "bg-yellow-500",
        hard: "bg-red-500",
      };
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header Section with Thumbnail */}
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 right-4 px-4 py-1 text-sm text-white font-bold rounded-full shadow-lg capitalize bg-opacity-75">
            <span
              className={`px-3 py-1 rounded-full ${
                difficultyColors[difficulty.toLowerCase()]
              }`}
            >
              {difficulty}
            </span>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 mt-2">{description}</p>
  
          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-sm font-bold text-gray-500">Marks</h3>
              <p className="text-lg text-gray-800">{marks}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-500">Due Date</h3>
              <p className="text-lg text-gray-800">
                {new Date(dueDate).toLocaleDateString()}
              </p>
            </div>
          </div>
  
          
          {/* <div className="mt-6 border-t pt-4">
            <h3 className="text-sm font-bold text-gray-500">Created By</h3>
            <p className="text-lg text-gray-800">
              {createdBy?.name || "Unknown"}{" "}
              <span className="text-sm text-gray-500">
                ({createdBy?.email || "N/A"})
              </span>
            </p>
          </div> */}
        </div>
  
        {/* Footer Actions */}
        <div className="bg-gray-100 p-4 flex justify-end space-x-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Edit Assignment
          </button>
          <button className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
            Delete Assignment
          </button>
        </div>
      </div>
    );
};

export default AssignmentDetails;