import React from 'react'
import "./nav.css"
import { FaHome, FaMagic, FaMailBulk, FaIdCardAlt } from 'react-icons/fa';

function Nav() {
  return (

    <div className='nav'>
      <div className="wrapper">
        <a href='#home'><FaHome /> Home</a>
        <a href='#about'><FaIdCardAlt />About</a>
        <a href='#projects'><FaMagic />Projects</a>
        <a href='#contact'><FaMailBulk />Contact</a>
      </div>
    </div >

  )
}

export default Nav