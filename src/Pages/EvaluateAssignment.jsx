import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EvaluateAssignment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Fetch assignment details by ID
    fetch(`http://localhost:5000/study/${id}`)
      .then((res) => res.json())
      .then((data) => setAssignment(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the assignment with marks and feedback
    fetch(`http://localhost:5000/study/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ marks, feedback }),
    })
      .then((res) => res.json())
      .then(() => {
        alert('Marks submitted successfully');
        navigate('/pending-assignments');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {assignment ? (
        <>
          <h2 className="text-2xl font-bold mb-6">Evaluate Assignment</h2>
          <p className="mb-4">
            <strong>Title:</strong> {assignment.title}
          </p>
          <p className="mb-4">
            <strong>Google Docs Link:</strong>{' '}
            <a
              href={assignment.docsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Open Document
            </a>
          </p>
          <p className="mb-4">
            <strong>Notes:</strong> {assignment.notes}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Marks</label>
              <input
                type="number"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-bold">Feedback</label>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit Marks
            </button>
          </form>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EvaluateAssignment;
