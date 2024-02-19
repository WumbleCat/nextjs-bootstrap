// import React from 'react';

// export default function Links() {
//     const links = [
//         {
//             "Title": "Calendar (deadlines)",
//             "Desc": "View deadlines for the course.",
//             "Link": "https://shorturl.at/nCKM9"
//         },
//         {
//             "Title": "Assessment Spreadsheet",
//             "Desc": "Details on how your math courses will be assessed.",
//             "Link": "https://shorturl.at/dgAG1"
//         },
//         {
//             "Title": "Google Drive",
//             "Desc": "Access course materials and self-learning materials.",
//             "Link": "https://drive.google.com/drive/u/0/folders/10Xoi_NbUD9L_H4fllO3inNZW8pdOkBkC"
//         },
//         {
//             "Title": "Anonymous Message Box",
//             "Desc": "Submit anonymous messages.",
//             "Link": "https://forms.gle/yBACcnHkHndws1Fo7"
//         },
//         {
//           "Title": "Discord Server",
//           "Desc": "Join our discord server",
//           "Link": "https://forms.gle/yBACcnHkHndws1Fo7"
//         },
//         {
//           "Title": "WhatsApp Group",
//           "Desc": "Join our WhatsApp Group",
//           "Link": "https://forms.gle/yBACcnHkHndws1Fo7"
//         },
//     ];

//     // Sort links array alphabetically by Title
//     links.sort((a, b) => a.Title.localeCompare(b.Title));

//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-2xl font-bold m-4">Useful Documents</h2>
//             <div className="accordion" id="accordionExample">
//                 {links.map((doc, index) => (
//                     <div key={index} className="accordion-item">
//                         <h2 className="accordion-header" id={`heading${index}`}>
//                             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
//                                 {doc.Title}
//                             </button>
//                         </h2>
//                         <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
//                             <div className="accordion-body">
//                                 <p>{doc.Desc}</p>
//                                 <a href={doc.Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{doc.Link}</a>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }
