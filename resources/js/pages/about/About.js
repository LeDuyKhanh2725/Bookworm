import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  console.log(123);
  return (
    <>
      <Container>
        <Row>
          <h3>About us</h3>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Wellcome to BookWorm</h1>
            <p>"Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.
              Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper.
              Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.
              Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue. Pellentesque vitae eros eget enim mollis placerat.
              Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper.
              Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.
              Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.
              Pellentesque vitae eros eget enim mollis placerat."</p>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>
            <h4>Our Vision</h4>
            <p>Pellentesque sodales augue eget ultricies ultricies. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Curabitur sagittis ultrices condimentum.</p>
          </Col>
          <Col sm={3}>
            <h4>Our Vision</h4>
            <p>Pellentesque sodales augue eget ultricies ultricies. 
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Curabitur sagittis ultrices condimentum.</p>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default About