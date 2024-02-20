import React from 'react';

export default function PlanAccordion() {
    return (
<main>
      <div className="text-center mt-4 col-md-9 mx-auto "> 
        <h1 className="text-danger">Vision and Plans</h1>
        
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              {/* <i className="bi bi-circle pe-3"></i> */}
              1. Regularly collect opinions to assist in conducting evaluation surveys, and reflect them to school authority.
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <table className="table mx-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Collecting Opinion Regularly</td>
      <td>Collecting opinions through channels such as WhatsApp, Discord, and an anonymous message box.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Attending School Meetings</td>
      <td>Attending Year 1 SSLC and full SSLC meetings to reflect opinions on course arrangements and school policies.</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>End of Term In-depth Survey</td>
      <td>Conducting an in-depth end of TB questionnaire to collect student opinions and feedback on school policy and course arrangements. This will also gather crucial data for proposing policies, such as assessing students academic progress, their plans for future career paths, and their engagement in the data science community.</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Post Exam Survey</td>
      <td>Collecting opinions after exams each term to gather views on examination arrangements.</td>
    </tr>
  </tbody>
</table>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. Provide assistance on academics and reduce their barriers to academic achievement
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <table className="table mx-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Online Learning Platform</td>
      <td>Develop an online Google Drive to store past papers, lecture notes, and additional learning materials (e.g., study skills spreadsheets, calendars) to help students learn more effectively.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Roadmap Project</td>
      <td>Create an online self-study roadmap that includes the necessary skills for becoming a data scientist, along with its specializations. This roadmap will feature custom resources tailored specifically for the entire program and will also include additional generic resources that cater to the desired specialization of the student .</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Coding/Maths Surgery</td>
      <td>Hold voluntary math and coding sessions at the end of the term to assist students with programming or mathematics-related problems.</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Assistance on forming Study Groups</td>
      <td>We encourage students to form study groups of 3-6 members. Assistance will be provided for those who need support, such as room booking and activity support.</td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                3. Provide suggestions on school policies to improve the learning environment
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              
                <table className="table mx-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Concerns on School Policies that improve learning environment</td>
      <td>Focusing on various school policies that may affect students’ learning environment, such as suggestions to modify course arrangements and assessment policies; assess the teaching qualities of newly established courses; assess the impacts of the new term structure and the reduction in the number of notes available for examination; and suggestions on providing simplified Past Paper solutions.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Inquiry to School Authority</td>
      <td>Sending inquiry letters to request the school to clarify its policies, so that we can better understand them.</td>
    </tr>
  </tbody>
</table>

              
            </div>
          </div>

       {/* New Accordion Item #4 */}
       <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            4. While managing learning differences, also allow capable students to develop their achievements and profile
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <table className="table mx-3">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Providing More Updates on Available Scholarships</td>
      <td>We noticed several students have decided not to apply for a placement year due to financial concerns. We hope the school can provide information about applying for scholarships, so that capable students can have the opportunity to ease their financial burden.</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Encouragement Students to Host Activities</td>
      <td>We encourage students who are proficient in math or coding, or who are enthusiastic about organizing activities, to become tutors or event organizers in the future. We will seek to cooperate with different organizations, such as the Study-Skills Team and BDSS, so they can award credits to those serving as tutors or volunteer teachers for these events.</td>
    </tr>
  </tbody>
</table>

                        </div>
                    </div>

                    {/* New Accordion Item #5 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            5. Enhance programme competitiveness through curriculum reform
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            
                            <table className="table mx-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Concerns on Curriculum Modification</td>
                        <td>Through meeting with school authority to express concerns on possible modification on course curriculum, including: enriching the choices of electives during Year 3; increasing the elements of Data Management in the school curriculum; addressing the problem of overlapping for year 1 courses ‘Intro to Coding’ and ‘Algorithms and Programming in C++ and R’; assessing the impacts of the new school structure in affecting students’ foundations on statistics and coding.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Roadmap Project</td>
                        <td>The Roadmap Project, mentioned in section 2, serves as crucial supporting evidence for curriculum modification, including the necessary skills to become a data scientist. We expect the roadmap to be updated annually, allowing students to maintain their competitiveness by understanding their pathway clearly.</td>
                    </tr>
                </tbody>
            </table>
                        </div>
                    </div>

                    {/* New Accordion Item #6 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            6. Enhance career development
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            
                                <table className="table mx-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Promotion on Career Opportunities</td>
                        <td>Report present and future issues of interest, including career development opportunities and paid jobs on campus, such as chances to apply for student ambassador, to fellow schoolmates weekly via social media platforms like Discord.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Concerns on Industrial Placement Year and Integrated Masters</td>
                        <td>To request that the school authority provides the most recent updates on the integrated masters program and the industrial placement year. To evaluate the current placement year arrangements and provide suggestions for modifications.</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Reflecting needs of more Internship Opportunities and Workshops for Data Science Students</td>
                        <td>To lobby the school to provide more internship opportunities specifically for data science students across various domain fields.</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Collaboration with Career Service Team and BDSS</td>
                        <td>Collaborating with Career Services to introduce more internship opportunities and schemes for Small and Medium-sized Enterprises (SMEs). Aiming for smoother integration with the BDSS to enable greater student participation in career-related activities.</td>
                    </tr>
                </tbody>
            </table>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            7. Develop a strong Data Science (DS) community to establish a robust network
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            
                            <table className="table mx-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Maintenance on Discord Community</td>
                        <td>To provide a platform for students to engage in real-time discussions, exchange ideas and information related to coding, math, and data science activities.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Expansion on Discord Community</td>
                        <td>Expanding the Discord server this summer, encouraging all data science students to join. This effort aims to build a strong data science network by creating several branches of the server corresponding to each academic year and using the initial server as the main communication channel for both the data science course and the BDSS.</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Collaboration with BDSS/Study Skills Team</td>
                        <td>We encourage all students to join the BDSS and participate in relevant study skills sessions, such as the coding club, and we will provide weekly updates on Data Science activities mainly through Discord.</td>
                    </tr>
                </tbody>
            </table>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            8. Collaborate with school authorities to promote the Data Science Programme and the community
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            
                            <table className="table mx-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Collaboration with the School and Promotion of the Programme</td>
                        <td>To explore opportunities to collaborate with the school to promote our program on various occasions, such as Open Days, Offer Holders Events, and Freshers Welcome Week.</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Explore the Possibilities on In-depth Research</td>
                        <td>To explore possibilities for collaboration with the school to conduct in-depth surveys and analyze the results to regularly trace students views, and to conduct research on special topics during the summer vacation, such as coordination in the Road Map Project.</td>
                    </tr>
                </tbody>
            </table>
                            
                        </div>
                    </div>
          
        </div>
      </div>
    </main>
    );
}
