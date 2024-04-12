import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic from './images/square-fam.jpg'

function About ({ aboutRef }) {

  return (
    <Container ref={aboutRef} style={{ fontFamily: 'Menlo, monospace' }}>
      <Row>
        <Col>Bunch of Text Here</Col>
        <Col><Image src={pic} width="500" height="500" roundedCircle /></Col>
      </Row>
    </Container>
  );
}

export default About;