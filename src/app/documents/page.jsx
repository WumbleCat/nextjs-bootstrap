import React from 'react';

export default function DocumentAccordion() {
  return (
    <main>
      <div className="text-center mt-4 col-md-9 mx-auto">
        <h1 className="text-danger">Previous Documents</h1>

        <div className="accordion" id="documentAccordion">
    {/* Documents on Meeting with School */}
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingMeetings">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMeetings" aria-expanded="false" aria-controls="collapseMeetings">
                Documents on Meeting with School
            </button>
        </h2>
        <div id="collapseMeetings" className="accordion-collapse collapse" aria-labelledby="headingMeetings" data-bs-parent="#documentAccordion">
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
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Full SSLC Memo */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFullSSLC">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFullSSLC" aria-expanded="false" aria-controls="collapseFullSSLC">
                Full SSLC Memo
              </button>
            </h2>
            <div id="collapseFullSSLC" className="accordion-collapse collapse" aria-labelledby="headingFullSSLC" data-bs-parent="#documentAccordion">
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
                      <td>First FULL SSLC Follow Up Memo</td>
                      <td><a href="https://docs.google.com/document/d/1_4fxJ_15UajsFErvupQOgXd0r-Xb5qwOwMXTy6oWBkU" target="_blank" rel="noopener noreferrer">View Document</a></td>
                    </tr>
                    <tr>
                      <td>Second FULL SSLC Memo</td>
                      <td><a href="https://docs.google.com/document/d/1_wUdaavUXip2Nj4hsHuDmmgavRuptyr0xwPMQVgAodo/edit" target="_blank" rel="noopener noreferrer">View Document</a></td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Meeting With Data Science Director */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingDSDirector">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDSDirector" aria-expanded="false" aria-controls="collapseDSDirector">
                Meeting With Data Science Director
              </button>
            </h2>
            <div id="collapseDSDirector" className="accordion-collapse collapse" aria-labelledby="headingDSDirector" data-bs-parent="#documentAccordion">
              <div className="accordion-body">
                <strong>Awaiting updates.</strong>
              </div>
            </div>
          </div>

          {/* Results of Surveys */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSurveys">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSurveys" aria-expanded="false" aria-controls="collapseSurveys">
                Results of Surveys
              </button>
            </h2>
            <div id="collapseSurveys" className="accordion-collapse collapse" aria-labelledby="headingSurveys" data-bs-parent="#documentAccordion">
              <div className="accordion-body">
                <strong>Awaiting updates.</strong>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-4 col-md-9 mx-auto">
                <h1 className="text-danger text-center">Timeline of Activities</h1>

                <div className="accordion" id="activityAccordion">
                    {/* October - November 2023 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOctNov">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOctNov" aria-expanded="true" aria-controls="collapseOctNov">
                                October - November 2023
                            </button>
                        </h2>
                        <div id="collapseOctNov" className="accordion-collapse collapse" aria-labelledby="headingOctNov" data-bs-parent="#activityAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Getting Elected on Course Rep Elections</li>
                                    <li>Building up on Online Learning Drive, Discord Group and Message Box</li>
                                    <li>Attending First Year 1 SSLC Meeting</li>
                                    <li>Attending First FULL SSLC Meeting</li>
                                    <li>Requesting modifications on the course arrangement of the “Applied Analysis A” with providing extra practice paper</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* December 2023 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingDec">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDec" aria-expanded="false" aria-controls="collapseDec">
                                December 2023
                            </button>
                        </h2>
                        <div id="collapseDec" className="accordion-collapse collapse" aria-labelledby="headingDec" data-bs-parent="#activityAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Attending Second Year 1 SSLC Meeting</li>
                                    <li>Conducting In-depth Year 1 Survey</li>
                                    <li>Holding Maths/ Coding Surgery</li>
                                    <li>Initialize meeting with the Data Science Director</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* January 2024 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingJan">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJan" aria-expanded="false" aria-controls="collapseJan">
                                January 2024
                            </button>
                        </h2>
                        <div id="collapseJan" className="accordion-collapse collapse" aria-labelledby="headingJan" data-bs-parent="#activityAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Attending Second FULL SSLC Meeting</li>
                                    <li>Raise the concerns about how the change of school plan in 24/25 affects on students performance</li>
                                    <li>Conducting TB1 Post-exam Survey</li>
                                    <li>Publishing Post-exam Survey Results during the Second FULL SSLC Meeting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* February 2024 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFeb">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFeb" aria-expanded="false" aria-controls="collapseFeb">
                                February 2024
                            </button>
                        </h2>
                        <div id="collapseFeb" className="accordion-collapse collapse" aria-labelledby="headingFeb" data-bs-parent="#activityAccordion">
                            <div className="accordion-body">
                                <ul>
                                    <li>Attending Third FULL SSLC Meeting</li>
                                    <li>Attending the meeting with the Data Science Director, which discuss curriculum design, career development and the data science community</li>
                                    <li>Publishing the result of the end of TB1 In-depth survey</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </main>
  );
}
