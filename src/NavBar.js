import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import resume from './downloadables/P_Demand_Resume_4_11_24.pdf'
const NavBar = ({ lightClicked, toggleLightMode }) => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand style={{ fontFamily: 'Menlo, monospace' }} href="/">PD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse style={{ fontFamily: 'Menlo, monospace' }} id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href={resume} download="P_Demand_Resume_4_11_24.pdf">Résumé</Nav.Link>
                            {/* <Nav.Link href={resume} download={resume}>Résumé</Nav.Link> */}
                            {/* <a class="nav-link" href="/paglione_resume_3_19_23.pdf" download="" role="button">Resume</a> */}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
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