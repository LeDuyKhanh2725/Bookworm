import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Shop() {
  const[state,setState] = useState({
    listbook: [],
    listsortonsale: [],
    listsortpopular: [],
    listsortlowhigh: [],
    listsorthighlow: [],
    listfiltercate: [],
    listfilterauthor: []
  });
  useEffect(async () =>{
    // const getData = await axios.get('http://127.0.0.1:8000/api/book-list');
    const getDataonsale = await axios.get('');
    const getDataPopular = await axios.get('');
    const getDatalow = await axios.get('');
    const getDatahigh = await axios.get('');
    const getDatacate = await axios.get('');
    const getDataauthor = await axios.get('');
  setState({listbook:getData.data,listsortonsale:getDataonsale.data,
  listsortpopular:getDataPopular.data, listsortlowhigh:getDatalow.data,
listsorthighlow:getDatahigh.data,listfiltercate:getDatacate.data,
listfilterauthor:getDataauthor.data})
  },[])
  return (
    <>
      {/* <Shop list={state.listbook}/> */}
    </>
  )
}

export default Shop