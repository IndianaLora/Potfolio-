import React from 'react'
import "./about.css"
import Me from "../../assest/me.jfif"
import Shine from "../../assest/shine.gif"
function About() {
  return (
    <section>
      <h1>Get to know</h1>
      <h2>Me</h2>

      <div id="about" className='container about-container'>
        <div className='about-me'>
          <div className='about-img'>
            <img src={Me} alt='Myself' />
          </div>
        </div>
        <div className='about-content'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, </p>
          <img src={Shine} alt="Shine gif" className='shine' />
          <p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </section>

  )
}

export default About