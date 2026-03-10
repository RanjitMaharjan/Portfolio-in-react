import React from 'react';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/ranjit-maharjan-23ba9a334/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/RanjitMaharjan" target="_blank"><BsGithub/></a>
        {/* <a href="https://www.facebook.com/ranjit.maharjan.94" target="_blank"><BsFacebook/></a> */}
    </div>
  )
}

export default HeaderSocials
