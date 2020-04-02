import React, { Component } from "react";

class Others extends Component {
  constructor(props){
    super(props)
    this.state = {
    };
  }


  render(){
    return(
      <div className="bg-black">
        <div className="banner-other">
        </div>
        <div className="bg-black flex-ns">
          <div className="trade-image relative">
          </div>
          <div className="white flex flex-column justify-center padding-20">
            <h2 className="other-text">SECOND HAND TRADING</h2>
            <h2 className="other-text-2">PLATFORM</h2>
            <a className="btn-other" href="https://second-hand-clone.herokuapp.com/">view</a>
          </div>
        </div>
        <div className="height-50 100vw bg-black flex">
          <h2 className="relative white other-text-3">AND MORE TO COME..</h2>
        </div>
      </div>
    )
  }
}

export default Others
