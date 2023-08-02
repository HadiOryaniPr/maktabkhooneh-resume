import React from "react";
import './styles/introduction.css';
import Snowfall from 'react-snowfall';
import './../index.css';


class introduction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          primaryColor: "#32b7eb"
        };
        this.changeTheme = this.changeTheme.bind(this);
      }
    render() {
        return(
            <div className="container">
                 <Snowfall
                    color={
                        this.state.primaryColor
                    }
                    style={{
                    position: 'fixed',
                    width: '100vw',
                    height: '100vh',
                }}
                />
                <nav className="navbar">
                <a href="#" onClick={this.changeTheme} className="changeThemeBtn">Theme</a>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                        </ul>
                    </nav>
                    <section>
            <h1>Hello, i'm Hadi!</h1>
            <p>Junior Front-End Developer | From Shiraz</p>
        </section>
            <ul className="social-media">
                <li><a target="_blank" href="https://github.com/HadiOryaniPr" className="fab fa-github"></a></li>
                <li><a target="_blank" href="https://twitter.com/hadioryanipr" className="fab fa-twitter"></a></li>
                <li><a target="_blank" href="https://stackoverflow.com/users/16299432/hadioryani" className="fab fa-stack-overflow"></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/hadioryanipr/" className="fab fa-linkedin"></a></li>
                <li><a target="_blank" href="https://www.instagram.com/hadioryanipr" className="fab fa-instagram"></a></li>
                <li><a target="_blank" href="https://dev.to/hadioryanipr" className="fab fa-dev"></a></li>
            </ul>
            </div>
        )
    }
    changeTheme() {
    let rootElement = document.querySelector(":root");
    let myColors = ["#FFBE00", "#E41655", "#FF895D", "#32b7eb"];
    let randomIndex = Math.floor(Math.random() * myColors.length);
    let randomColor = myColors[randomIndex];
    this.setState({ primaryColor: randomColor });
    rootElement.style.setProperty("--primary-color", this.state.primaryColor);
    }  
}

export default introduction;