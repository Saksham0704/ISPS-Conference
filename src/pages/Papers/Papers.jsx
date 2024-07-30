import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap"; // Import Table
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Papers() {
  return (
    <div className="paper-page">
      <header className="height-175">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h3
            className="text-center fw-semibold mt-10"
            style={{ color: "#dc3545" }}
          >
            {" "}
            2nd International Conference on Intelligent and Sustainable Power
            and Energy Systems (ISPES 2024)
          </h3>
          <h5 className="text-center w-75 mb-5">
            (13<sup>th</sup> dec - 14<sup>th</sup> December 2024)
          </h5>
        </div>
      </header>
      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Call For Papers</h2>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <div className="row mt-4">
              <div className="col-sm-12 col-md-12">
                <h4>
                  The conference seeks papers on all aspects of intelligent and
                  sustainable technologies in power and energy systems.
                  Specifically, it covers (but not limited to) the
                  following topics:
                </h4>
                
                  <p className="mt-4">
                    <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Energy storage systems Intelligent control and automation
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Power quality and High voltage engineering and its
                    applications
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Material science & Power system protection & control Field
                    computations, etc
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Power Electronic Systems and Energy Efficient Drives in
                    Electric Transportation (Land, Air, Sea, and subsea
                    applications)
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Modelling and Control of Sustainable Energy and
                    Transportation Systems
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Plug-in and Wireless Charging Systems and Infrastructure
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Energy Storage Technologies and management systems for smart
                    grid and electric / hybrid transportation
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Integration of Renewable Energy Systems for Micro grids/
                    Smart Grids/Nano-grid
                  </p>
                  <p>
                  <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; Power System Protection, Operation & Control and Energy
                    Management
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon="caret-right"
                      className="text-secondary mr-2"
                    />
                    &nbsp; AI, ML, data analytics and Cyber Security and IOT
                    Applications to Sustainable Energy and
                    Electric Transportation
                  </p>
                
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="col-sm">
              <div
                className="load-html"
                id="dates"
                data-source="important_dates.html"
              >
                <div className="card mb-3 bg-light text-black">
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
                        {/* <del>
                        <span className="text-dark-gray">
                          15<sup>th</sup> Sept 2024{" "}
                        </span>
                      </del> */}
                        <span className="text-dark-gray">
                          {" "}
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
  );
}

export default Papers;
