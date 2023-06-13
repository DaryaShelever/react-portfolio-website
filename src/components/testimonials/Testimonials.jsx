import React from 'react'
import './Testimonials.css'
import Avtr1 from '../../assets/avtr1.jpeg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
  avatar:Avtr1, 
  name : 'Assaf Finkelshtein',
  review: '<< .. It could be seen that Darya really loves the field of software development. She enjoys developing and building things, dealing with problems, finding solutions, and excels in creative thinking ... >>'
  },
  
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Letter</h5>
      <h2>Recommendation</h2>
      
      <Swiper className='container testimonials_container '

          // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}

      >
        {
          data.map(({avatar,name,review}, index)=>{
            return(
              <SwiperSlide key= {index} className='testimonials'>
                <div className='avatar'>
                  <img src={avatar}/>
                </div>
                  <h5 className='name'> {name}</h5>
                  <small className='review'> {review} </small>
              </SwiperSlide >
              
            )}
          )
        }

      </Swiper>
    </section>
  )
}

export default Testimonials