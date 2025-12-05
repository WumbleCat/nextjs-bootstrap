import Link from 'next/link';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Image from 'next/image';
import { FaFile, FaList, FaLink, FaAddressBook } from 'react-icons/fa';
import Navbar from '../../public/components/navbar';

export const metadata = {
  title: 'Data Science Student Reps Page'
}

export default function Home() {
  const pills = [
    { title: 'Our Vision and Plan', desc: 'Our plans for the current academic year and the future years', link: '/plan', icon: FaList },
    { title: 'Assignments', desc: 'Assignment information', link: '/assignments', icon: FaFile },
    { title: 'Previous Documents', desc: 'Links to previous SSLC meeting notes', link: '/documents', icon: FaFile },
    { title: 'Useful Links', desc: 'Links to relevant information for the course. Ex Google Drives, Excel Sheets etc.', link: '/links', icon: FaLink },
    { title: 'Contact Us', desc: 'Contact details for the course reps', link: '/contacts', icon: FaAddressBook },
  ];

  return (
    <div>
      <Navbar />

<div style={{ position: 'relative', height: '475px', opacity: 0.85 }}>
      {/* Image section */}
      <Image
        src={"/images/UoB_building.jpg"}
        fill
        alt="fry"
        quality={100}
        sizes="(min-width: 808px) 50vw, 100vw"
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
      />
      {/* Text section */}
      <div className="position-absolute top-50 start-50 translate-middle rounded p-3 border border-2" style={{ backgroundColor: '#00008B' }}>
        <h1 className="text-center mb-1 fs-1 fw-bold text-white">University of Bristol</h1>
        <h1 className="text-center mb-3 fs-1 fw-bold text-white">Data Science</h1>
        <p className='text-white text-center mb-0'>Welcome to the UoB Data Science Reps website! This is an unofficial website created by students from studying the Data Science course, serving as an information hub for Final Year Data Science students in 2023/24 Cohort.</p>
      </div>
    </div>

      {/* Pills section */}
      <div style={{ marginTop: '20px' }}>
        <div className='container mb-5 d-flex justify-content-center'>
          <div className='col-md-7'>
            <div className='row justify-content-center'>
              {pills.map((pill, index) => (
                <div key={index} className='m-3'>
                  <div className='card m-1 p-2'>
                    <div className='card-body p-2'>
                      <div className='row align-items-center'>
                        <div className='col-auto d-flex justify-content-center px-3'>
                          <pill.icon size={22} />
                        </div>
                        <div className='col-auto px-0'>
                          <h5 className='card-title my-1 text-start'>{pill.title}</h5>
                        </div>
                      </div>
                      <p className='card-text mx-2 mt-1 mb-2'>{pill.desc}</p>
                      <Link href={pill.link}>
                        <button className='btn btn-primary'>More Info</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
