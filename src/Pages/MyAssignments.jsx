import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyAssignments = () => {
  const { user } = useContext(AuthContext); 
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(applications);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Check if user is logged in
        if (!user || !user.email) {
          setError("User not logged in.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `http://localhost:5000/apply?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        My Submitted Assignments ({applications.length})
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="px-4 py-2 font-semibold">Assignment Title</th>
              <th className="px-4 py-2 font-semibold">Applicant Email</th>
              <th className="px-4 py-2 font-semibold">Status</th>
              <th className="px-4 py-2 font-semibold">Marks</th>
              <th className="px-4 py-2 font-semibold">Obtained Marks</th>
              <th className="px-4 py-2 font-semibold">Feedback</th> 
              <th className="px-4 py-2 font-semibold">Applied At</th>
              
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{application.title}</td>
                <td className="px-4 py-3">{application.applicant_email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      application.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : application.status !== "Accepted"
                        ? "bg-green-800 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {application.status === "Pending" ? "Pending" : "Accepted"}
                  </span>
                </td>
                <td className="px-4 py-3">{application.marks || "N/A"}</td>
                <td className="px-4 py-3">{application.obtainedMarks || "N/A"}</td>
                <td className="px-4 py-3">{application.feedback || "N/A"}</td>
                <td className="px-4 py-3">
                  {new Date(application.appliedAt).toLocaleString()}
                </td>
                 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignments;
