import React from 'react';
import SkillCanvas from './skillsCanvas.js'
import NavBar from './navBar.js';
import './skills.css'
import { Row, Col } from 'reactstrap';
import { Link, BrowserRouter as Router } from 'react-router-dom'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.navBar = React.createRef();
        this.state = {
            opacity: 1,
            width: window.innerWidth < 768 ? window.innerWidth * 3 / 4 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth * 3 / 4 : window.innerWidth / 2,
            navBarHeight: 0.08 * window.innerWidth / 2
        };
        this.clearAnimation = this.clearAnimation.bind(this);
        this.readMore = this.readMore.bind(this);
        this.resize = this.resize.bind(this);
        this.styles = { width: this.state.width, height: this.state.height }
        window.whichPage = "skills";
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
        this.navBar.current.goToAbout();
    }
    resize() {
        this.setState({
            width: window.innerWidth < 768 ? window.innerWidth * 3 / 4 : window.innerWidth / 2,
            height: window.innerWidth < 768 ? window.innerWidth * 3 / 4 : window.innerWidth / 2,
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
                <div id="mainSkills">
                    <Container-fluid>
                        <NavBar ref={this.navBar} height={this.state.navBarHeight} clearAnimation={this.clearAnimation} />
                        <Row>
                            <Col md="6">
                                <SkillCanvas styles={this.styles} ref={this.canvas} />
                            </Col>
                            <Col md="6">
                                <div id="introSkills">
                                    <div id="titleDivSkills">
                                        <h1 id="titleSkills" style={{ opacity: this.state.opacity }}>My Skills</h1>
                                    </div>
                                    <div id="textDivSkills" style={{ opacity: this.state.opacity }}>
                                        <p id ="textSkills">I am a front-end and graphic developer. I develop 3D web sites and applications.</p>
                                        <p id ="textSkills">I make use of ReactJs to develop front-end of web sites and applications. I am skilled in WebGL and its most famous library Threejs in order to design 3D visual artifacts.</p>
                                    </div>
                                    <div id="buttonDivSkills">
                                        <Link to="/about"><div className="buttonSkills" id="button0Skills" onClick={this.readMore} style={{ opacity: this.state.opacity }}>Next Page</div></Link>
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

export default Skills;
