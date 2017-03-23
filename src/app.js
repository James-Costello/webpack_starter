const css = require('./app.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/Layout";

// console.log('HELLO from app.js and webpack dev server');


ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
