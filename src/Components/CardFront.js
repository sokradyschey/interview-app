import React from 'react';
import '../CSS/Card.css';


function CardFront(props) {
    return (
        <div className='CardContainer'>
            <div className='Title'>JavaScript Questions</div>
            <div className="Question">What is the Difference between == and ===?</div>
        </div>
    )
};

export default CardFront;