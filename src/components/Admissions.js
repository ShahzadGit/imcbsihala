import React from 'react'
import './admissions.css'
import Table from 'react-bootstrap/Table';
// import admForm from './../pdf/Admission-Form.pdf';
import admForm from './../pdf/AdmissionForm2022.pdf';

export default function Admissions() {
    return (
        <div>
            <div className="one">
                <h4 className="animate__animated animate__bounce">Admissions are open for the session 2022-2023</h4>
            </div>

            <div className="two">
                <h5> BASIC ELIGIBILITY</h5>
                <p>Sons of the following categories will e eligible for admission on seats except seats reserved for FATA/
                    FANA (Domicile)</p>
                <ol>
                    <li>Federal Government employees residing in Islamabad/Rawalpindi</li>
                    <li>Residents of Islamabad Capital Territory</li>
                    <li>Diplomats stationed at Islamabad</li>

                </ol>
                <p>A candidate who has passed his last examination from an institution not located in Islamabad and Federal
                Area shall produce residence certificate from Estate /CDA or any other valid legal document in support
                of his claim.</p>
            </div>

            <div className="three">
                <h5> MINIMUM MARKS FOR EACH DISCIPLINE FOR ADMISSION TO CLASS XI</h5>
                <Table bordered hover className="threeTable">
                    <thead>
                        <tr>
                            <th>Sr.#</th>
                            <th>Discipline</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Pre-Engineering</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pre-Medical</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>General Science</td>
                            <td>60%</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Commerce</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Humanities</td>
                            <td>40%</td>
                        </tr>

                    </tbody>
                </Table>

            </div>

            <div className="four">
                <h5>ADMISSION PROCEDURE</h5>
                <p>Application forms along with the prospectus will be available in the college office. OR <a href={admForm} download="Admission-Form.pdf">Click Here to Download</a></p>
                <p>The Admission form duly filled-in- and complete in all respects is to be submitted to the college office.
                On submission of the form, the college shall furnish a receipt. </p>
                <p>A list of the students selected for admission shall be displayed on the Notice Board. The selected students
                shall enroll themselves by paying the required fee and funds etc. Within specified time limit. A selected
                students who fails to enroll his name in time shall lose his claim for admission.</p>
                
            </div>
            <div className="five">
                <h5>DOCUMENTS REQUIRED</h5>
                
                <ol>
                    <li>02 Attested Photostat copies of mark sheet of SSC/HSSC/ADP/ADA.</li>
                    <li>Character certificate giving a repot the behavior, attendance and other activities of the candidate from the Head of the institution last attended.</li>
                    <li>Provisional certificate testifying that the student has passed the SSC/HSSC Examination.</li>
                    <li>Certificate of parent being a Federal Govt. employee wherever applicable</li>
                    <li>Certificate of residence as required in admission policy.</li>
                    <li>Paste  one  photograph  on  admission  form  and  02  photographs  on  data  form  and  submit  01 photograph with admission form.</li>
                    <li>02 Photostat copies of the Parent’s and candidate’s (if applicable) own computerized National Identity Card(s).</li>
                    <li>An original affidavit on legal stamp paper (to be provided at the time of payment of fee/funds) solemnly declaring that the he will refrain from participating in politics or indulging in any subversive activities and indiscipline.</li>
                    <li>Original Migration Certificate and one verified Photostat copy of migration certificated for the Board concerned other than FBISE Islamabad.</li>
                </ol>
                <p>NOTE: Admission policy is subject to modification/revision by the Federal Directorate of Education /
                    Ministry / Quiad-e-Azam University / University of Gujrat in that case the modified/revised 
                        policy shall be applicable.</p>
                <p>For More Details, go through Prospectus</p>
            </div>


        </div>
    )
}
