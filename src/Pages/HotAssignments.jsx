import React, { useEffect, useState } from 'react';
import HotAssignmentCard from './HotAssignmentCard';

const HotAssignments = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Assignments')
            .then(res => res.json())
            .then(data => setAssignments(data));
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {assignments.map(assignment => (
                <HotAssignmentCard 
                    key={assignment._id} 
                    assignment={assignment} 
                />
            ))}
        </div>
    );
};

export default HotAssignments;
