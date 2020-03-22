import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from './navbar';
import young from '../image/wechat.jpg'


class HomePage extends Component {
 constructor(props) {
    super(props)
    this.state = {
      show:true,
      className:"wechat none",
    };
  }

handleDisplay = () => {
  this.setState({ show:!this.state.show});
  if(this.state.show === true ) {
  this.setState({className:"wechat display"});
} else {
  this.setState({className:"wechat none"})

  }
}

  render(){
    return(
      <div className="index-container">
        <div className="banner vh-50 vh-75" >
          <h2>WELCOME TO MY WEBSITE</h2>
          <h2>ENJOY YOUR VISIT</h2>
        </div>
        <div id="text" className="text">
          <div className="whitediv">
             <div className="mypic"></div>
             <div className="textbio">
              <h2>HI.I'M SARAH, CHINESE MADE IN FRANCE.</h2>
              <h2>MY PLAYGROUND: RUBY ON RAILS, JAVASCRIPT, CSS & HTML, REACT, NODE.JS, WECHAT MINI-PROGRAM.</h2>
             </div>
             <div >
              <div className="contacttext">
                <p> → GET IN TOUCH </p>
              </div>
              <div className="sociallink">
                <a href="https://github.com/sarahs833" >GITHUB</a>
                <a href="/#/" onClick={this.handleDisplay}>WECHAT</a>
                <a href="mailto:sarahwang47@gmail.com" >EMAIL</a>
                <a href="" >INSTAGRAM</a>
              </div>
              <div>
              <img id="wechat" className={this.state.className} src={young} />
              </div>
             </div>
           </div>
        </div>
        <div className="cards-container">
        </div>
      </div>
    )
  }
}
export default HomePage;
