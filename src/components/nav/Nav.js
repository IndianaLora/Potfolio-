import React from 'react'
import "./nav.css"
import { FaHome, FaMagic, FaMailBulk, FaIdCardAlt } from 'react-icons/fa';

function Nav() {
  return (

    <div className='nav'>
      <div className="wrapper">
        <a href='#home'><FaHome className='nav-icon'/> Home</a>
        <a href='#about'><FaIdCardAlt className='nav-icon' />About</a>
        <a href='#projects'><FaMagic className='nav-icon' />Projects</a>
        <a href='#contact'><FaMailBulk className='nav-icon'/>Contact</a>
      </div>
    </div >

  )
}

export default Nav