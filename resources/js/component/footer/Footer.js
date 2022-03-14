import React from 'react'
import { Col, Container, Figure, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
function Footer() {
  return (
    <footer className='py-5 my-5 bg-dark'>
      <Container className='px-4'>
        <Row>
          <Col sm={'1'}>
            <Figure>
              <Figure.Image
                width={100}
                height={150}
                alt="171x180"
              />
            </Figure>
          </Col>
          <Col sm={'1'}>
            <Row><h1 className='text-white'>BookWorm</h1></Row>
            <Row><p className='text-white'>Address</p></Row>
            <Row><p className='text-white'>Phone</p></Row>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer