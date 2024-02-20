import React from 'react';

export default function DocumentAccordion() {
  return (
    <main>
      <div className="text-center mt-4 col-md-9 mx-auto">
        <h1 className="text-danger">Previous Documents</h1>

        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                {/* <i className="bi bi-circle pe-3"></i> */}
                1. Regularly collect opinions to assist in conducting evaluation surveys, and reflect them to school authority.
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
    </main>
  );
}
