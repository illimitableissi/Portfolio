import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './Cards'
// import { information, reactApps, pythonApps, websites } from '../applications'
import project from '../applications'

console.log(project)

const Projects = () => {
    return (
        <div className="projects">
           <h1 className="projects__header" data-aos="fade-left" data-aos-duration="1500">Projects</h1>
           <Row>
               <Col>
               <h2>HTML & Sass</h2>
               </Col>
               {project.websites.map(website =>
               <Col md={3}>
                 <Cards src={website.img} title={website.name} link={website.link} />
               </Col> 
                )} 
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