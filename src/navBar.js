import React from 'react';
import ReactDOM from 'react-dom';
import './navBar.css';
import logo from './Logo.png';
import instaLogo from './instagram.png';
import dribbbleLogo from './dribbble.png';
import Skills from './skills.js';
import MainPage from './mainPage.js';
import About from './about.js';
import Contact from './contact.js';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.goToSkills = this.goToSkills.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToAbout = this.goToAbout.bind(this);
        this.goToContact = this.goToContact.bind(this);
        this.state = {
            marginTop: 0,
            height: this.props.height,
        }
    }
    resize(Height) {
        this.setState({ height: Height });
    }
    selfClear() {
        let timer;
        let height = this.state.height;
        let step = height * 0.005 * 2;
        timer = setInterval(() => {
            let nState = this.state.marginTop + step;
            if (nState < 1.3 * height)
                this.setState({ marginTop: nState });
            else
                clearInterval(timer);
        }, 5);
    }
    clear() {
        this.selfClear();
        this.props.clearAnimation();
    }
    goToSkills() {
        if (window.whichPage === "skills")
            return;
        this.clear();
        setTimeout(() => {
            ReactDOM.render(<Skills />, document.getElementById("root"));
        }, 2000);
    }
    goToHome() {
        if (window.whichPage === "main")
            return;
        this.clear();
        setTimeout(() => {
            ReactDOM.render(<MainPage />, document.getElementById("root"));
        }, 2000);
    }
    goToAbout() {
        if (window.whichPage === "about")
            return;
        this.clear();
        setTimeout(() => {
            ReactDOM.render(<About />, document.getElementById("root"));
        }, 2000);
    }
    goToContact() {
        if (window.whichPage === "contact")
            return;
        this.clear();
        setTimeout(() => {
            ReactDOM.render(<Contact />, document.getElementById("root"));
        }, 2000);
    }
    render() {
        return (
            <Router>
                <div id="navBarDiv">
                    <div id="navBar" style={{ height: this.state.height, marginTop: -this.state.marginTop }}>
                        <div id="logo">
                            <img alt="Logo" className="img" src={logo} />
                        </div>
                        <div id="name" onClick={this.goToHome}><Link to="/">DariushHassani</Link></div>
                        <div className="navBarItem"></div>
                        <div className="navBarItem" onClick={this.goToSkills}><Link to="/skills">Skills</Link></div>
                        <div className="navBarItem" onClick={this.goToAbout}><Link to="/about">About</Link></div>
                        <div className="navBarItem" onClick={this.goToContact}><Link to="/contact">Contact</Link></div>
                        <div className="navBarItem"></div>
                        <div id="instaLogo">
                            <a href="https://www.instagram.com/dariush.hassani/"><img alt="instagramLogo" className="img" src={instaLogo} /></a>
                        </div>
                        <div id="dribbbleLogo">
                            <a href="https://dribbble.com/DariushHassani"><img alt="dribbbleLogo" className="img" src={dribbbleLogo} /></a>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default NavBar;

