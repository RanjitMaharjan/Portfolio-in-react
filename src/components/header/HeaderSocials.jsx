import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RanjitMaharjan" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/ranjit.maharjan.94" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
