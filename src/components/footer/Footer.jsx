import React from 'react'
import './footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Portfolio</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contacts</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twiter.com"><FaTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Ranjit Maharjan . All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
