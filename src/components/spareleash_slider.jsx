import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import peet from '../image/peet_coffee.png';
import meet from '../image/meet_greet.png';
import greet from '../image/meet&greet.png';
import sitter from '../image/sitter.png';
import admin from '../image/admin_page.png'

class SpareLeashSlider extends Component {
  constructor() {
        super();
        this.state = {
            useGPURender: true,
            showNavs: true,
            showBullets: true,
            slideDuration: 0.5,
            bgColor: "#000000",
            slideIndexText: "",
            bgColor:"black"
        };
    }
  render(){
      const images = [
            { url: meet },
            { url: greet },
            { url: sitter },
            {url: peet },
            { url: admin },
        ];

  return(
    <div className="vw-100 flex justify-center items-center mb5 mt5 slider">
       <SimpleImageSlider
          width={350}
          height={350}
          images={images}
          showBullets={this.state.showBullets}
          showNavs={this.state.showNavs}
          useGPURender={this.state.useGPURender}
          slideDuration={this.state.slideDuration}
        />
    </div>
  )
  }
}

export default SpareLeashSlider;
