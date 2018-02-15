import React, { Component } from 'react';
import { connect } from "react-redux";
import { List } from "immutable";

import HomeHeader from "./HomeHeader/HomeHeader"
import HomeContent from "./HomeContent/HomeContent"

import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

class Home extends Component {

  componentDidMount() {
      if (this.props.username === "") {
          this.props.history.push("/");
          return;
      }
  }

  render(){
    return (
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
      "username": state.app.get('username'),
      "account_ids": state.app.get('accounts', List())
                          .map(account => account.getIn(['details', 'id']))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);


export default HomeView;
