import React from 'react'
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Featurebook({ list }) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            return (
                <Card className='col-md-3 me-3' style={{ width: '18rem' }}>
                    <Link to={`/book-list/${item.book_id}`}><Card.Img height={'250px'} variant="top"
                        src={"/bookcover/" + item.book_cover_photo + ".jpg"} /></Link>
                    <Card.Body>
                        <Link to={`/book-list/${item.book_id}`}>
                            <Card.Title height={'50px'}>{item.book_title}</Card.Title>
                        </Link>
                        <Card.Text height={'50px'}>
                            {item.author_name}
                        </Card.Text>
                        <Card.Text height={'50px'}>
                            {item.book_price}/{item.discount_price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    }
    return (
        <>
            <Container >
                <Row>
                    {renderListItem(list)}
                </Row>
            </Container>
        </>

    )
}

export default Featurebook