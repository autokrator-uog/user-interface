import React, { Component } from 'react';
import logo from './logo.png';

import './HomeHeader.css';

class HomeHeader extends Component {
  render(){

    return(
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome back {this.props.username}</h1>
          </header>
        </div>
      </div>
    );
  }
}

export default HomeHeader;
