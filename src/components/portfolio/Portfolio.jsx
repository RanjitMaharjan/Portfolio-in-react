import React from 'react';
import './portfolio.css';
import { Link } from "react-router-dom";
import { projectsData } from "../../pages/Project/Projects"; 
import { FaArrowRight } from "react-icons/fa";
// import ME from '../../Assets/react_logo.PNG'

const Portfolio = () => {
  // Get last 3 projects
  const lastThreeProjects = projectsData.slice(-4); // slice(-3) gets last 3 items

  return (
    <section id="home-projects">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
          {lastThreeProjects .map(({ id, image, title, details, demo }) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="title"vgjjsdgvjhgjsvvsvjsvjhsjsj />
              </div>
              <div className="portfolio_item-details">
                <div className="project-title-wrapper">
                  <h3><a href={demo} className="project-title" target="_blank">{title}</a></h3>
                </div>
                <div className="portfolio_item-cta">
                  <a href={demo} className="project-btn" target="_blank">
                    <FaArrowRight />
                  </a>
                </div>
              </div> 
            </article>
          ))}
        </div>

        <div className="link-button">
          <Link to="/projects" className='btn btn-primary'>All  Projects</Link>
        </div>
    </section>
  );
};

export default Portfolio;
