import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Carousel from '../home/Carousel'
import Featurebook from './featurebook/Featurebook'
function Home() {
  const [state, setState] = useState({
    listCarousel: [],
    listFeaturebook: [],
    currentFeature: 'recomment',
  });
  console.log(state);
  useEffect(async () => {
    const getDataCarousel = await axios.get('http://127.0.0.1:8000/api/book-most-discount');
    const getDataRecomment = await axios.get('http://127.0.0.1:8000/api/book-most-recomment');
    setState({
      listCarousel: getDataCarousel.data, listFeaturebook: getDataRecomment.data, currentFeature: 'recomment'
    })
  }, [])
  const changeFeature = async (type) => {
    if (type === 'recomment') {
      const res = await axios.get('http://127.0.0.1:8000/api/book-most-recomment');
      setState({
        ...state, listFeaturebook: res.data, currentFeature: 'recomment'
      });
      return;
    }
    if (type === 'popular') {
      const res = await axios.get('http://127.0.0.1:8000/api/book-most-popular');
      setState({
        ...state, listFeaturebook: res.data, currentFeature: 'popular'
      });
      return;
    }
  }
  return (
    <>
      <Container>
      <Carousel list={state.listCarousel} />

        <br></br>
        <div className='text-center'><h2>Featurebook</h2>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => changeFeature('recomment')}>Recomment</Button>
            <Button variant="success" onClick={() => changeFeature('popular')}>Popular</Button>
          </ButtonGroup></div>
        <br></br>
        <Featurebook list={state.listFeaturebook} />
      </Container>
    </>
  )
}

export default Home