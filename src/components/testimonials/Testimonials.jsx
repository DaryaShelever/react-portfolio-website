import React from 'react'
import './Testimonials.css'
import Avtr from '../../assets/avatar1.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
  avatar:Avtr, 
  name : 'Name',
  review: 'Here is review'
  },
  {
  avatar:Avtr, 
  name : 'Name',
  review: 'Here is review'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>письма</h5>
      <h2>Testimonials</h2>
      
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