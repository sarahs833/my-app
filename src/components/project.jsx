import React, { Component } from "react";
import { Link } from "react-router-dom";

import Body from './body';

class Project extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

render(){
    return(
      <div>
        <Body />
      </div>
    )
 }
}
export default Project;

