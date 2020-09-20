import React from 'react';
import MainCanvas from './mainCanvas.js'
import NavBar from './navBar.js';
import './mainPage.css'
import { Row, Col } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.navBar = React.createRef();
        this.state = {
            opacity: 1,
            width: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth / 2 : window.innerWidth / 2,
            navBarHeight: 0.08 * window.innerWidth / 2,
        };
        this.clearAnimation = this.clearAnimation.bind(this);
        this.readMore = this.readMore.bind(this);
        this.resize = this.resize.bind(this);
        this.styles = { width: this.state.width, height: this.state.height }
        window.whichPage = "main";
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
        this.navBar.current.goToSkills();
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
                <div id="mainMain">
                    <Container-fluid>
                        <NavBar ref={this.navBar} height={this.state.navBarHeight} clearAnimation={this.clearAnimation} />
                        <Row>
                            <Col md="6">
                                <MainCanvas styles={this.styles} ref={this.canvas} />
                            </Col>
                            <Col md="6">
                                <div id="introMain">
                                    <div id="titleDivMain">
                                        <h1 id="titleMain" style={{ opacity: this.state.opacity }}>Welcome To My Personal WebSite</h1>
                                    </div>
                                    <div id="textDivMain" style={{ opacity: this.state.opacity }}>
                                        <p id="text" >This is Dariush Hassani's personal web site. Welcome to my home page.</p>
                                        <p id="text" >In this website, you can read about my personal life, my skills and my contact info.</p>
                                    </div>
                                    <div id="buttonDivMain">
                                        <Link to="/skills"><div className="buttonMain" id="button0Main" onClick={this.readMore} style={{ opacity: this.state.opacity }}>Next Page</div></Link>
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

export default MainPage;