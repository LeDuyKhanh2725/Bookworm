import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';
import bootstrap from 'bootstrap';
import './Shop.css';
import { Breadcrumb, Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap';



function Shop() {
  const[state,setState] = useState({
    listbook: [],
    currentBook:'currentbook'
  });
  useEffect(async () =>{
    const getData = await axios.get('http://127.0.0.1:8000/api/book-list');
    
  setState({listbook:getData.data,currentBook:'currentbook'})
  },[])

  const chanceFilter = async(type) =>{
    if (type === 'booklist') {
      const shopb = await axios.get('');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'booklist'
      });
      return;
    }
    if (type === 'onsale') {
      const shopb = await axios.get('http://127.0.0.1:8000/api/sort-by-onsale');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'onsale'
      });
      return;
    }
    if (type === 'popular') {
      const shopb = await axios.get('http://127.0.0.1:8000/api/sort-by-popular');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'popular'
      });
      return;
    }
    if (type === 'lowhigh') {
      const shopb = await axios.get('http://127.0.0.1:8000/api/sort-low-to-high');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'lowhigh'
      });
      return;
    }
    if (type === 'highlow') {
      const shopb = await axios.get('http://127.0.0.1:8000/api/sort-high-to-low');
      setState({
        ...state, listbook: shopb.data, currentFeature: 'highlow'
      });
      return;
    }

  }
  return (
    <>
        <Container>
            <Row>
            <Col sm={2}>Book</Col>
            <Col sm={10}>
                <Breadcrumb>
                <Breadcrumb.Item href="#">Shop</Breadcrumb.Item>
                <Breadcrumb.Item href="#"> Shop1</Breadcrumb.Item>
                <Breadcrumb.Item active>Shop2</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <h2>Filter by</h2>
                </Col>
                <Col sm={3}></Col>
                <Col sm={6}>Sort
                    <Row>
                        <Col sm={8}>
                            <ButtonGroup>
                                <Button className='bg-dark' onClick={()=>chanceFilter('onsale')}>Sort by onsale</Button>
                                <Button className='bg-dark' onClick={()=>chanceFilter('popular')}>Sort by Popular</Button>
                                <Button className='bg-dark' onClick={()=>chanceFilter('lowhigh')}>Sort Low to High Price</Button>
                                <Button className='bg-dark' onClick={()=>chanceFilter('highlow')}>Sort High to Low</Button>
                            </ButtonGroup>
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={2}>
                <Row>
                        <Form.Select aria-label="Default select example">
                        <option>Category</option>
                        <option onClick={()=>chanceFilter('')} value="1">Category1</option>
                        <option value="2">Category2</option>
                        <option value="3">Category3</option>
                        </Form.Select>
                    </Row>
                    <Row>
                        <Form.Select aria-label="Default select example">
                        <option>Author</option>
                        <option value="1">Author1</option>
                        <option value="2">Author2</option>
                        <option value="3">Author3</option>
                        </Form.Select>
                    </Row>
                </Col>
                <Col sm={10}>
                    <Product list={state.listbook}/>
                </Col>
            </Row>
        </Container>
        
    </>
  )
}

export default Shop