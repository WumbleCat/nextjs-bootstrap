import React from 'react';

export const metadata = {
    title: 'Data Science Student Reps Page'
  }

export default function Assignments() {
    // Array of assignment objects with 'type' property
    const assignments = [{ name: 'Weekly Assessment 16', subject: 'Intro to Coding', dueDate: '28/02/2024', type: 'Summative' },
    { name: 'Computer Practical 3', subject: 'Algorithms in C(++)', dueDate: '05/03/2024', type: 'Summative' }
    ];

    // Sort assignments so that 'Summative' types come first
    const sortedAssignments = assignments.sort((a, b) => {
        if (a.type === 'Summative' && b.type !== 'Summative') {
            return -1; // a comes first
        }
        if (a.type !== 'Summative' && b.type === 'Summative') {
            return 1; // b comes first
        }
        return 0; // no change in order
    });

    return (
        <div className='container m-2'>
            <h1 className='p-2'>Assignments Board:</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Subject</th>
                        <th scope="col">Type</th>
                        <th scope="col">Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map each sorted assignment object to a table row, using the map index for display */}
                    {sortedAssignments.map((assignment, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{assignment.name}</td>
                            <td>{assignment.subject}</td>
                            <td>{assignment.type}</td>
                            <td>{assignment.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
