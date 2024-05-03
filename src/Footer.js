import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div>
            <a href="https://www.linkedin.com/in/philip-demand"
                target="blank">
                <FontAwesomeIcon
                    className="footericon"
                    size="sm"
                    icon={faLinkedin}
                />
            </a>
            <a href="http://www.twitter.com/philipdemand"
                target="blank">
                <FontAwesomeIcon
                    className="footericon"
                    size="sm"
                    icon={faTwitter}
                />
            </a>
            <a href="https://github.com/philipdemand"
                target="blank">
                <FontAwesomeIcon
                    className="footericon"
                    size="sm"
                    icon={faGithub}
                />
            </a>
            <a href="https://medium.com/@philipdemand"
                target="blank">
                <FontAwesomeIcon
                    className="footericon"
                    size="sm"
                    icon={faMedium}
                />
            </a>
            <div style={{ fontFamily: 'Menlo, monospace', paddingBottom: "20px", paddingTop: "10px" }}>
                <h6>&copy;&nbsp;2024 Philip Demand</h6>
            </div>
        </div>
    );
};

export default Footer;