import React from 'react';
import './contact.css';
import {GrMail} from 'react-icons/gr'
import {BsMessenger} from 'react-icons/bs'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j9ukyp9', 'template_3o7j92q', form.current, 'V-0sTRPnpNjBgy0P8')
      
      e.target.reset()
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <GrMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gwenmhrzn25@gmail.com</h5>
            <a href="mailto:gwenmhrzn25@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>Ranjit Maharjan</h5>
            <a href="https://m.me/ranjit.maharjan.94" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
            <RiWhatsappFill className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>9860732913</h5>
            <a href="https://wa.me/+9779860732913" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Enter Email' required />
          <textarea name="message"cols="20" rows="7" placeholder='Type Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Messaage</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
