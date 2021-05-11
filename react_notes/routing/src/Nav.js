import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

 const navStyle = {
     color: 'white'
 };

  return (
      <nav>
          <Link to="/">
          <h3>Logo</h3>
          </Link>
          <ul className="nav-link">
              <Link style={navStyle} to="/about">
                <li>About</li>
              </Link>
              <Link style={navStyle} to="/shop">
                <li>Shops</li>
              </Link>
          </ul>

      </nav>
  );
}

export default Nav;
