import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/gi';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className="app__navbar-logo">
      <img src={images.glassKnife} alt="glass-knife-logo" />
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="" id="#home">Home</a></li>
      <li className="p__opensans"><a href="" id="#about">About</a></li>
      <li className="p__opensans"><a href="" id="#menu">Menu</a></li>
      <li className="p__opensans"><a href="" id="#awards">Awards</a></li>
      <li className="p__opensans"><a href="" id="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">Log In / Register</a>
      <div />
      <a href="/" className="p__opensans">Book Table</a>
    </div>
  </nav>
);

export default Navbar;
