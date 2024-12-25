import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyAssignments = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        // Use fetch to get assignments based on the logged-in user's email
        const response = await fetch(`http://localhost:5000/assignment-applications?email=${user?.email}`);
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching submitted assignments:', error);
      }
    };

    if (user?.email) {
      fetchAssignments();
    }
  }, [user?.email]);

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">My Submitted Assignments</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Marks</th>
              <th className="px-4 py-2 border">Obtained Marks</th>
              <th className="px-4 py-2 border">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {assignments.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                  No submitted assignments found.
                </td>
              </tr>
            ) : (
              assignments.map((assignment) => (
                <tr key={assignment._id}>
                  <td className="px-4 py-2 border">{assignment.title}</td>
                  <td className="px-4 py-2 border">{assignment.status}</td>
                  <td className="px-4 py-2 border">{assignment.marks}</td>
                  <td className="px-4 py-2 border">{assignment.obtainedMarks || 'N/A'}</td>
                  <td className="px-4 py-2 border">{assignment.feedback || 'No Feedback'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;
