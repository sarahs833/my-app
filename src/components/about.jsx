import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from './navbar';
import france from '../image/france.svg';
import group from '../image/group.svg';
import foodindustry from '../image/foodindustry.svg';
import curious from '../image/curious.svg';
import fastfood from '../image/fastfood.svg'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouse:false,
      show:false
    };
  }

handleToggle =()=> {
  this.setState({ mouse: !this.state.mouse });
}
  render(){
    return(
      <div>
        <Navbar />
        <div className="walls-bg">
          <h1 className="about-text">ABOUT ME</h1>
          <img className="born-text" src={france} />
          <img className="passion-text" src={group} />
          <img className="previous-work" src={foodindustry} />
          <img className="curious" src={curious} />
          <img className="fastfood" src={fastfood} />
        </div>
      </div>
    )
 }
}
export default About;
