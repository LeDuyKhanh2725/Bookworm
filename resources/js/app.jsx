import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import { BrowserRouter as Router } from "react-router-dom";
// import Carousel from './pages/home/Carousel';
import { Routes, Route } from 'react-router-dom'

function App() {
  console.log(123);
  return (
    <React.Fragment>
    <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart-pages' element={<Cart />} />
          <Route path="/about-pages" element={<About />} />
          <Route path='/shop-pages' element={<Shop />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);