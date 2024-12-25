import { useState, useEffect, useContext } from 'react'; 
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const PendingAssignments = () => {
  const { user } = useContext(AuthContext); // Get logged-in user's info
  const [assignments, setAssignments] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchPendingAssignments = async () => {
      try {
        // Fetch pending assignments from the backend using the logged-in user's email
        const response = await fetch(`http://localhost:5000/assignment-applications?email=${user?.email}`);
        const data = await response.json();
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching pending assignments:', error);
      }
    };

    if (user?.email) {
      fetchPendingAssignments();
    }
  }, [user?.email]);

  const handleMarkAssignment = (assignmentId) => {
    setSelectedAssignment(assignmentId);
    setModalOpen(true);
  };

  const handleSubmitMarks = async () => {
    if (!marks || !feedback) {
      toast.success('Please enter both marks and feedback');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/assignments/${selectedAssignment}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          marks,
          feedback,
        }),
      });

      if (!response.ok) {
        throw new Error('Error updating marks');
      }

      setAssignments(assignments.map((assignment) =>
        assignment._id === selectedAssignment ? { ...assignment, status: 'Completed' } : assignment
      ));
      toast.success('Marks updated successfully');
      setModalOpen(false);
    } catch (error) {
      toast.error('Error updating marks:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Pending Assignments</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Title</th>
              <th className="px-4 py-2 border">Submitted By</th>
              <th className="px-4 py-2 border">Marks</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment._id}>
                <td className="px-4 py-2 border">{assignment.title}</td>
                <td className="px-4 py-2 border">{assignment.userEmail}</td>
                <td className="px-4 py-2 border">{assignment.marks}</td>
                <td className="px-4 py-2 border">
                  {assignment.userEmail !== user.email && assignment.status === 'Pending' && (
                    <button
                      onClick={() => handleMarkAssignment(assignment._id)}
                      className="bg-green-500 text-white py-1 px-3 rounded"
                    >
                      Give Mark
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded shadow-lg p-6">
            <div className="text-lg font-bold mb-4">Give Marks for Assignment</div>
            <div className="mb-4">
              <textarea
                placeholder="Enter marks"
                value={marks}
                onChange={(e) => setMarks(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Enter feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleSubmitMarks}
                className="bg-blue-500 text-white py-1 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-gray-500 text-white py-1 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingAssignments;
