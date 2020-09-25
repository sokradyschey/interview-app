import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import CardFront from './Components/CardFront';
import './CSS/index.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CardFront />
  </React.StrictMode>,
  document.getElementById('root')
);

