import React from 'react';
import CTA from './CTA';
import './header.css';
import MEW from '../../Assets/Rj-bg.png'
import HeaderSocials from './HeaderSocials';
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>RANJIT MAHARJAN</h1>

        <h5 className='text-light'>
          <ReactTyped
            strings={[
              "Front End Developer",
              "WordPress Developer",
              "React Developer"
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h5>

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

export default Header;