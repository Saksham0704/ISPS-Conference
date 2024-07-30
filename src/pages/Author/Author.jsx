import React from 'react'
import {  Container, Row, Col } from 'react-bootstrap';

function Author() {
  return (
    <div className='author-page'>
         <header className='height-175'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h3 className='text-center fw-semibold mt-10' style={{ color: "#dc3545"}}> 2nd International Conference on Intelligent and Sustainable Power and Energy Systems (ISPES 2024)</h3>
          <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> - 14<sup>th</sup> December 2024)</h5>
        </div>
      </header>
       <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Author Guidelines</h2>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
          <h3>Waiting for approval</h3>
          </Col>
          <Col md={4}>
            <div className="col-sm">
              <div
                className="load-html"
                id="dates"
                data-source="important_dates.html"
              >
                <div className="card mb-3 bg-light text-black mt-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Important Dates</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <b>First Call for papers:</b>
                        <span className="d-none d-sm-block"></span>{" "}
                        <span className="text-dark-gray">
                          25<sup>th</sup> July 2024
                        </span>
                      </li>
                      <li className="list-group-item">
                        <b>Second Call for papers:</b>
                        <span className="d-none d-sm-block"></span>{" "}
                        <span className="text-dark-gray">
                          15<sup>th</sup> Sept 2024{" "}
                        </span>
                      </li>
                      <li className="list-group-item">
                        <b>Last Date for Submission:</b>{" "}
                        <span className="d-none d-sm-block"></span>{" "}
                        <strong className="text-failure">
                          <span className="text-dark-gray">
                            1<sup>st</sup> Nov 2024
                          </span>
                        </strong>
                      </li>
                      <li className="list-group-item">
                        <b>Notification for Acceptance</b>{" "}
                        <span className="d-none d-sm-block"></span>{" "}
                        <span className="text-dark-gray">
                          15<sup>th</sup> Nov 2024
                        </span>
                      </li>
                      <li className="list-group-item">
                        <b>Camera-Ready Paper Submission:</b>{" "}
                        <span className="d-none d-sm-block"></span>{" "}
                        <span className="text-dark-gray">
                          20<sup>th</sup> Nov 2024
                        </span>
                      </li>
                      <li className="list-group-item">
                        <b>Last Date for Registration:</b>{" "}
                        <span className="d-none d-sm-block"></span>{" "}
                        <strong className="text-failure">
                          <span className="text-dark-gray">
                            30<sup>th</sup> Nov 2024
                          </span>
                        </strong>
                      </li>
                      <li className="list-group-item">
                        <b>Conference Date:</b>{" "}
                        <span className="d-none d-sm-block"></span>{" "}
                        <span className="text-dark-gray">
                          13<sup>th</sup> Dec - 14<sup>th</sup> Dec 2024
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Author
