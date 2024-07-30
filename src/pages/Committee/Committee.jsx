import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

function Committee() {

  return (
    <div className="committee-page">
      <header className="height-175">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h2
            className="text-center fw-semibold mt-10"
            style={{ color: "#fff" }}
          >
            {" "}
            2nd International Conference on Intelligent and Sustainable Power
            and Energy Systems (ISPES 2024)
          </h2>
          <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> dec - 14<sup>th</sup> December 2024)</h5>
        </div>
      </header>
      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Conference Comittee Members</h2>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <h4 style={{ fontSize: "1.8rem" }}>
              Committee Members for ISPES 2024
            </h4>
            <Table borderless>
              <tbody>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Chief Patrons
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. D Hemachandra Sagar
                    <br />
                    Chairman, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. D Premachandra Sagar
                    <br />
                    Vice Chairman & CEO, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Patrons
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Shri Galiswamy
                    <br />
                    Secretary, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Ms. Tintisha H Sagar
                    <br />
                    Joint Secretary, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Mr. Rohan Prem Sagar
                    <br />
                    Joint Secretary, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Mr. Nishan H Sagar
                    <br />
                    Joint Secretary, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Ms. Natasha H Sagar
                    <br />
                    Joint Secretary, DSI, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Honorary General Chairs
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. H P Khincha
                    <br />
                    Advisor, DSI, Bengaluru
                  </td>
                </tr>

                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    General Chairs
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. B G Prasad
                    <br /> Principal, DSCE, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Conference Convenor
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Premkumar M<br /> Professor & HOD, EEE Dept., DSCE,
                    Bengaluru
                  </td>
                </tr>
              </tbody>
            </Table>
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

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Table borderless>
              <tbody>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    International Technical Advisory Committee:
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>Brad Lehman, Northeastern University, USA</td>
                </tr>
                <tr>
                  <td>Gwanggil Jeon, Incheon University, S.Korea</td>
                </tr>
                <tr>
                  <td>Geno Peter, University of Sarawak, Malaysia</td>
                </tr>
                <tr>
                  <td>Yanxia Sun, University of Johannesburg, South Africa</td>
                </tr>
                <tr>
                  <td> Elen Reyes, Batangas State University, Philippines</td>
                </tr>
                <tr>
                  <td>Lilantha, University of Peradeniya, Sri Lanka</td>
                </tr>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Local Advisory Committee
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Ramesh Babu D R<br /> Vice Principal, DSCE, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Ramaraju H K<br />
                    Vice Principal, DSCE, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Suma V<br /> Vice Principal, DSCE, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. A R Aswatha
                    <br />
                    Dean - Student Affairs, DSCE, Bengaluru
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Annapurna P Patil
                    <br />
                    Dean Academics, Professor and HOD-ISE Dept., DSCE, Bengaluru
                  </td>
                </tr>

                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Organizing Committee
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. P B Savitha
                    <br /> Assoc. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Soni M<br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Arjun Kumar G B<br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Balamurugan M<br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Suchana Mishra
                    <br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. A D Srinivasan
                    <br /> Research Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Sumana S
                    <br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Sharath Kumar Y N
                    <br /> Asst. Professor, EEE, DSCE
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Table borderless>
              <tbody>
                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    National Technical Advisory Committee
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>Dr. Chandra Sekhar Reddy Atla, PRDC, Bengaluru</td>
                </tr>
                <tr>
                  <td>Dr. Anand R, Otis, Bengaluru</td>
                </tr>
                <tr>
                  <td>Dr. Sukumar Mishra, IIT, Delhi</td>
                </tr>
                <tr>
                  <td>Dr. R Sarathi, IIT, Madras</td>
                </tr>
                <tr>
                  <td>Dr. Rajanikanth. B.S., IISC, Bengaluru</td>
                </tr>
                <tr>
                  <td>Dr. Rathna G.N., IISC, Bengaluru</td>
                </tr>
                <tr>
                  <td>Dr. Subramanyam, IIT, Hyderabad</td>
                </tr>
                <tr>
                  <td>Dr. C. Vyjayanthi, NIT, Goa</td>
                </tr>
                <tr>
                  <td>Dr. Tukaram Mogar, NITK, Suratkal</td>
                </tr>
                <tr>
                  <td>Dr. Ashish Mani, Amity University, Noida</td>
                </tr>
                <tr>
                  <td>Dr. Ravi K, VIT, Vellore</td>
                </tr>
                <tr>
                  <td>Dr. Suresh Babu, Assoc. Director, NPTI, Bengaluru</td>
                </tr>
                <tr>
                  <td>Dr. Sarat Kumar Sahoo, Govt. Eng College, Odisha</td>
                </tr>
                <tr>
                  <td>Dr. Sanjiba Bisoyi, JSS ATE, Noida</td>
                </tr>
                <tr>
                  <td>
                    Dr. Bhagwan Shree Ram, Saharsa College of Engg., Bihar
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Vikramaditya Dave, College of Tech. & Engg., Udaipur
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Kannan Tinnium, Energy Storage Center of Excellence,
                    Secure Power, Bengaluru
                  </td>
                </tr>

                <tr>
                  <td className="fw-bold" style={{ fontSize: "1.3rem" }}>
                    Department Coordinators
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "0" }}>
                    <hr style={{ margin: "0" }} />
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. P Usha
                    <br />
                    Professor, EEE Dept., DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. Sujit Kumar
                    <br />
                    Asst. Professor, EEE Dept., DSCE
                  </td>
                </tr>
                <tr>
                  <td>
                    Dr. ManiKanta G
                    <br /> Asst. Professor, EEE Dept., DSCE
                  </td>
                </tr>
             
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Committee;
