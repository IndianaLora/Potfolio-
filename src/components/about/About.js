import React from "react";
import "./about.css";
import Me from "../../assest/me.jfif";
import Palm from "../../assest/plamTree.jfif"
import Shine from "../../assest/shine.gif";
function About() {
  return (
    <section id="about">
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
            I'm Frontend Developer living in Dominican Republic ♥
          </p>
          <img src={Shine} alt="Shine gif" className="shine" />
          <p>
            A creative mind,
            forever learner,
            <br />
            Frontend developer and
            Interface Designer
            <br />
            <br />
            Working constantly to improve my knowledge
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
