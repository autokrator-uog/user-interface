import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'


import HomeView from "../Home/Home"
import LoginView from "../Login/Login"

//import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

class App extends Component {

  render() {
    return (
      <ConnectedRouter history={this.props.history} >
        <div className="site-container">

          <div className="content">
              <Route exact path='/' component={LoginView} />
              <Route path='/user' component={HomeView} />
          </div>

        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
