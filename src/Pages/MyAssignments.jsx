import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyAssignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch the assignments submitted by the user
    fetch(`http://localhost:5000/assignment-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [user.email]);

  const getStatusClass = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-500 font-semibold';
      case 'Pending':
        return 'text-yellow-500 font-semibold';
      case 'Rejected':
        return 'text-red-500 font-semibold';
      default:
        return 'text-gray-500 font-semibold';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6">My Submitted Assignments</h2>
      {assignments.length === 0 ? (
        <p className="text-gray-500">No submitted assignments found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Total Marks</th>
                <th className="px-4 py-2 text-left">Obtained Marks</th>
                <th className="px-4 py-2 text-left">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((assignment) => (
                <tr key={assignment._id} className="border-t">
                  <td className="px-4 py-2">{assignment.title || 'N/A'}</td>
                  <td className={`px-4 py-2 ${getStatusClass(assignment.status || 'Pending Review')}`}>
                    {assignment.status || 'Pending Review'}
                  </td>
                  <td className="px-4 py-2">{assignment.marks || 'N/A'}</td>
                  <td className="px-4 py-2">{assignment.obtainedMarks || 'Not Graded'}</td>
                  <td className="px-4 py-2">{assignment.feedback || 'No Feedback Yet'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyAssignments;
