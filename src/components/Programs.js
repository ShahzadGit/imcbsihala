import React from 'react'
import './programs.css'

export default function Programs() {
    return (
        <div>

            <div className="two">
                <h5>SCHEME OF STUDIES for HSSC-I and HSSC-II</h5>
                <h6><strong>Compulsory Subjects</strong></h6>
                <ul>
                    <li>HSSC-I: English-I / Urdu-I / Islamiat(Ethics for Non-Muslims)</li>
                    <li>HSSC-II: English-II / Urdu-II / Pak. Studies</li>
                </ul>

                <h6><strong>Disciplines</strong></h6>
                <ul>
                    <li>Pre-Engineering Group: (Physics/Chemistry/Maths)</li>
                    <li>Pre-Medical Group: (Physics/Chemistry/Biology)</li>
                    <li>I.Com</li>
                    <li>ICS (Physics/Statistics/Economics)</li>
                    <li>General Science (Maths/Statistics/Economics)</li>
                    <li>Humanities (Civics/Economics/Health and Physical Edu/Geography/History/Islamic Studies)</li>
                </ul>

                <p>NOTE: Subject combinations depend on availability of seats and teaching faculty in a given discipline.
                    The Admission Committee may change combination of subjects.</p>
            </div>

            <div className="three">
                <h5>SCHEME OF STUDIES for ADP and ADA</h5>
                <h6><strong>Compulsory Subjects</strong></h6>
                <ul>
                    <li>PART-I: English-I / Islamiat(Ethics for Non-Muslims)</li>
                    <li>PART-II: English-II / Pak. Studies</li>
                </ul>

                <h6><strong>Elective Subjects</strong></h6>
                <ul>
                    <li>Economics / Health and Physical Edu. / Geography / History of Pakistan / Islamic Studies</li>
                </ul>

                <p>NOTE: Subject combinations depend on availability of seats and teaching faculty in a given discipline.
                    The Admission Committee may change combination of subjects.</p>
            </div>
        </div>
    )
}
