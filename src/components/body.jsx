import React, { Component } from "react";
import { Link } from "react-router-dom";

import Plantopia from './plantopia';
import SpareLeash from './spare_leash';
import Cocktail from './cocktail';
import Others from './others';

class Body extends Component {
  render(){
    return(
     <div>
      <div className="body-container">
        <div className="left">
          <div className="image">
            <h1 className="bold">Plantopia.</h1>
            <h2 className="bold small-font">All about plant parenting</h2>
            <Link className="link-botton" to="/project/Plantopia"> view more </Link>
          </div>
        </div>
        <div className="right">
          <div className="selfgrid">
            <h1 className="whitesmall">Spare Leash</h1>
            <h2 className='whitesmall'>YOUR PET SITTING SOLUTION</h2>
            <Link className="small-botton" to="/project/SpareLeash"> view more </Link>
          </div>
          <div className="selfgrid">
            <h1 className="whitesmall">Cocktail city</h1>
            <h2 className="whitesmall">Your private bar tender</h2>
            <Link className="small-botton" to="/project/Cocktail"> view more </Link>
          </div>
        </div>
      </div>
        <div className="other-container">
          <h1 className="bold white">MORE PROJECT</h1>
          <Link className="big-button mt3" to='/project/others'> view more </Link>
        </div>
    </div>
    )
  }
}

export default Body;
