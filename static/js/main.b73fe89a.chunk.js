(this["webpackJsonpmy-web"]=this["webpackJsonpmy-web"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/Logo.7f302b02.png"},25:function(e,t,a){e.exports=a.p+"static/media/instagram.c8cbe861.png"},26:function(e,t,a){e.exports=a.p+"static/media/dribbble.798e3cbf.png"},28:function(e,t,a){e.exports=a(48)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(16),r=a.n(s),o=(a(33),a(6)),c=a(10),h=a(3),d=a(8),l=a(7),m=(a(34),a(1)),u=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dynamicWidth:n.props.styles.width,width:n.props.styles.width,height:n.props.styles.height,scene:new m.m,camera:new m.k(45,n.props.styles.width/n.props.styles.height,.1,1e3),renderer:new m.q({antialias:!0})},n.state.renderer.setClearColor(1315860),n._isMount=!1,n.resize=n.resize.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"renderThree",value:function(){this.state.renderer.render(this.state.scene,this.state.camera)}},{key:"drawFirstScene",value:function(){var e=this.state.camera;e.position.x=40,e.position.y=-25,e.position.z=50,e.lookAt(this.state.scene.position),this.setState({camera:e});var t=new m.n(16777215,.8);t.position.set(0,-5,50),t.target=new m.j,this.state.scene.add(t);var a=new m.n(16777215,.8);a.position.set(40,-5,0),a.target=new m.j,this.state.scene.add(a),this.state.renderer.setSize(this.state.width,this.state.height);var n=this.state.renderer;this.setState({renderer:n}),document.getElementById("mainCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"creatCubeSystem",value:function(e,t,a,n){for(var i=this,s=new m.a(t,t,t),r=[],o=0;o<3;o++)for(var c=0;c<3;c++)for(var h=0;h<3;h++)r.push(new m.p(o*t+e.x-t,c*t+e.y-t,h*t+e.z-t));for(var d,l=.3*t,u=0;u<27;u++)r[u].x>e.x&&(r[u].x+=l),r[u].x<e.x&&(r[u].x-=l),r[u].y>e.y&&(r[u].y+=l),r[u].y<e.y&&(r[u].y-=l),r[u].z>e.z&&(r[u].z+=l),r[u].z<e.z&&(r[u].z-=l);for(var v=0;v<27;v++){d=v%2===0?new m.i({color:a,shininess:50}):new m.i({color:n,shininess:20});var p=new m.g(s,d);p.position.set(r[v].x,r[v].y,r[v].z),this.state.scene.add(p)}for(var w=[],y=0;y<9;y++){var g=100*Math.random();g<50&&(g+=50),w.push(g)}for(var f=[],b=0;b<9;b++){var E=100*Math.random();E<50&&(E+=50),f.push(E)}for(var z=this.state.scene.children.filter((function(t){return"Mesh"===t.type&&t.position.x>e.x})),k=this.state.scene.children.filter((function(t){return"Mesh"===t.type&&t.position.z>e.z})),x=[],S=0;S<9;S++)x.push(new m.p(z[S].position.x,z[S].position.y,z[S].position.z));for(var I=[],W=0;W<9;W++)I.push(new m.p(k[W].position.x,k[W].position.y,k[W].position.z));for(var C=[],j=0;j<9;j++)C.push(new m.p(x[j].x+2.5*Math.random(),x[j].y,x[j].z));for(var M=[],B=0;B<9;B++)M.push(new m.p(I[B].x,I[B].y,I[B].z+2.5*Math.random()));for(var T=[],O=0;O<9;O++)T.push(!0);for(var A=[],D=0;D<9;D++)A.push(!0);for(var P=[],H=0;H<9;H++)P.push((C[H].x-x[H].x)/w[H]);for(var F=[],_=0;_<9;_++)F.push((M[_].z-I[_].z)/f[_]);setTimeout((function(){i.timer=setInterval((function(){for(var e=0;e<9;e++)z[e].position.x>=C[e].x?T[e]=!1:z[e].position.x<=x[e].x&&(T[e]=!0),k[e].position.z>=M[e].z?A[e]=!1:k[e].position.z<=I[e].z&&(A[e]=!0);for(var t=0;t<9;t++)T[t]?z[t].position.x+=P[t]:z[t].position.x-=P[t],A[t]?k[t].position.z+=F[t]:k[t].position.z-=F[t];i.renderThree()}),40)}),1e3)}},{key:"componentDidMount",value:function(){var e=this;this._isMount=!0,this.drawFirstScene(),this.creatCubeSystem(new m.p(0,-2,0),7,16661248,986895),this.renderThree();var t,a,n=.005*parseFloat(document.getElementById("cover").style.width)*.75;t=setInterval((function(){if(e.state.dynamicWidth>0){var a=e.state.dynamicWidth-n;e.setState({dynamicWidth:a})}else clearInterval(t)}),5),a=setInterval((function(){e._isMount||(window.disposeScene(e.state.scene,e.state.renderer),clearInterval(a))}),10)}},{key:"componentWillUnmount",value:function(){this._isMount=!1,clearInterval(this.timer)}},{key:"clearAnimation",value:function(){var e,t=this,a=this.state.width,n=.005*a*2;e=setInterval((function(){if(t.state.dynamicWidth<a){var i=t.state.dynamicWidth+n;t.setState({dynamicWidth:i})}else clearInterval(e)}),5)}},{key:"resize",value:function(e,t){this.setState({width:e,height:t}),this.state.renderer.setSize(this.state.width,this.state.height);var a=this.state.renderer;this.setState({renderer:a}),document.getElementById("mainCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"render",value:function(){var e=this.state.height;return i.a.createElement("div",null,i.a.createElement("div",{id:"mainCanvas",style:{height:this.state.height,width:this.state.width}}),i.a.createElement("div",{id:"cover",style:{height:this.state.height,marginTop:-e,width:this.state.dynamicWidth}}))}}]),a}(i.a.Component),v=(a(35),a(24)),p=a.n(v),w=a(25),y=a.n(w),g=a(26),f=a.n(g),b=(a(36),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dynamicWidth:n.props.styles.width,width:n.props.styles.width,height:n.props.styles.height,scene:new m.m,camera:new m.k(45,n.props.styles.width/n.props.styles.height,.1,1e3),renderer:new m.q({antialias:!0})},n.state.renderer.setClearColor(1315860),n._isMount=!1,n.resize=n.resize.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"renderThree",value:function(){this.state.renderer.render(this.state.scene,this.state.camera)}},{key:"drawFirstScene",value:function(){var e=this.state.camera;e.position.x=0,e.position.y=43,e.position.z=-70,e.lookAt(this.state.scene.position),this.setState({camera:e}),this.state.renderer.setSize(this.props.styles.width,this.props.styles.height);var t=this.state.renderer;this.setState({renderer:t});var a=new m.l(16777215,1,30);a.position.set(0,0,0),this.state.scene.add(a),document.getElementById("skillsCanvas").append(this.state.renderer.domElement)}},{key:"creatCubeSystem",value:function(e,t,a,n,i,s,r){var o=new m.a(t,t,t),c=new m.d;c.name=n;for(var h=[],d=i*t,l=0;l<a;l++)for(var u=0;u<a;u++)for(var v=0;v<a;v++)h.push(new m.p(l*t+l*d-a/2*t,u*t+u*d+.5*t,v*t+v*d-a/2*t));for(var p=new m.i({color:s,shininess:20}),w=0;w<Math.pow(a,3);w++){var y=new m.g(o,p);y.position.set(h[w].x,h[w].y,h[w].z),c.add(y)}var g=[],f=a/2*t+a/2*d;g.push(new m.p(f,0,f)),g.push(new m.p(-f,0,f)),g.push(new m.p(-f,0,-f)),g.push(new m.p(f,0,-f)),g.push(new m.p(f,0,f));var b=(new m.b).setFromPoints(g),E=new m.f({color:r}),z=new m.e(b,E);c.add(z);var k=z.clone();k.scale.set(1.1,1,1.1),c.add(k);var x=z.clone();x.scale.set(1.2,1,1.2),c.add(x);var S=new m.l(16777215);S.distance=8*t,S.position.set(5*t,8*t,6*-t),c.add(S);var I=new m.l(16777215);I.distance=20*t,I.position.set(4*t,8*t,4*-t),c.add(I),c.translateX(e.x),c.translateY(e.y),c.translateZ(e.z),this.state.scene.add(c)}},{key:"cubeBorderAnimations",value:function(e,t,a,n,i,s){var r=this,o=[],c=a[0]/2*t[0]+a[0]/2*n[0];o.push(new m.p(c,0,c)),o.push(new m.p(-c,0,c)),o.push(new m.p(-c,0,-c)),o.push(new m.p(c,0,-c)),o.push(new m.p(c,0,c));var h=(new m.b).setFromPoints(o),d=[],l=a[1]/2*t[1]+a[1]/2*n[1];d.push(new m.p(l,0,l)),d.push(new m.p(-l,0,l)),d.push(new m.p(-l,0,-l)),d.push(new m.p(l,0,-l)),d.push(new m.p(l,0,l));var u=(new m.b).setFromPoints(d),v=[],p=a[2]/2*t[2]+a[2]/2*n[2];v.push(new m.p(p,0,p)),v.push(new m.p(-p,0,p)),v.push(new m.p(-p,0,-p)),v.push(new m.p(p,0,-p)),v.push(new m.p(p,0,p));var w=(new m.b).setFromPoints(v),y=[],g=a[3]/2*t[3]+a[3]/2*n[3];y.push(new m.p(g,0,g)),y.push(new m.p(-g,0,g)),y.push(new m.p(-g,0,-g)),y.push(new m.p(g,0,-g)),y.push(new m.p(g,0,g));var f=(new m.b).setFromPoints(y),b=[],E=a[4]/2*t[4]+a[4]/2*n[4];b.push(new m.p(E,0,E)),b.push(new m.p(-E,0,E)),b.push(new m.p(-E,0,-E)),b.push(new m.p(E,0,-E)),b.push(new m.p(E,0,E));var z=(new m.b).setFromPoints(b),k=1,x=1,S=1,I=1,W=1,C=1.4,j=1.4,M=1.4,B=1.4,T=1.4,O=(s[0]-1.4)/50,A=(s[1]-1.4)/50,D=(s[2]-1.4)/50,P=(s[3]-1.4)/50,H=(s[4]-1.4)/50;this.timerBordr=setInterval((function(){k-=.02,x-=.02,S-=.02,I-=.02,W-=.02,C+=O,j+=A,M+=D,B+=P,T+=H;var t=new m.f({color:i[0],transparent:!0,opacity:k}),a=new m.e(h,t);a.name="line0",a.scale.set(C,1,C),a.translateX(e[0].x),a.translateY(e[0].y),a.translateZ(e[0].z),r.state.scene.add(a);var n=new m.f({color:i[1],transparent:!0,opacity:x}),s=new m.e(u,n);s.name="line1",s.scale.set(j,1,j),s.translateX(e[1].x),s.translateY(e[1].y),s.translateZ(e[1].z),r.state.scene.add(s);var o=new m.f({color:i[2],transparent:!0,opacity:S}),c=new m.e(w,o);c.name="line2",c.scale.set(M,1,M),c.translateX(e[2].x),c.translateY(e[2].y),c.translateZ(e[2].z),r.state.scene.add(c);var d=new m.f({color:i[3],transparent:!0,opacity:I}),l=new m.e(f,d);l.name="line3",l.scale.set(B,1,B),l.translateX(e[3].x),l.translateY(e[3].y),l.translateZ(e[3].z),r.state.scene.add(l);var v=new m.f({color:i[4],transparent:!0,opacity:W}),p=new m.e(z,v);p.name="line4",p.scale.set(T,1,T),p.translateX(e[4].x),p.translateY(e[4].y),p.translateZ(e[4].z),r.state.scene.add(p),r.renderThree(),r.state.scene.remove(r.state.scene.getObjectByName("line0")),r.state.scene.remove(r.state.scene.getObjectByName("line1")),r.state.scene.remove(r.state.scene.getObjectByName("line2")),r.state.scene.remove(r.state.scene.getObjectByName("line3")),r.state.scene.remove(r.state.scene.getObjectByName("line4")),k<=-.5&&(k=1,C=1.4),x<=-.5&&(x=1,j=1.4),S<=-.5&&(S=1,M=1.4),I<=-.5&&(I=1,B=1.4),W<=-.5&&(W=1,T=1.4)}),40)}},{key:"cubeRotateAnimation",value:function(e,t,a,n,i,s,r,o){for(var c=this.state.scene.getObjectByName(i),h=[],d=t/2,l=function(a){for(var i=c.children.filter((function(e){return e.position.y>=d+(a*t+a*n)-t/2&&e.position.y<=d+(a*t+a*n)+t/2&&"Mesh"===e.type})),s=new m.d,r=0;r<i.length;r++)s.add(i[r]);s.translateX(e.x),s.translateY(e.y),s.translateZ(e.z),h.push(s)},u=1;u<a;u++)l(u);for(var v=0;v<h.length;v++)this.state.scene.add(h[v]);var p=180/r*1/25*Math.PI/180,w=0,y=0;setTimeout((function(){setInterval((function(){for(var e=0;e<h.length;e++)e%2===0?(w+=p,h[e].rotation.y=w):(y-=p,h[e].rotation.y=y)}),40)}),o)}},{key:"createDashLines",value:function(e,t,a,n){var i=[new m.p(e[0].x,e[0].y,e[0].z),new m.p(e[0].x,e[1].y,e[0].z),new m.p(e[1].x,e[1].y,e[1].z)],s=(new m.b).setFromPoints(i),r=new m.f({color:16777215}),o=new m.e(s,r);this.state.scene.add(o);var c=[new m.p(e[0].x,e[2].y,e[0].z),new m.p(e[2].x,e[2].y,e[2].z)],h=(new m.b).setFromPoints(c),d=new m.e(h,r);this.state.scene.add(d);var l=[new m.p(e[2].x,e[2].y,e[2].z),new m.p(e[2].x,e[4].y,e[2].z),new m.p(e[4].x,e[4].y,e[4].z)],u=(new m.b).setFromPoints(l),v=new m.e(u,r);this.state.scene.add(v);var p=[new m.p(e[1].x,e[1].y,e[1].z),new m.p(e[1].x,e[3].y,e[1].z),new m.p(e[3].x,e[3].y,e[3].z)],w=(new m.b).setFromPoints(p),y=new m.e(w,r);this.state.scene.add(y)}},{key:"createText",value:function(e){var t=this;setTimeout((function(){(new m.c).load("https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json",(function(a){var n=new m.o("Skills And Abilities",{font:a,size:2,height:0,curveSegments:5,bevelEnabled:!1}),i=new m.h({color:16777215}),s=new m.g(n,i);s.translateX(e[0].x-7),s.translateY(e[0].y+3),s.translateZ(-e[0].z-3),s.rotateY(Math.PI),t.state.scene.add(s);var r=new m.o("Concepts And Algorithms",{font:a,size:2,height:0,curveSegments:5,bevelEnabled:!1}),o=new m.g(r,i);o.translateX(e[1].x-7),o.translateY(e[1].y+3),o.translateZ(-e[1].z-3),o.rotateY(Math.PI),t.state.scene.add(o);var c=new m.o("Technologies",{font:a,size:2,height:0,curveSegments:5,bevelEnabled:!1}),h=new m.g(c,i);h.translateX(e[2].x-7),h.translateY(e[2].y+3),h.translateZ(-e[2].z-3),c.rotateY(Math.PI),t.state.scene.add(h);var d=new m.o("3D Programming\nFrontEnd\nDevelopMent",{font:a,size:2,height:0,curveSegments:5,bevelEnabled:!1}),l=new m.g(d,i);l.translateX(e[3].x-7),l.translateY(e[3].y+10),l.translateZ(-e[3].z-3),l.rotateY(Math.PI),t.state.scene.add(l);var u=new m.o("ReactJS\nWebGL\nThreeJs",{font:a,size:2,height:0,curveSegments:5,bevelEnabled:!1}),v=new m.g(u,i);v.translateX(e[4].x-7),v.translateY(e[4].y+7),v.translateZ(-e[4].z-3),v.rotateY(Math.PI),t.state.scene.add(v)}))}),2300);var a=new m.l(16777215,5,23);a.position.set(e[0].x-23,e[0].y,-e[0].z-5),this.state.scene.add(a);var n=new m.l(16777215,3,30);n.position.set(e[1].x-20,e[1].y,-e[1].z-5),this.state.scene.add(n);var i=new m.l(16777215,5,20);i.position.set(e[4].x-20,e[4].y+3,-e[1].z-5),this.state.scene.add(i);var s=new m.l(16777215,3,20);s.position.set(e[3].x-27,e[3].y+5,-e[3].z-5),this.state.scene.add(s)}},{key:"createScene",value:function(){var e=this,t=new m.p(20,20,0);this.creatCubeSystem(t,.9,6,"skillGp",.2,16661248,16777215),this.cubeRotateAnimation(t,.9,6,.2,"skillGp",this.timer1,100,0);var a=new m.p(11,10,0);this.creatCubeSystem(a,.9,6,"conGp",.2,16661248,16777215),this.cubeRotateAnimation(a,.9,6,.2,"conGp",this.timer2,100,0);var n=new m.p(11,-10,0);this.creatCubeSystem(n,.9,6,"techGp",.2,16661248,16777215),this.cubeRotateAnimation(n,.9,6,.2,"techGp",this.timer3,100,0);var i=new m.p(-4,-1,0);this.creatCubeSystem(i,.9,6,"ftGp",.2,16661248,16777215),this.cubeRotateAnimation(i,.9,6,.2,"ftGp",this.timer4,100,0);var s=new m.p(-4,-26,0);this.creatCubeSystem(s,.9,6,"thrGp",.2,16661248,16777215),this.cubeRotateAnimation(s,.9,6,.2,"thrGp",this.timer5,100,0),this.createDashLines([t,n,a,s,i],[.9,.9,.9,.9,.9],[6,6,6,6,6],[.2,.2,.2,.2,.2]),this.createText([t,n,a,s,i]),this.renderThree();var r=[t,a,n,i,s],o=[.9,.9,.9,.9,.9],c=[6,6,6,6,6],h=[.2,.2,.2,.2,.2],d=[16777215,16777215,16777215,16777215,16777215],l=[1.8,1.8,1.8,1.8,1.8];setTimeout((function(){e.cubeBorderAnimations(r,o,c,h,d,l)}),0)}},{key:"componentDidMount",value:function(){var e=this;this._isMount=!0,this.drawFirstScene(),this.createScene();var t,a,n=.005*parseFloat(document.getElementById("skillsCover").style.width)*.75;t=setInterval((function(){if(e.state.dynamicWidth>0){var a=e.state.dynamicWidth-n;e.setState({dynamicWidth:a})}else clearInterval(t)}),5),a=setInterval((function(){e._isMount||(window.disposeScene(e.state.scene,e.state.renderer),clearInterval(a))}),10)}},{key:"componentWillUnmount",value:function(){this._isMount=!1,clearInterval(this.timerBordr),clearInterval(this.timer1),clearInterval(this.timer2),clearInterval(this.timer3),clearInterval(this.timer4),clearInterval(this.timer5)}},{key:"clearAnimation",value:function(){var e,t=this,a=this.state.width,n=.005*a*2;e=setInterval((function(){if(t.state.dynamicWidth<a){var i=t.state.dynamicWidth+n;t.setState({dynamicWidth:i})}else clearInterval(e)}),5)}},{key:"resize",value:function(e,t){this.setState({width:e,height:t}),this.state.renderer.setSize(this.state.width,this.state.height);var a=this.state.renderer;this.setState({renderer:a}),document.getElementById("skillsCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"render",value:function(){var e=this.state.height;return i.a.createElement("div",null,i.a.createElement("div",{id:"skillsCanvas",style:{height:this.state.height,width:this.state.width}}),i.a.createElement("div",{id:"skillsCover",style:{height:this.state.height,marginTop:-e,width:this.state.dynamicWidth}}))}}]),a}(i.a.Component)),E=(a(37),a(49)),z=a(50),k=a(9),x=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.navBar=i.a.createRef(),n.state={opacity:1,width:window.innerWidth<768?3*window.innerWidth/4:window.innerWidth/2,height:window.innerWidth<768?3*window.innerWidth/4:window.innerWidth/2,navBarHeight:.08*window.innerWidth/2},n.clearAnimation=n.clearAnimation.bind(Object(h.a)(n)),n.readMore=n.readMore.bind(Object(h.a)(n)),n.resize=n.resize.bind(Object(h.a)(n)),n.styles={width:n.state.width,height:n.state.height},window.whichPage="skills",n}return Object(c.a)(a,[{key:"clearAnimation",value:function(){var e,t=this;e=setInterval((function(){if(t.state.opacity>=0){var a=t.state.opacity-.01;t.setState({opacity:a})}else clearInterval(e)}),5),this.canvas.current.clearAnimation()}},{key:"readMore",value:function(){this.navBar.current.goToAbout()}},{key:"resize",value:function(){this.setState({width:window.innerWidth<768?3*window.innerWidth/4:window.innerWidth/2,height:window.innerWidth<768?3*window.innerWidth/4:window.innerWidth/2,navBarHeight:.08*window.innerWidth/2}),this.canvas.current.resize(this.state.width,this.state.height),this.navBar.current.resize(this.state.navBarHeight)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{id:"mainSkills"},i.a.createElement("Container-fluid",null,i.a.createElement(j,{ref:this.navBar,height:this.state.navBarHeight,clearAnimation:this.clearAnimation}),i.a.createElement(E.a,null,i.a.createElement(z.a,{md:"6"},i.a.createElement(b,{styles:this.styles,ref:this.canvas})),i.a.createElement(z.a,{md:"6"},i.a.createElement("div",{id:"introSkills"},i.a.createElement("div",{id:"titleDivSkills"},i.a.createElement("h1",{id:"titleSkills",style:{opacity:this.state.opacity}},"My Skills")),i.a.createElement("div",{id:"textDivSkills",style:{opacity:this.state.opacity}},i.a.createElement("p",{id:"textSkills"},"I am a front-end and graphic developer. I develop 3D web sites and applications."),i.a.createElement("p",{id:"textSkills"},"I make use of ReactJs to develop front-end of web sites and applications. I am skilled in WebGL and its most famous library Threejs in order to design 3D visual artifacts.")),i.a.createElement("div",{id:"buttonDivSkills"},i.a.createElement(k.b,{to:"/about"},i.a.createElement("div",{className:"buttonSkills",id:"button0Skills",onClick:this.readMore,style:{opacity:this.state.opacity}},"Next Page")))))))))}}]),a}(i.a.Component),S=(a(43),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dynamicWidth:n.props.styles.width,width:n.props.styles.width,height:n.props.styles.height,scene:new m.m,camera:new m.k(45,n.props.styles.width/n.props.styles.height,.1,1e3),renderer:new m.q({antialias:!0})},n.state.renderer.setClearColor(1315860),n._isMount=!1,n.resize=n.resize.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"renderThree",value:function(){this.state.renderer.render(this.state.scene,this.state.camera)}},{key:"drawFirstScene",value:function(){var e=this.state.camera;e.position.x=35,e.position.y=35,e.position.z=35,e.lookAt(this.state.scene.position),this.setState({camera:e}),this.state.renderer.setSize(this.props.styles.width,this.props.styles.height);var t=this.state.renderer;this.setState({renderer:t});var a=new m.l(16777215);a.position.set(20,10,30),this.state.scene.add(a),document.getElementById("aboutCanvas").append(this.state.renderer.domElement)}},{key:"creatCubeSystemStatic",value:function(e,t){var a=new m.d,n=new m.a(t,t,t),i=new m.i({color:16661248,shininess:200}),s=new m.g(n,i);s.position.set(e.x,e.y,e.z),a.add(s);var r=new m.l(16777215,80);r.position.set(e.x,e.y+t/2+.1,e.z),a.add(r);var o=new m.l(16777215,80);o.position.set(e.x+t/2+.1,e.y,e.z),a.add(o);var c=new m.l(16777215,80);c.position.set(e.x,e.y,e.z+t/2+.1),a.add(c),this.state.scene.add(a)}},{key:"creatCubeSystemDynamic",value:function(e,t,a,n){var i=new m.d;i.name=n;var s=new m.i({color:1315860}),r=new m.a(t/2,.1,t/2),o=new m.g(r,s),c=t/4+a;o.position.set(e.x+c,e.y+t/2+a,e.z+c),i.add(o);var h=new m.g(r,s);h.position.set(e.x-c,e.y+t/2+a,e.z+c),i.add(h);var d=new m.g(r,s);d.position.set(e.x+c,e.y+t/2+a,e.z-c),i.add(d);var l=new m.g(r,s);l.position.set(e.x-c,e.y+t/2+a,e.z-c),i.add(l);var u=new m.a(t/2,t/2,.1),v=new m.g(u,s);v.position.set(e.x+c,e.y+c,e.z+t/2+a),i.add(v);var p=new m.g(u,s);p.position.set(e.x-c,e.y+c,e.z+t/2+a),i.add(p);var w=new m.g(u,s);w.position.set(e.x+c,e.y-c,e.z+t/2+a),i.add(w);var y=new m.g(u,s);y.position.set(e.x-c,e.y-c,e.z+t/2+a),i.add(y);var g=new m.a(.1,t/2,t/2),f=new m.g(g,s);f.position.set(e.x+t/2+a,e.y+c,e.z+c),i.add(f);var b=new m.g(g,s);b.position.set(e.x+t/2+a,e.y-c,e.z+c),i.add(b);var E=new m.g(g,s);E.position.set(e.x+t/2+a,e.y+c,e.z-c),i.add(E);var z=new m.g(g,s);z.position.set(e.x+t/2+a,e.y-c,e.z-c),i.add(z);var k=new m.g(r,s);k.position.set(e.x+c,e.y-t/2-a,e.z+c),i.add(k);var x=new m.g(r,s);x.position.set(e.x-c,e.y-t/2-a,e.z+c),i.add(x);var S=new m.g(r,s);S.position.set(e.x+c,e.y-t/2-a,e.z-c),i.add(S);var I=new m.g(r,s);I.position.set(e.x-c,e.y-t/2-a,e.z-c),i.add(I);var W=new m.g(u,s);W.position.set(e.x+c,e.y+c,e.z-t/2-a),i.add(W);var C=new m.g(u,s);C.position.set(e.x-c,e.y+c,e.z-t/2-a),i.add(C);var j=new m.g(u,s);j.position.set(e.x+c,e.y-c,e.z-t/2-a),i.add(j);var M=new m.g(u,s);M.position.set(e.x-c,e.y-c,e.z-t/2-a),i.add(M);var B=new m.g(g,s);B.position.set(e.x-t/2-a,e.y+c,e.z+c),i.add(B);var T=new m.g(g,s);T.position.set(e.x-t/2-a,e.y-c,e.z+c),i.add(T);var O=new m.g(g,s);O.position.set(e.x-t/2-a,e.y+c,e.z-c),i.add(O);var A=new m.g(g,s);A.position.set(e.x-t/2-a,e.y-c,e.z-c),i.add(A),this.state.scene.add(i)}},{key:"mainAnimation",value:function(e,t,a,n,i,s){var r=this,o=(a-t)/e*20,c=t,h=!0;this.timer=setInterval((function(){r.creatCubeSystemDynamic(n,s,c,i),r.renderThree(),window.disposeGroup(r.state.scene.getObjectByName(i),!0,r.state.scene,r.state.renderer),h?c+=o:c-=o,c>a&&(h=!1),c<t&&(h=!0)}),20)}},{key:"componentDidMount",value:function(){var e=this;this._isMount=!0,this.drawFirstScene(),this.creatCubeSystemStatic(new m.p(0,2,0),20),this.renderThree(),this.mainAnimation(3e3,.07,1,new m.p(0,2,0),"gp1",20);var t,a,n=.005*parseFloat(document.getElementById("aboutCover").style.width)*.75;t=setInterval((function(){if(e.state.dynamicWidth>0){var a=e.state.dynamicWidth-n;e.setState({dynamicWidth:a})}else clearInterval(t)}),5),a=setInterval((function(){e._isMount||(window.disposeScene(e.state.scene,e.state.renderer),clearInterval(a))}),10)}},{key:"componentWillUnmount",value:function(){this._isMount=!1,clearInterval(this.timer)}},{key:"clearAnimation",value:function(){var e,t=this,a=this.state.width,n=.005*a*2;e=setInterval((function(){if(t.state.dynamicWidth<a){var i=t.state.dynamicWidth+n;t.setState({dynamicWidth:i})}else clearInterval(e)}),5)}},{key:"resize",value:function(e,t){this.setState({width:e,height:t}),this.state.renderer.setSize(this.state.width,this.state.height);var a=this.state.renderer;this.setState({renderer:a}),document.getElementById("aboutCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"render",value:function(){var e=this.state.height;return i.a.createElement("div",null,i.a.createElement("div",{id:"aboutCanvas",style:{height:this.state.height,width:this.state.width}}),i.a.createElement("div",{id:"aboutCover",style:{height:this.state.height,marginTop:-e,width:this.state.dynamicWidth}}))}}]),a}(i.a.Component)),I=(a(44),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.navBar=i.a.createRef(),n.state={opacity:1,width:(window.innerWidth,window.innerWidth/2),height:(window.innerWidth,window.innerWidth/2),navBarHeight:.08*window.innerWidth/2},n.clearAnimation=n.clearAnimation.bind(Object(h.a)(n)),n.readMore=n.readMore.bind(Object(h.a)(n)),n.resize=n.resize.bind(Object(h.a)(n)),n.styles={width:n.state.width,height:n.state.height},window.whichPage="about",n}return Object(c.a)(a,[{key:"clearAnimation",value:function(){var e,t=this;e=setInterval((function(){if(t.state.opacity>=0){var a=t.state.opacity-.01;t.setState({opacity:a})}else clearInterval(e)}),5),this.canvas.current.clearAnimation()}},{key:"readMore",value:function(){this.navBar.current.goToContact()}},{key:"resize",value:function(){this.setState({width:(window.innerWidth,window.innerWidth/2),height:(window.innerWidth,window.innerWidth/2),navBarHeight:.08*window.innerWidth/2}),this.canvas.current.resize(this.state.width,this.state.height),this.navBar.current.resize(this.state.navBarHeight)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{id:"main"},i.a.createElement("Container-fluid",null,i.a.createElement(j,{ref:this.navBar,height:this.state.navBarHeight,clearAnimation:this.clearAnimation}),i.a.createElement(E.a,null,i.a.createElement(z.a,{md:"6"},i.a.createElement(S,{styles:this.styles,ref:this.canvas})),i.a.createElement(z.a,{md:"6"},i.a.createElement("div",{id:"intro"},i.a.createElement("div",{id:"titleDiv"},i.a.createElement("h1",{id:"title",style:{opacity:this.state.opacity}},"About Me")),i.a.createElement("div",{id:"textDiv",style:{opacity:this.state.opacity}},i.a.createElement("p",{id:"text"},"I was born in March 18, 1995. I studied math and physics at high school, computational Physics at science and research branch of Azad university. When I was 14 I started programming using QBasic. In university I learned scientific programming using C++ and MPI. I designed a parallel algorithm for Monte Carlo simulation of Ising model. The result of our project was published in journal of theoretical and applied physics."),i.a.createElement("p",{id:"text"},"After university I started my job in Tyam company as a .Net developer where I worked on TyamERP software. Gradually I changed my field to graphics programming.")),i.a.createElement("div",{id:"buttonDiv"},i.a.createElement(k.b,{to:"/contact"},i.a.createElement("div",{className:"button",id:"button0",onClick:this.readMore,style:{opacity:this.state.opacity}},"Next Page")))))))))}}]),a}(i.a.Component)),W=(a(45),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dynamicWidth:n.props.styles.width,width:n.props.styles.width,height:n.props.styles.height,scene:new m.m,camera:new m.k(45,n.props.styles.width/n.props.styles.height,.1,1e3),renderer:new m.q({antialias:!0})},n.state.renderer.setClearColor(1315860),n._isMount=!1,n.resize=n.resize.bind(Object(h.a)(n)),n}return Object(c.a)(a,[{key:"renderThree",value:function(){this.state.renderer.render(this.state.scene,this.state.camera)}},{key:"drawFirstScene",value:function(){var e=this.state.camera;e.position.x=-30,e.position.y=10,e.position.z=50,e.lookAt(this.state.scene.position),this.setState({camera:e}),this.state.renderer.setSize(this.props.styles.width,this.props.styles.height);var t=this.state.renderer;this.setState({renderer:t});var a=new m.l(16661248);a.position.set(20,10,30),this.state.scene.add(a),document.getElementById("contactCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"createFont",value:function(){var e=this;(new m.c).load("https://threejs.org/examples/fonts/droid/droid_serif_regular.typeface.json",(function(t){var a=new m.o("CONTACT ME",{font:t,size:5,height:1.5,curveSegments:5,bevelEnabled:!1}),n=new m.h({color:16777215}),i=new m.g(a,n);i.position.set(-18,0,0),e.state.scene.add(i),e.renderThree()}))}},{key:"componentDidMount",value:function(){var e=this;this._isMount=!0,this.drawFirstScene(),this.createFont(),this.renderThree();var t,a,n=.005*parseFloat(document.getElementById("contactCover").style.width)*.75;t=setInterval((function(){if(e.state.dynamicWidth>0){var a=e.state.dynamicWidth-n;e.setState({dynamicWidth:a})}else clearInterval(t)}),5),a=setInterval((function(){e._isMount||(window.disposeScene(e.state.scene,e.state.renderer),clearInterval(a))}),10)}},{key:"componentWillUnmount",value:function(){this._isMount=!1,clearInterval(this.timer)}},{key:"clearAnimation",value:function(){var e,t=this,a=this.state.width,n=.005*a*2;e=setInterval((function(){if(t.state.dynamicWidth<a){var i=t.state.dynamicWidth+n;t.setState({dynamicWidth:i})}else clearInterval(e)}),5)}},{key:"resize",value:function(e,t){this.setState({width:e,height:t}),this.state.renderer.setSize(this.state.width,this.state.height);var a=this.state.renderer;this.setState({renderer:a}),document.getElementById("contactCanvas").append(this.state.renderer.domElement),this.renderThree()}},{key:"render",value:function(){var e=this.state.height;return i.a.createElement("div",null,i.a.createElement("div",{id:"contactCanvas",style:{height:this.state.height,width:this.state.width}}),i.a.createElement("div",{id:"contactCover",style:{height:this.state.height,marginTop:-e,width:this.state.dynamicWidth}}))}}]),a}(i.a.Component)),C=(a(46),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.navBar=i.a.createRef(),n.state={opacity:1,width:window.innerWidth<768?2*window.innerWidth/3:window.innerWidth/2,height:window.innerWidth<768?2*window.innerWidth/3:window.innerWidth/2,navBarHeight:.08*window.innerWidth/2},n.clearAnimation=n.clearAnimation.bind(Object(h.a)(n)),n.readMore=n.readMore.bind(Object(h.a)(n)),n.resize=n.resize.bind(Object(h.a)(n)),n.styles={width:n.state.width,height:n.state.height},window.whichPage="contact",n}return Object(c.a)(a,[{key:"clearAnimation",value:function(){var e,t=this;e=setInterval((function(){if(t.state.opacity>=0){var a=t.state.opacity-.01;t.setState({opacity:a})}else clearInterval(e)}),5),this.canvas.current.clearAnimation()}},{key:"readMore",value:function(){this.navBar.current.goToHome()}},{key:"resize",value:function(){this.setState({width:window.innerWidth<768?2*window.innerWidth/3:window.innerWidth/2,height:window.innerWidth<768?2*window.innerWidth/3:window.innerWidth/2,navBarHeight:.08*window.innerWidth/2}),this.canvas.current.resize(this.state.width,this.state.height),this.navBar.current.resize(this.state.navBarHeight)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{id:"mainContact"},i.a.createElement("Container-fluid",null,i.a.createElement(j,{ref:this.navBar,height:this.state.navBarHeight,clearAnimation:this.clearAnimation}),i.a.createElement(E.a,null,i.a.createElement(z.a,{md:"6"},i.a.createElement(W,{styles:this.styles,ref:this.canvas})),i.a.createElement(z.a,{md:"6"},i.a.createElement("div",{id:"introContact"},i.a.createElement("div",{id:"titleDivContact"},i.a.createElement("h1",{id:"titleContact",style:{opacity:this.state.opacity}},"Contact")),i.a.createElement("div",{id:"textDivContact",style:{opacity:this.state.opacity}},i.a.createElement("p",{id:"textContact"},"I check my social media every day and you can contact me with:"),i.a.createElement("p",{id:"textContact"},i.a.createElement("a",{href:"https://www.instagram.com/dariush.hassani/"},"Instagram.com/Dariush.Hassani")),i.a.createElement("p",{id:"textContact"},i.a.createElement("a",{href:"https://twitter.com/___Dariush/"},"Twitter.com/___Dariush")),i.a.createElement("p",{id:"textContact"},i.a.createElement("a",{href:"https://www.linkedin.com/in/dariush-hassani-460060187/"},"Linkedin.com/in/dariush-hassani")),i.a.createElement("p",{id:"textContact"},i.a.createElement("a",{href:"https://dribbble.com/DariushHassani/"},"Dribbble.com/DariushHassani")),i.a.createElement("p",{id:"textContact"},i.a.createElement("a",{href:"https://github.com/Dariush-Hassani/"},"github.com/Dariush-Hassani")),i.a.createElement("p",{id:"textContact"},"Email: Dariush.Hassani@outlook.com")),i.a.createElement("div",{id:"buttonDivContact"},i.a.createElement(k.b,{to:"/"},i.a.createElement("div",{className:"buttonContact",id:"button0Contact",onClick:this.readMore,style:{opacity:this.state.opacity}},"Home Page")))))))))}}]),a}(i.a.Component)),j=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).goToSkills=n.goToSkills.bind(Object(h.a)(n)),n.goToHome=n.goToHome.bind(Object(h.a)(n)),n.goToAbout=n.goToAbout.bind(Object(h.a)(n)),n.goToContact=n.goToContact.bind(Object(h.a)(n)),n.state={marginTop:0,height:n.props.height},n}return Object(c.a)(a,[{key:"resize",value:function(e){this.setState({height:e})}},{key:"selfClear",value:function(){var e,t=this,a=this.state.height,n=.005*a*2;e=setInterval((function(){var i=t.state.marginTop+n;i<1.3*a?t.setState({marginTop:i}):clearInterval(e)}),5)}},{key:"clear",value:function(){this.selfClear(),this.props.clearAnimation()}},{key:"goToSkills",value:function(){"skills"!==window.whichPage&&(this.clear(),setTimeout((function(){r.a.render(i.a.createElement(x,null),document.getElementById("root"))}),2e3))}},{key:"goToHome",value:function(){"main"!==window.whichPage&&(this.clear(),setTimeout((function(){r.a.render(i.a.createElement(M,null),document.getElementById("root"))}),2e3))}},{key:"goToAbout",value:function(){"about"!==window.whichPage&&(this.clear(),setTimeout((function(){r.a.render(i.a.createElement(I,null),document.getElementById("root"))}),2e3))}},{key:"goToContact",value:function(){"contact"!==window.whichPage&&(this.clear(),setTimeout((function(){r.a.render(i.a.createElement(C,null),document.getElementById("root"))}),2e3))}},{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{id:"navBarDiv"},i.a.createElement("div",{id:"navBar",style:{height:this.state.height,marginTop:-this.state.marginTop}},i.a.createElement("div",{id:"logo"},i.a.createElement("img",{alt:"Logo",className:"img",src:p.a})),i.a.createElement("div",{id:"name",onClick:this.goToHome},i.a.createElement(k.b,{to:"/"},"DariushHassani")),i.a.createElement("div",{className:"navBarItem"}),i.a.createElement("div",{className:"navBarItem",onClick:this.goToSkills},i.a.createElement(k.b,{to:"/skills"},"Skills")),i.a.createElement("div",{className:"navBarItem",onClick:this.goToAbout},i.a.createElement(k.b,{to:"/about"},"About")),i.a.createElement("div",{className:"navBarItem",onClick:this.goToContact},i.a.createElement(k.b,{to:"/contact"},"Contact")),i.a.createElement("div",{className:"navBarItem"}),i.a.createElement("div",{id:"instaLogo"},i.a.createElement("a",{href:"https://www.instagram.com/dariush.hassani/"},i.a.createElement("img",{alt:"instagramLogo",className:"img",src:y.a}))),i.a.createElement("div",{id:"dribbbleLogo"},i.a.createElement("a",{href:"https://dribbble.com/DariushHassani"},i.a.createElement("img",{alt:"dribbbleLogo",className:"img",src:f.a}))))))}}]),a}(i.a.Component),M=(a(47),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).canvas=i.a.createRef(),n.navBar=i.a.createRef(),n.state={opacity:1,width:(window.innerWidth,window.innerWidth/2),height:(window.innerWidth,window.innerWidth/2),navBarHeight:.08*window.innerWidth/2},n.clearAnimation=n.clearAnimation.bind(Object(h.a)(n)),n.readMore=n.readMore.bind(Object(h.a)(n)),n.resize=n.resize.bind(Object(h.a)(n)),n.styles={width:n.state.width,height:n.state.height},window.whichPage="main",n}return Object(c.a)(a,[{key:"clearAnimation",value:function(){var e,t=this;e=setInterval((function(){if(t.state.opacity>=0){var a=t.state.opacity-.01;t.setState({opacity:a})}else clearInterval(e)}),5),this.canvas.current.clearAnimation()}},{key:"readMore",value:function(){this.navBar.current.goToSkills()}},{key:"resize",value:function(){this.setState({width:(window.innerWidth,window.innerWidth/2),height:(window.innerWidth,window.innerWidth/2),navBarHeight:.08*window.innerWidth/2}),this.canvas.current.resize(this.state.width,this.state.height),this.navBar.current.resize(this.state.navBarHeight)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"render",value:function(){return i.a.createElement(k.a,null,i.a.createElement("div",{id:"mainMain"},i.a.createElement("Container-fluid",null,i.a.createElement(j,{ref:this.navBar,height:this.state.navBarHeight,clearAnimation:this.clearAnimation}),i.a.createElement(E.a,null,i.a.createElement(z.a,{md:"6"},i.a.createElement(u,{styles:this.styles,ref:this.canvas})),i.a.createElement(z.a,{md:"6"},i.a.createElement("div",{id:"introMain"},i.a.createElement("div",{id:"titleDivMain"},i.a.createElement("h1",{id:"titleMain",style:{opacity:this.state.opacity}},"Welcome To My Personal WebSite")),i.a.createElement("div",{id:"textDivMain",style:{opacity:this.state.opacity}},i.a.createElement("p",{id:"text"},"This is Dariush Hassani's personal web site."),i.a.createElement("p",{id:"text"},"In this website, you can read about my personal life, my skills and my contact info.")),i.a.createElement("div",{id:"buttonDivMain"},i.a.createElement(k.b,{to:"/skills"},i.a.createElement("div",{className:"buttonMain",id:"button0Main",onClick:this.readMore,style:{opacity:this.state.opacity}},"Next Page")))))))))}}]),a}(i.a.Component)),B=a(5);window.disposeGroup=function(e,t,a,n){for(var i=0;i<e.children.length;i++)"Mesh"===e.children[i].type&&(a.remove(e.children[i]),e.children[i].geometry.dispose(),e.children[i].material.dispose(),e.children[i]=void 0);a.remove(e),e=void 0,t&&n.dispose()},window.disposeScene=function(e,t){for(var a=0;a<e.children.length;a++)"Mesh"===e.children[a].type?(e.children[a].geometry.dispose(),e.children[a].material.dispose(),e.remove(e.children[a]),e.children[a]=void 0):"Group"===e.children[a].type&&window.disposeGroup(e.children[a],!1,e,t);t.dispose(),t=void 0,e=void 0};var T=i.a.createElement(k.a,{basename:"".concat("/my-web","/")},i.a.createElement(B.c,null,i.a.createElement(B.a,{exact:!0,path:"/",component:M}),i.a.createElement(B.a,{path:"/skills",component:x}),i.a.createElement(B.a,{path:"/about",component:I}),i.a.createElement(B.a,{path:"/contact",component:C}),i.a.createElement(B.a,{component:function(){return i.a.createElement("div",{style:{color:"white"}},i.a.createElement("h1",null,"404"),i.a.createElement("h2",null,"Not Found"))}})));r.a.render(T,document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.b73fe89a.chunk.js.map