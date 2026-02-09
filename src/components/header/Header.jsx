import React from 'react';
import CTA from './CTA';
import './header.css';
import MEW from '../../Assets/Rj-bg.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>RANJIT MAHARJAN </h1>
        <h5 className='text-light'>Front End Developer </h5>
        <CTA />
        <HeaderSocials />

      <div className="header_img">
        <img src={MEW} alt="mew" />
      </div>

      <a href="#contact" className='scroll_down'>Scroll Down ----</a>
        
      </div>
    </header>
  )
}

export default Header
