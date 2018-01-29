import React, { Component } from 'react';

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

import { initAccountData } from '../../actions/init';
import { initWebsocketConnection } from '../../actions/websocket';

class App extends Component {
  componentDidMount() {
    var store = this.props.store;
    
    // TODO make this all happen on push of a button, not on load
    
    store.dispatch(initAccountData("John"));
    
    store.dispatch(initWebsocketConnection(
      store.getState().get("accounts"),
      store
    ))
  }
  
  render() {
    return (
      <div>
        <Navbar/ >
        <Home/ >
        <Footer/ >
      </div>
    );
  }
}

export default App;
