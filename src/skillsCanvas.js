import React from 'react';
import './skillsCanvas.css';
import * as THREE from 'three';
import { PointLight } from 'three';

class SkillsCanvas extends React.Component {
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
        nCamera.position.x = 0;
        nCamera.position.y = 43;
        nCamera.position.z = -70;
        nCamera.lookAt(this.state.scene.position);
        this.setState({ camera: nCamera });

        //Renderer
        this.state.renderer.setSize(this.props.styles.width, this.props.styles.height);
        let nRenderer = this.state.renderer;
        this.setState({ renderer: nRenderer });

        let pl1 = new THREE.PointLight(0xffffff, 1, 30);
        pl1.position.set(0, 0, 0);
        this.state.scene.add(pl1);

        document.getElementById("skillsCanvas").append(this.state.renderer.domElement);
    }

    creatCubeSystem(position, size, number, name, sep, color1, color2) {
        let boxGeo = new THREE.BoxGeometry(size, size, size);
        let group = new THREE.Group();
        group.name = name;

        let pos = [];
        let sepration = sep * size;
        for (let i = 0; i < number; i++) {
            for (let j = 0; j < number; j++) {
                for (let k = 0; k < number; k++) {
                    pos.push(new THREE.Vector3((i * size) + (i * sepration) - (number / 2 * size), j * size + (j * sepration) + (1 / 2 * size), k * size + (k * sepration) - (number / 2 * size)));
                }
            }
        }

        let boxMat = new THREE.MeshPhongMaterial({ color: color1, shininess: 20 });
        for (let i = 0; i < Math.pow(number, 3); i++) {
            let box = new THREE.Mesh(boxGeo, boxMat);
            // console.log(pos[i].x + "," + pos[i].y + "," + pos[i].z);
            box.position.set(pos[i].x, pos[i].y, pos[i].z);
            group.add(box);
        }

        //border
        let points = [];
        let coef = (number / 2) * size + (number / 2) * sepration;
        let y = 0;
        points.push(new THREE.Vector3(coef, y, coef));
        points.push(new THREE.Vector3(-coef, y, coef));
        points.push(new THREE.Vector3(-coef, y, -coef));
        points.push(new THREE.Vector3(coef, y, -coef));
        points.push(new THREE.Vector3(coef, y, coef));

        let lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        let lineMat = new THREE.LineBasicMaterial({ color: color2 });
        let line = new THREE.Line(lineGeo, lineMat);
        group.add(line);

        let line2 = line.clone();
        line2.scale.set(1.1, 1, 1.1);
        group.add(line2);

        let line3 = line.clone();
        line3.scale.set(1.2, 1, 1.2);
        group.add(line3);

        //light 
        let pl2 = new THREE.PointLight(0xffffff);
        pl2.distance = size * 8;
        pl2.position.set(size * 5, size * 8, -size * 6);
        group.add(pl2);

        let pl3 = new THREE.PointLight(0xffffff);
        pl3.distance = size * 20;
        pl3.position.set(size * 4, size * 8, -size * 4);
        group.add(pl3);

        // group.position.set(position.x,position.y,position.z);
        group.translateX(position.x);
        group.translateY(position.y);
        group.translateZ(position.z);

        this.state.scene.add(group);
    }

    cubeBorderAnimations(position, size, number, sep, color, finalScale) {
        //creating Geometries
        let points0 = [];
        let coef0 = (number[0] / 2) * size[0] + (number[0] / 2) * sep[0];
        let y0 = 0;
        points0.push(new THREE.Vector3(coef0, y0, coef0));
        points0.push(new THREE.Vector3(-coef0, y0, coef0));
        points0.push(new THREE.Vector3(-coef0, y0, -coef0));
        points0.push(new THREE.Vector3(coef0, y0, -coef0));
        points0.push(new THREE.Vector3(coef0, y0, coef0));
        let lineGeo0 = new THREE.BufferGeometry().setFromPoints(points0);

        let points1 = [];
        let coef1 = (number[1] / 2) * size[1] + (number[1] / 2) * sep[1];
        points1.push(new THREE.Vector3(coef1, y0, coef1));
        points1.push(new THREE.Vector3(-coef1, y0, coef1));
        points1.push(new THREE.Vector3(-coef1, y0, -coef1));
        points1.push(new THREE.Vector3(coef1, y0, -coef1));
        points1.push(new THREE.Vector3(coef1, y0, coef1));
        let lineGeo1 = new THREE.BufferGeometry().setFromPoints(points1);

        let points2 = [];
        let coef2 = (number[2] / 2) * size[2] + (number[2] / 2) * sep[2];
        points2.push(new THREE.Vector3(coef2, y0, coef2));
        points2.push(new THREE.Vector3(-coef2, y0, coef2));
        points2.push(new THREE.Vector3(-coef2, y0, -coef2));
        points2.push(new THREE.Vector3(coef2, y0, -coef2));
        points2.push(new THREE.Vector3(coef2, y0, coef2));
        let lineGeo2 = new THREE.BufferGeometry().setFromPoints(points2);

        let points3 = [];
        let coef3 = (number[3] / 2) * size[3] + (number[3] / 2) * sep[3];
        points3.push(new THREE.Vector3(coef3, y0, coef3));
        points3.push(new THREE.Vector3(-coef3, y0, coef3));
        points3.push(new THREE.Vector3(-coef3, y0, -coef3));
        points3.push(new THREE.Vector3(coef3, y0, -coef3));
        points3.push(new THREE.Vector3(coef3, y0, coef3));
        let lineGeo3 = new THREE.BufferGeometry().setFromPoints(points3);

        let points4 = [];
        let coef4 = (number[4] / 2) * size[4] + (number[4] / 2) * sep[4];
        points4.push(new THREE.Vector3(coef4, y0, coef4));
        points4.push(new THREE.Vector3(-coef4, y0, coef4));
        points4.push(new THREE.Vector3(-coef4, y0, -coef4));
        points4.push(new THREE.Vector3(coef4, y0, -coef4));
        points4.push(new THREE.Vector3(coef4, y0, coef4));
        let lineGeo4 = new THREE.BufferGeometry().setFromPoints(points4);

        let duration = 2;
        let steps = duration * 1000 / 40;

        let opac0 = 1;
        let opac1 = 1;
        let opac2 = 1;
        let opac3 = 1;
        let opac4 = 1;
        let scale0 = 1.4;
        let scale1 = 1.4;
        let scale2 = 1.4;
        let scale3 = 1.4;
        let scale4 = 1.4;
        let stepScale0 = (finalScale[0] - 1.4) / steps;
        let stepScale1 = (finalScale[1] - 1.4) / steps;
        let stepScale2 = (finalScale[2] - 1.4) / steps;
        let stepScale3 = (finalScale[3] - 1.4) / steps;
        let stepScale4 = (finalScale[4] - 1.4) / steps;
        this.timerBordr = setInterval(() => {
            opac0 -= 1 / steps;
            opac1 -= 1 / steps;
            opac2 -= 1 / steps;
            opac3 -= 1 / steps;
            opac4 -= 1 / steps;
            scale0 += stepScale0;
            scale1 += stepScale1;
            scale2 += stepScale2;
            scale3 += stepScale3;
            scale4 += stepScale4;

            let lineMat0 = new THREE.LineBasicMaterial({ color: color[0], transparent: true, opacity: opac0 });
            let line0 = new THREE.Line(lineGeo0, lineMat0);
            line0.name = "line0";
            line0.scale.set(scale0, 1, scale0);
            line0.translateX(position[0].x);
            line0.translateY(position[0].y);
            line0.translateZ(position[0].z);
            this.state.scene.add(line0);

            let lineMat1 = new THREE.LineBasicMaterial({ color: color[1], transparent: true, opacity: opac1 });
            let line1 = new THREE.Line(lineGeo1, lineMat1);
            line1.name = "line1";
            line1.scale.set(scale1, 1, scale1);
            line1.translateX(position[1].x);
            line1.translateY(position[1].y);
            line1.translateZ(position[1].z);
            this.state.scene.add(line1);

            let lineMat2 = new THREE.LineBasicMaterial({ color: color[2], transparent: true, opacity: opac2 });
            let line2 = new THREE.Line(lineGeo2, lineMat2);
            line2.name = "line2";
            line2.scale.set(scale2, 1, scale2);
            line2.translateX(position[2].x);
            line2.translateY(position[2].y);
            line2.translateZ(position[2].z);
            this.state.scene.add(line2);

            let lineMat3 = new THREE.LineBasicMaterial({ color: color[3], transparent: true, opacity: opac3 });
            let line3 = new THREE.Line(lineGeo3, lineMat3);
            line3.name = "line3";
            line3.scale.set(scale3, 1, scale3);
            line3.translateX(position[3].x);
            line3.translateY(position[3].y);
            line3.translateZ(position[3].z);
            this.state.scene.add(line3);

            let lineMat4 = new THREE.LineBasicMaterial({ color: color[4], transparent: true, opacity: opac4 });
            let line4 = new THREE.Line(lineGeo4, lineMat4);
            line4.name = "line4";
            line4.scale.set(scale4, 1, scale4);
            line4.translateX(position[4].x);
            line4.translateY(position[4].y);
            line4.translateZ(position[4].z);
            this.state.scene.add(line4);

            this.renderThree();

            this.state.scene.remove(this.state.scene.getObjectByName("line0"));
            this.state.scene.remove(this.state.scene.getObjectByName("line1"));
            this.state.scene.remove(this.state.scene.getObjectByName("line2"));
            this.state.scene.remove(this.state.scene.getObjectByName("line3"));
            this.state.scene.remove(this.state.scene.getObjectByName("line4"));

            if (opac0 <= -0.5) {
                opac0 = 1;
                scale0 = 1.4;
            }
            if (opac1 <= -0.5) {
                opac1 = 1;
                scale1 = 1.4;
            }
            if (opac2 <= -0.5) {
                opac2 = 1;
                scale2 = 1.4;
            }
            if (opac3 <= -0.5) {
                opac3 = 1;
                scale3 = 1.4;
            }
            if (opac4 <= -0.5) {
                opac4 = 1;
                scale4 = 1.4;
            }
        }, 40);
    }

    cubeRotateAnimation(position, size, number, sep, name, timer, duration, delay) {
        let group = this.state.scene.getObjectByName(name);
        let gps = [];
        let initialY = size / 2;
        for (let i = 1; i < number; i++) {
            let x = (group.children.filter(j => (j.position.y >= initialY + (i * size + i * sep) - size / 2) && (j.position.y <= initialY + (i * size + i * sep) + size / 2) && (j.type === "Mesh")));
            let gp = new THREE.Group();
            for (let j = 0; j < x.length; j++)
                gp.add(x[j]);
            gp.translateX(position.x);
            gp.translateY(position.y);
            gp.translateZ(position.z);
            gps.push(gp);
        }
        for (let i = 0; i < gps.length; i++)
            this.state.scene.add(gps[i]);

        let steps = 180 / duration * 1 / 25 * Math.PI / 180;
        let step1 = 0;
        let step2 = 0;
        setTimeout(() => {
            timer = setInterval(() => {
                for (let i = 0; i < gps.length; i++) {
                    if (i % 2 === 0) {
                        step1 += steps;
                        gps[i].rotation.y = step1;
                    }
                    else {
                        step2 -= steps;
                        gps[i].rotation.y = step2;
                    }
                }
            }, 40);
        }, delay);
    }

    createDashLines(positions, sizes, numbers, seps) {
        //First Line
        let fp = new THREE.Vector3(positions[0].x, positions[0].y, positions[0].z);
        let sp = new THREE.Vector3(positions[0].x, positions[1].y, positions[0].z);
        let tp = new THREE.Vector3(positions[1].x, positions[1].y, positions[1].z);
        let points = [fp, sp, tp];
        let lineGeo = new THREE.BufferGeometry().setFromPoints(points);
        let lineMat = new THREE.LineBasicMaterial({ color: 0xffffff });
        let line = new THREE.Line(lineGeo, lineMat);
        this.state.scene.add(line);

        //Second Line
        let fp1 = new THREE.Vector3(positions[0].x, positions[2].y, positions[0].z);
        let sp1 = new THREE.Vector3(positions[2].x, positions[2].y, positions[2].z);
        let points1 = [fp1, sp1];
        let lineGeo1 = new THREE.BufferGeometry().setFromPoints(points1);
        let line1 = new THREE.Line(lineGeo1, lineMat);
        this.state.scene.add(line1);

        //Third Line
        let fp2 = new THREE.Vector3(positions[2].x, positions[2].y, positions[2].z);
        let sp2 = new THREE.Vector3(positions[2].x, positions[4].y, positions[2].z);
        let tp2 = new THREE.Vector3(positions[4].x, positions[4].y, positions[4].z);
        let points2 = [fp2, sp2, tp2];
        let lineGeo2 = new THREE.BufferGeometry().setFromPoints(points2);
        let line2 = new THREE.Line(lineGeo2, lineMat);
        this.state.scene.add(line2);

        //Forth Line
        let fp3 = new THREE.Vector3(positions[1].x, positions[1].y, positions[1].z);
        let sp3 = new THREE.Vector3(positions[1].x, positions[3].y, positions[1].z);
        let tp3 = new THREE.Vector3(positions[3].x, positions[3].y, positions[3].z);
        let points3 = [fp3, sp3, tp3];
        let lineGeo3 = new THREE.BufferGeometry().setFromPoints(points3);
        let line3 = new THREE.Line(lineGeo3, lineMat);
        this.state.scene.add(line3);
    }

    createText(positions) {
        setTimeout(() => {
            let loader = new THREE.FontLoader();
            loader.load("https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json", font => {
                let skillGeo = new THREE.TextGeometry("Skills And Abilities", {
                    font: font,
                    size: 2,
                    height: 0,
                    curveSegments: 5,
                    bevelEnabled: false
                });
                let skillMat = new THREE.MeshLambertMaterial(
                    { color: 0xffffff }
                );
                let skillMesh = new THREE.Mesh(skillGeo, skillMat);
                skillMesh.translateX(positions[0].x -7);
                skillMesh.translateY(positions[0].y + 3);
                skillMesh.translateZ(-positions[0].z - 3);
                skillMesh.rotateY(Math.PI);
                this.state.scene.add(skillMesh);

                let conGeo = new THREE.TextGeometry("Concepts And Algorithms", {
                    font: font,
                    size: 2,
                    height: 0,
                    curveSegments: 5,
                    bevelEnabled: false
                });
                let conMesh = new THREE.Mesh(conGeo, skillMat);
                conMesh.translateX(positions[1].x - 7);
                conMesh.translateY(positions[1].y + 3);
                conMesh.translateZ(-positions[1].z - 3);
                conMesh.rotateY(Math.PI);
                this.state.scene.add(conMesh);

                let techGeo = new THREE.TextGeometry("Technologies", {
                    font: font,
                    size: 2,
                    height: 0,
                    curveSegments: 5,
                    bevelEnabled: false
                });
                let techMesh = new THREE.Mesh(techGeo, skillMat);
                techMesh.translateX(positions[2].x - 7);
                techMesh.translateY(positions[2].y + 3);
                techMesh.translateZ(-positions[2].z - 3);
                techGeo.rotateY(Math.PI);
                this.state.scene.add(techMesh);

                let ft1Geo = new THREE.TextGeometry("3D Programming\nFrontEnd\nDevelopMent", {
                    font: font,
                    size: 2,
                    height: 0,
                    curveSegments: 5,
                    bevelEnabled: false
                });
                let ft1 = new THREE.Mesh(ft1Geo, skillMat);
                ft1.translateX(positions[3].x - 7);
                ft1.translateY(positions[3].y + 10);
                ft1.translateZ(-positions[3].z - 3);
                ft1.rotateY(Math.PI);
                this.state.scene.add(ft1);

                let thr1Geo = new THREE.TextGeometry("ReactJS\nWebGL\nThreeJs", {
                    font: font,
                    size: 2,
                    height: 0,
                    curveSegments: 5,
                    bevelEnabled: false
                });
                let thr1 = new THREE.Mesh(thr1Geo, skillMat);
                thr1.translateX(positions[4].x - 7);
                thr1.translateY(positions[4].y + 7);
                thr1.translateZ(-positions[4].z - 3);
                thr1.rotateY(Math.PI);
                this.state.scene.add(thr1);
            });
        }, 2300);

        let pl = new PointLight(0xffffff, 5, 23);
        pl.position.set(positions[0].x - 23, positions[0].y, -positions[0].z - 5);
        this.state.scene.add(pl);

        let pl1 = new PointLight(0xffffff, 3, 30);
        pl1.position.set(positions[1].x - 20, positions[1].y, -positions[1].z - 5);
        this.state.scene.add(pl1);

        let pl2 = new PointLight(0xffffff, 5, 20);
        pl2.position.set(positions[4].x - 20, positions[4].y + 3, -positions[1].z - 5);
        this.state.scene.add(pl2);

        let pl3 = new PointLight(0xffffff, 3, 20);
        pl3.position.set(positions[3].x - 27, positions[3].y + 5, -positions[3].z - 5);
        this.state.scene.add(pl3);
    }

    createScene() {
        let delay = 0;
        let skillCubeSize = 0.9;
        let skillCubeNumber = 6;
        let skillPos = new THREE.Vector3(20, 20, 0);
        let skilSep = 0.2;
        let skilName = "skillGp";
        this.creatCubeSystem(skillPos, skillCubeSize, skillCubeNumber, skilName, skilSep, 0xFE3B00, 0xffffff);
        this.cubeRotateAnimation(skillPos, skillCubeSize, skillCubeNumber, skilSep, skilName, this.timer1, 100, delay);

        let conCubeSize = 0.9;
        let conCubeNumber = 6;
        let conPos = new THREE.Vector3(11, 10, 0);
        let conSep = 0.2;
        let conName = "conGp";
        this.creatCubeSystem(conPos, conCubeSize, conCubeNumber, conName, conSep, 0xFE3B00, 0xffffff);
        this.cubeRotateAnimation(conPos, conCubeSize, conCubeNumber, conSep, conName, this.timer2, 100, delay);

        let techCubeSize = 0.9;
        let techCubeNumber = 6;
        let techPos = new THREE.Vector3(11, -10, 0);
        let techSep = 0.2;
        let techName = "techGp";
        this.creatCubeSystem(techPos, techCubeSize, techCubeNumber, techName, techSep, 0xFE3B00, 0xffffff);
        this.cubeRotateAnimation(techPos, techCubeSize, techCubeNumber, techSep, techName, this.timer3, 100, delay);


        let ftCubeSize = 0.9;
        let ftCubeNumber = 6;
        let ftPos = new THREE.Vector3(-4, -1, 0);
        let ftSep = 0.2;
        let ftName = "ftGp";
        this.creatCubeSystem(ftPos, ftCubeSize, ftCubeNumber, ftName, ftSep, 0xFE3B00, 0xffffff);
        this.cubeRotateAnimation(ftPos, ftCubeSize, ftCubeNumber, ftSep, ftName, this.timer4, 100, delay);

        let thrCubeSize = 0.9;
        let thrCubeNumber = 6;
        let thrPos = new THREE.Vector3(-4, -26, 0);
        let thrSep = 0.2;
        let thrName = "thrGp";
        this.creatCubeSystem(thrPos, thrCubeSize, thrCubeNumber, thrName, thrSep, 0xFE3B00, 0xffffff);
        this.cubeRotateAnimation(thrPos, thrCubeSize, thrCubeNumber, thrSep, thrName, this.timer5, 100, delay);

        //DashLines
        this.createDashLines([skillPos, techPos, conPos, thrPos, ftPos], [skillCubeSize, techCubeSize, conCubeSize, thrCubeSize, ftCubeSize], [skillCubeNumber, techCubeNumber, conCubeNumber, thrCubeNumber, ftCubeNumber], [skilSep, techSep, conSep, thrSep, ftSep]);

        //Text
        this.createText([skillPos, techPos, conPos, thrPos, ftPos]);
        this.renderThree();
        //animation
        let positions = [skillPos, conPos, techPos, ftPos, thrPos];
        let sizes = [skillCubeSize, conCubeSize, techCubeSize, ftCubeSize, thrCubeSize];
        let numbers = [skillCubeNumber, conCubeNumber, techCubeNumber, ftCubeNumber, thrCubeNumber];
        let seps = [skilSep, conSep, techSep, ftSep, thrSep];
        let colors = [0xffffff, 0xffffff, 0xffffff, 0xffffff, 0xffffff];
        let finalScales = [1.8, 1.8, 1.8, 1.8, 1.8];
        setTimeout(() => {
            this.cubeBorderAnimations(positions, sizes, numbers, seps, colors, finalScales);
        }, delay);
    }

    componentDidMount() {
        this._isMount = true;
        this.drawFirstScene();
        this.createScene();

        let steps = parseFloat(document.getElementById("skillsCover").style.width) * 0.005 * 0.75;
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
        clearInterval(this.timerBordr);
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        clearInterval(this.timer3);
        clearInterval(this.timer4);
        clearInterval(this.timer5);
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

        document.getElementById("skillsCanvas").append(this.state.renderer.domElement);
        this.renderThree();
    }

    render() {
        let marginTop = this.state.height;
        return (
            <div>
                <div id="skillsCanvas" style={{ height: this.state.height, width: this.state.width }}></div>
                <div id="skillsCover" style={{ height: this.state.height, marginTop: -marginTop, width: this.state.dynamicWidth }}></div>
            </div>
        );
    }
}

export default SkillsCanvas;