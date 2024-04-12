import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import resume from './downloadables/P_Demand_Resume_4_11_24.pdf'
const NavBar = ({ lightClicked, toggleLightMode, scrollToAbout }) => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand style={{ fontFamily: 'Menlo, monospace' }} href="/">PD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ fontFamily: 'Menlo, monospace' }} id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={scrollToAbout}>About</Nav.Link>
                            <Nav.Link href={resume} download="P_Demand_Resume_4_11_24.pdf">Résumé</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <div onClick={toggleLightMode} style={{ cursor: 'pointer' }}>
                        {lightClicked ? '☀️' : '🌙'}
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;