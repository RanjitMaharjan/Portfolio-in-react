import React from 'react'
import './portfolio.css'
import ME from '../../Assets/mew.jpg'

const data = [
  {
    id : 1,
    image : ME,
    title : 'Ramu',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 2,
    image : ME,
    title : 'Ramu Panday',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 3,
    image : ME,
    title : 'Ramu Tarwal',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 4,
    image : ME,
    title : 'Ramu Shyam',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 5,
    image : ME,
    title : 'Ramu Hari',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
  },
  {
    id : 6,
    image : ME,
    title : 'Ramu Sha',
    git : 'https://github.com',
    demo : 'https://dribbble.com/shots/popular/illustration'
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
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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
