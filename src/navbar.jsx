import React from 'react';
import './navbar.css';
import { Route, Link } from 'react-router-dom';
import logo from './logo.png';

function NavBar() {
  return (
    <div className="NavBar">
      <img className="logo" src={logo} alt="Surreal Estates Logo" />
      <ul className="nav">
        <Link to="/" className="item">
          <button type="button" id="grab" className="button">
            View Properties
          </button>
        </Link>
        <Link to="addproperty" className="item">
          <button type="button" className="button" id="grab">
            Add a Property
          </button>
        </Link>
      </ul>
    </div>
  );
}

export default NavBar;
