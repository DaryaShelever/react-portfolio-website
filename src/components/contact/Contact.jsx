import React, { useRef } from 'react';
import emailjs from'emailjs-com'
import'./Contact.css'
import{MdOutlineMailOutline} from 'react-icons/md'
import{AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqdnbnl', 'service_pqdnbnl', form.current, 'l9qsy3NRxPyrg4_Rv')
      
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineMailOutline className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>d.shelever@gmail.com</h5>
            <a href="mailto:d.shelever@gmail.com" target='_blank'>Send a message</a>
          </article>

          
          <article className='contact_option'>
            <AiOutlineWhatsApp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+972586008587</h5>
            <a href="https://wa.me/+972586008587" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name ' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="massage"   rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact