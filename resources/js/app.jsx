import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home/Home';
import Carousel from './pages/home/Carousel';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      {/* <Carousel /> */}
    </React.Fragment>

    
  )
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById('root')
);