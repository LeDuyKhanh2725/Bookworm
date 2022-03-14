import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function About() {
  return (
    <>
      <Container>
        <Row>
          <h3>About us</h3>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Wellcome to BookWorm</h1>
            <p>"BookWorm is independent New York bookstore and language school with 
            locations in Mahattan and Brooklyn. We specialize in travel books and language
            classes"</p>
          </Col>
        </Row>
        <Row>
          <Col sm={3}></Col>
          <Col sm={3}>
            <h4>Our Story</h4>
            <p>The name BookWorm was taken from the original name for New York International Airport
            ,which was renamed JFK in December 1963. Our Mahattan store has just move to the West Village
            . Our new location is 170 7th Avenue South, at the corner of Perry Street.
            From March 2008 through May 2016, the store was located in the Flatiron District</p>
          </Col>
          <Col sm={3}>
            <h4>Our Vision</h4>
            <p>One of the last travel bookstores in the country, our Mahattan store carri a range of 
            guildbooks( all 10% off) to suit the needs and tastes of every traveler and budget.
            We believe that a novel or travelogue can be just as valuable a key to a place as any guildbooks
            ,and our well-read, well-traveled staff is happy to make reading reccomendations for any traveler,
            book lover, or gift giver </p>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default About