import React from 'react';
import Navbar from '../../../public/components/navbar';

export const metadata = {
  title: 'Data Science Student Reps Page'
}

export default function DocumentAccordion() {
  const meetings = [
    {
      category: 'Year 1 SSLC Meetings',
      items: [
        {
          title: 'First Year 1 SSLC (25th Oct 2023)',
          documents: [
            { name: 'Year 1 SSLC Memo', link: 'https://docs.google.com/document/d/1ZduRWJwAYHLW7zVSLqXrDly9dfxOhhjfCgmAnzd0zcA/edit' },
            { name: 'Follow Up Memo', link: 'https://docs.google.com/document/d/1lNCMN62eyhh3VVTFQQCFwfJvStFujzAH1fq6w8Wh9TQ/edit' },
            { name: 'School Response', link: 'https://docs.google.com/document/d/1ip-qiJ377P3aKcPQtYlNksCqnozr_PwF/edit' }
          ]
        },
        {
          title: 'Second Year 1 SSLC (6th Dec 2023)',
          documents: [
            { name: 'Second Year 1 SSLC Memo', link: 'https://docs.google.com/document/d/1KZwR65ekprIxvQYb-QX9901yIRPVhpLafyuNE-Qcaq0/edit' }
          ]
        },
        {
          title: 'Third Year 1 SSLC (12th March 2024)',
          documents: [
            { name: 'Third Year 1 SSLC Memo', link: 'https://docs.google.com/document/d/1ZQlYWntSneL_c5kU09DUsZEmHRlcRJ785GgbHFcQiAs/edit?usp=sharing' },
            { name: 'Meeting Minutes', link: '/documents/Meeting Minutes.pdf' }
          ]
        }
      ]
    },
    {
      category: 'Year 2 SSLC Meetings',
      items: [
        {
          title: 'First Year 2 SSLC (16th Oct 2024)',
          documents: [
            { name: 'Year 2 SSLC Memo', link: 'https://docs.google.com/document/d/1SRHz8XL8ZmYO-_Xnu0xVMLPGmPXRX86DVuj1y8E1Tn4/edit?tab=t.0' },
            { name: 'Inquiries List & School Response', link: 'https://docs.google.com/document/d/1I6Tm_sSrorABe2d1u-uug20UOp5hVHTuqnr7SzWeMqM/edit?tab=t.0' }
          ]
        }
      ]
    },
    {
      category: 'Full SSLC Meetings',
      items: [
        {
          title: 'First FULL SSLC (20th November 2023)',
          documents: [
            { name: 'Memo', link: 'https://docs.google.com/document/d/1e2AMeFWX-2v9RK5s1tvfolrTzJefZ6c6CW_LVMsicJQ/edit' }
          ]
        },
        {
          title: 'Second FULL SSLC (24th January 2024)',
          documents: [
            { name: 'Memo', link: 'https://docs.google.com/document/d/1_wUdaavUXip2Nj4hsHuDmmgavRuptyr0xwPMQVgAodo/edit' }
          ]
        },
        {
          title: 'Third FULL SSLC (28th February 2024)',
          documents: [
            { name: 'Memo', link: 'https://docs.google.com/document/d/1zti5gpMqWpU9f9btnAwKgpMCqKoClp14iRw1OUDAY8Q/edit?usp=sharing' },
            { name: 'Follow up Memo', link: 'https://docs.google.com/document/d/1G9YTJzyA0bS6gxj29V3J3daZ62AmdJ5s_spQQFP2Ke0/edit?usp=sharing' }
          ]
        },
        {
          title: 'Final FULL SSLC (24th April 2024)',
          documents: [
            { name: 'Memo', link: 'https://drive.google.com/file/d/1G5zZopX107mnABJ-4yjMoVQ8-j3LkGEu/view?usp=sharing' }
          ]
        }
      ]
    },
    {
      category: 'Meeting With Data Science Director',
      items: [
        {
          title: 'Meeting With Data Science Director (21st Feb 2024)',
          documents: [
            { name: 'Proposed Agenda', link: 'https://docs.google.com/document/d/1CST-q77C2QE3kX_PCCpIhFHgBbNCtl5D/edit' }
          ]
        }
      ]
    },
    {
      category: 'Meeting With Faculty Rep',
      items: [
        {
          title: 'Meeting With Faculty Rep (30th October 2024)',
          documents: [
            { name: 'Document', link: 'https://docs.google.com/document/d/1ctfRoqhV8E68cmaUEvpoTu8qHsQpCSfQJHoQ1rVuiLU/edit?tab=t.0' }
          ]
        }
      ]
    }
  ];

  const surveys = [
    {
      title: 'Year 1 In-depth Survey (December 2023)',
      documents: [
        { name: 'Paper Version of the Survey', link: 'https://drive.google.com/file/d/1XUX0_Pm7FUNGstJz9qz_DGDgROewQ7TU/view?usp=sharing' },
        { name: 'Survey Report', link: 'https://drive.google.com/file/d/1FLYKwGLd0XbojBcLxj0KIsgUpjR1w7Wy/view?usp=sharing' },
        { name: 'Results of the Survey', link: 'https://docs.google.com/spreadsheets/d/1WQyDp0QIYr0yIFcQLQNtFWwm_8j0rGQj/edit?usp=sharing&ouid=110035136164781901450&rtpof=true&sd=true' }
      ]
    },
    {
      title: 'TB1 Post Exam Survey (January 2024)',
      documents: [
        { name: 'TB1 Post Exam Survey Results', link: 'https://docs.google.com/spreadsheets/d/1utH7hSC3e3mEk9Vcs3rVIpZnxi83UtUp/edit#gid=1863882458' },
        { name: 'Memo for Second FULL SSLC meeting', link: null }
      ]
    },
    {
      title: 'Year 1 TB2 In-depth Survey (May - June 2024)',
      documents: [
        { name: 'Paper Version of the Survey', link: 'https://drive.google.com/file/d/1y8_GV-qS-f8HMC_ZvD7Q6tG9u9ZQLrQj/view?usp=sharing' },
        { name: 'Results of the Survey', link: 'https://docs.google.com/spreadsheets/d/1KqQbqd1Gy7D9Qmg-0Yd2PEFnFfqrsIrc/edit?gid=1943024730#gid=1943024730' },
        { name: 'Survey Report', link: 'https://drive.google.com/file/d/1N5-hxtMcOK7z19m8_6lBQEsPmI2k-wJf/view?usp=sharing' }
      ]
    },
    {
      title: 'TB2 Post Exam Survey (June 2024)',
      documents: [
        { name: 'Results', link: 'https://docs.google.com/spreadsheets/d/1MtKIHcWCz1OD32LZqQjQbwATPThYwxyO/edit?usp=sharing&ouid=110035136164781901450&rtpof=true&sd=true' },
        { name: 'Report', link: 'https://drive.google.com/file/d/10AGczzvIlJhUG0joZ3rUxh8V_qAoWCEB/view?usp=sharing' }
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      <div>
        <div className='mx-5 mt-4 mb-2'></div>
        <div className="text-center mt-4 col-md-9 mx-auto">
          <h1 className="text-danger col-md-6 mx-auto text-center">Previous Documents From Meeting with School Faculty</h1>

          <div className="accordion" id="documentAccordion">
            {meetings.map((meeting, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                    {meeting.category}
                  </button>
                </h2>
                <div id={`collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}`} data-bs-parent="#documentAccordion">
                  <div className="accordion-body">
                    {meeting.items.map((item, itemIndex) => (
                      <div className="accordion-item" key={itemIndex}>
                        <h2 className="accordion-header" id={`heading${index}-${itemIndex}`}>
                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}-${itemIndex}`} aria-expanded="false" aria-controls={`collapse${index}-${itemIndex}`}>
                            {item.title}
                          </button>
                        </h2>
                        <div id={`collapse${index}-${itemIndex}`} className="accordion-collapse collapse" aria-labelledby={`heading${index}-${itemIndex}`} data-bs-parent={`#collapse${index}`}>
                          <div className="accordion-body">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Document</th>
                                  <th>Link</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.documents.map((doc, docIndex) => (
                                  <tr key={docIndex}>
                                    <td>{doc.name}</td>
                                    <td><a href={doc.link} target="_blank" rel="noopener noreferrer">View Document</a></td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Survey Results */}
        <div className="m-5 col-md-9 mx-auto">
          <h1 className="text-danger text-center">Results of Survey</h1>

          <div className="accordion" id="activityAccordion">
            {surveys.map((survey, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`headingSurvey${index}`}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseSurvey${index}`} aria-expanded="false" aria-controls={`collapseSurvey${index}`}>
                    {survey.title}
                  </button>
                </h2>
                <div id={`collapseSurvey${index}`} className="accordion-collapse collapse" aria-labelledby={`headingSurvey${index}`} data-bs-parent="#activityAccordion">
                  <div className="accordion-body">
                    <table className="table text-center">
                      <thead>
                        <tr>
                          <th>Document</th>
                          <th>Link</th>
                        </tr>
                      </thead>
                      <tbody>
                        {survey.documents.map((doc, docIndex) => (
                          <tr key={docIndex}>
                            <td>{doc.name}</td>
                            <td>
                              {doc.link ? (
                                <a href={doc.link} target="_blank" rel="noopener noreferrer">View Document</a>
                              ) : (
                                <span>{doc.name}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
