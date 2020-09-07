import React from 'react';
import './contactCanvas.css';
import * as THREE from 'three';

class ContactCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dynamicWidth: this.props.styles.width,
            width: this.props.styles.width,
            height: this.props.styles.height,
            scene: new THREE.Scene(),
            camera: new THREE.PerspectiveCamera(45
                , this.props.styles.width / this.props.styles.height
                , 0.1, 1000),
            renderer: new THREE.WebGLRenderer({ antialias: true }),
        };
        this.state.renderer.setClearColor(0x141414);
        this._isMount = false;
        this.resize = this.resize.bind(this);
    }

    renderThree() {
        this.state.renderer.render(this.state.scene, this.state.camera);
    }
    drawFirstScene() {
        // let axes = new THREE.AxesHelper(20);
        // this.state.scene.add(axes);

        //Camera
        let nCamera = this.state.camera;
        nCamera.position.x = -30;
        nCamera.position.y = 10;
        nCamera.position.z = 50;
        nCamera.lookAt(this.state.scene.position);
        this.setState({ camera: nCamera });

        //Renderer
        this.state.renderer.setSize(this.props.styles.width, this.props.styles.height);
        let nRenderer = this.state.renderer;
        this.setState({ renderer: nRenderer });

        let pl1 = new THREE.PointLight(0xFE3B00);
        pl1.position.set(20, 10, 30);
        this.state.scene.add(pl1);

        document.getElementById("contactCanvas").append(this.state.renderer.domElement);
        this.renderThree();
    }
    createFont() {
        let loader = new THREE.FontLoader();
        loader.load("https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json", font => {
            let Geo = new THREE.TextGeometry("CONTACT ME", {
                font: font,
                size: 5,
                height: 1.5,
                curveSegments: 5,
                bevelEnabled: false
            });
            let Mat = new THREE.MeshLambertMaterial(
                { color: 0xffffff }
            );
            let Mesh = new THREE.Mesh(Geo, Mat);
            Mesh.position.set(-18, 0, 0);
            this.state.scene.add(Mesh);
            this.renderThree();
        });
    }
    componentDidMount() {
        this._isMount = true;
        this.drawFirstScene();
        this.createFont();
        this.renderThree();

        let steps = parseFloat(document.getElementById("contactCover").style.width) * 0.005 * 0.75;
        let timer;
        timer = setInterval(() => {
            if (this.state.dynamicWidth > 0) {
                let nwidth = this.state.dynamicWidth - steps;
                this.setState({ dynamicWidth: nwidth });
            }
            else {
                clearInterval(timer);
            }
        }, 5);

        let timer2;
        timer2 = setInterval(() => {
            if (!this._isMount) {
                window.disposeScene(this.state.scene, this.state.renderer);
                clearInterval(timer2);
            }
        }, 10);
    }
    componentWillUnmount() {
        this._isMount = false;
        clearInterval(this.timer);
    }
    clearAnimation() {
        let maxWidth = this.state.width;
        let steps = maxWidth * 0.005 * 2;
        let timer;
        timer = setInterval(() => {
            if (this.state.dynamicWidth < maxWidth) {
                let nwidth = this.state.dynamicWidth + steps;
                this.setState({ dynamicWidth: nwidth });
            }
            else {
                clearInterval(timer);
            }
        }, 5);
    }

    resize(Width, Height) {
        this.setState({ width: Width, height: Height });
        this.state.renderer.setSize(this.state.width, this.state.height);
        let nRenderer = this.state.renderer;
        this.setState({ renderer: nRenderer });

        document.getElementById("contactCanvas").append(this.state.renderer.domElement);
        this.renderThree();
    }

    render() {
        let marginTop = this.state.height;
        return (
            <div>
                <div id="contactCanvas" style={{ height: this.state.height, width: this.state.width }}></div>
                <div id="contactCover" style={{ height: this.state.height, marginTop: -marginTop, width: this.state.dynamicWidth }}></div>
            </div>
        );
    }
}

export default ContactCanvas;