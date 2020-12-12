import React, {useState} from 'react';


// Front of the card
function Card({ frontSide, backSide }) {
  const [text, setText] = useState(frontSide);
  function handleClick() {
    setText(oldState => {
      if (oldState === frontSide) {
        return backSide;
      } else {
        return frontSide;
      }
    });
  }
  return (
    <div className='flash-card' onClick={handleClick}>
      {text}
    </div>
  );
  }



export default Card;