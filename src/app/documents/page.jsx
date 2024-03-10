import React from 'react';

export const metadata = {
  title: 'Data Science Student Reps Page'
}

export default function DocumentAccordion() {
  return (
    <main>
             <div className='mx-5 mt-4 mb-2'>
        <a href="/" className="btn btn-primary">Home</a>
        </div>
      <div className="text-center mt-4 col-md-9 mx-auto">
    <h1 className="text-danger col-md-6 mx-auto text-center">Previous Documents From Meeting with School Faculty</h1>

    <div className="accordion" id="documentAccordion">
        {/* <!-- Year 1 SSLC Meetings --> */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingYear1SSLC">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseYear1SSLC" aria-expanded="false" aria-controls="collapseYear1SSLC">
                    Year 1 SSLC Meetings
                </button>
            </h2>
            <div id="collapseYear1SSLC" className="accordion-collapse collapse" aria-labelledby="headingYear1SSLC" data-bs-parent="#documentAccordion">
                <div className="accordion-body">
                    {/* <!-- First Year 1 SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFirstYear1SSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirstYear1SSLC" aria-expanded="false" aria-controls="collapseFirstYear1SSLC">
                                First Year 1 SSLC (25th Oct 2023)
                            </button>
                        </h2>
                        <div id="collapseFirstYear1SSLC" className="accordion-collapse collapse" aria-labelledby="headingFirstYear1SSLC" data-bs-parent="#collapseYear1SSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Year 1 SSLC Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1ZduRWJwAYHLW7zVSLqXrDly9dfxOhhjfCgmAnzd0zcA/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                        <tr>
                                            <td>Follow Up Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1lNCMN62eyhh3VVTFQQCFwfJvStFujzAH1fq6w8Wh9TQ/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                        <tr>
                                            <td>School Response</td>
                                            <td><a href="https://docs.google.com/document/d/1ip-qiJ377P3aKcPQtYlNksCqnozr_PwF/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Second Year 1 SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSecondYear1SSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondYear1SSLC" aria-expanded="false" aria-controls="collapseSecondYear1SSLC">
                                Second Year 1 SSLC (6th Dec 2023)
                            </button>
                        </h2>
                        <div id="collapseSecondYear1SSLC" className="accordion-collapse collapse" aria-labelledby="headingSecondYear1SSLC" data-bs-parent="#collapseYear1SSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Second Year 1 SSLC Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1KZwR65ekprIxvQYb-QX9901yIRPVhpLafyuNE-Qcaq0/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Third Year 1 SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingthirdYear1SSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethirdYear1SSLC" aria-expanded="false" aria-controls="collapsethirdYear1SSLC">
                                Third Year 1 SSLC (12th March 2024)
                            </button>
                        </h2>
                        <div id="collapsethirdYear1SSLC" className="accordion-collapse collapse" aria-labelledby="headingthirdYear1SSLC" data-bs-parent="#collapseYear1SSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Third Year 1 SSLC Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1ZQlYWntSneL_c5kU09DUsZEmHRlcRJ785GgbHFcQiAs/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Full SSLC Meetings --> */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFullSSLC">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFullSSLC" aria-expanded="false" aria-controls="collapseFullSSLC">
                    Full SSLC Meetings
                </button>
            </h2>
            <div id="collapseFullSSLC" className="accordion-collapse collapse" aria-labelledby="headingFullSSLC" data-bs-parent="#documentAccordion">
                <div className="accordion-body">
                    {/* <!-- First FULL SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFirstFullSSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFirstFullSSLC" aria-expanded="false" aria-controls="collapseFirstFullSSLC">
                                First FULL SSLC (20th November 2023)
                            </button>
                        </h2>
                        <div id="collapseFirstFullSSLC" className="accordion-collapse collapse" aria-labelledby="headingFirstFullSSLC" data-bs-parent="#collapseFullSSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1e2AMeFWX-2v9RK5s1tvfolrTzJefZ6c6CW_LVMsicJQ/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Second FULL SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSecondFullSSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSecondFullSSLC" aria-expanded="false" aria-controls="collapseSecondFullSSLC">
                                Second FULL SSLC (24th January 2024)
                            </button>
                        </h2>
                        <div id="collapseSecondFullSSLC" className="accordion-collapse collapse" aria-labelledby="headingSecondFullSSLC" data-bs-parent="#collapseFullSSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1_wUdaavUXip2Nj4hsHuDmmgavRuptyr0xwPMQVgAodo/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Third FULL SSLC --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThridFullSSLC">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThridFullSSLC" aria-expanded="false" aria-controls="collapseThridFullSSLC">
                                Third FULL SSLC (28th February 2024)
                            </button>
                        </h2>
                        <div id="collapseThridFullSSLC" className="accordion-collapse collapse" aria-labelledby="headingThridFullSSLC" data-bs-parent="#collapseFullSSLC">
                            <div className="accordion-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Document</th>
                                            <th>Link</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1zti5gpMqWpU9f9btnAwKgpMCqKoClp14iRw1OUDAY8Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                        
                                        <tr>
                                            <td>Follow up Memo</td>
                                            <td><a href="https://docs.google.com/document/d/1G9YTJzyA0bS6gxj29V3J3daZ62AmdJ5s_spQQFP2Ke0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View Document</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Meeting With Data Science Director --> */}
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingDSDirector">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDSDirector" aria-expanded="false" aria-controls="collapseDSDirector">
                    Meeting With Data Science Director (21st Feb 2024)
                </button>
            </h2>
            <div id="collapseDSDirector" className="accordion-collapse collapse" aria-labelledby="headingDSDirector" data-bs-parent="#documentAccordion">
                <div className="accordion-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Document</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Proposed Agenda</td>
                                <td><a href="https://docs.google.com/document/d/1CST-q77C2QE3kX_PCCpIhFHgBbNCtl5D/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>


      {/* Survey Results */}
      <div className="m-5 col-md-9 mx-auto">
        <h1 className="text-danger text-center">Results of Survey</h1>

        <div className="accordion" id="activityAccordion">
          {/* Year 1 In-depth Survey */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSurvey">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSurvey" aria-expanded="true" aria-controls="collapseSurvey">
                Year 1 In-depth Survey (December 2023)
              </button>
            </h2>
            <div id="collapseSurvey" className="accordion-collapse collapse" aria-labelledby="headingSurvey" data-bs-parent="#activityAccordion">
              <div className="accordion-body">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Year 1 In-depth Survey (December 2023)</td>
                      <td><a href="https://drive.google.com/file/d/1XUX0_Pm7FUNGstJz9qz_DGDgROewQ7TU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Paper Version of the Survey</a></td>
                    </tr>
                    <tr>
                      <td>Survey Report</td>
                      <td><a href="https://drive.google.com/file/d/1FLYKwGLd0XbojBcLxj0KIsgUpjR1w7Wy/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Document</a></td>
                    </tr>
                    <tr>
                      <td>Results of the Survey</td>
                      <td><a href="https://docs.google.com/spreadsheets/d/1WQyDp0QIYr0yIFcQLQNtFWwm_8j0rGQj/edit?usp=sharing&ouid=110035136164781901450&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">View Results</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* TB1 Post Exam Survey */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTB1Survey">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTB1Survey" aria-expanded="false" aria-controls="collapseTB1Survey">
                TB1 Post Exam Survey (January 2024)
              </button>
            </h2>
            <div id="collapseTB1Survey" className="accordion-collapse collapse" aria-labelledby="headingTB1Survey" data-bs-parent="#documentAccordion">
              <div className="accordion-body">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th>Document</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TB1 Post Exam Survey Results</td>
                      <td><a href="https://docs.google.com/spreadsheets/d/1utH7hSC3e3mEk9Vcs3rVIpZnxi83UtUp/edit#gid=1863882458" target="_blank" rel="noopener noreferrer">View Results</a></td>
                    </tr>
                    <tr>
                      <td>Memo for Second FULL SSLC meeting</td>
                      <td><span>For the analysis of the results, please refer to Memo for Second FULL SSLC meeting</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
