import React from 'react';
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import images from '../../constants/images'
import './Navbar.css';

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false)
  return(
 <nav className='app__navbar'>
   <div className='app__navbar-logo'>
    <img src ={images.chairman} alt='app logo'/>
   </div>

   <ul className='app__navbar-links'>
     <li ><a className='p__opensans' href='#home'>Home</a></li>
     <li ><a className='p__opensans' href='#about'>About Us</a></li>
     <li ><a className='p__opensans' href='#menu'>Menu</a></li>
     <li ><a className='p__opensans' href='#awards'>Awards</a></li>
     <li ><a className='p__opensans' href='#contact'>Contacts</a></li>
   </ul>
   
   <div className='app__navbar-login'>
     <a href='#login' className='p__opensans'>Log In / Register</a>
     <div></div>
     <a href='/' className='p__opensans'>Book Table</a>
    </div>
    <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
 </nav>
 )
};

export default Navbar;
