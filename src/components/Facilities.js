import React from 'react'
import './facilities.css'
import library from './../images/library.png'
import bus from './../images/bus.jpg'
import aud from './../images/aud.jpg'
import cafe from './../images/cafe.jpg'
import sp1 from './../images/sp1.jpg'
import sp2 from './../images/sp2.jpg'

export default function Facilities() {
    return (
        <div>
            <div className="three">
                <h5>Auditorium and Cafeteria</h5>
                <p> A huge auditorium has been constructed in which more
                than 400 students can be accommodated at a time. A beautiful cafeteria is also constructed for the
                    students</p>
                <img alt='Auditorium' src={aud} style={{ width: '350px', height: '250px' }} />
                <img alt='Cafeteria' src={cafe} style={{ width: '350px', height: '250px' }} />
            </div>
            <div className="two">
                <h5>LIBRARY</h5>
                <p>The library primarily having more than 1000 books and a reading room is established, with the passage
                    of time the quantity of books will be increased up to 10,000 books.</p>
                <img alt='Library' src={library} style={{ width: '300px', height: '280px' }} />

            </div>

            <div className="three">
                <h5>Transport</h5>
                <p>By the grace of Almighty Allah we are succeeded to obtain THREE new bus for the students of the college
                through Prime Minister’s Education Reform Programme and trying to get another bus to facilitate the
                    students from the surrounding areas.</p>
                <img alt='Bus' src={bus} style={{ width: '350px', height: '250px' }} />
            </div>
            <div className="two">
                <h5>Laboratories</h5>
                <p>The new campus comprises of 16 class rooms 06 Laboratories for science
                students and a beautiful computer lab., fully equipped with 16 latest computers for the benefit of the
                    students of ICS. </p>
                <img alt='LAB-IMAGES' style={{ width: '300px', height: '280px' }} />

            </div>

            <div className="three">
                <h5>Sports</h5>
                <p>The college administration is trying its level best to provide better learning facilities as well as the best 
opportunities to the students to participate in co-curricular and extra curricular activities. In the last 
academic session various functions were arranged on religious, national, literary events and seminars to 
create awareness among the students. In sports the students were provided opportunities to participate 
in Federal Board Championship. In this championship the Sihalians got 02 Gold, 02 Silvers and Bronze 
Medals and set the new records. It is hoped that in this academic session Sihalians would obtain more 
success in the curricular, co-curricular and extra curricular activities.</p>
                <img alt='Sports' src={sp1} style={{ width: '350px', height: '250px' }} />
                <img alt='Sports' src={sp2} style={{ width: '350px', height: '250px' }} />
            </div>

        </div>
    )
}
