import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <div className="left">
                <h5>Quick Links</h5>
                <Link className='quicklinks' to="/">HOME</Link><br/>
                <Link className='quicklinks' to="/admissions">Admissions</Link><br/>
                <Link className='quicklinks' to="/programs">Programs</Link><br/>
                <Link className='quicklinks' to="/faculty    ">Faculty</Link><br/>
                <Link className='quicklinks' to="/facilities">Facilities</Link><br/>
                {/* <Link className='nav-brand' to="/about">About</Link><br/>
                <Link className='nav-brand' to="/contact">Contact Us</Link> */}
                
            </div>

            <div className="middle">
                <h5>External Links</h5>
                <a href='https://qau.edu.pk' target="_blank" rel='noreferrer'>Quaid-e-Azam University</a><br />
                <a href='https://uog.edu.pk' target="_blank" rel='noreferrer'>University of Gujrat</a><br />
                <a href='https://fbise.edu.pk' target="_blank" rel='noreferrer'>Federal Board of Intermediate and Secondary Education</a><br />
                <a href='https://fde.gov.pk/' target="_blank" rel='noreferrer'>Federal Directorate of Education</a><br />
            </div>

            <div className="right">
                <h5>Find us Here...</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6649.899317862497!2d73.22250879578833!3d33.55468425665575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfee4c7e403ac5%3A0x9f64b4303e271da7!2sIMCB%20Degree%20College%20Sihala!5e0!3m2!1sen!2s!4v1660070019579!5m2!1sen!2s" style={{ textAlign: 'center', border: '0', width: "300", height: "225" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='IMCB, Sihala'>IMCB, Sihala</iframe>
            </div>

            <div className="copyright">
                &copy; Islamabad Model College for Boys (Degree), Sihala, Islamabad.
            </div>

        </div>
    )
}
