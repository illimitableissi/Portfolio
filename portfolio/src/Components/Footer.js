import React from 'react';
import instagram from '../img/SVG/instagram.svg'
import linkedIn from '../img/SVG/linkedin.svg'
import github from '../img/SVG/github.svg'

const Footer = () => {
    return (
        <div className="footer">
            <h1 className="footer__header">Connect!</h1>
            <a href="https://instagram.com/_kingofthesummer"><img src={instagram} alt="Instagram" className="footer__img"/></a>
            <a href="https://www.linkedin.com/in/isimemeninegbedion"><img src={linkedIn} alt="Linkedin" className="footer__img"/></a>
            <a href="https://github.com/illimitableissi"><img src={github} alt="Github" className="footer__img"/></a>
        </div>
    );
};

export default Footer;