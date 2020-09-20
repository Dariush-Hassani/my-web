<<<<<<< HEAD
import React from 'react';
import AboutCanvas from './aboutCanvas.js'
import NavBar from './navBar.js';
import './about.css'
import { Row, Col } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.navBar = React.createRef();
        this.state = {
            opacity: 1,
            width: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            navBarHeight: 0.08 * window.innerWidth / 2
        };
        this.clearAnimation = this.clearAnimation.bind(this);
        this.readMore = this.readMore.bind(this);
        this.resize = this.resize.bind(this);
        this.styles = { width: this.state.width, height: this.state.height }
        window.whichPage = "about";
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
        this.navBar.current.goToContact();
    }
    resize() {
        this.setState({
            width: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
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
                <div id="main">
                    <Container-fluid>
                        <NavBar ref={this.navBar} height={this.state.navBarHeight} clearAnimation={this.clearAnimation} />
                        <Row>
                            <Col md="6">
                                <AboutCanvas styles={this.styles} ref={this.canvas} />
                            </Col>
                            <Col md="6">
                                <div id="intro">
                                    <div id="titleDiv">
                                        <h1 id="title" style={{ opacity: this.state.opacity }}>About Me</h1>
                                    </div>
                                    <div id="textDiv" style={{ opacity: this.state.opacity }}>
                                        <p id="text">I was born in March 18, 1995. I studied math and physics at high school, computational Physics at science and research branch of Azad university. When I was 14 I started programming using QBasic. In university I learned scientific programming using C++ and MPI. I designed a parallel algorithm for Monte Carlo simulation of Ising model. The result of our project was published in journal of theoretical and applied physics.</p>
                                        <p id="text">After university I started my job in Tyam company as a .Net developer where I worked on TyamERP software. Gradually I changed my field to graphics programming.</p>
                                    </div>
                                    <div id="buttonDiv">
                                        <Link to="/contact"><div className="button" id="button0" onClick={this.readMore} style={{ opacity: this.state.opacity }}>Next Page</div></Link>
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

=======
import React from 'react';
import AboutCanvas from './aboutCanvas.js'
import NavBar from './navBar.js';
import './about.css'
import { Row, Col } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.navBar = React.createRef();
        this.state = {
            opacity: 1,
            width: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            navBarHeight: 0.08 * window.innerWidth / 2
        };
        this.clearAnimation = this.clearAnimation.bind(this);
        this.readMore = this.readMore.bind(this);
        this.resize = this.resize.bind(this);
        this.styles = { width: this.state.width, height: this.state.height }
        window.whichPage = "about";
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
        this.navBar.current.goToContact();
    }
    resize() {
        this.setState({
            width: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
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
                <div id="main">
                    <Container-fluid>
                        <NavBar ref={this.navBar} height={this.state.navBarHeight} clearAnimation={this.clearAnimation} />
                        <Row>
                            <Col md="6">
                                <AboutCanvas styles={this.styles} ref={this.canvas} />
                            </Col>
                            <Col md="6">
                                <div id="intro">
                                    <div id="titleDiv">
                                        <h1 id="title" style={{ opacity: this.state.opacity }}>About Me</h1>
                                    </div>
                                    <div id="textDiv" style={{ opacity: this.state.opacity }}>
                                        <p id="text">I was born in March 18, 1995. I studied math and physics at high school, computational Physics at science and research branch of Azad university. When I was 14 I started programming using QBasic. In university I learned scientific programming using C++ and MPI. I designed a parallel algorithm for Monte Carlo simulation of Ising model. The result of our project was published in journal of theoretical and applied physics.</p>
                                        <p id="text">After university I started my job in Tyam company as a .Net developer where I worked on TyamERP software. Gradually I changed my field to graphics programming.</p>
                                    </div>
                                    <div id="buttonDiv">
                                        <Link to="/contact"><div className="button" id="button0" onClick={this.readMore} style={{ opacity: this.state.opacity }}>Next Page</div></Link>
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

>>>>>>> b58e52fa7460b8445a86bc01e64268ca7d245cbb
export default About;