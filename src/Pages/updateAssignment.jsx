import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const UpdateAssignment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    marks: "",
    difficulty: "",
    dueDate: "",
    thumbnail: "",
  });

  // Fetch the assignment data when the component mounts
  useEffect(() => {
    fetch(`https://online-group-study-server-umber.vercel.app/assignments/${id}`)
      .then((res) => res.json())
      .then((data) => setAssignment(data))
      .catch((error) => console.error("Error fetching assignment:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://online-group-study-server-umber.vercel.app/assignments/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assignment),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire("Updated!", "The assignment has been updated.", "success");
        navigate("/assignments"); // Redirect to assignments page (optional)
      } else {
        Swal.fire("Error!", data.message || "Failed to update the assignment.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "An error occurred while updating the assignment.", "error");
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Update Assignment</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={assignment.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={assignment.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="marks" className="block text-sm font-medium text-gray-700">
            Marks
          </label>
          <input
            type="number"
            id="marks"
            name="marks"
            value={assignment.marks}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
            Difficulty
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={assignment.difficulty}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={assignment.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">
            Thumbnail URL
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            value={assignment.thumbnail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Update Assignment
        </button>
      </form>
    </div>
  );
};

export default UpdateAssignment;
