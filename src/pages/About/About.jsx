import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
        <h2 className='text-center fw-semibold mt-10' >2nd International Conference on Intelligent and Sustainable Power and Energy Systems (ISPES 2024)</h2>
        <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> - 14<sup>th</sup> December 2024)</h5>
        </div>
      </header>

      {/* About Us Section */}
      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">About Us</h2>
          </Col>
        </Row>
      </Container>

      {/* Main Content */}
      <Container fluid className="mt-5">
        <Row
          noGutters
          className="align-items-center hero justify-content-center text-justify"
        >
          <Col md={6} className="py-4 px-md-5">
            {" "}
            {/* Adjusted padding */}
            <Image
              className="img-fluid"
              src="https://images.static-collegedunia.com/public/college_data/images/appImage/28562_DSEC_APP.jpg?tr=c-force"
              alt="Dayananda Sagar College Of Engineering"
            />
          </Col>
          <Col md={6} className="py-4 about-content">
            {" "}
            {/* Adjusted padding */}
            <h1 className="display-4" style={{ color: "#dc3545" }}>
              About DSCE
            </h1>
            <p className="lead text-justify">
              Dayananda Sagar College of Engineering is approved by the All
              India Council for Technical Education (AICTE), Govt. of India and
              affiliated to Visvesvaraya Technological University, Belgaum,
              Karnataka. It has the widest choice of Engineering branches having
              20 undergraduate courses & 06 postgraduate courses. In addition,
              it has 20 research centres in different branches of Engineering
              catering to research scholars for obtaining a Ph.D. under VTU.
              Various courses are accredited by NBA. The Institute is spread
              over 23 acres of land with a requisite infrastructure supported by
              laboratories with state-of-the-art equipment & machines. The
              central library, with modern facilities and a digital library,
              provides the knowledge base for the students. The college has good
              faculty strength with the highest professional integrity and
              commitment to academics with transparency in their actions. The
              faculty are research-oriented, having a number of sponsored R&D
              projects from different agencies such as the Department of Science
              & Technology, Defense R&D organizations, Indian Space Research
              Organization, AICTE etc.
            </p>
          </Col>
        </Row>

        {/* Vision and Mission Section */}
        <Container className="text-center mt-5">
          <div className="px-3">
            <h5 className="display-7 mb-3" style={{ color: "#dc3545" }}>
              Vision:
            </h5>
            <p className="lead text-justify">
              To meet the challenging needs of society by innovation, problem
              solving and to develop an exciting and supportive learning
              environment that transforms our students and inspires them to make
              a real difference in their career and society.
            </p>
          </div>
          <div className="lead  text-left mt-4 px-3">
            <h5 className="display-7 mb-3" style={{ color: "#dc3545" }}>
              Mission:
            </h5>
            <ul style={{ listStylePosition: "inside", textAlign: "left" }}>
              <li >
                To provide enduring learning environment that facilitates the
                students to pursue their higher education
              </li>
              <li>
                To train students with diverse skills to work professionally in
                several fields through innovative teaching and learning process
              </li>
              <li>
                To provide value based and behavioral training programs that
                helps students in developing their overall professional
                competence and social awareness
              </li>
            </ul>
          </div>
        </Container>

        {/* About the Conference Section */}
        <Container className="mt-5">
          <h5 className="text-center mb-4" style={{ color: "#dc3545" }}>
            About the Conference
          </h5>
          <p className="lead text-justify px-3">
            The ICISPES is aimed to address the state-of-the-art
            multidisciplinary research needs & interdisciplinary aspects of
            intelligent and sustainable technologies in power and energy systems
            in the form of research papers from industry, faculty, research
            scholars, and PG/UG students, along with keynote lectures and a
            number of invited talks from reputed speakers. The ICISPES provides
            an international platform for all research scholars, practitioners,
            academicians, students and scientists to discuss and exhibit the
            latest research developments and discoveries in intelligent and
            sustainable technologies. This conference enables us to share and
            exchange research knowledge & ideas in Power & Energy systems.
          </p>
         
        </Container>
        <Container className="mt-5">
        <h5 className="text-center mb-4" style={{ color: "#dc3545" }}>
            About EEE Department
          </h5>
          <p className="lead text-justify px-3">
            Established in 1979, the department started UG Program with an
            intake of 50, and later the intake was increased to 120 in the year
            2006. The department launched M.Tech. program in Power Electronics
            in the year 2006. Further, the EEE Department is recognized as R&D
            Centre by VTU, which offers doctoral programs - Ph.D. and M.Sc.
            (Engg.) by research program. The department is approved by AICTE and
            is accredited four times (the last accreditation in Tier-1 from 2022
            to 2025) by NBA, New Delhi.
          </p>

          </Container>
      </Container>
    </div>
  );
}

export default About;
