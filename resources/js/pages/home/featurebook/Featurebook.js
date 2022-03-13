import React from 'react'
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap'

function Featurebook({ list }) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            return (
                <Card className='col-md-3 me-3' style={{ width: '18rem' }}>
                    <Card.Img height={'250px'} variant="top" src={"/bookcover/" + item.book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title height={'50px'}>{item.book_title}</Card.Title>
                        <Card.Text height={'50px'}>
                            {item.author_name}
                        </Card.Text>
                        <Card.Text height={'50px'}>
                            {item.book_price}/{item.discount_price}
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
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