import './messgeprincipal.css'
import image from './../images/Principal.jpg'

function MessgePrincipal() {
    return (
        <div className="proAndMess">

            <div className="profile">
                <h3>Message From Principal</h3>
                <img src={image} alt="Principal" />
                <h5>(Prof. Zahoor Ahmad)</h5>
            </div>

            <div className="message">
                <p>I  feel  pride  to  convey  my  fervor  message  consisting  of  sincere  sentiments  to  the  students  seeking
                admission in IMCB, Sihala and their parents. I have thought myself, indebted to the coming students,
                for  the  provision  of  congenial  learning  and  character  building  atmosphere.  Being  one  of  the  most
                attractive boys college of the ICT, location as well as infra structure wise, it caters for educational needs of
                a considerable number of students hailing from all the four corners of Sihala. I am reasonably optimistic,
                with the newly built up campus at an approachable location, with an economical “pick and drop” facility
                and highly qualified teaching faculty appointed by Federal Public Service Commission, this institution
                will be able to produce alluring results at all levels.
                I pledge that better academic routine, improved discipline and zeal in
                curricular, co-curricular and extracurricular activities will be provided.
                The college is on the way to launch 4 years B.S program in different
                disciplines. The Ministry and Federal  Directorate  of  Education  are  always  on  board  and  graciously  supportive. The  said  programs
                will be launched, Insha’Allah, after getting formal permission from Quaid-e-Azam University Islamabad.
                Launching  of  BS  program  will  definitely  uplift  college  standard  and  will  provide  the  students  an
                opportunity to get an economic higher education at their door step.
                I am sanguine about this institution’s future, in the years to come, it will be
                the most reputed and affordable university level educational institution
                of ICT. At last, the students and their parents will not be
                regretful by opting the IMCB Sihala for their futuristic educational fate.</p>
            </div>

        </div>


    );
}

export default MessgePrincipal;