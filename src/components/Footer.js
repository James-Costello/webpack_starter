
import React from 'react';
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render(){
    return (
      <div>
        <h1>Footer</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Email</Link></li>
          </ul>
      </div>
    )
  }
}
