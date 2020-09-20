import React from 'react';
import ContactCanvas from './contactCanvas.js'
import NavBar from './navBar.js';
import './contact.css'
import { Row, Col } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.navBar = React.createRef();
        this.state = {
            opacity: 1,
            width: window.innerWidth < 768 ? window.innerWidth * 2 / 3 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth * 2 / 3 : window.innerWidth / 2,
            navBarHeight: 0.08 * window.innerWidth / 2
        };
        this.clearAnimation = this.clearAnimation.bind(this);
        this.readMore = this.readMore.bind(this);
        this.resize = this.resize.bind(this);
        this.styles = { width: this.state.width, height: this.state.height }
        window.whichPage = "contact";
    }
    clearAnimation() {
        let timer;
        let step = 1 / 500 * 5;
        timer = setInterval(() => {
            if (this.state.opacity >= 0) {
                let nOpacity = this.state.opacity - step;
                this.setState({ opacity: nOpacity });
            }
            else {
                clearInterval(timer);
            }
        }, 5);
        this.canvas.current.clearAnimation();
    }
    readMore() {
        this.navBar.current.goToHome();
    }
    resize() {
        this.setState({
            width: window.innerWidth < 768 ? window.innerWidth * 2 / 3 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth * 2 / 3 : window.innerWidth / 2,
            navBarHeight: (0.08 * window.innerWidth / 2)
        });
        this.canvas.current.resize(this.state.width, this.state.height);
        this.navBar.current.resize(this.state.navBarHeight);
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }
    render() {
        return (
            <Router>
                <div id="mainContact">
                    <Container-fluid>
                        <NavBar ref={this.navBar} height={this.state.navBarHeight} clearAnimation={this.clearAnimation} />
                        <Row>
                            <Col md="6">
                                <ContactCanvas styles={this.styles} ref={this.canvas} />
                            </Col>
                            <Col md="6">
                                <div id="introContact">
                                    <div id="titleDivContact">
                                        <h1 id="titleContact" style={{ opacity: this.state.opacity }}>Contact</h1>
                                    </div>
                                    <div id="textDivContact" style={{ opacity: this.state.opacity }}>
                                        <p id="textContact">I check my social media every day and you can contact me with:</p>
                                        <p id="textContact"><a href="https://www.instagram.com/dariush.hassani/">Instagram.com/Dariush.Hassani</a></p>
                                        <p id="textContact"><a href="https://twitter.com/___Dariush/">Twitter.com/___Dariush</a></p>
                                        <p id="textContact"><a href="https://www.linkedin.com/in/dariush-hassani-460060187/">Linkedin.com/in/dariush-hassani</a></p>
                                        <p id="textContact"><a href="https://codepen.io/DariushHassani">codepen.io/DariushHassani</a></p>
                                        <p id="textContact"><a href="https://github.com/Dariush-Hassani/">github.com/Dariush-Hassani</a></p>
                                        <p id="textContact">Email: Dariush.Hassani@outlook.com</p>
                                    </div>
                                    <div id="buttonDivContact">
                                        <Link to="/"><div className="buttonContact" id="button0Contact" onClick={this.readMore} style={{ opacity: this.state.opacity }}>Home Page</div></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container-fluid>
                </div>
            </Router>
        );
    }
}

export default Contact;