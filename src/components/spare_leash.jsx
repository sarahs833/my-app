import React, { Component } from "react";
import { Link } from "react-router-dom";

import SpareLeashSlider from './spareleash_slider';
import paw from "../image/paw.png";
import pc from '../image/PC.png'

class SpareLeash extends Component {
   constructor(props) {
    super(props)
    this.state = {
      mouse:false,
      show:false,
    };
  }

handleToggle =()=> {
  this.setState({ mouse: !this.state.mouse });
}
  render(){
    return(
      <div>
        <div>
          <div className="vh-100-l vh-50 w-100 dog-bg flex items-end justify-center flex-column mb6">
           <div className="custom-spareleash-bg vh-25 w-50-ns w-80 pr4 white o-20-ns o-10">
           </div>
           <div className="white custom-position w-50-m mr6">
            <h2 className="mb4-ns mb3 f2-m">SpareLeash.</h2>
            <h4>An increadible platform that links pets owner and pets sitters.</h4>
           </div>
          </div>
        </div>

        <div className="vw-100 vh-100 tc">
          <h2 className="mb5 custom-header">SpareLeash Presentation</h2>
          <div className="bg-light-gray w-80-ns w-90 o-50">
          </div>
          <div className="bg-light-gren w-60-ns w-90 o-30">
          </div>
          <div className="pt5 pl6">
            <div className="translate-box1 header tc-m tl-l w-80-m pr6-m pl4-m">
              <h2 className="mb4">As a pet owner</h2>
              <div className="flex small-text">
                <img className="paw-icon mr3" src={paw} />
                <h4>Can book available sitter around your place depending on your preference(dates, time ect..).</h4>
              </div>
              <div className="flex small-text">
                <img className="paw-icon mr3" src={paw} />
                <h4>You can chat with sitters to review with them the details of the booking</h4>
              </div>
              <div className="flex small-text">
                <img className="paw-icon mr3" src={paw} />
                <h4>Could process booking payment via wechat/alipay</h4>
              </div>
            </div>
          </div>

          <div className="translate-box2 header tl mt5 w-60-m">
            <h2 className="mb4">As a sitter</h2>
            <div className="flex small-text">
              <img className="paw-icon mr3" src={paw} />
              <h4>Pet owner also can apply to be a pet sitter.</h4>
            </div>
            <div className="flex small-text">
              <img className="paw-icon mr3" src={paw} />
              <h4>Could access a booking page, where we can overview the upcoming bookings details</h4>
            </div>
            <div className="flex small-text">
              <img className="paw-icon mr3" src={paw} />
              <h4>Can access our wallet to overview how much we will get paid as well as the payment date.</h4>
            </div>
          </div>
        </div>

       <div className="code-section vw-100 vh-100-l flex-ns mb5 mt6 mt6-none-ns ph5-l overflow-x-hidden">
          <div className="paragraph-image-sl w-60-l w-60-m vh-100-l vh-50-m"></div>
          <div className="w-70-ns w-100 ph5 tc pt6-l pt6 ">
            <h2 className="mb4 custom-header mt5 mt5-none-ns">Code Section</h2>
            <img className="icon-style" src={pc} />
            <div className="tl mt5 mb3">
              <h3 className="custom-header pink">Back-end:</h3>
              <h4 className="custom-paragraph">Ruby on Rails:Creation of 5 new routes and controllers actions to render requested data to the front-end.</h4>
            </div>
            <div className="tl">
              <h3 className="custom-header pink">Front-end:</h3>
              <h4 className="custom-paragraph">Creation of 5 pages from scratch.Fixed some bugs related with js code.</h4>
            </div>
          </div>
        </div>
         <div className="sl-slider vw-100 tc flex flex-column items-center custom-header vh-50 vh-75-l mb6-l mt6">
          <h2 className="pink-underline">Product overview</h2>
          <SpareLeashSlider />
         </div>
      </div>
    )
  }
}

export default SpareLeash;
