import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
function Home() {
  const [state, setState] = useState({
    listBook: []
  });
  useEffect(async () => {
    const getData = await axios.get('http://127.0.0.1:8000/api/book-most-discount');

    setState({ listBook: getData.data })
  }, [])

  return (
    <>
      <Carousel list={state.listBook} />
      <button>123</button>
      </>
      
  )
}

export default Home