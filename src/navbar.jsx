import React from 'react';
import './navbar.css';
import logo from './logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="Surreal Estates Logo" />
      <ul className="nav">
        <li className="item">
          <button type="button" id="grab" className="button">
            View Properties
          </button>
        </li>
        <li className="item">
          <button type="button" className="button" id="grab">
            Add a Property
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
