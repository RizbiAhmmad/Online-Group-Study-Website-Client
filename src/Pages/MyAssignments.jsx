import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyAssignments = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/assignment-applications?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, [user.email]);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* Table Head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Marks</th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {assignments.map((assignment, index) => (
            <tr key={assignment._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={assignment.thumbnail || "https://via.placeholder.com/150"}
                      alt={assignment.title || "Assignment Thumbnail"}
                    />
                  </div>
                </div>
              </td>
              <td>{assignment.title || "N/A"}</td>
              <td>{assignment.description || "N/A"}</td>
              <td>{assignment.marks || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAssignments;
