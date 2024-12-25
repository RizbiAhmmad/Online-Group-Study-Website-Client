import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const HotAssignmentCard = ({ assignment, onDelete }) => {
  const { _id, thumbnail, title, description, difficulty, dueDate, marks } = assignment;

  const difficultyColors = {
    easy: "bg-green-500",
    medium: "bg-yellow-500",
    hard: "bg-red-500",
  };

  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirm.isConfirmed) {
      onDelete(_id); // Trigger the delete function passed from the parent
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {/* Thumbnail */}
      <img className="w-full h-48 object-cover" src={thumbnail} alt={title} />

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
        <div className="mt-2 flex justify-between">
          <Link to={`/assignments/${_id}`}>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600">
              View Details
            </button>
          </Link>
          <Link to="">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Update
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotAssignmentCard;
