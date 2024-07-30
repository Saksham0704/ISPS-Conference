import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import "./Speakers.css";

const speakers = [
  {
    name: 'Prof Yanxia Sun',
    title: 'Department of Electrical and Electronic Engineering Science Staff, FEBE Professors Staff Members',
    description: 'Prof. Yanxia Sun received her joint qualification: DTech in Electrical Engineering, Tshwane University of Technology, South Africa and PhD in Computer Science, University Paris-EST, France in 2012. She has therefore an approach that brings together computing and electrical engineering. She has more than 10 years teaching and research experience. Currently she is serving as an Associate Professor and Acting Vice Dean: Teaching, Learning and Operations in the Faculty Of Engineering and The Built Environment, University of Johannesburg, South Africa. She has lectured seven courses in the universities. Currently she is supervising fifteen D-Tech/PhD students and six MTech/MSc students in the areas of Electrical Engineering. Yanxia Sun has 67 papers published/accepted including 25 ISI master indexed journal papers. She was awarded the National Research Foundation (NRF) rating Y2 (2015-2020) and obtained the NRF incentive grant. She is an IEEE and South African Young Academy of Science (SAYAS) member.',
    image: 'https://www.uj.ac.za/wp-content/uploads/2021/10/prof-sun-e1650959127834.png',
    website: 'https://www.uj.ac.za/members/professor-yanxia-sun/'
  },
 
  {
    name: 'Gwanggil Jeon',
    title: 'An ACM Member, IEEE Senior Member, an Associate Editor of Sustainable Cities and Society',
    description: 'Gwanggil Jeon received the B.S., M.S., and Ph.D. (summa cum laude) degrees from the Department of Electronics and Computer Engineering, Hanyang University, Seoul, Korea, in 2003, 2005, and 2008, respectively. From 2009.09 to 2011.08, he was with the School of Information Technology and Engineering, University of Ottawa, Ottawa, ON, Canada, as a Post-Doctoral Fellow. From 2011.09 to 2012.02, he was with the Graduate School of Science and Technology, Niigata University, Niigata, Japan, as an Assistant Professor. From 2014.12 to 2015.02 and 2015.06 to 2015.07, he was a Visiting Scholar at Centre de Mathématiques et Leurs Applications (CMLA), École Normale Supérieure Paris-Saclay (ENS-Cachan), France. From 2019 to 2020, he was a Prestigious Visiting Professor at Dipartimento di Informatica, Università degli Studi di Milano Statale, Italy. He is currently a Full Professor at Incheon National University, Incheon, Korea. He was a Visiting Professor at Sichuan University, China, Universitat Pompeu Fabra, Barcelona, Spain, Xinjiang University, China, King Mongkut\'s Institute of Technology Ladkrabang, Bangkok, Thailand, and University of Burgundy, Dijon, France.',
    image: 'https://speakers.acm.org/binaries/content/gallery/speakers/photo/h-k/jeon_16869',
    website: 'https://speakers.acm.org/speakers/jeon_16869'
  },
  {
    name: 'Dr. S Albert Alexander',
    title: 'Professor,Researcher,Vice President,Energy Conservation Society,Chairman, IEEE PELS, IEEE Madras Section',
    description: 'Dr.S. Albert Alexander is the recipient of prestigious Raman Research Fellowship from the University Grants Commission (Government of India). He is a Postdoctoral Research Fellow from Northeastern University, Boston, Massachusetts, USA. His current research focuses on fault diagnostic systems for solar energy conversion systems and smart grids. He has 16 years of academic and research experience. He has published 90 technical papers in International and National journals (including IEEE Transactions, IET, Elsevier, Taylor & Francis, Springer, Wiley etc.,) and presented 66 papers at national and international conferences.He has completed 10 Government of India-funded projects with the overall grant amount of Rs.3.0 crores. His Ph.D. work on power quality earned him a National Award from ISTE, and he has received 27 awards for his meritorious academic and research career (such as Young Engineers Award from IE(I), Young Scientist Award from SPRERI, Gujarat, Best researcher award from IEEE Madras section etc.,). He has also received the National Teaching Innovator Award from MHRD (Government of India). He is an approved “Margadarshak” from AICTE (Government of India). ', 
    image: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=dlHbg-YAAAAJ&citpid=3',
    website: 'https://www.linkedin.com/in/dr-s-albert-alexander-92590212'
  },
  {
    name: 'Dr S N Deepa',
    title: 'Associate Professor, Department of Electrical Engineering, National Institute of Technology Calicut',
    description: 'Gwanggil Jeon received the B.S., M.S., and Ph.D. (summa cum laude) degrees from the Department of Electronics and Computer Engineering, Hanyang University, Seoul, Korea, in 2003, 2005, and 2008, respectively. From 2009.09 to 2011.08, he was with the School of Information Technology and Engineering, University of Ottawa, Ottawa, ON, Canada, as a Post-Doctoral Fellow. From 2011.09 to 2012.02, he was with the Graduate School of Science and Technology, Niigata University, Niigata, Japan, as an Assistant Professor. From 2014.12 to 2015.02 and 2015.06 to 2015.07, he was a Visiting Scholar at Centre de Mathématiques et Leurs Applications (CMLA), École Normale Supérieure Paris-Saclay (ENS-Cachan), France. From 2019 to 2020, he was a Prestigious Visiting Professor at Dipartimento di Informatica, Università degli Studi di Milano Statale, Italy. He is currently a Full Professor at Incheon National University, Incheon, Korea. He was a Visiting Professor at Sichuan University, China, Universitat Pompeu Fabra, Barcelona, Spain, Xinjiang University, China, King Mongkut\'s Institute of Technology Ladkrabang, Bangkok, Thailand, and University of Burgundy, Dijon, France.',
    image: 'https://nitc.ac.in/imgserver/uploads/attachments/pcm__f850206e-6b0d-492f-ad76-fb85eeb82b0f_0.png',
    website: 'https://speakers.acm.org/speakers/jeon_16869'
  }
];

function Speakers() {
  return (
    <div className="speaker-page">
      <header className='height-105'>
        <div className='container h-70 d-flex flex-column align-items-center justify-content-center text-light'>
          <h2 className='text-center fw-semibold mt-10' style={{ color: "#fff"}}>2nd International Conference on Intelligent and Sustainable Power and Energy Systems (ISPES 2024)</h2>
          <h5 className='text-center w-75 mb-5'>(13<sup>th</sup> - 14<sup>th</sup> December 2024)</h5>
        </div>
      </header>
      <Container className="header-gradient" fluid>
        <Row>
          <Col>
            <h2 className="text-center mt-2 mb-2">Speakers</h2>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        {speakers.map((speaker, index) => (
          <Card className="mb-4" key={index}>
            <Card.Body>
              <Row>
                <Col md={3} className="text-center">
                  <a href={speaker.website} target="_blank" rel="noopener noreferrer">
                    <img src={speaker.image} alt={speaker.name} className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
                  </a>
                  <h5 style={{color:'#dc3545'}}>{speaker.name}</h5>
                  <p style={{color:'#dc3545'}}>{speaker.title}</p>
                </Col>
                <Col md={9}>
                  <Badge bg="success" className="mb-3 p-3" style={{ fontSize:'1.2rem'}}>Keynote Speaker</Badge>
                  <Card.Text>{speaker.description}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default Speakers;
