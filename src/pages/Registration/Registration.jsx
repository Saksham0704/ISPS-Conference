import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';

function Registration() {
  return (
    <div className="speaker-page">
      <header className='height-175'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h3 className='text-center fw-semibold mt-10' style={{ color: "#fff"}}> 2nd International Conference on Intelligent and Sustainable Power and Energy Systems (ISPES 2024)</h3>
          <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> - 14<sup>th</sup> December 2024)</h5>
        </div>
      </header>

      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Registration</h2>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th rowSpan="2">Participants Category</th>
                 
                </tr>
                <tr>
                  <th rowSpan="2">Student</th>
                  <th rowSpan="2">Academician</th>
                  <th rowSpan="2">Professional</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Indian</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                  
                </tr>
                <tr>
                  <td>Foreigner</td>
                  <td>----</td>
                  <td>----</td>
                  <td>----</td>
                   
                </tr>
                
              </tbody>
            </Table>
            {/* <p>* Registration fee is inclusive of GST of 18%. GST NO: 36AAAAG0915F1Z7</p> */}
            
              <h3>WILL BE UPDATED SOON</h3>
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
        <Row>
          <Col md={8}>
            <div>
             <p>
                <b>► For Transferring registration fee through NEFT/RTGS/ UPI (Google pay or Phone Pay):</b>
              </p>
              <h3>Bank Account Details</h3>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td><b>Bank:</b></td>
                    <td>HDFC</td>
                  </tr>
                  <tr>
                    <td><b>Account Type:</b></td>
                    <td>Savings</td>
                  </tr>
                  <tr>
                    <td><b>Account Name:</b></td>
                    <td>Head of the Department, Electrical and Electronics Engineering</td>
                  </tr>
                  <tr>
                    <td><b>Account Number:</b></td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td><b>RTGS/NEFT/IFS Code:</b></td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td><b>MICR number:</b></td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td><b>Swift code:</b></td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td><b>Branch Name:</b></td>
                    <td>xxxx</td>
                  </tr>
                  <tr>
                    <td><b>Address:</b></td>
                    <td>xxxx</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

     
       
      
    </div>
  );
}

export default Registration;



