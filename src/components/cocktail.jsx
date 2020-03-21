import React, { Component } from "react";
import { Link } from "react-router-dom";

import CocktailSlider from "./cocktail_slider";
import cocktail from '../image/cocktail_icon-green.png';
import pc from '../image/PC_yellow.png'

class Cocktail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <div className="vh-75-l vh-50 vw-100 mb6-l flex-ns justify-center items-center mb6-ns mb5">
          <div className="custom-cocktail-bg vh-75">
          </div>
          <div className="customize-red-bg pt4 pr4 pl5 db-ns dn">
            <h2>COCKTAIL BUTLER</h2>
            <h4>Imagine, create, personalize your cocktail</h4>
          </div>
          <div className="dn-ns db customize-gray-bg">
          </div>
          <div className="dn-ns db customize-text-2">
            <h2>COCKTAIL BUTLER</h2>
            <h4>Imagine, create, personalize your cocktail</h4>
          </div>
        </div>

        <div className="flex flex-column justify-center items-center tc ph6-ns ph3 mb6 custom-butler">
          <div className="w-40-ns w-80 customize-orange-bg mb5">
            <h2>Cocktail Butler Presentation</h2>
          </div>
          <div>
            <div className="flex-ns">
              <img className="cocktail-icon mr5-ns" src={cocktail} />
              <h4 className="cocktail-paragraph">Add your personalize cocktail with your preferences ingredients and alcohol doose, update your cocktail picture</h4>
            </div>
            <div className="flex-ns">
              <img className="cocktail-icon mr5-ns" src={cocktail} />
              <h4 className="cocktail-paragraph">You can manage your cocktails , delete the one you don't want anymore , and update informations if you change some recepes on other.</h4>
            </div>
          </div>
        </div>

        <div className="vh-75-l vh-50 vw-100 flex mb6-ns mb5">
          <div className="custom-code-section w-60 ph6-ns ph3 tc mt5">
            <h2>Code Section</h2>
            <img className="icon-style" src={pc} />
            <div className="tl mt5 mb3">
              <h3 className="custom-red">Back-end:</h3>
              <h4 className="custom-paragraph">Ruby on Rails:Creation of 5 new routes and controllers actions to render requested data to the front-end.</h4>
            </div>
            <div className="tl">
              <h3 className="custom-red">Front-end:</h3>
              <h4 className="custom-paragraph">Creation of 5 pages from scratch.Fixed some bugs related with js code.</h4>
            </div>
          </div>
          <div className="customize-pic-cocktail vh-75-l vh-50 w-40-l w-60 mr6-l mr4">
          </div>
       </div>

        <div className="cocktail-slider vw-100 tc flex flex-column items-center custom-header vh-50 vh-75-l mb6-l">
          <h2 className="pink-underline">Product overview</h2>
          <CocktailSlider />
        </div>

      </div>
    )
  }
}

export default Cocktail;
