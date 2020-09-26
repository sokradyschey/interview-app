import React from 'react';
import '../CSS/Header.css';

class Header extends React.Component {
  render() {
    return(
      <div className='Container'>
        <ul className="navigation">
          <li><a href="#">JavaScript</a></li>
          <li><a href="#">React</a></li>
          <li><a href="#">CSS</a></li>
          <li><a href="#">HTML</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;
