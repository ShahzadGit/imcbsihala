import './infonews.css'

function InfoNews() {
  return (
    <div>

      <div className="info">
        <h3>PREFACE</h3>
        <p>
          Islamabad Model College Boys(Degree) Sihala Islamabad (Formerly F.G. Degree College for Men Sihala)
          is a prestigious institution of the Federal Area. The college has a historical background. It was established in 1825 as lower Primary School in the village
          of Sihala. In 1887 it was upgraded as Primary School and in 1906, it was declared as Middle School
          in 1950. It was named as Anglo Vernacular School and was shifted in a large building at village Houn
          Dhamial. In 1964, it was upgraded as Secondary School under the Govt. of Punjab. Punjab Police donated
          a huge piece of land to the school situated at Kahauta Road, Islamabad. In 1974 Federal Government
          took over this institution from the Govt. of Punjab. In 1979 it was upgraded as higher Secondary School.
          After getting bifurcated from F.G. High School Sihala (Presently IMCB Sihala) the college was upgraded
          as Degree College in 2009. The new campus comprises of 16 class rooms 06 Laboratories for science
    students and a beautiful computer lab, fully equipped with 16 latest computers.</p>
      </div>

      <div className="news">
        <h3>NEWS and Events</h3>
        {/* <h1 className="animate__animated animate__bounce animate__repeat-2">An animated element</h1> */}

        <div >
          <ul >
            <li className="animate__animated animate__bounce">Admissions are Open...</li>
            <li className="animate__animated animate__pulse">Tree Plantation Drive</li>
            <li className="animate__animated animate__flash">Independance Day</li>
          </ul>
        </div>
      </div>

    </div>


  );
}

export default InfoNews;