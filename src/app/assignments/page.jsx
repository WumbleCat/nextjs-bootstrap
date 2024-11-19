import React from 'react';
import Navbar from '../../../public/components/navbar';

export const metadata = {
    title: 'Data Science Student Reps Page'
}

export default function Assignments() {
    // Array of assignment objects with 'type' property
    const assignments = [
        { name: 'Computer Practical 3', subject: 'Statistics', type: 'Summative', dueDate: 'Thursday 28th November 12PM'},
        { name: 'Coursework 2', subject: 'Algorithm and Machine Learning', type: 'Summative', dueDate: 'Tuesday 3rd December 12PM'},
        { name: 'Project 1', type: 'Summative', subject: 'Programming and Data Analysis', dueDate: 'Wednesday 4th December 12:30PM'}
    ];

    const exams = [
        { name: 'Algorithms and Machine Learning Exam', date: 'Wed 11 Dec 2024 14:15', venue: 'Sports Hall, Tyndall Avenue', length: '2 hours 30 minutes'},
        { name: 'Statistics 2 Exam', date: 'Thu 12 Dec 2024 14:15', venue: 'Sports Hall, Tyndall Avenue', length: '2 hours 30 minutes'}
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
                                <th scope="col">Date</th>
                                <th scope="col">Venue</th>
                                <th scope='col'>Length</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map each exam object to a table row */}
                            {exams.map((exam, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{exam.name}</td>
                                    <td>{exam.date}</td>
                                    <td>{exam.venue}</td>
                                    <td>{exam.length}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
