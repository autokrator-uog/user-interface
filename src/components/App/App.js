import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, IndexRoute} from 'react-router-dom'

import HomeView from "../Home/Home"
import LoginView from "../Login/Login"

import { initAccountData } from '../../actions/init';
import { initWebsocketConnection } from '../../actions/websocket';

class App extends Component {

  /*
    //Not here//
    componentDidMount() {
      var store = this.props.store;

      // TODO make this all happen on push of a button, not on load

      store.dispatch(initAccountData("John"));
      store.dispatch(initWebsocketConnection(
        store.getState().get("accounts"),
        store
      ))
    }
    //Not here//
  */

  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LoginView} />
          <Route path='/user' component={HomeView} />
        </div>
      </Router>
    );
  }
}

export default App;
