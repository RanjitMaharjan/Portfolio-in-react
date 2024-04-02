import React from 'react'
import './portfolio.css'
import ME from '../../Assets/react_logo.PNG'

const data = [
  {
    id : 1,
    image : ME,
    title : 'Portfolio In React',
    git : 'https://github.com/RanjitMaharjan/Portfolio-in-react',
    // demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 2,
    image : ME,
    title : 'PHP Project',
    git : 'https://github.com/RanjitMaharjan/Hotel_management_in_php',
    // demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 3,
    image : ME  ,
    title : 'React Project',
    git : 'https://github.com/RanjitMaharjan/Booking_system_using_React',
    // demo : 'https://dribbble.com/shots/popular/illustration'
  },
  
]

const Portfolio = () => {
  return (
   <section id="portfolio">
    <h5>My Recent Works</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
      {
        data.map(({id, image, title, git, demo}) => {
          return(
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
              <img src={image} alt="title" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={git} className='btn' target='_blank'>Github</a>
                {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
              </div>
            </article>
          )
        })
      }
    </div>
   </section>
  )
}

export default Portfolio
