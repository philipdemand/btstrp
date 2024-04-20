import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

const Portfolio = ({ projects, lightClicked, portfolioRef }) => {

    return (
        <div className="portfoliodiv" ref={portfolioRef}>
            <h2 style={{paddingBottom: "20px"}}>Portfolio Projects</h2>
            <Container>
                <Row className="g-4 justify-content-center">
                    {projects.map((project, idx) => {
                        return <Col key={idx} xs={5}><ProjectCard project={project} lightClicked={lightClicked}/></Col>;
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Portfolio;