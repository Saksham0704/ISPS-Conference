import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Program() {
  return (
    <div>
      <header className="height-175">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h3
            className="text-center fw-semibold mt-10"
            style={{ color: "#dc3545" }}
          >
            2nd International Conference on Intelligent and Sustainable Power
            and Energy Systems (ISPES 2024)
          </h3>
          <h5 className="text-center w-75 mb-5">
            (13<sup>th</sup> - 14<sup>th</sup> December 2024)
          </h5>
        </div>
      </header>

      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Publication Details</h2>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <p>
              All the accepted and presented papers will be published in the
              form of e-proceedings and extended version will be submitted to
              SCOPUS Proceedings/Journals, Scitepress, Google Scholar, and other
              major indexing
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; Authors are required to submit their manuscripts using
              Microsoft CMT by following the link waiting for the site approval
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; Please ensure that your manuscript adheres to the specified
              length requirement of 4-6 pages, following the IEEE Conference
              format guidelines. You can download the template from the provided
              link:
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
              >
                &nbsp; https://www.ieee.org/conferences/publishing/templates.html
              </a>
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; The submission of manuscripts should be done in PDF format
              only.
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; All submitted papers will undergo a rigorous review
              process. Acceptance decisions will be made based on criteria
              including quality, originality, technical content, and relevance
              to the conference's theme.
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; Every paper submitted to ISPES-2024 will undergo plagiarism
              detection using anti-plagiarism software prior to review. Papers
              found to not meet the plagiarism policy may be desk-rejected
              without further review.
            </p>
            <p className="mt-4">
              <FontAwesomeIcon
                icon="caret-right"
                className="text-secondary mr-2"
              />
              &nbsp; ISPES-2024 strictly prohibits authors from altering their
              details or the sequence of authors once a manuscript has been
              submitted.
            </p>
          </Col>

          <Col md={4}>
            <div className="load-html" id="dates" data-source="important_dates.html">
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
                      <span className="text-dark-gray">
                        15<sup>th</sup> Sept 2024
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
                      <b>Notification for Acceptance:</b>{" "}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Program;
