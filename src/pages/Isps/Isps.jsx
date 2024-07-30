import React from 'react'
import {  Container, Row, Col,Carousel } from 'react-bootstrap';

function Isps() {
  return (
    <div className='isps-page'>
       <header className='height-175'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h3 className='text-center fw-semibold mt-10' style={{ color: "#dc3545"}}>2nd International Conference on Intelligent and Sustainable Power and Energy Systems (ISPES 2024)</h3>
            <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> dec - 14<sup>th</sup> December 2024)</h5>
            </div>
        </header>
        <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">ISPES 2023</h2>
          </Col>
        </Row>
      </Container>
      <Container className="text-center mt-5">
     
        <h2 className="mt-4">ISPS 2024 CONFERENCE PROCEEDING LINK</h2>
        <Carousel interval={3000} fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-Stunning-Images-of-Clouds/5.jpg"
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://tse4.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgAAAA&pid=Api&P=0&h=180"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/87/ae/83/87ae8360cfe56fda3b49e609eb3b7c25.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  )
}

export default Isps
