import React from 'react';
import vid1 from '../img/sunrise_in_the_park.mp4';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__main-name">Isimemen Inegbedion</h1>
            <h3 className="header__sub-name">Full Stack Web Developer</h3>
            <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={vid1} type="video/mp4" />
                        <source src={vid1} type="video/webm" />
                        Your browser is not supported!
                    </video>
            </div>
        </div>
    );
};

export default Header;