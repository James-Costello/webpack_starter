const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, IndexRoute, hashHistory} from "react-router";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import mo from 'react-mojs';
import Layout from "./components/Layout";
import About from "./components/About";
import Projects from "./components/Projects";


console.log('HELLO from app.js and webpack dev server');

const app = document.getElementById('root')

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Layout}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
    </div>
  </Router>,
app);


