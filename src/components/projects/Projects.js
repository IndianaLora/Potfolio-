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
      <h2>Projects</h2>
      <div className="container portfolio-container">

        <div className="portfolio-project">
          <a>
            <h2 className="project-head">Resin Page</h2>{" "}
            <img src={ResinPage} alt="Resin Page" className="portfoio-img" />
            <p> Click the image to test the project</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h2 className="project-head">Notebook</h2>{" "}
            <img src={Notebook} alt="Notebook" />
            <p>Click the image to test the project</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h2 className="project-head">ProductivityManager</h2>
            <img src={ProductivityManager} alt="ProductivityManager" />
            <p>Click the image to test the project</p>
          </a>
        </div>
        <div className="portfolio-project">
          <a>
            <h2 className="project-head">Lyrics Searcher</h2>
            <img src={LyricsSearcher} alt="LyricsSearcher" />
            <p>Click the image to test the projec2</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
