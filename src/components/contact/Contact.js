import React from 'react'
import "./contact.css"
import { HiOutlineMailOpen } from "react-icons/hi"
import { BsLinkedin } from "react-icons/bs"
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0q83ca5', 'template_ubzstj9', form.current, '6T9tEad3KOKxVJtMH')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (err) {
        console.log('FAILED...', err);
      });
    e.target.reset();
  }
  return (
    <section id="contact" >
      <h2>Contact Me</h2>
      <div className='container contact-container'>


        <div className='contact-options'>
          <div className='contact-option' >
            <HiOutlineMailOpen className='contact-icon' />
            <h4>Email</h4>
            <h5>lorasharim@gmail.com</h5>
            <a href='mailto:lorasharim@gmail.com'>Email Me</a>
          </div>
          <div className='contact-option'>
            <BsLinkedin className='contact-icon' />
            <h4>Linkedin</h4>
            <h5>Indiana Lora</h5>
            <a href='https://www.linkedin.com/in/indiana-lora-4b1265214/'>Send me a message</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Type your full name' required />
          <input type="email" name="email" placeholder="Type ypur email please" required />
          <textarea name="message" rows="7" placeholder=" Type your message please" required></textarea>
          <button type='submit' className='btn btn-primary'>Send the message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact