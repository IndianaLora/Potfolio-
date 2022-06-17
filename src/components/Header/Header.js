import React from 'react'
import "./header.css"
import Info from './Info'
function Header() {
  return (
    <header>
      <div class="container">
        <div class="container header-container">
          <h3>Hello I'm</h3>
          <h1>Indiana Lora</h1>
          <h2 className='text-light'>Frontend Developer</h2>
          <Info />
        </div>
      </div>
    </header>
  )
}

export default Header