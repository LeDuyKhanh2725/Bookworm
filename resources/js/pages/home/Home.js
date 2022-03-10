import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import Carousel from '../home/Carousel'
import Featurebook from './featurebook/Featurebook'
function Home() {
  const [state, setState] = useState({
    listBook: [],
    listRecommentbook: [],
    listPopularbook: []
  });

  console.log(state);
  useEffect(async () => {
    const getData = await axios.get('http://127.0.0.1:8000/api/book-most-discount');
    const getDataRecomment = await axios.get('http://127.0.0.1:8000/api/book-most-recomment');
    const getDataPopular = await axios.get('http://127.0.0.1:8000/api/book-most-popular');

    setState({ listBook: getData.data, listRecommentbook: getDataRecomment.data,
    listPopularbook: getDataPopular.data })
  }, [])

  return (
    <>
      <Carousel list={state.listBook} />
     <br></br>
      <Featurebook list={state.listRecommentbook}/>
      <Featurebook list={state.listPopularbook}/>
      </>
      
      
  )


  
}

export default Home