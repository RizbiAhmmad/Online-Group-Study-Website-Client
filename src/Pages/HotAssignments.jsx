import React, { useEffect, useState } from 'react';
import HotAssignmentCard from './HotAssignmentCard';
import Swal from 'sweetalert2';

const HotAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch data based on filters and search query
    let url = 'https://online-group-study-server-umber.vercel.app/assignments?';

    if (difficultyFilter) {
      url += `difficulty=${difficultyFilter}&`;
    }

    if (searchQuery) {
      url += `search=${searchQuery}&`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [difficultyFilter, searchQuery]);

  // Function to handle the deletion of an assignment
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://online-group-study-server-umber.vercel.app/assignments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setAssignments((prevAssignments) =>
          prevAssignments.filter((assignment) => assignment._id !== id)
        );
        Swal.fire('Deleted!', 'The assignment has been deleted.', 'success');
      } else {
        Swal.fire('Error!', 'Failed to delete the assignment.', 'error');
      }
    } catch (error) {
      console.error('Error deleting assignment:', error);
      Swal.fire('Error!', 'An error occurred while deleting the assignment.', 'error');
    }
  };

  return (
    <div className="container mx-auto py-6 px-8">
      {/* Centered Filter and Search UI */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4 mb-6">
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="p-2 border rounded w-64"
        >
          <option value="">All Difficulty Levels</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title"
          className="p-2 border rounded w-64"
        />
      </div>

      {/* Assignments List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {assignments.map((assignment) => (
          <HotAssignmentCard
            key={assignment._id}
            assignment={assignment}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default HotAssignments;
