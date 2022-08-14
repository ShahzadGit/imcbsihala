import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import b1 from './../images/banner/banner1.jpg'
import b2 from './../images/banner/banner2.jpg'
import b3 from './../images/banner/banner3.jpg'
// import './banner.css'

function Banner() {
  return (
    <Carousel fade style={{zIndex: '5'}} >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
        />
{/* 
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="Third slide"
        />
{/* 
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    
  );
}

export default Banner;