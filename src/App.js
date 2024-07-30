import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from "react-router-dom";
import { Row, Col, ListGroup } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Author from "./pages/Author/Author";
import Registration from "./pages/Registration/Registration";
import Speakers from "./pages/Speakers/Speakers";
import Award from "./pages/Award/Award";
import Committee from "./pages/Committee/Committee";
import Program from "./pages/Program/Program";
import Isps from "./pages/Isps/Isps";
import Papers from "./pages/Papers/Papers";



import "./App.css";

function App() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    console.log(window.scrollY);
    setSticky(window.scrollY > 0);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Navbar expand="lg" className={`custom-navbar ${isSticky ? 'sticky' : ''}`}>
        <Container>
          {/* <Navbar.Brand href="/" className="text-uppercase fw-bold text-primary">2024</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ justifyContent: 'center', width: '100%' }}>
              <Nav.Link as={Link} to="/" className="nav-item">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-item">About Conference</Nav.Link>
              <Nav.Link as={Link} to="/isps" className="nav-item">ISPES 2023</Nav.Link>
              <Nav.Link as={Link} to="/committee" className="nav-item">Committee</Nav.Link>
              <Nav.Link as={Link} to="/papers" className="nav-item">Call For Papers</Nav.Link>
              <Nav.Link as={Link} to="/speakers" className="nav-item">Speakers</Nav.Link>
              <Nav.Link as={Link} to="/author" className="nav-item">Authors Guidelines</Nav.Link>
              <Nav.Link as={Link} to="/program" className="nav-item">Publication</Nav.Link>
              <Nav.Link as={Link} to="/registration" className="nav-item">Registration</Nav.Link>
              <Nav.Link as={Link} to="/award" className="nav-item">Best Paper Award</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-item">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
       
      
        <Route path="/about" element={<About />} />
        <Route path="/isps" element={<Isps />} />
        <Route path="/papers" element={<Papers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/award" element={<Award />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/author" element={<Author />} />
        <Route path="/program" element={<Program />} />
      </Routes>

      <footer className='mt-5' style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <div className='container my-5'>
              <div className='row d-flex justify-content-between align-items-center'>
                <div className='col-md-4'>
                  <Link to="/contact">
                    <button type='button' className='btn btn-outline-danger btn-lg mb-5 mb-md-4 custom-button'>Get In Touch</button>
                  </Link>
                  <ul className='footer-social-icons list-unstyled d-flex justify-content-between'>
                    <li>
                      <Link to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-facebook" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-instagram" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-tiktok" viewBox="0 0 16 16">
                          <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#dc3545" className="bi bi-youtube" viewBox="0 0 16 16">
                          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.618.048.743.072 1.527.077 2.362v.469c-.005.836-.029 1.62-.077 2.362-.048.735-.119 1.239-.22 1.618a2.01 2.01 0 0 1-1.415 1.42c-1.122.302-5.288.332-6.11.335h-.089c-.821-.003-4.987-.033-6.11-.335a2.01 2.01 0 0 1-1.415-1.42c-.101-.38-.172-.883-.22-1.618-.048-.743-.072-1.526-.077-2.362v-.469c.005-.835.029-1.619.077-2.362.048-.735.119-1.238.22-1.618A2.01 2.01 0 0 1 1.94 2.334c1.122-.302 5.288-.332 6.11-.335zm-.631-.999C5.044 1 0 1.16 0 7.986v.027c0 6.826 5.044 6.986 7.42 6.986h.122c2.376 0 7.42-.16 7.42-6.986v-.027c0-6.826-5.044-6.986-7.42-6.986H7.42zm-1.037 4.692 4.812 2.796-4.812 2.797V5.692z"/>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className='footer-heading'>Important Links</div>
            <div className="footer-links">
  <a href="/paper-submission-link" className="footer-link">Paper Submission Link</a>
  <a href="/paper-template" className="footer-link">Paper Template</a>
  <a href="/paper" className="footer-link">Call For Paper</a>
  <a href="/registration" className="footer-link">Registration</a>
</div>
          </Col>
          <Col md={4}>
            <div className='footer-heading'>Contact Us</div>
            <p>Call Us: +91 9500390495</p>
            <p>Email: hod-eee@dayanandasagar.edu</p>
          </Col>
        </Row>
      </Container>
    </footer>
    
    </div>
  );
}

export default App;
