import React from "react";
import "./Contact.css";
import { Card, Container, Tabs, Tab } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import logo from '../../utils/images/logoo.jpg';

function Contact() {
  return (
    <div className="contact-page">
      <header className="height-175">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h3
            className="text-center fw-semibold mt-10"
            style={{ color: "#fff" }}
          >
            2nd International Conference on Intelligent and Sustainable Power
            and Energy Systems (ISPES 2024)
          </h3>
          <h5 className="text-center w-75 mb-5">
            (13<sup>th</sup> - 14<sup>th</sup> December 2024)
          </h5>
        </div>
      </header>
      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Get In Touch</h2>
          </Col>
        </Row>
      </Container>

      <div
        style={{
          backgroundColor: "#dc3545",
          color: "#fff",
          padding: "40px 0",
          marginTop: "30px",
        }}
        className="mt-5"
      >
        <Container>
          <Tabs
            defaultActiveKey="convenor"
            id="contact-tabs"
            className="mb-3 justify-content-center custom-tabs"
          >
            <Tab
  eventKey="convenor"
  title={<span style={{ color: "black" }}>Convenor</span>}
>
  <Row className="justify-content-center">
    <Col md={6} className="text-center">
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          color: "#000",
          borderRadius: "5px",
        }}
      >
        <p className="text-center">
          <strong>Prof. Dr. Premkumar M</strong>
        </p>
        <p className="text-center">Phone No: +91 9500390495</p>
        <p className="text-center">
          Email:{" "}
          <a
            href="mailto:hod-eee@dayanandasagar.edu"
            style={{ color: "#000", textDecoration: "none" }}
          >
            hod-eee@dayanandasagar.edu
          </a>
        </p>
      </div>
    </Col>
  </Row>
</Tab>
            <Tab
              eventKey="organizers"
              title={<span style={{ color: "black" }}>Organizers</span>}
            >
              <Row className="justify-content-center">
                <Col md={4} className="text-center">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Prof. P Usha</strong>
                    </p>
                    <p>Phone: +91 9341071265</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:usha-eee@dayanandasagar.edu"
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        usha-eee@dayanandasagar.edu
                      </a>
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Asst. Prof. Dr. Sujit Kumar</strong>
                    </p>
                    <p>Phone No: +91 9660048172</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:sujit-eee@dayanandasagar.edu"
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        sujit-eee@dayanandasagar.edu
                      </a>
                    </p>
                  </div>
                </Col>
                <Col md={4} className="text-center">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Asst. Prof. Dr. Manikantha G</strong>
                    </p>
                    <p>Phone: +91 8130498848</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:gopisetti-eee@dayanandasagar.edu"
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        gopisetti-eee@dayanandasagar.edu
                      </a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Tab>

            <Tab
              eventKey="publication"
              title={
                <span style={{ color: "black" }}>
                  For Publication Related Queries
                </span>
              }
            >
              <Row className="justify-content-center">
              <Col md={6} className="text-center">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Asst. Prof. Dr. Sujit Kumar</strong>
                    </p>
                    <p>Phone No: +91 9660048172</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:sujit-eee@dayanandasagar.edu"
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        sujit-eee@dayanandasagar.edu
                      </a>
                    </p>
                  </div>
                </Col>
                
              </Row>
            </Tab>
            <Tab
              eventKey="registration"
              title={
                <span style={{ color: "black" }}>
                  For Registration Related Queries
                </span>
              }
            >
              <Row className="justify-content-center">
              <Col md={6} className="text-center">
                  <div
                    style={{
                      backgroundColor: "#fff",
                      padding: "20px",
                      color: "#000",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Asst. Prof. Dr. Manikantha G</strong>
                    </p>
                    <p>Phone: +91 8130498848</p>
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:gopisetti-eee@dayanandasagar.edu"
                        style={{ color: "#000", textDecoration: "none" }}
                      >
                        gopisetti-eee@dayanandasagar.edu
                      </a>
                    </p>
                  </div>
                </Col>
                
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={8}>
            <Card className="mt-5">
              <Card.Header
                className="text-white bg-danger text-center"
                style={{ fontSize: "24px" }}
              >
                LOCATION
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <address id="address" className="text-center">
                      <p className="font-weight-bold">
                        Department of Electrical Engineering
                      </p>
                      <p>Dayananda Sagar College Of Engineering</p>
                      <p>Bengaluru, Karnataka - 560078</p>
                    </address>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex justify-content-center mt-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.977563627565!2d77.56398017572252!3d12.90916351624276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1721590758756!5m2!1sen!2sin"
                      width="800"
                      height="350"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
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
        <Row>
          <Col md={8}>
            <Card className="mb-4 mt-5">
              <Card.Header
                className="text-white bg-danger text-center"
                style={{ fontSize: "24px" }}
              >
                HOST
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={8} className="text-center">
                    <p className="font-weight-bold">
                      Department of Electrical Engineering
                    </p>
                    <p>Dayananda Sagar College Of Engineering (DSCE)</p>
                    <p>Bengaluru, Karnataka - 560078</p>
                    <p>📱 Contact: (+91) 9500390495</p>
                    <p>📧 E-mail: hod-eee@dayanandasagar.edu</p>
                  </Col>
                  <Col md={4} className="text-center">
                    <img
                      src={logo}
                      alt="DSCE-logo"
                      style={{
                        width: "100%",
                        maxWidth: "150px",
                        marginTop: "20px",
                      }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
