import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

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
            { url: "/src/image/home.png" },
            { url: "/src/image/myplant.png" },
            { url: "/src/image/scan.png" },
            { url: "/src/image/chatroom.png" },
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
