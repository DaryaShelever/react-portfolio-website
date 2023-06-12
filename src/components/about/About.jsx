import React from 'react'
import'./About.css'
import ME from "../../assets/me-about1.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="About"/>
          </div>
        </div>

        <div className='about_content'>

          {/* <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide </small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div> */}
          <p>
           I successfully completed a full stack development course in Java and gained a wide range of skills required to build full-fledged web applications. My portfolio showcases my ability to create elegant and functional websites that are user-friendly and easy to navigate. I am always ready to take on new challenges and strive for constant self-improvement, which enables me to adapt easily to new technologies and development methodologies. My determination and diligence help me achieve results, and my passion for programming allows me to find creative and efficient solutions to complex problems.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About