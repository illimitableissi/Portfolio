import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Projects = () => {
    return (
        <div className="projects">
           <h1 className="projects__header" data-aos="fade-left" data-aos-duration="1500">Projects</h1>
           <Row>
               <Col>
               <h2>HTML & Sass</h2>
               </Col> 
           </Row>
           <Row>
               <Col>
               <h2>MERN Stack</h2>
               </Col> 
           </Row>
           <Row>
               <Col>
               <h2>Javascript</h2>
               </Col> 
           </Row>
           <Row>
               <Col>
               <h2>Python</h2>
               </Col> 
           </Row>
        </div>
    )
};

export default Projects;