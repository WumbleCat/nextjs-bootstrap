import React from 'react';
import Navbar from '../../../public/components/navbar';

export const metadata = {
  title: 'Data Science Student Reps Page'
}

export default function PlanAccordion() {
    return (
<main>
  
<Navbar />
<div className='mx-5 mt-4 mb-2'>
        </div>
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
            <table className="table">
  <thead>
    <tr>
      <th scope="col" class="col-3">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Collecting Opinion Regularly</td>
      <td>Collecting opinions through channels such as WhatsApp, Discord, and an anonymous message box.</td>
    </tr>
    <tr>
      <td>Attending School Meetings</td>
      <td>Attending Year 2 SSLC and full SSLC meetings to reflect opinions on course arrangements and school policies.</td>
    </tr>
    <tr>
      <td>End of Term In-depth Survey</td>
      <td>Conducting an in-depth end of TB questionnaire to collect student opinions and feedback on school policy and course arrangements. This will also gather crucial data for proposing policies, such as assessing students academic progress, their plans for future career paths, and their engagement in the data science community.</td>
    </tr>
    <tr>
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
    <th scope="col" class="col-3">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Online Learning Platform</td>
      <td>Develop an online Google Drive to store past papers, lecture notes, and additional learning materials (e.g., study skills spreadsheets, calendars) to help students learn more effectively.</td>
    </tr>
    <tr>
      <td>Roadmap Project</td>
      <td>Create an online self-study roadmap that includes the necessary skills for becoming a data scientist, along with its specializations. This roadmap will feature custom resources tailored specifically for the entire program and will also include additional generic resources that cater to the desired specialization of the student .</td>
    </tr>
    <tr>
      <td>Coding/Maths Surgery</td>
      <td>Hold voluntary math and coding sessions at the end of the term to assist students with programming or mathematics-related problems.</td>
    </tr>
    <tr>
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
    <th scope="col" class="col-3">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Concerns on School Policies that improve learning environment</td>
      <td>Focusing on various school policies that may affect students’ learning environment, such as suggestions to modify course arrangements and assessment policies; assess the teaching qualities of newly established courses; assess the impacts of the new term structure and the reduction in the number of notes available for examination; and suggestions on providing simplified Past Paper solutions.</td>
    </tr>
    <tr>
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
      <th scope="col">Activity</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Providing More Updates on Available Scholarships</td>
      <td>We noticed several students have decided not to apply for a placement year due to financial concerns. We hope the school can provide information about applying for scholarships, so that capable students can have the opportunity to ease their financial burden.</td>
    </tr>
    <tr>
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
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Concerns on Curriculum Modification</td>
                        <td>Through meeting with school authority to express concerns on possible modification on course curriculum, including: enriching the choices of electives during Year 3; increasing the elements of Data Management in the school curriculum; addressing the problem of overlapping for year 1 courses ‘Intro to Coding’ and ‘Algorithms and Programming in C++ and R’; assessing the impacts of the new school structure in affecting students’ foundations on statistics and coding.</td>
                    </tr>
                    <tr>
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
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Promotion on Career Opportunities</td>
                        <td>Report present and future issues of interest, including career development opportunities and paid jobs on campus, such as chances to apply for student ambassador, to fellow schoolmates weekly via social media platforms like Discord.</td>
                    </tr>
                    <tr>
                        <td>Concerns on Industrial Placement Year and Integrated Masters</td>
                        <td>To request that the school authority provides the most recent updates on the integrated masters program and the industrial placement year. To evaluate the current placement year arrangements and provide suggestions for modifications.</td>
                    </tr>
                    <tr>
                        <td>Reflecting needs of more Internship Opportunities and Workshops for Data Science Students</td>
                        <td>To lobby the school to provide more internship opportunities specifically for data science students across various domain fields.</td>
                    </tr>
                    <tr>
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
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maintenance on Discord Community</td>
                        <td>To provide a platform for students to engage in real-time discussions, exchange ideas and information related to coding, math, and data science activities.</td>
                    </tr>
                    <tr>
                        <td>Collaboration with BDSS/Study Skills Team</td>
                        <td>We encourage all students to join the BDSS activities as well as and participate in relevant study skills sessions, such as the coding club, and we will provide weekly updates on Data Science activities mainly through community whatsapp group.</td>
                    </tr>
                    <tr>
                      <td>Building a Data Science Whatsapp community group</td>
                      <td>We coordinated with BDSS in 2024 summer to develop a Whatsapp community group consisting of Year 1-3 groups chats, 
                        along with BDSS channels that share activity promotions and career opportunities. We encourage all Data Science students to join, 
                        with the aim of building a strong Data Science network by creating a platform for data science activities can be promoted more effectively, 
                        and to let students to exchange information and participate in regular community activities based on their needs.</td>
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
                        <th scope="col">Activity</th>
                        <th scope="col">Purpose</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Collaboration with the School and Promotion of the Programme</td>
                        <td>To explore opportunities to collaborate with the school to promote our program on various occasions, such as Open Days, Offer Holders Events, and Freshers Welcome Week.</td>
                    </tr>
                    <tr>
                        <td>Explore the Possibilities on In-depth Research</td>
                        <td>To explore possibilities for collaboration with the school to conduct in-depth surveys and analyze the results to regularly trace students views, and to conduct research on special topics during the summer vacation, such as coordination in the Road Map Project.</td>
                    </tr>
                </tbody>
            </table>
                            
                        </div>
                    </div>
          
        </div>
      </div>

      {/* Timeline of Activities */}
      <div className="m-5 col-md-9 mx-auto">
        <h1 className="text-danger text-center">Timeline of Activities</h1>
        <div className="accordion" id="activityAccordionYear">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2023">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2023" aria-expanded="true" aria-controls="collapse2023">
                    2023
              </button>
            </h2>
            <div id="collapse2023" className="accordion-collapse collapse" aria-labelledby="heading2023" data-bs-parent="#activityAccordionYear">
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
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="heading2024">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2024" aria-expanded="true" aria-controls="collapse2024">
                      2024
                </button>
              </h2>
              <div id="collapse2024" className="accordion-collapse collapse" aria-labelledby="heading2024" data-bs-parent="#activityAccordionYear">
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
                        <li>Attending Third FULL SSLC Meeting and we discussed curriculum design course arrangements and overlapping problem in coding course</li>
                        <li>Attending the meeting with the Data Science Director, which discuss curriculum design, career development and the data science community</li>
                        <li>Publishing the result of the end of TB1 In-depth survey</li>
                        <li>Attending Third FULL SSLC</li>
                      </ul>
                    </div>
                  </div>
                </div>
      
                {/* March 2024 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingMar">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMar" aria-expanded="false" aria-controls="collapseMar">
                      March 2024
                    </button>
                  </h2>
                  <div id="collapseMar" className="accordion-collapse collapse" aria-labelledby="headingMar" data-bs-parent="#activityAccordion">
                    <div className="accordion-body">
                      <ul>
                        <li>Attending Third Year 1 SSLC Meeting</li>
                        <li>Promotion on Career Events (Explore Data Science Workshop)</li>
                        <li>Attending the meeting with the Data Science Director and Alyce, which discuss about students’ career development and the data science community</li>
                        <li>Raise concerns on Open Book exams and modifying exam arrangements on course Applied Analysis B and Statistics</li>
                        <li>Raise concerns on modifying procedures in Offer Holder Event, Discuss with Data Science Offer-Holders during Offer Holder Event</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* April 2024 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingApr">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseApr" aria-expanded="false" aria-controls="collapseApr">
                      April 2024
                    </button>
                  </h2>
                  <div id="collapseApr" className="accordion-collapse collapse" aria-labelledby="headingApr" data-bs-parent="#activityAccordion">
                    <div className="accordion-body">
                      <ul>
                        <li>Attending the Fourth and Final Year 1 SSLC Meeting</li>
                        <li>Promotion on Career Events (Maths at Work - student and industry engagement event)</li>
                        <li>Conduct End of the Year Survey</li>
                        <li>Attend BDSS AGM and provide suggestions on BDSS Future Plan</li>
                        <li>Holding Maths/ Coding Surgery</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* May 2024 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingMay">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseMay" aria-expanded="false" aria-controls="collapseMay">
                      May 2024
                    </button>
                  </h2>
                  <div id="collapseMay" className="accordion-collapse collapse" aria-labelledby="headingMay" data-bs-parent="#activityAccordion">
                    <div className="accordion-body">
                      <ul>
                        <li>Attending the final FULL SSLC Meeting</li>
                        <li>Attending the meeting with the Head of School and expressing the opinion that the policy on the availability of notes for exams should remain unchanged</li>
                        <li>Providing a End of Term Evaluation Report assessing the teaching quality of each Year 1 course</li>
                        <li>Raising concerns about Year 3 Elective Issues</li>
                        <li>Coordinating with Alyce on promoting the Maths at Work Session</li>
                        <li>Attending the BDSS AGM</li>
                        <li>Holding the Coding Surgery</li>
                        <li>Conducting the End of TB2 In-depth Survey</li>
                        <li>Conducting the TB2 Post Exam Survey</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* June - August 2024 */}
                  <div className="accordion-item">
                  <h2 className="accordion-header" id="headingJunAug">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseJunAug" aria-expanded="false" aria-controls="collapseJunAug">
                      June - August 2024
                    </button>
                  </h2>
                  <div id="collapseJunAug" className="accordion-collapse collapse" aria-labelledby="headingJunAug" data-bs-parent="#activityAccordion">
                    <div className="accordion-body">
                      <ul>
                        <li>Organising an End-of-Term Celebration Dinner</li>
                        <li>Publishing the results of the End of TB2 In-depth Survey and Post Exam Survey</li>
                        <li>Updating the Online Learning Materials</li>
                        <li>Discussing future plans for career development with Alyce</li>
                        <li>Proposing plans for Welcoming Events</li>
                        <li>Discussing with BDSS with year plans on how to build a strong student community</li>
                        <li>Establishing the WhatsApp community group with BDSS</li>
                        <li>Providing tips for academic arrangements and career development before term starts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}
