import React from 'react';
import './navbar.css';
import logo from './logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="Surreal Estates Logo" />
      <ul className="nav">
        <li className="item">View Properties</li>
        <li className="item">Add a Property</li>
      </ul>
    </div>
  );
}

export default NavBar;
