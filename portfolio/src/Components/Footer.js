import React from 'react';
import instagram from '../img/SVG/instagram.svg'
import linkedIn from '../img/SVG/linkedin.svg'
import github from '../img/SVG/github.svg'

const Footer = () => {
    return (
        <div>
            <img src={instagram} alt="" href=""/>
            <img src={linkedIn} alt="" href=""/>
            <img src={github} alt="" href=""/>
        </div>
    );
};

export default Footer;