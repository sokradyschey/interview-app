import React from 'react';
import '../App.css';

// Front of the card
function Card(props) {
  return (
    <div className='BodyContainer'>
      <div className='CardContainer'>
        <h1>Javascript</h1>
        <p>{props.question}</p>
    </div>
  </div>
    )
  }



export default Card;