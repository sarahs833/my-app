import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
 constructor(props) {
    super(props)
    this.state = {
      mouse:false,
      className:'mb5',
      backgroundColor:"navbar bg-black",
      fontColor:"logo grey-color",
    };
  }
componentDidMount() {
  window.addEventListener('scroll', this.handleAppear);
}

componentWillUnmount() {
  window.removeEventListener('scroll',this.handleAppear);
}
handleToggle =()=> {
  this.setState({ mouse: !this.state.mouse });
}

handleAppear = (e) => {
const scrollY = e.currentTarget.scrollY;
  if(scrollY < 1 ) {
  this.setState({ backgroundColor:"navbar bg-black",fontColor:"logo grey-color"})
  }else if(scrollY >692 ) {
  this.setState({backgroundColor:"navbar bg-transparent text-shadow", fontColor:"logo orange-color"});
  }
}
  render(){
    return(
      <div>
        <div ref="nav" className={this.state.backgroundColor}>
          <div className="underline">
            <h2 ref="logo" className={this.state.fontColor} onMouseEnter={this.handleToggle} onMouseLeave={this.handleToggle} >Sarah Wang</h2>
            <div className={this.state.mouse ? "line transition" : "line"}></div>
          </div>
          <div className="navlink">
            <Link className="pagelink" to="/" >Home</Link>
            <Link className="pagelink" to="/about">About</Link>
            <Link className="pagelink" to="/project" >Project</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
