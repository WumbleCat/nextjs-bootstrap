import Link from 'next/link';
import { FaFile, FaList, FaLink, FaAddressBook } from 'react-icons/fa';

export default function Home() {
  const pills = [
    { title: 'Our Vision and Plan', desc: 'Our plans for the current academic year and the future years', link: '/plan', icon: FaList },
    { title: 'Previous Documents', desc: 'Links to previous SSLC meeting notes', link: '/documents', icon: FaFile },
    { title: 'Useful Links', desc: 'Links to relevant information for the course. Ex Google Drives, Excel Sheets etc.', link: '/links', icon: FaLink },
    { title: 'Contact Us', desc: 'Contact details for the course reps', link: '/contact', icon: FaAddressBook },
  ];

  return (
      <div className='container d-flex justify-content-center'>
        <div className='col-md-8'>
          <div className='row justify-content-center'>
            {pills.map((pill, index) => (
              <div key={index} className='m-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='row align-items-center'>
                      <div className='col-md-1'>
                        <pill.icon size={25} />
                      </div>
                      <div className='col-auto'>
                        <h5 className='card-title'>{pill.title}</h5>
                      </div>
                    </div>
                    <p className='card-text'>{pill.desc}</p>
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
  );
}
