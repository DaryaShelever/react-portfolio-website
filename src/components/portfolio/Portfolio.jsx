import React from 'react'
import './Portfolio.css'
import Img from '../../assets/trailPortfolio.png'

const data=[
  {
    id:1,
    image:Img,
    title:'This portfolio ',
    github:'https://github.com/DaryaShelever/react-portfolio-website',
  },
  {
    id:2,
    image:Img,
    title:'Trail portfolio',
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
              <a href={github} className='btn'  target='_blank'> GitHub</a>
              
              {demo && (
                <a href={demo} className='btn btn-primery' target='_blank'>Live Demo</a>
              )}
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