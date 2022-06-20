import React from 'react'
import "./home.css"
import Info from './Info'
import Arrow from './Arrow'
function Header() {
  return (
    <section>
      <header>
        <div class="container" id="home">
          <div class="container header-container">
            <h3>Hello I'm</h3>
            <h1>Indiana Lora</h1>
            <h2 className='text-light'>Frontend Developer</h2>
            <Info />
            <Arrow />
          </div>
        </div>
      </header>
    </section>

  )
}

export default Header