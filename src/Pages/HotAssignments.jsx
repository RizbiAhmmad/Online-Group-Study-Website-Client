import React, { useEffect, useState } from 'react';
import HotAssignmentCard from './HotAssignmentCard';
import Swal from 'sweetalert2';

const HotAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Assignments')
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  // Function to handle the deletion of an assignment
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/assignments/${id}`, {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {assignments.map((assignment) => (
        <HotAssignmentCard
          key={assignment._id}
          assignment={assignment}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default HotAssignments;
