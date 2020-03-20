import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import './App.scss';
import HomePage from './components/home_page';
import About from './components/about';
import Project from './components/project';
import Plantopia from './components/plantopia';
import Cocktail from './components/cocktail';
import SpareLeash from './components/spare_leash';
import Navbar from './components/navbar';

const store = {};


// render an instance of the component in the DOM
ReactDOM.render(
    <Router>
      <div>
        <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/project" exact component={Project} />
            <Route path="/project/plantopia" component={Plantopia} />
            <Route path="/project/SpareLeash" component={SpareLeash} />
            <Route path="/project/Cocktail" component={Cocktail} />
          </Switch>
      </div>
    </Router>,
  document.getElementById('root')
);
