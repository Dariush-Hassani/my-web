import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './mainPage.js';
import Skills from './skills.js';
import About from './about.js';
import Contact from './contact.js';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

window.disposeGroup = function (group, disposedRenderer, scene, renderer) {
  for (let i = 0; i < group.children.length; i++) {
    if (group.children[i].type === "Mesh") {
      scene.remove(group.children[i]);
      group.children[i].geometry.dispose();
      group.children[i].material.dispose();
      group.children[i] = undefined;
    }
  }
  scene.remove(group);
  group = undefined;

  if (disposedRenderer)
    renderer.dispose();
}
window.disposeScene = function (scene, renderer) {
  for (let i = 0; i < scene.children.length; i++) {
    if (scene.children[i].type === "Mesh") {
      scene.children[i].geometry.dispose();
      scene.children[i].material.dispose();
      scene.remove(scene.children[i]);
      scene.children[i] = undefined;
    }
    else if (scene.children[i].type === "Group") {
      window.disposeGroup(scene.children[i], false, scene, renderer);
    }
  }
  renderer.dispose();
  renderer = undefined;
  scene = undefined;
}
const NotFound = () => (<div style={{color : "white"}}><h1>404</h1><h2>Not Found</h2></div>);

const routing = (
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/skills" component={Skills} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

