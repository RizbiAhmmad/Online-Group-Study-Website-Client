import React from 'react';

const HotAssignmentCard = ({assignment}) => {
    const {title, description,difficulty,dueDate, marks} = assignment;
    
    const difficultyColors = {
        easy: "bg-green-500",
        medium: "bg-yellow-500",
        hard: "bg-red-500",
      };
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        {/* Thumbnail */}
        {/* <img
          className="w-full h-48 object-cover"
          src={thumbnail}
          alt={title}
        /> */}
  
        {/* Card Content */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            <span
              className={`px-3 py-1 text-sm font-semibold text-white rounded-full ${
                difficultyColors[difficulty.toLowerCase()]
              }`}
            >
              {difficulty}
            </span>
          </div>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
  
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Due: <strong>{new Date(dueDate).toLocaleDateString()}</strong>
            </span>
            <span className="text-sm text-gray-500">
              Marks: <strong>{marks}</strong>
            </span>
          </div>
          <div>
            <button className='btn btn-link'>View Details</button>
          </div>
        </div>

        
  
       
      </div>
    );
};

export default HotAssignmentCard;