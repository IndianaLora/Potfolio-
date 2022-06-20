import React from "react";
import "./projects.css";
import LyricsSearcher from "../../assest/LyricsSearcher.png";
import ProductivityManager from "../../assest/ProductivityManager.png";
import Notebook from "../../assest/Notebook.png";
import ResinPage from "../../assest/ResinPage.png";
function Projects() {
  //make sure its responsive
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container portfolio-container">
        <div className="portfolio-project">
          <a>
            <h3 className="project-head">Resin Page</h3>{" "}
            <img src={ResinPage} alt="Resin Page" className="portfoio-img" />
            <p> Lorem</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h3 className="project-head">Notebook</h3>{" "}
            <img src={Notebook} alt="Notebook" />
            <p> Lorem</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h3 className="project-head">ProductivityManager</h3>
            <img src={ProductivityManager} alt="ProductivityManager" />
            <p> Lorem</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h3 className="project-head">Lyrics Searcher</h3>
            <img src={LyricsSearcher} alt="LyricsSearcher" />
            <p> Lorem</p>
          </a>
        </div>
      </div>

    </section>
  );
}

export default Projects;
