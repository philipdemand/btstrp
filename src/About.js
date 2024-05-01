import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic from './images/square-fam.jpg'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import resume from './P_Demand_Resume_4_30_24.pdf'

function About ({ aboutRef, lightClicked, scrollToContact }) {

  const [hovered, setHovered] = useState(false)

  const buttonStyle = {
    backgroundColor: lightClicked ? 'rgb(178, 176, 176)' : 'rgb(40, 39, 39)',
    borderColor: lightClicked ? 'rgb(178, 176, 176)' : 'rgb(40, 39, 39)',
    color: !lightClicked ? '#7d838d' : "#273e6e"
  };

  const hoveredStyle = {
    backgroundColor: lightClicked ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)',
    borderColor: lightClicked ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)',
    color: !lightClicked ? '#7d838d' : "#273e6e"
  };

  const handleNavLi = () => {
    window.open('http://www.linkedin.com/in/philip-demand', '_blank');
  }

  const handleNavGh = () => {
    window.open('https://github.com/philipdemand', '_blank');
  }

  const handleNavMe = () => {
    window.open('https://medium.com/@philipdemand', '_blank');
  }

  return (
    <Container ref={aboutRef} style={{ paddingTop: "50px", fontFamily: 'Menlo, monospace' }}>
      <Row>
        <Col xs={12} sm={6} lg={6}>
            <h1>Hi, I'm Phil</h1>
            <h3>Full Stack Software Engineer</h3><br/>
            <h5 style={{paddingBottom: "20px"}}>Welcome to my personal website, your gateway to exploring my résumé, portfolio, and journey as a software engineer, designed to showcase my skills and passion for creating impactful tech solutions!</h5>
            <Button 
              size="sm" 
              style={!hovered ? buttonStyle : hoveredStyle} 
              onClick={scrollToContact}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
                Contact Me!
            </Button>
            <div className="pad-top">
              <a href={resume} style={{color: "inherit"}}download="P_Demand_Resume_4_30_24.pdf"><FontAwesomeIcon icon={faFileLines} size="xl" className="icon"/></a>
              <FontAwesomeIcon onClick={handleNavLi} icon={faLinkedin} size="xl" className="icon"/> 
              <FontAwesomeIcon onClick={handleNavGh} icon={faGithub} size="xl" className="icon"/>
              <FontAwesomeIcon onClick={handleNavMe} icon={faMedium} size="xl" className="icon"/>
            </div>
        </Col >
        <Col xs={12} sm={6} lg={6}><Image src={pic} width="500" height="auto" roundedCircle fluid/></Col>
      </Row>
    </Container>
  );
}

export default About;