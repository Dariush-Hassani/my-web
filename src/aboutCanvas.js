<<<<<<< HEAD
import React from 'react';
import './aboutCanvas.css';
import * as THREE from 'three';

class AboutCanvas extends React.Component {
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
        nCamera.position.x = 35;
        nCamera.position.y = 35;
        nCamera.position.z = 35;
        nCamera.lookAt(this.state.scene.position);
        this.setState({ camera: nCamera });

        //Renderer
        this.state.renderer.setSize(this.props.styles.width, this.props.styles.height);
        let nRenderer = this.state.renderer;
        this.setState({ renderer: nRenderer });

        let pl1 = new THREE.PointLight(0xffffff);
        pl1.position.set(20, 10, 30);
        this.state.scene.add(pl1);

        document.getElementById("aboutCanvas").append(this.state.renderer.domElement);
    }
    creatCubeSystemStatic(position, size) {
        let group = new THREE.Group();
        let mainboxGeo1 = new THREE.BoxGeometry(size, size, size);
        let mainBoxMat = new THREE.MeshPhongMaterial({ color: 0xFE3B00, shininess: 200 });
        let mainBox = new THREE.Mesh(mainboxGeo1, mainBoxMat);
        mainBox.position.set(position.x, position.y, position.z);
        group.add(mainBox);

        let pl1 = new THREE.PointLight(0xffffff, 80);
        pl1.position.set(position.x, position.y + size / 2 + 0.1, position.z);
        group.add(pl1);

        let pl2 = new THREE.PointLight(0xffffff, 80);
        pl2.position.set(position.x + size / 2 + 0.1, position.y, position.z);
        group.add(pl2);

        let pl3 = new THREE.PointLight(0xffffff, 80);
        pl3.position.set(position.x, position.y, position.z + size / 2 + 0.1);
        group.add(pl3);

        this.state.scene.add(group);
    }
    creatCubeSystemDynamic(position, size, sep, name) {
        let group = new THREE.Group();
        group.name = name;

        let boxMat = new THREE.MeshPhongMaterial({ color: 0x141414 });
        //y
        let boxGeo1 = new THREE.BoxGeometry(size / 2, 0.1, size / 2);
        let boxMesh1 = new THREE.Mesh(boxGeo1, boxMat);
        let coef = size / 4 + sep;

        boxMesh1.position.set(position.x + coef, position.y + size / 2 + sep, position.z + coef);
        group.add(boxMesh1);

        let boxMesh2 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh2.position.set(position.x - coef, position.y + size / 2 + sep, position.z + coef);
        group.add(boxMesh2);

        let boxMesh3 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh3.position.set(position.x + coef, position.y + size / 2 + sep, position.z - coef);
        group.add(boxMesh3);

        let boxMesh4 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh4.position.set(position.x - coef, position.y + size / 2 + sep, position.z - coef);
        group.add(boxMesh4);

        //z
        let boxGeo2 = new THREE.BoxGeometry(size / 2, size / 2, 0.1);
        let boxMesh5 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh5.position.set(position.x + coef, position.y + coef, position.z + size / 2 + sep);
        group.add(boxMesh5);

        let boxMesh6 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh6.position.set(position.x - coef, position.y + coef, position.z + size / 2 + sep);
        group.add(boxMesh6);

        let boxMesh7 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh7.position.set(position.x + coef, position.y - coef, position.z + size / 2 + sep);
        group.add(boxMesh7);

        let boxMesh8 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh8.position.set(position.x - coef, position.y - coef, position.z + size / 2 + sep);
        group.add(boxMesh8);

        //x
        let boxGeo3 = new THREE.BoxGeometry(0.1, size / 2, size / 2);
        let boxMesh9 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh9.position.set(position.x + size / 2 + sep, position.y + coef, position.z + coef);
        group.add(boxMesh9);

        let boxMesh10 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh10.position.set(position.x + size / 2 + sep, position.y - coef, position.z + coef);
        group.add(boxMesh10);

        let boxMesh11 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh11.position.set(position.x + size / 2 + sep, position.y + coef, position.z - coef);
        group.add(boxMesh11);

        let boxMesh12 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh12.position.set(position.x + size / 2 + sep, position.y - coef, position.z - coef);
        group.add(boxMesh12);

        //-y
        let boxMesh13 = new THREE.Mesh(boxGeo1, boxMat);

        boxMesh13.position.set(position.x + coef, position.y - size / 2 - sep, position.z + coef);
        group.add(boxMesh13);

        let boxMesh14 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh14.position.set(position.x - coef, position.y - size / 2 - sep, position.z + coef);
        group.add(boxMesh14);

        let boxMesh15 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh15.position.set(position.x + coef, position.y - size / 2 - sep, position.z - coef);
        group.add(boxMesh15);

        let boxMesh16 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh16.position.set(position.x - coef, position.y - size / 2 - sep, position.z - coef);
        group.add(boxMesh16);

        //-z
        let boxMesh17 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh17.position.set(position.x + coef, position.y + coef, position.z - size / 2 - sep);
        group.add(boxMesh17);

        let boxMesh18 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh18.position.set(position.x - coef, position.y + coef, position.z - size / 2 - sep);
        group.add(boxMesh18);

        let boxMesh19 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh19.position.set(position.x + coef, position.y - coef, position.z - size / 2 - sep);
        group.add(boxMesh19);

        let boxMesh20 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh20.position.set(position.x - coef, position.y - coef, position.z - size / 2 - sep);
        group.add(boxMesh20);

        //-x
        let boxMesh21 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh21.position.set(position.x - size / 2 - sep, position.y + coef, position.z + coef);
        group.add(boxMesh21);

        let boxMesh22 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh22.position.set(position.x - size / 2 - sep, position.y - coef, position.z + coef);
        group.add(boxMesh22);

        let boxMesh23 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh23.position.set(position.x - size / 2 - sep, position.y + coef, position.z - coef);
        group.add(boxMesh23);

        let boxMesh24 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh24.position.set(position.x - size / 2 - sep, position.y - coef, position.z - coef);
        group.add(boxMesh24);

        this.state.scene.add(group);
    }
    mainAnimation(duration, min, max, position, name, size) {
        let step = ((max - min) / duration) * 20;
        let sep = min;
        let toOut = true;
        this.timer = setInterval(() => {
            this.creatCubeSystemDynamic(position, size, sep, name);
            this.renderThree();
            window.disposeGroup(this.state.scene.getObjectByName(name), true, this.state.scene, this.state.renderer);

            if (toOut)
                sep += step;
            else
                sep -= step;

            if (sep > max)
                toOut = false;
            if (sep < min)
                toOut = true;
        }, 20);
    }
    componentDidMount() {
        this._isMount = true;
        this.drawFirstScene();
        this.creatCubeSystemStatic(new THREE.Vector3(0, 2, 0), 20);
        this.renderThree();
        this.mainAnimation(3000, 0.07, 1, new THREE.Vector3(0, 2, 0), "gp1", 20);

        let steps = parseFloat(document.getElementById("aboutCover").style.width) * 0.005 * 0.75;
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
    
        document.getElementById("aboutCanvas").append(this.state.renderer.domElement);
        this.renderThree();
      }

    render() {
        let marginTop = this.state.height;
        return (
            <div>
                <div id="aboutCanvas" style={{ height: this.state.height, width: this.state.width }}></div>
                <div id="aboutCover" style={{ height: this.state.height, marginTop: -marginTop, width: this.state.dynamicWidth }}></div>
            </div>
        );
    }
}

=======
import React from 'react';
import './aboutCanvas.css';
import * as THREE from 'three';

class AboutCanvas extends React.Component {
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
        nCamera.position.x = 35;
        nCamera.position.y = 35;
        nCamera.position.z = 35;
        nCamera.lookAt(this.state.scene.position);
        this.setState({ camera: nCamera });

        //Renderer
        this.state.renderer.setSize(this.props.styles.width, this.props.styles.height);
        let nRenderer = this.state.renderer;
        this.setState({ renderer: nRenderer });

        let pl1 = new THREE.PointLight(0xffffff);
        pl1.position.set(20, 10, 30);
        this.state.scene.add(pl1);

        document.getElementById("aboutCanvas").append(this.state.renderer.domElement);
    }
    creatCubeSystemStatic(position, size) {
        let group = new THREE.Group();
        let mainboxGeo1 = new THREE.BoxGeometry(size, size, size);
        let mainBoxMat = new THREE.MeshPhongMaterial({ color: 0xFE3B00, shininess: 200 });
        let mainBox = new THREE.Mesh(mainboxGeo1, mainBoxMat);
        mainBox.position.set(position.x, position.y, position.z);
        group.add(mainBox);

        let pl1 = new THREE.PointLight(0xffffff, 80);
        pl1.position.set(position.x, position.y + size / 2 + 0.1, position.z);
        group.add(pl1);

        let pl2 = new THREE.PointLight(0xffffff, 80);
        pl2.position.set(position.x + size / 2 + 0.1, position.y, position.z);
        group.add(pl2);

        let pl3 = new THREE.PointLight(0xffffff, 80);
        pl3.position.set(position.x, position.y, position.z + size / 2 + 0.1);
        group.add(pl3);

        this.state.scene.add(group);
    }
    creatCubeSystemDynamic(position, size, sep, name) {
        let group = new THREE.Group();
        group.name = name;

        let boxMat = new THREE.MeshPhongMaterial({ color: 0x141414 });
        //y
        let boxGeo1 = new THREE.BoxGeometry(size / 2, 0.1, size / 2);
        let boxMesh1 = new THREE.Mesh(boxGeo1, boxMat);
        let coef = size / 4 + sep;

        boxMesh1.position.set(position.x + coef, position.y + size / 2 + sep, position.z + coef);
        group.add(boxMesh1);

        let boxMesh2 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh2.position.set(position.x - coef, position.y + size / 2 + sep, position.z + coef);
        group.add(boxMesh2);

        let boxMesh3 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh3.position.set(position.x + coef, position.y + size / 2 + sep, position.z - coef);
        group.add(boxMesh3);

        let boxMesh4 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh4.position.set(position.x - coef, position.y + size / 2 + sep, position.z - coef);
        group.add(boxMesh4);

        //z
        let boxGeo2 = new THREE.BoxGeometry(size / 2, size / 2, 0.1);
        let boxMesh5 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh5.position.set(position.x + coef, position.y + coef, position.z + size / 2 + sep);
        group.add(boxMesh5);

        let boxMesh6 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh6.position.set(position.x - coef, position.y + coef, position.z + size / 2 + sep);
        group.add(boxMesh6);

        let boxMesh7 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh7.position.set(position.x + coef, position.y - coef, position.z + size / 2 + sep);
        group.add(boxMesh7);

        let boxMesh8 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh8.position.set(position.x - coef, position.y - coef, position.z + size / 2 + sep);
        group.add(boxMesh8);

        //x
        let boxGeo3 = new THREE.BoxGeometry(0.1, size / 2, size / 2);
        let boxMesh9 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh9.position.set(position.x + size / 2 + sep, position.y + coef, position.z + coef);
        group.add(boxMesh9);

        let boxMesh10 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh10.position.set(position.x + size / 2 + sep, position.y - coef, position.z + coef);
        group.add(boxMesh10);

        let boxMesh11 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh11.position.set(position.x + size / 2 + sep, position.y + coef, position.z - coef);
        group.add(boxMesh11);

        let boxMesh12 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh12.position.set(position.x + size / 2 + sep, position.y - coef, position.z - coef);
        group.add(boxMesh12);

        //-y
        let boxMesh13 = new THREE.Mesh(boxGeo1, boxMat);

        boxMesh13.position.set(position.x + coef, position.y - size / 2 - sep, position.z + coef);
        group.add(boxMesh13);

        let boxMesh14 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh14.position.set(position.x - coef, position.y - size / 2 - sep, position.z + coef);
        group.add(boxMesh14);

        let boxMesh15 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh15.position.set(position.x + coef, position.y - size / 2 - sep, position.z - coef);
        group.add(boxMesh15);

        let boxMesh16 = new THREE.Mesh(boxGeo1, boxMat);
        boxMesh16.position.set(position.x - coef, position.y - size / 2 - sep, position.z - coef);
        group.add(boxMesh16);

        //-z
        let boxMesh17 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh17.position.set(position.x + coef, position.y + coef, position.z - size / 2 - sep);
        group.add(boxMesh17);

        let boxMesh18 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh18.position.set(position.x - coef, position.y + coef, position.z - size / 2 - sep);
        group.add(boxMesh18);

        let boxMesh19 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh19.position.set(position.x + coef, position.y - coef, position.z - size / 2 - sep);
        group.add(boxMesh19);

        let boxMesh20 = new THREE.Mesh(boxGeo2, boxMat);
        boxMesh20.position.set(position.x - coef, position.y - coef, position.z - size / 2 - sep);
        group.add(boxMesh20);

        //-x
        let boxMesh21 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh21.position.set(position.x - size / 2 - sep, position.y + coef, position.z + coef);
        group.add(boxMesh21);

        let boxMesh22 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh22.position.set(position.x - size / 2 - sep, position.y - coef, position.z + coef);
        group.add(boxMesh22);

        let boxMesh23 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh23.position.set(position.x - size / 2 - sep, position.y + coef, position.z - coef);
        group.add(boxMesh23);

        let boxMesh24 = new THREE.Mesh(boxGeo3, boxMat);
        boxMesh24.position.set(position.x - size / 2 - sep, position.y - coef, position.z - coef);
        group.add(boxMesh24);

        this.state.scene.add(group);
    }
    mainAnimation(duration, min, max, position, name, size) {
        let step = ((max - min) / duration) * 20;
        let sep = min;
        let toOut = true;
        this.timer = setInterval(() => {
            this.creatCubeSystemDynamic(position, size, sep, name);
            this.renderThree();
            window.disposeGroup(this.state.scene.getObjectByName(name), true, this.state.scene, this.state.renderer);

            if (toOut)
                sep += step;
            else
                sep -= step;

            if (sep > max)
                toOut = false;
            if (sep < min)
                toOut = true;
        }, 20);
    }
    componentDidMount() {
        this._isMount = true;
        this.drawFirstScene();
        this.creatCubeSystemStatic(new THREE.Vector3(0, 2, 0), 20);
        this.renderThree();
        this.mainAnimation(3000, 0.07, 1, new THREE.Vector3(0, 2, 0), "gp1", 20);

        let steps = parseFloat(document.getElementById("aboutCover").style.width) * 0.005 * 0.75;
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
    
        document.getElementById("aboutCanvas").append(this.state.renderer.domElement);
        this.renderThree();
      }

    render() {
        let marginTop = this.state.height;
        return (
            <div>
                <div id="aboutCanvas" style={{ height: this.state.height, width: this.state.width }}></div>
                <div id="aboutCover" style={{ height: this.state.height, marginTop: -marginTop, width: this.state.dynamicWidth }}></div>
            </div>
        );
    }
}

>>>>>>> b58e52fa7460b8445a86bc01e64268ca7d245cbb
export default AboutCanvas;