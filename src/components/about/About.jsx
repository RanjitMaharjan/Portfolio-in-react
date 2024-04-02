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
              <small> 6 Months </small>
            </article>
          
            {/* <article className="about_card">
              <FaUserGraduate className='about_icons'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article> */}
            
            <article className="about_card">
              <FaFolder className='about_icons'/>
              <h5>Projects</h5>
              <small> 5+ completed</small>
            </article>
          </div>
            <br />
          <p>
          Passionate front-end developer with expertise in HTML, CSS, and JavaScript. Dedicated to crafting seamless user experiences 
through responsive design and innovative coding. proven collaborate in cross-functional teams, translating design concepts into 
functional websites. Eager to contribute technical skills to dynamic projects and drive digital excellence.  
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}

export default About
