import React from "react";
import './styles/AboutSection.css';

class AboutSection extends React.Component {
    render() {
      return (
        <div id="about" className="container-2">
        <section>
            <h1>About</h1>
            <div className="aboutSectionParagraph">
            <p>I am Hadi Oryani, a front-end Developer</p>
            <p> I started programming about a year ago<mark>and I am very interested </mark>  in learning in the field of programming.</p>
            </div>
        </section>
    </div>
      )
    }
}

export default AboutSection;