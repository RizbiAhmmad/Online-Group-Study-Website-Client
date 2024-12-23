import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const AssignmentApply = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const navigate = useNavigate()
    // console.log(id , user);

    const submitAssignmentApplication= e =>{
        e.preventDefault();
        const form = e.target;
        const DocsLink = form.DocsLink.value;
        const quickNote = form.quickNote.value;

        const assignmentApplication ={
           
            assignment_Id: id,
            applicant_email: user.email,
            DocsLink,
            quickNote
        }

        fetch ('http://localhost:5000/assignment-applications',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(assignmentApplication)
        })
        .then (res=> res.json())
        .then (data=> {
           if (data.insertedId){
            Swal.fire({
                title: "Your Assignment has been successfully submitted.",
                icon: "success",
                draggable: true
              });
              navigate ('/myassignments')
           }

        })

        // console.log(DocsLink, quickNote);
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 mt-10">
            <h2 className="text-xl font-bold mb-4">Submit Assignment</h2>
            <form onSubmit={submitAssignmentApplication}>
                <div className="mb-4">
                    <label
                        htmlFor="googleDocsLink"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Google Docs Link
                    </label>
                    <input
                        type="url"
                        name="DocsLink"
                        id="googleDocsLink"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="quickNote"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Quick Note
                    </label>
                    <textarea
                        name="quickNote"
                        id="quickNote"
                        rows="4"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Add a quick note (optional)"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AssignmentApply;
