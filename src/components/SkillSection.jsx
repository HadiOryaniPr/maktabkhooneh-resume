import React from "react";
import './styles/SkillSection.css';

class SkillSection extends React.Component {
  render() {
    return (
      <div id="portfolio" className="container-3">
        <section>
          <h1>Portfolio</h1>
          <div className="skill-section-container">
            <i className="fab fa-html5 skill-icon"></i>
            <i className="fab fa-css3-alt skill-icon"></i>
            <i className="fab fa-bootstrap skill-icon"></i>
            <i className="fab fa-js skill-icon"></i>
            <i className="fab fa-git-alt skill-icon"></i>
            <i className="fab fa-sass skill-icon"></i>
          </div>
        </section>
      </div>
    );
  }
}

export default SkillSection;
