import React, { Component } from 'react';
import { connect } from "react-redux";
import { List } from "immutable";

import { initWebsocketConnection } from "../../actions/websocket";

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
    
      if (this.props.websocketConnection !== null) {
          this.props.websocketConnection.close();
      }
      
      this.props.startWebsocket(this.props.account_ids, this.props.store)
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
      "username": state.get('username'),
      "websocketConnection": state.get('websocketConnection'),
      "account_ids": state.get('accounts', List())
                          .map(account => account.getIn(['details', 'account_id']))
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startWebsocket: (accountIds, store) => {
      dispatch(initWebsocketConnection(accountIds, store));
    }
  }
}

const HomeView = connect(mapStateToProps, mapDispatchToProps)(Home);


export default HomeView;
