import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Login from "../Login/Login"

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
          <Route exact path='/' component={Login} />
          <Route path='/user' component={Home} />

          <Route path='/user' component={Navbar} />
          <Route path='/user' component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
