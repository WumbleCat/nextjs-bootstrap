// import React from 'react';
// import Image from 'next/image';

// export default function Plan() {
//     const reps = [
//         { "names": "Joshua Man Yu Ng", "email": "jq22530@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/"  },
//         { "names": "Kometh Tauch (Maine)", "email": "cy23929@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/" }
//     ];

//     return (
//       <div className="container mt-5">
//         <h1 className='text-center pb-3'>Meet Our Reps!</h1>
//           <div className="row justify-content-center">
//               {reps.map((rep, index) => (
//                   <div key={index} className="col-md-4 mb-4">
//                       <div className="card p-0">
//                           <div className="card-body text-center p-2">
//                               <Image 
//                                   src="/images/UoB_building.jpg"
//                                   alt="pics"
//                                   height={150}
//                                   width={200}
//                                   className="mx-auto" // Center the image horizontally
//                               />
//                               <h2 className="card-title text-lg font-bold my-2">Student Representative</h2>
//                               <p className="card-text text-gray-700">
//                                   <span className="font-bold">Name:</span> {rep.names}
//                               </p>
//                               <p className="card-text text-gray-700">
//                                   <span className="font-bold">Email:</span> {rep.email}
//                               </p>
//                               <p className="card-text text-gray-700">
//                                   <span className="font-bold text-blue-500">LinkedIn:</span> <a href={rep.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">{rep.names}</a>
//                               </p>
//                           </div>
//                       </div>
//                   </div>
//               ))}
//           </div>
//       </div>
//   );
  
// }
