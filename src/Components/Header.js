import React from 'react';
import '../CSS/Header.css';

function Header() {
  return(
    <div className='Container'>
        <div className='Nav'>JavaScript</div>
        <div className='Nav'>React</div>
        <div className='Nav'>CSS</div>
        <div className='Nav'>HTML</div>
    </div>
  );
}

export default Header;
