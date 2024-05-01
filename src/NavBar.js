import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from './P_Demand_Resume_4_30_24.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ lightClicked, toggleLightMode, scrollToAbout, scrollToContact, scrollToPortfolio }) => {

    const [moonSunHovered, setMoonSunHovered] = useState(false)
    const [linkOneHovered, setLinkOneHovered] = useState(false)
    const [linkTwoHovered, setLinkTwoHovered] = useState(false)
    const [linkThreeHovered, setLinkThreeHovered] = useState(false)
    const [linkFourHovered, setLinkFourHovered] = useState(false)
    const [brandHovered, setBrandHovered] = useState(false)

    const navItemsStyle = {
        color: lightClicked ? 'rgb(178, 176, 176)' : 'rgb(40, 39, 39)',
        fontFamily: 'Menlo, monospace'
    }

    const hoveredNavItemsStyle = {
        color: 'rgb(255, 255, 255)',
        fontFamily: 'Menlo, monospace'
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Brand 
                        style={!brandHovered ? navItemsStyle : hoveredNavItemsStyle}
                        href="/"
                        onMouseEnter={() => setBrandHovered(true)}
                        onMouseLeave={() => setBrandHovered(false)}
                    >
                        PD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ fontFamily: 'Menlo, monospace' }} id="basic-navbar-nav">
                        <Nav className="me-auto" >
                            <Nav.Link 
                                style={!linkOneHovered ? navItemsStyle : hoveredNavItemsStyle}
                                onClick={scrollToAbout}
                                onMouseEnter={() => setLinkOneHovered(true)}
                                onMouseLeave={() => setLinkOneHovered(false)}
                            >
                                 About
                            </Nav.Link>
                            <Nav.Link 
                                style={!linkFourHovered ? navItemsStyle : hoveredNavItemsStyle}
                                onClick={scrollToPortfolio}
                                onMouseEnter={() => setLinkFourHovered(true)}
                                onMouseLeave={() => setLinkFourHovered(false)}
                            >
                                 Portfolio
                            </Nav.Link>
                            <Nav.Link 
                                style={!linkTwoHovered ? navItemsStyle : hoveredNavItemsStyle}
                                onMouseEnter={() => setLinkTwoHovered(true)}
                                onMouseLeave={() => setLinkTwoHovered(false)}
                                href={resume} download="P_Demand_Resume_4_30_24.pdf"
                            >
                                Résumé
                            </Nav.Link>
                            <Nav.Link 
                                style={!linkThreeHovered ? navItemsStyle : hoveredNavItemsStyle}
                                onClick={scrollToContact}
                                onMouseEnter={() => setLinkThreeHovered(true)}
                                onMouseLeave={() => setLinkThreeHovered(false)}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    
                    {lightClicked ? 
                        <FontAwesomeIcon 
                            style={!moonSunHovered ? navItemsStyle : hoveredNavItemsStyle}
                            size="lg"
                            onClick={toggleLightMode} 
                            icon={faSun}
                            onMouseEnter={() => setMoonSunHovered(true)}
                            onMouseLeave={() => setMoonSunHovered(false)}
                        /> 
                        :
                         <FontAwesomeIcon 
                            style={!moonSunHovered ? navItemsStyle : hoveredNavItemsStyle}
                            size="lg"
                            onClick={toggleLightMode} 
                            icon={faMoon} 
                            onMouseEnter={() => setMoonSunHovered(true)}
                            onMouseLeave={() => setMoonSunHovered(false)}
                        />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;