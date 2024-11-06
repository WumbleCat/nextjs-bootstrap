import React from 'react';
import Image from 'next/image';
import Navbar from '../../../public/components/navbar';

export const metadata = {
    title: 'Data Science Student Reps Page'
}

export default function Plan() {
    const reps = [
        { 
            "names": "Joshua Man Yu Ng", 
            "email": "jq22530@bristol.ac.uk", 
            "LinkedIn": "https://www.linkedin.com/in/joshua-ng-876b36279/", 
            "image": "/images/rep1_cropped.jpg",
            "title": "Student Representative"
        },
        { 
            "names": "Christopher Bintang Soo", 
            "email": "jj22293@bristol.ac.uk", 
            "LinkedIn": "https://www.linkedin.com/in/chris-tangsoo/", 
            "image": "/images/chris.jpg",
            "title": "Student Representative"
        },
        { 
            "names": "Lam Phong Nguyen Dang", 
            "email": "rt22190@bristol.ac.uk", 
            "LinkedIn": "https://www.linkedin.com/in/ndlphong/", 
            "image": "/images/Screenshot_20241106-152229_Instagram.jpg",
            "title": "BDSS President"
        },
        { 
            "names": "Jordan Fung", 
            "email": "zn22284@bristol.ac.uk", 
            "LinkedIn": "None", 
            "image": "/images/thumbnail_Faculty_Rep.png",
            "title": "Faculty Representative"
        },
        { 
            "names": "Kometh Tauch (Maine)", 
            "email": "cy23929@bristol.ac.uk", 
            "LinkedIn": "https://www.linkedin.com/in/kometh-tauch-38a58626b/", 
            "image": "/images/rep2_cropped.jpg",
            "title": "BDSS Representative"
        }
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
                                        <h2 className="card-title text-lg font-bold my-2">{rep.title}</h2>
                                        <p className="card-text text-gray-700">
                                            <span className="font-bold">Name:</span> {rep.names}
                                        </p>
                                        <p className="card-text text-gray-700">
                                            <span className="font-bold">Email:</span> {rep.email}
                                        </p>
                                        <p className="card-text text-gray-700">
                                            <span className="font-bold text-blue-500">LinkedIn:</span> 
                                            {rep.LinkedIn !== "None" ? (
                                                <a href={rep.LinkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-500">{rep.names}</a>
                                            ) : (
                                                <span>N/A</span>
                                            )}
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
