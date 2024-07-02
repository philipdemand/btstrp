import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from './P_Demand_Resume_7_1_24.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({ lightClicked, toggleLightMode, scrollToAbout, scrollToContact, scrollToPortfolio }) => {

    return (
        <div>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Brand
                        className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                        href="/"
                    >
                        PD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                onClick={scrollToAbout}
                            >
                                About
                            </Nav.Link>
                            <Nav.Link
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                onClick={scrollToPortfolio}
                            >
                                Portfolio
                            </Nav.Link>
                            <Nav.Link
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                href={resume} download="P_Demand_Resume_7_1_24.pdf"
                            >
                                Résumé
                            </Nav.Link>
                            <Nav.Link
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                onClick={scrollToContact}
                            >
                                Contact
                            </Nav.Link>
                        </Nav>

                        {lightClicked ?
                            <FontAwesomeIcon
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                size="lg"
                                onClick={toggleLightMode}
                                icon={faSun}
                            />
                            :
                            <FontAwesomeIcon
                                className={!lightClicked ? "basic-text-light" : "basic-text-dark"}
                                size="lg"
                                onClick={toggleLightMode}
                                icon={faMoon}
                            />}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;