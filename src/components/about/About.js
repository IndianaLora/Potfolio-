import React from "react";
import "./about.css";
import Me from "../../assest/me.jfif";
import Palm from "../../assest/plamTree.jfif"
import Shine from "../../assest/shine.gif";
function About() {
  return (
    <section>
      <div className="get-to-know-me">
        <h1>Get to know</h1>
        <h2>Me</h2>
      </div>

      <div id="about" className="container about-container">
        <div className="about-me">
          <div className="about-img">
            <img src={Me} alt="Myself" />
          </div>
        </div>
        <div className="about-content">
          <p>
            I'm Frontend Developer living in Dominican Republic 
          </p>
          <img src={Shine} alt="Shine gif" className="shine" />
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
