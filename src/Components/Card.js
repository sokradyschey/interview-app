import React, {useState} from 'react';


// Front of the card
function Card({ frontSide, backSide }) {
  const [isFront, changeFace] = useState(true);
  function handleClick() {
    changeFace(oldState => !oldState)
    };
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;
  return (
    <div className="card">
      <div className={classList} onClick={handleClick}>
        {text}
      </div>
    </div>
  );
}



export default Card;