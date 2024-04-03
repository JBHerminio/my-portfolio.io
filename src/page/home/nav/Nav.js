import React from 'react';

import './Nav.css';
import Time from './time/Time';

function Nav() {
  return (
    <>
      {/* <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
      </div> */}
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="/">My <span>Portfolio</span></a>
          </div>
          <div>
            {<Time />}
          </div>
          <ul class="menu">
            <li><a href="#home" class="menu-btn">Home</a></li>
            <li><a href="#about" class="menu-btn">About</a></li>
            <li><a href="#services" class="menu-btn">Services</a></li>
            <li><a href="#skills" class="menu-btn">Skills</a></li>
            <li><a href="#contact" class="menu-btn">Contact</a></li>
            {/* <li><a href="#login" class="menu-btn">Login</a></li> */}

          </ul>
          {/* <ul class="login">
            <li><a href="#" class="menu-btn" >Login</a></li>
          </ul>
          <div class="menu-btn">
            <i class="fas fa-bars"></i>
          </div> */}
        </div>
      </nav >
    </>
  )
};

export default Nav;
