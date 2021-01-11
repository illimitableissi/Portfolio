import React from 'react';

const Nav = () => {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
                <label for="navi-toggle" className="navigation__button">
                    <span className="navigation__icon"></span>
                </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01 .</span>Introduction</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02 .</span>HTML & Sass Website Designs</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03 .</span>MERN Apps</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04 .</span>Javasript/HTML/CSS Apps</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04 .</span>Python Apps</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05 .</span>Connect</a></li>
                    </ul>
            </nav>
        </div>

    );
};

export default Nav;