import React from 'react';
import './mainCanvas.css';
import * as THREE from 'three';
import { Vector3 } from 'three';

class MainCanvas extends React.Component {
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
    // let axes = new THREE.AxisHelper(20);
    // this.state.scene.add(axes);

    //Camera
    let nCamera = this.state.camera;
    nCamera.position.x = 40;
    nCamera.position.y = -25;
    nCamera.position.z = 50;
    nCamera.lookAt(this.state.scene.position);
    this.setState({ camera: nCamera });

    //Light
    let spotLight2 = new THREE.SpotLight(0xffffff, 0.8);
    spotLight2.position.set(0, -5, 50);
    spotLight2.target = new THREE.Object3D();
    this.state.scene.add(spotLight2);

    let spotLight = new THREE.SpotLight(0xffffff, 0.8);
    spotLight.position.set(40, -5, 0);
    spotLight.target = new THREE.Object3D();
    this.state.scene.add(spotLight);

    //Renderer
    this.state.renderer.setSize(this.state.width, this.state.height);
    let nRenderer = this.state.renderer;
    this.setState({ renderer: nRenderer });

    document.getElementById("mainCanvas").append(this.state.renderer.domElement);
    this.renderThree();
  }
  creatCubeSystem(position, size, color1, color2) {
    let boxGeo = new THREE.BoxGeometry(size, size, size);

    let pos = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
          pos.push(new THREE.Vector3(i * size + position.x - size, j * size + position.y - size, k * size + position.z - size));
        }
      }
    }

    let sepration = 0.3 * size;
    for (let i = 0; i < 27; i++) {

      if (pos[i].x > position.x)
        pos[i].x += sepration;
      if (pos[i].x < position.x)
        pos[i].x -= sepration;

      if (pos[i].y > position.y)
        pos[i].y += sepration;
      if (pos[i].y < position.y)
        pos[i].y -= sepration;

      if (pos[i].z > position.z)
        pos[i].z += sepration;
      if (pos[i].z < position.z)
        pos[i].z -= sepration;
    }

    let boxMat;
    for (let i = 0; i < 27; i++) {
      if (i % 2 === 0)
        boxMat = new THREE.MeshPhongMaterial({ color: color1, shininess: 50 });
      else
        boxMat = new THREE.MeshPhongMaterial({ color: color2, shininess: 20 });

      let box = new THREE.Mesh(boxGeo, boxMat);
      // console.log(pos[i].x + "," + pos[i].y + "," + pos[i].z);
      box.position.set(pos[i].x, pos[i].y, pos[i].z);
      this.state.scene.add(box);
    }

    //animation
    let minDuration = 50;
    let maxDuration = 100;
    let durationX = [];
    for (let i = 0; i < 9; i++) {
      let rand = Math.random() * maxDuration;
      if (rand < minDuration)
        rand += (maxDuration - minDuration);
      durationX.push(rand);
    }

    let durationZ = [];
    for (let i = 0; i < 9; i++) {
      let rand = Math.random() * maxDuration;
      if (rand < minDuration)
        rand += (maxDuration - minDuration);
      durationZ.push(rand);
    }

    let xChilds = this.state.scene.children.filter(cube => cube.type === "Mesh" && cube.position.x > position.x);
    let zChilds = this.state.scene.children.filter(cube => cube.type === "Mesh" && cube.position.z > position.z);

    let xChildsInitialPos = [];
    for (let i = 0; i < 9; i++)
      xChildsInitialPos.push(new THREE.Vector3(xChilds[i].position.x, xChilds[i].position.y, xChilds[i].position.z));

    let zChildsInitialPos = [];
    for (let i = 0; i < 9; i++)
      zChildsInitialPos.push(new THREE.Vector3(zChilds[i].position.x, zChilds[i].position.y, zChilds[i].position.z));

    let xChildsFinalPos = [];
    for (let i = 0; i < 9; i++)
      xChildsFinalPos.push(new THREE.Vector3(xChildsInitialPos[i].x + Math.random() * 2.5, xChildsInitialPos[i].y, xChildsInitialPos[i].z));

    let zChildsFinalPos = [];
    for (let i = 0; i < 9; i++)
      zChildsFinalPos.push(new THREE.Vector3(zChildsInitialPos[i].x, zChildsInitialPos[i].y, zChildsInitialPos[i].z + Math.random() * 2.5));

    let xChildsFlagToOut = [];
    for (let i = 0; i < 9; i++)
      xChildsFlagToOut.push(true);

    let zChildsFlagToOut = [];
    for (let i = 0; i < 9; i++)
      zChildsFlagToOut.push(true);

    let xChildsSteps = [];
    for (let i = 0; i < 9; i++)
      xChildsSteps.push((xChildsFinalPos[i].x - xChildsInitialPos[i].x) / durationX[i]);

    let zChildsSteps = [];
    for (let i = 0; i < 9; i++)
      zChildsSteps.push((zChildsFinalPos[i].z - zChildsInitialPos[i].z) / durationZ[i]);

    setTimeout(() => {
      this.timer = setInterval(() => {
        //set Flags
        for (let i = 0; i < 9; i++) {
          if (xChilds[i].position.x >= xChildsFinalPos[i].x)
            xChildsFlagToOut[i] = false;
          else if (xChilds[i].position.x <= xChildsInitialPos[i].x)
            xChildsFlagToOut[i] = true;

          if (zChilds[i].position.z >= zChildsFinalPos[i].z)
            zChildsFlagToOut[i] = false;
          else if (zChilds[i].position.z <= zChildsInitialPos[i].z)
            zChildsFlagToOut[i] = true;
        }

        //Move Cubes
        for (let i = 0; i < 9; i++) {
          if (xChildsFlagToOut[i])
            xChilds[i].position.x += xChildsSteps[i];
          else
            xChilds[i].position.x -= xChildsSteps[i];

          if (zChildsFlagToOut[i])
            zChilds[i].position.z += zChildsSteps[i];
          else
            zChilds[i].position.z -= zChildsSteps[i];
        }

        this.renderThree();

      }, 40);
    }, 1000);
  }
  componentDidMount() {
    this._isMount = true;
    this.drawFirstScene();
    this.creatCubeSystem(new Vector3(0, -2, 0), 7, 0xFE3B00, 0x0f0f0f);
    this.renderThree();

    let steps = parseFloat(document.getElementById("cover").style.width) * 0.005 * 0.75;
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

    document.getElementById("mainCanvas").append(this.state.renderer.domElement);
    this.renderThree();
  }

  render() {
    let marginTop = this.state.height;
    return (
      <div>
        <div id="mainCanvas" style={{ height: this.state.height, width: this.state.width }}></div>
        <div id="cover" style={{ height: this.state.height, marginTop: -marginTop, width: this.state.dynamicWidth }}></div>
      </div>
    );
  }
}

export default MainCanvas;