import React from 'react'
import "./header.css"
import Info from './Info'
import Me from "../../assest/me.jfif"
function Header() {
  return (
    <header>
      <div class="container">
        <div class="container header-container">
          <h5>Hello I'm</h5>
          <h1>Indiana Lora</h1>
          <h5 className='text-light'>Frontend Developer</h5>
          <Info />
          <div class="me">
            <img src={Me} alt='Myself' />
            <a href="#contact">Scroll Down</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header