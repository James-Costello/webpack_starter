import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Projects from "./Projects";

export default class Layout extends React.Component {
  constructor(){
    super();
    this.name = "James";
  }

  render(){
    return (
      <div>
        <Header/>
        <h1>It works! This is the layout. PRAISE {this.name}</h1>
        <img src="./images/Avatar_01.svg"/>
        <img src="./images/Lucifer_Icon_01.svg" />
        <Footer/>
      </div>
    )
  }
}
