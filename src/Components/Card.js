import React from 'react';
import '../CSS/Card.css';
import FlipCard from './Flip.js'

class Card extends React.Component {
    constructor() {
      super();
      this.state = {
        question: "What is the Difference between == and ===?",
        tips: "TBD"
      };
    }
    render() {
      return (
        <div className="CardWrapper">
          <div className='BodyContainer'>
            <div className='CardContainer'>
                <div className='Title'>JavaScript Questions</div>
                <div className="Question">{this.state.question}</div>
                <FlipCard />
            </div>
          </div>
        </div>
    )}
  } 

export default Card;