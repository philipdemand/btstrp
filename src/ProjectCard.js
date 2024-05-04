import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ICONS from './misc/icons.js'
import Modal from 'react-bootstrap/Modal';

const ProjectCard = ({ project, lightClicked }) => {

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);


  const getIcons = (technologies) => {

    const projectIcons = [];
    const iconNames = Object.keys(ICONS);

    for (let technology of technologies) {
      if (iconNames.includes(technology)) projectIcons.push(ICONS[technology]);
    }

    return projectIcons;
  }

  return (
    <>
      <Card className="bg-transparent" style={{ maxWidth: "550px" }}>
        <Card.Body className={!lightClicked ? "light-card" : "dark-card"}>
          <Card.Title style={{ fontSize: '1.3rem' }}>{project.title}</Card.Title>
          <Card.Text style={{ fontSize: '.89rem' }}>
            {project.description}
          </Card.Text>
          <Card.Img
            style={{ paddingBottom: "10px", whiteSpace: 'pre-wrap', cursor: 'pointer' }}
            variant="top"
            src={project.image.url}
            alt={project.alt}
            onClick={handleModalShow}
          />
          <Card.Text style={{ fontSize: "40px" }}>
            {getIcons(project.technologies).map((technology, idx) => {
              const techName = technology.replace('devicon-', '').replace('-plain', '').replace('-original', '').replace('-wordmark', '');
              return (
                <OverlayTrigger
                  key={idx}
                  placement="top"
                  overlay={<Tooltip>{techName}</Tooltip>}
                >
                  <i className={technology}></i>
                </OverlayTrigger>
              );
            })}
          </Card.Text>
          <ButtonGroup aria-label="Basic example" size="sm">
            {project.page && (
              <Button
                className={!lightClicked ? "non-rb-button-light" : "non-rb-button-dark"} 
                variant="secondary"
                href={project.page}
                target="blank"
              >
                Demo
              </Button>
            )}
            {project.github && (
              <Button
                className={!lightClicked ? "non-rb-button-light" : "non-rb-button-dark"} 
                variant="secondary"
                href={project.github}
                target="blank"
              >
                Github
              </Button>
            )}
          </ButtonGroup>
        </Card.Body>
      </Card>

      <Modal size="xl" show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={project.image.url} alt="Enlarged" style={{ width: '100%', height: 'auto' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectCard;