import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../provider/ThemeProvider";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";

const MyAssignments = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (!user || !user.email) {
          setError("User not logged in.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `https://online-group-study-server-umber.vercel.app/apply?email=${user.email}`,
          { credentials: "include" }
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

  if (loading) return <Loading></Loading>
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      className={`container mx-auto my-4 py-4 px-8 ${isDarkMode ? "bg-black text-white" : "bg-white text-gray-800"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading Animation */}
      <motion.h1
        className="text-3xl font-semibold text-center mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Submitted Assignments ({applications.length})
      </motion.h1>

      {/* Table Wrapper Animation */}
      <motion.div
        className="overflow-x-auto bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
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
            {applications.map((application, index) => (
              <motion.tr
                key={application._id}
                className="border-b hover:bg-gray-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
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
                    {application.status}
                  </span>
                </td>
                <td className="px-4 py-3">{application.marks || "N/A"}</td>
                <td className="px-4 py-3">{application.obtainedMarks || "N/A"}</td>
                <td className="px-4 py-3">{application.feedback || "N/A"}</td>
                <td className="px-4 py-3">
                  {new Date(application.appliedAt).toLocaleString()}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default MyAssignments;
