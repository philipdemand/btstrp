import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ lightClicked }) => {

    const [linkedInHovered, setLinkedInHovered] = useState(false)
    const [twitterHovered, setTwitterHovered] = useState(false)
    const [githubHovered, setGithubHovered] = useState(false)
    const [mediumHovered, setMediumHovered] = useState(false)

    const buttonStyle = {
        color: lightClicked ? 'rgb(178, 176, 176)' : "rgb(40, 39, 39)"
      };
    
      const hoveredStyle = {
        color: "#ffffff"
      };

    return (
        <div>
                <a href="https://www.linkedin.com/in/philip-demand"
                    target="blank">
                        <FontAwesomeIcon
                            className="footericon"
                            size="sm" 
                            icon={faLinkedin} 
                            style={!linkedInHovered ? buttonStyle : hoveredStyle} 
                            onMouseEnter={() => setLinkedInHovered(true)}
                            onMouseLeave={() => setLinkedInHovered(false)}
                        />
                </a>
                <a href="http://www.twitter.com/philipdemand"
                    target="blank">
                        <FontAwesomeIcon
                            className="footericon" 
                            size="sm"
                            icon={faTwitter}
                            style={!twitterHovered ? buttonStyle : hoveredStyle} 
                            onMouseEnter={() => setTwitterHovered(true)}
                            onMouseLeave={() => setTwitterHovered(false)} 
                        />
                </a>
                <a href="https://github.com/philipdemand"
                    target="blank">
                        <FontAwesomeIcon 
                            className="footericon"
                            size="sm"
                            icon={faGithub}
                            style={!githubHovered ? buttonStyle : hoveredStyle} 
                            onMouseEnter={() => setGithubHovered(true)}
                            onMouseLeave={() => setGithubHovered(false)} 
                        />
                </a>
                <a href="https://medium.com/@philipdemand"
                    target="blank">
                        <FontAwesomeIcon 
                            className="footericon"
                            size="sm"
                            icon={faMedium}
                            style={!mediumHovered ? buttonStyle : hoveredStyle} 
                            onMouseEnter={() => setMediumHovered(true)}
                            onMouseLeave={() => setMediumHovered(false)} 
                        />
                </a>
            <div style={{ fontFamily: 'Menlo, monospace', paddingBottom: "20px" }}>
                <h6>&copy;&nbsp;2024 Philip Demand</h6>
            </div>
        </div>
    );
};

export default Footer;