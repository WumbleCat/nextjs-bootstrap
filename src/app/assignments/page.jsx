// import React from 'react';

// export default function Assignments() {
//     // Define an array of assignment objects
//     const assignments = [
//         { index: 1, name: 'Mark', subject: 'Otto', dueDate: '@mdo' },
//         { index: 2, name: 'Jacob', subject: 'Thornton', dueDate: '@fat' },
//         { index: 3, name: 'Larry the Bird', subject: '', dueDate: '@twitter' }
//     ];

//     return (
//         <div className='container m-2'>
//             <h1 className='p-2'>Assignments board:</h1>
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th scope="col">Index</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Subject</th>
//                         <th scope="col">Due Date</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {/* Map each assignment object to a table row */}
//                     {assignments.map((assignment, index) => (
//                         <tr key={index}>
//                             <th scope="row">{assignment.index}</th>
//                             <td>{assignment.name}</td>
//                             <td>{assignment.subject}</td>
//                             <td>{assignment.dueDate}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }
