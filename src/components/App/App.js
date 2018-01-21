import React, { Component } from 'react';

import Home from "../Home/Home"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class App extends Component {
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
