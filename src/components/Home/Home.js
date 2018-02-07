import React, { Component } from 'react';
import { connect } from "react-redux";

import { initAccountData } from "../../actions/init";

import HomeHeader from "./HomeHeader/HomeHeader"
import HomeContent from "./HomeContent/HomeContent"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Home extends Component {
  constructor(props) {
      super(props);
      
      this.state = {
        username: props.username
      }
      this.onLoad = props.onLoad
  }
  
  componentDidMount() {
      this.onLoad(this.state.username);
  }
  
  render(){

    return(
      <div>
        <Navbar />
        <HomeHeader />
        <HomeContent />
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
      "username": state.get('username')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoad: username => {
      dispatch(initAccountData(username));
    }
  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);


export default HomeView;
