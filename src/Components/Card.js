import React from 'react';
import '../App.css';
import Flip from './Flip.js'

// Front of the card
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
            <div className='BodyContainer'>
              <div className='CardContainer'>
                  <div className='Title'>JavaScript Questions</div>
                  <div className='Question'>{this.state.question}</div>
                  <Flip />
              </div>
            </div>
    )}
  } 

export default Card;