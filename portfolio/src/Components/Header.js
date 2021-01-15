import React from 'react';
import vid1 from '../img/sunrise_in_the_park.mp4';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = () => {
    return (
        <div className="header">
            <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted playsInLine loop>
                        <source src={vid1} type="video/mp4" />
                        <source src={vid1} type="video/webm" />
                        Your browser is not supported!
                    </video>
            </div>
            <div className="introduction">
                <Row>
                  <Col md={5}>  
                <h1 className="introduction__header" data-aos="fade-right" data-aos-duration="3000">hello.</h1>
                </Col>
                </Row>  
                  <Row>
                  <Col md={5}>
                <p className="introduction__text" data-aos="fade-right" data-aos-duration="3000">"I am Isimemen Inegbedion, a Full Stack Web Developer based in Atlanta, GA. My goal is to provide clean and exciting user experiences and precise website and application functionality!
                I am fluent in using HTML5, CSS, Javascript, jQuery, React, Express, Node, MySQL and MongoDB."</p>
                </Col>
                </Row>
            </div>
        </div>
    );
};

export default Header;