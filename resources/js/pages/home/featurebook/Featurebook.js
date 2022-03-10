import React from 'react'
import { Button, ButtonGroup, Card, Container, Row } from 'react-bootstrap'

function Featurebook({list}) {
    const renderListItem = (list = []) => {
        return list.map((item) => {
            return (
                <Card className='col-md-3 me-3' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={"/bookcover/" + item.book_cover_photo + ".jpg"} />
                    <Card.Body>
                        <Card.Title>{item.book_title}</Card.Title>
                        <Card.Text>
                            {item.author_name}
                        </Card.Text>
                        <Button variant="primary">{item.book_price}/{item.discount_price}</Button>
                    </Card.Body>
                </Card>
            )
        })
    }
  return (
      <>
      <div className='text-center'><h2>Featurebook</h2>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Recomment</Button>
      <Button variant="secondary">Popular</Button>
      </ButtonGroup></div>
      <br></br>
      

    <Container >
        <Row>
        {renderListItem(list)}
        </Row>
    </Container>
      </>
    
  )
}

export default Featurebook