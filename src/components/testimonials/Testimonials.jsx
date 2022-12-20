import React from 'react'
import './testimonials.css'
import ME from '../../Assets/mew.jpg'
import MY from '../../Assets/myw.jpg'


// import Swiper core and required modules
import { Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar : ME,
    name : 'Lovely',
    review : 'User Friendly Page'
  },
  {
    avatar : MY,
    name : 'Lovely Sha',
    review : 'User Friendly Page2'
  },
  {
    avatar : ME,
    name : 'Lovely Doe',
    review : 'User Friendly Page3'
  },
  {
    avatar : MY,
    name : 'Lovely Tarwal',
    review : 'User Friendly Page4'
  },
]

const Testimonials = () => {
  return (
   <section id="testimonials">
    <h5>Review</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {
        data.map(({avatar, name, review},index) =>{
          return(
            <SwiperSlide key={index} className="testimonials">
              <div className="client_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
   </section>
  )
}

export default Testimonials
