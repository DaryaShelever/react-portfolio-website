import React from 'react'
import'./Contact.css'
import{MdOutlineMailOutline} from 'react-icons/md'
import{AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMailOutline/>
            <h4>Email</h4>
            <h5>d.shelever@gmail.com</h5>
            <a href="mailto:d.shelever@gmail.com" target='_blank'>Send a message</a>
          </article>

          
          <article className='contact_option'>
            <AiOutlineWhatsApp/>
            <h4>WhatsApp</h4>
            <h5>+972586008587</h5>
            <a href="https://api.whatsapp.com/send?phone=+972586008587" target='_blank'>Send a message</a>
          </article>
        </div>
      </div>

    </section>
  )
}

export default Contact