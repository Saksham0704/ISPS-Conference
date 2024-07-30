import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Tab, Nav, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Marquee from "react-fast-marquee";
import logo from '../../utils/images/tech-logo.jpg';
import bg from '../../utils/images/isps-logo.jpg';

import "./Home.css";


import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faFileText,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faFileText, faCaretRight);

const calculateTimeLeft = () => {
  const difference = +new Date("2024-12-13") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <Col key={interval} xs={3}>
        <Card style={{ backgroundColor: "#dc3545", color: "#fff" }}>
          <Card.Body className="text-center">
            <Card.Title>{timeLeft[interval]}</Card.Title>
            <Card.Text>
              {interval.charAt(0).toUpperCase() + interval.slice(1)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h1 className="text-center fw-semibold">
            2nd International Conference on Intelligent and Sustainable Power
            and Energy Systems (ISPES 2024)
          </h1>
          <h5 className="text-center w-75 mb-5">
            (13<sup>th</sup> - 14<sup>th</sup> December 2024)
          </h5>
          {/* <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/about">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                About Us
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div> */}
        </div>
      </header>

      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              height: "50px",
              backgroundColor: "#dc3545",
              padding: "10px",
            }}
          >
            <span
              style={{
                position: "absolute",
                color: "black",
                fontSize: "24px",
                fontWeight: "bold",
                left: "10px",

                borderRadius: "5px",
              }}
            >
              Important Dates:
            </span>
            <div style={{ marginLeft: "200px", height: "50px" }}>
              <marquee
                onMouseOver={(e) => e.target.stop()}
                onMouseOut={(e) => e.target.start()}
                behavior="scroll"
                scrollamount="20"
                width="100%"
                direction="left"
                height="50px"
                style={{
                  color: "white",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
               Last Date for Registration: 30<sup>th</sup> Nov 2024
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="title">
        <h1>Our Technology Partner</h1>
      </div>

      <Marquee direction="right" speed={100} delay={5}>
        <div className="image_wrapper">
          <img src={logo} alt="Partner 1" />
        </div>
        <div className="image_wrapper">
          <img src={bg} alt="Partner 2" />
        </div>
        {/* <div className="image_wrapper">
          <img src={img3} alt="Partner 3" />
        </div>
        <div className="image_wrapper">
          <img src={img4} alt="Partner 4" />
        </div>
        <div className="image_wrapper">
          <img src={img5} alt="Partner 5" />
        </div>
        <div className="image_wrapper">
          <img src={img6} alt="Partner 6" />
        </div>
        <div className="image_wrapper">
          <img src={img7} alt="Partner 7" />
        </div>
        <div className="image_wrapper">
          <img src={img8} alt="Partner 8" />
        </div>
        <div className="image_wrapper">
          <img src={img9} alt="Partner 9" />
        </div>
        <div className="image_wrapper">
          <img src={img10} alt="Partner 10" />
        </div> */}
      </Marquee>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-9">
            <h3 className="text" style={{ color: "#dc3545" }}>
              Welcome to ISPES
            </h3>
            <p className="text-justify mt-3">
              The ISPES is aimed to address the state-of-the-art
              multidisciplinary research needs & interdisciplinary aspects of
              intelligent and sustainable technologies in power and energy
              systems in the form of research papers from industry, faculty,
              research scholars, and PG/UG students, along with keynote lectures
              and a number of invited talks from reputed speakers. The ICISPES
              provides an international platform for all research scholars,
              practitioners, academicians, students and scientists to discuss
              and exhibit the latest research developments and discoveries in
              intelligent and sustainable technologies. This conference enables
              us to share and exchange research knowledge & ideas in Power &
              Energy systems.
            </p>

            <p className="text-center">
              {/* <a
                href="assets/Special_Sessions_SeFet-2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <button
                  className="bttn btn-spl-hover bn23"
                  style={{ fontSize: "1.2em" }}
                >
                  <FontAwesomeIcon icon="check-circle" className="mr-2" />
                  Approved Special Session Details
                </button>
              </a> */}
            </p>
            <h5
              className="news mt-5"
              style={{
                color: "#fff",
                backgroundColor: "#dc3545",
                width: "18%",
                padding: "8px",
              }}
            >
              Proposed Tracks
            </h5>
            <div className="row mt-4">
              <div className="col-sm-12 col-md-12">
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Energy storage systems Intelligent control and
                  automation
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
                  &nbsp; Material science & Power system protection & control
                  Field computations, etc
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
                  &nbsp; Plug-in and Wireless Charging Systems and
                  Infrastructure
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Energy Storage Technologies and management systems for
                  smart grid and electric / hybrid transportation
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Integration of Renewable Energy Systems for Micro
                  grids/ Smart Grids/Nano-grid
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
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; AI, ML, data analytics and Cyber Security and IOT
                  Applications to Sustainable Energy and Electric Transportation
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-sm text-JUSTIFY">
                  <a
                    // href="https://drive.google.com/file/d/1lGHaJx7Q_J4rV4URcvpY_D2Y0XjPLbSo/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="btn-"
                      style={{
                        fontSize: "1.2em",
                        color: "#fff",
                        backgroundColor: "#dc3545",
                        width: "28%",
                        padding: "8px",
                        border: "none",
                      }}
                    >
                      <FontAwesomeIcon icon="file-text" className="mr-2" />
                       ISPS 2024 BROCHURE
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <Container className="mt-5">
        <h2 className="text-center mb-4">CONFERENCE BEGINS IN</h2>
        <Row>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </Row>
      </Container>

      <Container
        style={{ border: "1px solid #ddd", marginTop: "50px", padding: "20px" }}
      >
        <Tab.Container defaultActiveKey="about">
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link eventKey="about" style={{ color: "#dc3545" }}>
                About Bengaluru
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="places" style={{ color: "#dc3545" }}>
                Places to visit
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link eventKey="places" style={{ color: "#dc3545" }}>
                Top Tourist places near by city
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="about">
              <Row className="mt-3">
                <Col>
                  <div className="text-center"></div>
                  <p className="mt-3">
                    Bangalore officially Bengaluru, is the capital and largest
                    city of the southern Indian state of Karnataka. It has a
                    population of more than 8 million and a metropolitan
                    population of around 15 million, making it India's third
                    most populous city and fourth most populous urban
                    agglomeration. It is the most populous city and largest
                    urban agglomeration in South India, and is the 27th largest
                    city in the world. Located on the Deccan Plateau, at a
                    height of over 900 m (3,000 ft) above sea level, Bangalore
                    has a pleasant climate throughout the year, with its parks
                    and green spaces earning it the reputation of India's
                    "Garden City". Its elevation is the highest of India's major
                    cities. The city's history dates back to around 890, as per
                    the old Kannada stone inscription found at the Nageshwara
                    Temple in Begur, Bangalore. In 1537, Kempé Gowdā, a feudal
                    ruler under the Vijayanagara Empire, established a mud fort,
                    considered the foundation of modern Bangalore and its oldest
                    areas, or pétés, which still exist. After the fall of the
                    Vijayanagara Empire, Kempe Gowda declared independence; in
                    1638, a large Adil Shahi Bijapur army defeated Kempe Gowda
                    III, and Bangalore came under Shahaji Bhonsle as a jagir,
                    which later became his capital. The Mughals later captured
                    Bangalore and sold it to Maharaja Devaraja Wodeyar II of the
                    Kingdom of Mysore. When Haider Ali seized control of the
                    kingdom, Bangalore's administration passed into his hands.
                  </p>
                  <p>
                    Bangalore is considered to be one of the fastest-growing
                    global major metropolises. Recent estimates of the metro
                    economy of its urban area has ranked Bangalore as one of the
                    most productive metro areas of India.The city is considered
                    the pivot for high-technology-based heavy manufacturing
                    industry, with numerous large multinational technology
                    corporations setting up their headquarters there. It is home
                    to many top-tier engineering and research institutions.
                    Bangalore is known as the "Silicon Valley of India" because
                    it is the nation's leading software exporter as well as a
                    major semiconductor hub. Several state-owned aerospace and
                    defence organisations are in the city. The presence of
                    numerous notable sporting arenas in Bangalore makes it one
                    of the country's sporting hubs.
                  </p>
                </Col>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="places">
              <div className="d-flex justify-content-center flex-wrap mt-3">
                <img
                  src="https://www.southtourism.in/assets/images/destination/karnataka/cities/shiva-temple-bangalore1.jpg"
                  alt="place1"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
                <img
                  src="https://travelnthrill.com/wp-content/uploads/2014/06/Places-To-Visit-In-Bangalore.jpg"
                  alt="place2"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
                <img
                  src="https://d2w5af8s1781.cloudfront.net/waytogo-staging/stylesheets/ct_hotels/images/Nandi-Hills.jpg"
                  alt="place3"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
                <img
                  src="https://www.fabhotels.com/blog/wp-content/uploads/2018/07/ISKCON-Temple.jpg"
                  alt="place4"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
                <img
                  src="https://assets.cntraveller.in/photos/60ba01408b178b16cbde8d2e/16:9/w_1024%2Cc_limit/Bangalore-123rf-first-attempt-1366x768.jpg"
                  alt="place5"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
                <img
                  src="https://images.news18.com/ibnlive/uploads/2022/06/bangalore-16545029544x3.jpg?impolicy=website&width=640&height=480"
                  alt="place6"
                  className="img-thumbnail m-1"
                  style={{ width: "180px" }}
                />
              </div>
              <div className="mt-5">
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; ISKCON Temple Near Bengaluru,A Revered RadhaKrishna
                  Temple
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Lal Bagh Botanical Garden, Nature Lovers' Paradise
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Cubbon Park,Famous for Nature Walks and Jogging Trails
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Bannerghatta Biological Park, A Renowned Zoological
                  Reserve
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Bangalore Palace
                </p>{" "}
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Lumbini Garden
                </p>{" "}
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Karnataka Chitrakala Parishath
                </p>
                <p>
                  <FontAwesomeIcon
                    icon="caret-right"
                    className="text-secondary mr-2"
                  />
                  &nbsp; Bull Temple
                </p>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Home;
