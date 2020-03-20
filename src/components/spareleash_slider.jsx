import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

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
            { url: "/src/image/peet_coffee.png" },
            { url: "/src/image/meet_greet.png" },
            { url: "/src/image/meet&greet.png" },
            { url: "/src/image/sitter.png" },
            { url: "/src/image/admin_page.png" },
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
