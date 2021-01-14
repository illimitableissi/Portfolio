import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Cards from './Cards'
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
                 <Cards source={website.img} title={website.name} link={website.link} github={website.gitHub}/>
               </Col> 
                )} 
           </Row>
           <Row>
               <Col>
               <h2>MERN Stack</h2>
               </Col> 
               {project.reactApps.map(react =>
               <Col md={3}>
                 <Cards source={react.imgSrc} title={react.name} message={react.message} tech={react.tech} link={react.appLink} github={react.gitHub}/>
               </Col> 
                )} 
           </Row>
           <Row>
               <Col>
               <h2>Javascript</h2>
               </Col>
               {project.information.map(info =>
               <Col md={3}>
                  <Cards source={info.imgSrc} title={info.name} message={info.message} tech={info.tech} link={info.appLink} github={info.gitHub}/>
               </Col> 
                )}  
           </Row>
           <Row>
               <Col>
               <h2>Python</h2>
               </Col> 
               {project.pythonApps.map(python =>
               <Col md={3}>
                 <Cards source={python.img} title={python.name} github={python.gitHub}/>
               </Col> 
                )} 
           </Row>
        </div>
    )
};

export default Projects;