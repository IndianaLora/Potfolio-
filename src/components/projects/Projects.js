import React from 'react'
import "./projects.css"
import LyricsSearcher from "../../assest/LyricsSearcher.png"
import ProductivityManager from "../../assest/ProductivityManager.png"
import Notebook from "../../assest/Notebook.png"
import ResinPage from "../../assest/ResinPage.png"
function Projects() {
  //make sure its responsive
  return (
    <section className='projects'>
      <div id="projects">
        <h1>Projects</h1>
        <div className='projects-container'>
          <div className='project'>Hey <img src={ResinPage} alt='Resin Page' /></div>
          <div className='project'>Hey <img src={Notebook} alt='Notebook' /></div>
          <div className='project'>Hey <img src={ProductivityManager} alt='ProductivityManager' /></div>
          <div className='project'>Hey <img src={LyricsSearcher} alt='LyricsSearcher' /></div>
        </div>
      </div>
    </section>

  )
}

export default Projects