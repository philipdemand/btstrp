import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ lightClicked }) => {

    return (
        <div>
            <a href="https://www.linkedin.com/in/philip-demand"
                target="blank" rel="noreferrer" style={{ color: 'inherit' }}>
                <FontAwesomeIcon
                    className={!lightClicked ? "icon-light" : "icon-dark"}
                    size="lg"
                    icon={faLinkedin}
                />
            </a>
            <a href="http://www.twitter.com/philipdemand" 
                target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                <FontAwesomeIcon 
                    className={!lightClicked ? "icon-light" : "icon-dark"}
                    size="lg" 
                    icon={faTwitter} 
                />
            </a>
            <a href="https://github.com/philipdemand"
                target="blank" rel="noreferrer" style={{ color: 'inherit' }}>
                <FontAwesomeIcon
                    className={!lightClicked ? "icon-light" : "icon-dark"}
                    size="lg"
                    icon={faGithub}
                />
            </a>
            <a href="https://medium.com/@philipdemand"
                target="blank" rel="noreferrer" style={{ color: 'inherit' }}>
                <FontAwesomeIcon
                    className={!lightClicked ? "icon-light" : "icon-dark"}
                    size="lg"
                    icon={faMedium}
                />
            </a>
            <div style={{ fontFamily: 'Menlo, monospace', paddingBottom: "20px", paddingTop: "20px" }}>
                <h6>&copy;&nbsp;2024 Philip Demand</h6>
            </div>
        </div>
    );
};

export default Footer;