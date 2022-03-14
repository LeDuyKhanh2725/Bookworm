import React from 'react'
import { Col, Container, NavItem, Row } from 'react-bootstrap'

function ProductDetail() {
  return (
    <>
        <Container>
            <Row>
                <h2>Category Name</h2>
            </Row>
            <Row className='product'>
                <Col className='product_infor' sm={9}>
                    <Col className='image' sm={3}></Col>
                    <Col className='book_infor' sm={9}>
                        <Row className='book_title'>
                            <h2>{NavItem.book_title}</h2>
                        </Row>
                        <Row className='book_description'>
                            <p>{NavItem.book_summary}</p>
                        </Row>
                    </Col>
                </Col>
                <Col sm={3}></Col>
            </Row>
        </Container>
    </>
  )
}

export default ProductDetail