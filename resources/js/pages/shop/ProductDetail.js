import React from 'react'
import { Col, Container, Figure, NavItem, Row } from 'react-bootstrap'

function ProductDetail() {
  return (
    <>
        <Container>
            <Row>
                <h2>Category Name</h2>
            </Row>
            <Row className='product'>
                <Col className='product_infor' sm={9}>
                    <Col className='image' sm={3}>
                        <Figure>
                            <Figure.Image/>
                        </Figure>
                    </Col>
                    <Col className='book_infor' sm={9}>
                        <Row className='book_title'>
                            <h2>Book Title</h2>
                        </Row>
                        <Row className='book_description'>
                            <p>Book description.Book description.Book description.Book description
                            Book description.Book description.Book description.Book description</p>
                        </Row>
                    </Col>
                </Col>
                <Col sm={3}><p>Add to cart</p></Col>
            </Row>
            <Row className='comment'>
                <Col sm={9}></Col>

                <Col sm={3}></Col>
            </Row>
        </Container>
    </>
  )
}

export default ProductDetail