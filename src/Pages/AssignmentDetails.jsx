import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AssignmentDetails = () => {
    const { _id, title,
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
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden py-6">
        {/* Header Section with Thumbnail */}
        <div className="relative">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-64 object-cover rounded-xl"
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
            
        </div>
  
        {/* Footer Actions */}
        <div className=" p-2 flex justify-center space-x-4">
         <Link to={`/assignmentApply/${_id}`} >
         <button className="px-4 py-2 text-teal-600 border-2 border-teal-600 rounded-lg hover:bg-teal-500 hover:text-white ">
            Take Assignment
          </button>        
         </Link>
          
        </div>
      </div>
    );
};

export default AssignmentDetails;