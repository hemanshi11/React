import React from 'react'
import './About.css'
import traveller from '../../Images/img.jpg'
// Add this import at the top of your index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  return (
    <div>
     <Container>
     <div className='about'>
            <h1> About us</h1>
     </div>
      <Row className='about-content'>
      <Col md={6} className='content'>
        <h2>Traveling: Exploring the World Together</h2>
        <p>At <span className='logo'>Travelin</span>, we are not only driven by our love for technology and innovation, but we are also avid travelers at heart. Our passion for exploring the world and immersing ourselves in diverse cultures brings us together as a cohesive team. Through our collective experiences, we've discovered the beauty of different landscapes, tasted the flavors of far-off cuisines, and built memories that inspire us every day.</p>
      <p>At Travelin, we also embrace sustainability and responsible travel practices. We are committed to preserving the natural wonders and cultural heritage of the places we visit. By supporting local communities and contributing to conservation efforts, we aim to leave a positive impact on the destinations we love.</p>
      </Col>
      <Col md={6} className='content'>
        <img src={traveller} alt="" className='imges'/>
      </Col>
      </Row>
      
    </Container>
      
    </div>
  )
}
