import React from 'react';
import Header from "./Header";


export default class Layout extends React.Component {
  constructor(){
    super();
    this.name = "James";
  }

  render(){
    return (
      <div>
        <Header/>
        <h1>It works! PRAISE {this.name}</h1>
      </div>
    )
  }
}
