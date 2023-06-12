import React from 'react'
import './Portfolio.css'
import Img from '../../assets/portfolio1.jpg'

const data=[
  {
    id:1,
    image:Img,
    title:'This portfolio ',
    github:'https://github.com/DaryaShelever/portfolio-react',
  },
  {
    id:2,
    image:Img,
    title:'Portfolio for testing ',
    github:'https://github.com/DaryaShelever/portfolio-react',
    demo:'https://daryashelever.github.io/portfolio-react/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio_container">
    {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article  key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className='portfolio_item-cta'>
              <a href={github} className='btn'> GitHub</a>
              <a href={demo} className='btn btn-primery' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        }
        )
      }

    </div>

    </section>
  )
}

export default Portfolio