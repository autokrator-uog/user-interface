import React, { Component } from 'react';

import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'


import HomeView from "../Home/Home"
import LoginView from "../Login/Login"

class App extends Component {

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Route exact path='/' component={LoginView} />
          <Route path='/user' component={HomeView} />
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
