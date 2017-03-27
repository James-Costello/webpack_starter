
import React from 'react';
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Header</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Projects</Link></li>
            <li><Link to="/topics">Marginalia</Link></li>
            <li><Link to="/topics">Contact</Link></li>
          </ul>
      </div>
    )
  }
}
