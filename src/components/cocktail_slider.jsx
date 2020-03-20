import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";

import home from '../image/home_cocktail.png'

class CocktailSlider extends Component {
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
            { url: "../image/home_cocktail.png" },
            { url: "/src/image/add_cocktail.png" },
            { url: "/src/image/cocktail_show.png" },
            { url: "/src/image/form.png" },
        ];

  return(
    <div className="vw-100 flex justify-center items-center mb5 mt5 slider">
       <SimpleImageSlider
          style={{height:"100%"}}
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

export default CocktailSlider;
