import React from 'react'
import './service.css'
import { BiCheck } from 'react-icons/bi'

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>service</h2>

      <div className="container service_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Desgin</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icons' />
              <p>User flow charts, diagrams.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Design technology consulting.</p>
            </li>
          </ul>
        </article>
        {/* end of ui ux */}
        <article className="service">
          <div className="service_head">
            <h3>WEB DEVELOPMENT</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icons' />
              <p>Responsive Web design and development.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Secure Website.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Website Management.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>testing the system.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>implement.</p>
            </li>
          </ul>
        </article>
        {/* end of web developmenmt */}
        <article className="service">
          <div className="service_head">
            <h3>CONTENT CREATION</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list-icons' />
              <p>SEO content development and promotion.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Graphic design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Copywriting.</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Video production and marketing.</p>
            </li>
          </ul>
        </article>
        {/* end of content */}
      </div>
    </section>
  )
}

export default Service


