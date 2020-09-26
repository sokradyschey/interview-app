import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import Card from './Components/Card';
import './CSS/index.css';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

