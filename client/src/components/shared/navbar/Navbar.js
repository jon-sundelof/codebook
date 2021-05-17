import React from 'react';
import '../../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
      <h1>
        <a href='/'>SUNDELOF</a>
      </h1>
      <ul>
        <li className='nav-item'>
          <a href='#'>Sign Up</a>
        </li>
        <li className='nav-item'>
          <a href='#'>Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
