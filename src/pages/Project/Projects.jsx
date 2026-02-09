import React, { useState } from "react";
import './projects.css';
import { Link } from "react-router-dom";
import A from '../../Assets/port-img/Naledi.png';
import B from '../../Assets/port-img/Path.png';
import C from '../../Assets/port-img/UKvisa.png';
import D from '../../Assets/port-img/Peyser.png';
import E from '../../Assets/port-img/Precise.png';
import F from '../../Assets/port-img/Sunformance.png';
import G from '../../Assets/port-img/Sunrobi.png';
import H from '../../Assets/port-img/Litearllyy.png';

export const projectsData = [  // <-- export this
  {
    id: 1,
    category: "Wordpress",
    image: A,
    title: "Naledi Saul",
    demo: "https://naledisaul.com/",
  },
  {
    id: 2,
    category: "Wordpres",
    image:B,
    title: "Path 2 Teach",
    demo: "https://path2teach.com/",
  },
  {
    id: 3,
    category: "Wordpress",
    image:C,
    title: "UKvisa Expert",
    demo: "https://ukvisaexpert.com/",
  },
  {
    id: 4,
    category: "wordpress",
    image:D,
    title: "Peyser",
    demo: "https://www.peyser.com/",
  },
  {
    id: 5,
    category: "wordpress",
    image:E,
    title: "Precise Drainage",
    demo: "https://precisedrainage.uk/",
  },
  {
    id: 6,
    category: "wordpress",
    image:F,
    title: "Sun Formance",
    demo: "https://sunformance.com/",
  },
  {
    id: 7,
    category: "wordpress",
    image:G,
    title: "Sun Robi",
    demo: "https://www.sunrobi.com/",
  },
  {
    id: 8,
    category: "wordpress",
    image:H,
    title: "Literallyy.",
    demo: "https://literallyy.com/",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "Wordpress", label: "Wordpress" },
  { id: "design", label: "Design" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects">
        <h5>My Projects</h5>
        <h2>Projects Portfolio</h2>
      <div className="container projects_container">
        <div className="tab-buttons">
          {categories.map((cat) => (
          <Link
            key={cat.id}
            to={cat.link || "#"} // set your route path here
            className={activeCategory === cat.id ? "active btn" : "btn"}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </Link>
          ))}
        </div>

        <div className="portfolio_container">
          {filteredProjects.map(({ id, image, title, details, demo }) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="title" />
              </div>
              <div className="portfolio_item-details">
                <div className="project-title-wrapper">
                  <h3><a href={demo} className="project-title" target="_blank">{title}</a></h3>
                </div>
                <div className="portfolio_item-cta">
                  <a href={demo} className="project-btn" target="_blank">
                    Demo
                  </a>
                </div>
              </div> 
            </article>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Projects;
