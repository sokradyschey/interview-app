import React from 'react';
import '../CSS/Header.css';

function Header() {
  return(
      <div className='Container'>
      <ul class="navigation">
        <li><a href="#">JavaScript</a></li>
        <li><a href="#">React</a></li>
        <li><a href="#">CSS</a></li>
        <li><a href="#">HTML</a></li>
      </ul>
          <div className='Nav'></div>
          <div className='Nav'></div>
          <div className='Nav'></div>
          <div className='Nav'></div>
      </div>
  );
}

export default Header;
