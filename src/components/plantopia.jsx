import React, { Component } from "react";
import { Link } from "react-router-dom";

import ImageSlider from './image_slider';
import Navbar from './navbar';
import plant from '../image/plant-icon.png';
import pc from '../image/PC.png'

class Plantopia extends Component {
   constructor(props) {
    super(props)
    this.state = {
      className:"mb5"
    };
  }
componentDidMount(){
  window.addEventListener('scroll',this.handleText);
}
componentWillUnmount(){
  window.removeEventListener('scroll',this.handleText)
}
handleText = (e) => {
  if(e.currentTarget.scrollY > 260) {
  this.setState({className:"mb5 appear"});
 }
}

handleToggle =()=> {
  this.setState({ mouse: !this.state.mouse });
}
  render(){
    return(
      <div className="plantopia-container">
        <div className="vh-100-l vh-50-m vw-100 flex justify-end items-center overflow-x-hidden">
          <div className="vh-50 vh-75-l w-80-l w-100-m lotus-bg flex items-center mb3">
           <div className="custom-bg vh-25 w-60 white pa5-ns pa4 pt3-l pt5-m pl6-l pl6-none-m tc tl-l">
            <h2 className="mb4-ns mb3 f2-m">Plantopia.</h2>
            <h4>A Wechat mini-program to help plant lovers take perfect care of their plants.</h4>
           </div>
          </div>
        </div>

        <div className="vw-100 vh-75-l vh-50-m tc pr6-m pl6-m pr5 pl5 overflow-x-hidden">
          <h2 className="custom-header mb6-l mb4">Plantopia Presentation</h2>
          <div ref={this.tab1} className={this.state.className}>
            <img className="plant-icon" src={plant}></img>
            <h4 className="custom-paragraph">Scan and plant recognition functionality.Allow users to scan random plant and receive plant name and caring informations.</h4>
          </div>
          <div ref={this.tab2} className={this.state.className}>
            <img className="plant-icon" src={plant}></img>
            <h4 className="custom-paragraph">User can upload their plant picture and plant information.</h4>
          </div>
          <div ref={this.tab3} className={this.state.className}>
            <img className="plant-icon" src={plant}></img>
            <h4 className="custom-paragraph">User and their baby plants have a chatroom.Plants will send notification message when it's time to water them.</h4>
          </div>
        </div>

        <div className="vw-100 vh-75-l flex-ns mb5 ph5-l overflow-x-hidden">
          <div className="paragraph-image w-33-l w-50-m vh-75-l vh-50-m ml5-ns"></div>
          <div className="w-70-ns w-100 ph7-l ph4 tc pt6-ns pt3">
            <h2 className="mb4 custom-header">Code Section</h2>
            <img className="icon-style" src={pc} />
            <div className="tl mt5 mb3">
              <h3 className="custom-header pink">Back-end:</h3>
              <h4 className="custom-paragraph">Ruby on Rails: We created API Back-end: Ruby on Rails. We created API which allow to share the data requested by the Front-end. </h4>
            </div>
            <div className="tl">
              <h3 className="custom-header pink">Front-end:</h3>
              <h4 className="custom-paragraph">Wechat mini-program: Fetch information from a private API and implement the plant recognition in real time.</h4>
            </div>
          </div>
        </div>
        <div className="vw-100 tc flex flex-column items-center custom-header mt6">
          <h2 className="pink-underline">Product overview</h2>
          <ImageSlider/>
        </div>

      </div>
    )
  }
}

export default Plantopia;

