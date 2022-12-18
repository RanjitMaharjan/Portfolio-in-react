import React from 'react';
import './about.css';
import ME from '../../Assets/mew.jpg'
import { FaAward, FaUserGraduate, FaFolder } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Learn more</h5>
      <h2>About Content</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
          
            <article className="about_card">
              <FaUserGraduate className='about_icons'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            
            <article className="about_card">
              <FaFolder className='about_icons'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, qui? Reiciendis eius deleniti laborum sapiente dignissimos, deserunt autem beatae atque dolore non perspiciatis. Ipsa soluta repellendus, numquam rerum facilis ad!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
