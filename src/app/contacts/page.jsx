import React from 'react';
import Image from 'next/image';
import Navbar from '../../../public/components/navbar';

export const metadata = {
    title: 'Data Science Student Reps Page'
  }

export default function Plan() {
    const reps = [
        { "names": "Joshua Man Yu Ng", "email": "jq22530@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/joshua-ng-876b36279/", "image": "/images/rep1_cropped.jpg"  },
        { "names": "Kometh Tauch (Maine)", "email": "cy23929@bristol.ac.uk", "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/", "image": "/images/rep2_cropped.jpg" }
    ];

    return (
      <div>
      <Navbar />
        <div className="container">
        <div className='p-5'>
        <h1 className='text-center pb-3'>Meet Our Reps!</h1>
          <div className="row justify-content-center">
              {reps.map((rep, index) => (
                  <div key={index} className="col-md-4 mb-4">
                      <div className="card p-0">
                          <div className="card-body text-center p-2">
                              <Image 
                                  src={rep.image}
                                  alt="pics"
                                  height={190}
                                  width={180}
                                  className="mx-auto" // Center the image horizontally
                              />
                              <h2 className="card-title text-lg font-bold my-2">Student Representative</h2>
                              <p className="card-text text-gray-700">
                                  <span className="font-bold">Name:</span> {rep.names}
                              </p>
                              <p className="card-text text-gray-700">
                                  <span className="font-bold">Email:</span> {rep.email}
                              </p>
                              <p className="card-text text-gray-700">
                                  <span className="font-bold text-blue-500">LinkedIn:</span> <a href={rep.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">{rep.names}</a>
                              </p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
          
        </div>
      </div>
      </div>
  );
  
}
