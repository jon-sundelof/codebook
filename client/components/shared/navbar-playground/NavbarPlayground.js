import React from 'react';
import '../../../styles/Navbar.css';

import Cloud from '../../svgs/enviroment/Cloud';

const Navbar = () => {
  return (
    <nav className='navbar-playground-wrapper'>
      <ul>
        <li className='nav-playground-item'>
          <a href='#'>Sign Up</a>
        </li>
        <li className='nav-playground-item'>
          <a href='#'>Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
