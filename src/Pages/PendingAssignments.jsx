import React, { useEffect, useState } from "react";
import { FaPen } from "react-icons/fa"; // Pen icon for editing

const PendingAssignments = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [feedback, setFeedback] = useState("");

  // Fetch pending assignments
  useEffect(() => {
    const fetchPendingAssignments = async () => {
      try {
        const response = await fetch("https://online-group-study-server-umber.vercel.app/apply/pending");
        if (!response.ok) {
          throw new Error("Failed to fetch pending assignments");
        }
        const data = await response.json();
        setPendingAssignments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPendingAssignments();
  }, []);

  // Open modal to evaluate assignment
  const openModal = (assignment) => {
    setSelectedAssignment(assignment);
    setObtainedMarks(""); // Reset fields
    setFeedback("");
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAssignment(null);
  };

  // Save marks and feedback
  const handleSave = async () => {
    if (!obtainedMarks || !feedback) {
      alert("Please fill in both fields!");
      return;
    }

    try {
      const response = await fetch(
        `https://online-group-study-server-umber.vercel.app/apply/${selectedAssignment._id}/evaluate`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ obtainedMarks, feedback }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update assignment");
      }

      // Update assignment in the state
      const updatedAssignments = pendingAssignments.map((assignment) =>
        assignment._id === selectedAssignment._id
          ? { ...assignment, obtainedMarks, feedback, status: "Evaluated" }
          : assignment
      );
      setPendingAssignments(updatedAssignments);
      closeModal();
    } catch (error) {
      alert(error.message);
    }
  };

  // Loading or error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8 p-4">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        All Pending Assignments ({pendingAssignments.length})
      </h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="px-4 py-2 font-semibold">Assignment Title</th>
              <th className="px-4 py-2 font-semibold">Applicant Email</th>
              <th className="px-4 py-2 font-semibold">Docs Link</th>
              <th className="px-4 py-2 font-semibold">Quick Note</th>
              <th className="px-4 py-2 font-semibold">Status</th>
              <th className="px-4 py-2 font-semibold">Exam Marks</th>
              <th className="px-4 py-2 font-semibold">Obtained Marks</th>
              <th className="px-4 py-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingAssignments.map((assignment) => (
              <tr key={assignment._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-3">{assignment.title}</td>
                <td className="px-4 py-3">{assignment.applicant_email}</td>
                <td className="px-4 py-3">
                  <a
                    href={assignment.DocsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Docs
                  </a>
                </td>
                <td className="px-4 py-3">{assignment.quickNote || "N/A"}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      assignment.status === "Pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {assignment.status}
                  </span>
                </td>
                <td className="px-4 py-3">{assignment.marks || "N/A"}</td>
                <td className="px-4 py-3">{assignment.obtainedMarks || "N/A"}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => openModal(assignment)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    <FaPen />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for marks and feedback */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4">Evaluate Assignment</h2>
            <div className="mb-4">
              <label className="block mb-2">Obtained Marks</label>
              <input
                type="number"
                value={obtainedMarks}
                onChange={(e) => setObtainedMarks(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="4"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
