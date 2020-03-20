import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import home from '../image/home.png';
import myplant from '../image/myplant.png';
import scan from '../image/scan.png';
import chatroom from '../image/chatroom.png'

class ImageSlider extends Component {
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
            { url: home},
            { url: myplant },
            { url: scan },
            { url: chatroom },
        ];

  return(
    <div className="vw-100 flex justify-center items-center mb5 mt5 slider">
       <SimpleImageSlider
          width={330}
          height={600}
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

export default ImageSlider;
