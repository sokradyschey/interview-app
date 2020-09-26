import React from 'react';
import '../CSS/Card.css';


class Card extends React.Component {
    constructor() {
      super();
      this.state = {question: "What is the Difference between == and ===?"};
    }
    render() {
      return (
        <div className='BodyContainer'>
          <div className='CardContainer'>
              <div className='Title'>JavaScript Questions</div>
              <div className="Question">{this.state.question}</div>
          </div>
        </div>
    )}
  }

export default Card;