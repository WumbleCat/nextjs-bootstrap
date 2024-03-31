import React from 'react';
import Navbar from '../../../public/components/navbar';

export const metadata = {
    title: 'Data Science Student Reps Page'
}

export default function Assignments() {
    // Array of assignment objects with 'type' property
    const assignments = [
        { name: 'Linear Models Coursework 6', subject: 'Matrices and Linear Models', dueDate: '2024-4-16 (Tue) ', type: 'Summative' },
        { name: 'Introduction to Coding Project 4', subject: 'Algorithms in C(++) & R', dueDate: '2024-5-1 (Wed)', type: 'Summative' },
        { name: 'Linear Models Computational assessment', subject: 'Matrices and Linear Models', dueDate: '2024-5-3 (Fri) ', type: 'Summative' },
        { name: 'Algorithms and Programming in C(++) Coursework 4', subject: 'Algorithms in C(++) & R', dueDate: '2024-5-3 (Fri) ', type: 'Summative' }
    ];

    const exams = [
        { name: 'Algorithms and Programming in C(++) and R Exam', details: '(Date and Venue TBC)' },
        { name: 'Applied Analysis B Exam', details: '(Date and Venue TBC)' },
        { name: 'Linear Models Exam', details: '(Date and Venue TBC)' },
        { name: 'Statistics Exam', details: '(Date and Venue TBC)' }
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
        <div>
            <Navbar />
            <div className='m-2 text-center'>
                <div>
                    <h1 className='mt-4 mb-3'>Assignments Board:</h1>
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
            </div>

            <div className='mt-5 text-center'>
                <div>
                    <h1 className='mt-4 mb-3'>Exams Schedule:</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Exam Name</th>
                                <th scope="col">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map each exam object to a table row */}
                            {exams.map((exam, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{exam.name}</td>
                                    <td>{exam.details}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
