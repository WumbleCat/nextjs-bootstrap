import React from 'react';
import Navbar from '../../../public/components/navbar';

export const metadata = {
    title: 'Data Science Student Reps Page'
  }

export default function Links() {
    const links = [
        {
            "Title": "Calendar (deadlines)",
            "Desc": "View deadlines for the course.",
            "Link": "https://docs.google.com/spreadsheets/d/1aJ7oQeagAAD-gReAwlaMqffsUSh7ggFOJFFMnso9evA/edit?usp=sharing"
        },
        {
            "Title": "Assessment Spreadsheet",
            "Desc": "Details on how your math courses will be assessed.",
            "Link": "https://docs.google.com/spreadsheets/d/1xVkk2n2TpYP_3AnU9KsKCQlp_Spmpy0OWqNSl1g0j6c/edit?usp=sharing"
        },
        {
            "Title": "Anonymous Message Box",
            "Desc": "Submit anonymous messages.",
            "Link": "https://forms.gle/LXFgfRmmAA1Gtoxr6"
        },
        // {
        //   "Title": "Discord Server",
        //   "Desc": "Join our discord server",
        //   "Link": "https://forms.gle/yBACcnHkHndws1Fo7"
        // }
    ];

    // Sort links array alphabetically by Title
    links.sort((a, b) => a.Title.localeCompare(b.Title));

    return (
        <div>
            
      <Navbar />
            <div className="container mx-auto px-4 py-8">
             <div className='mx-5 mt-4 mb-2'>
        </div>
            <h2 className="text-2xl font-bold m-4">Useful Documents</h2>
            <div className="accordion" id="accordionExample">
                {links.map((doc, index) => (
                    <div key={index} className="accordion-item">
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                {doc.Title}
                            </button>
                        </h2>
                        <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>{doc.Desc}</p>
                                <a href={doc.Link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{doc.Link}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}
