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
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
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
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
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
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
            <li>
              <BiCheck className='service_list-icons' />
              <p>Welcome To Devil's Hunter Club .</p>
            </li>
          </ul>
        </article>
        {/* end of content */}
      </div>
    </section>
  )
}

export default Service
