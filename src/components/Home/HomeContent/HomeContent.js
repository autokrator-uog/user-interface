import React, { Component } from "react";
import { connect } from "react-redux";

import { List, Map } from "immutable";

import TopContent from "./TopContent/TopContent"
import MiddleContent from "./MiddleContent/MiddleContent"

class HomeContent extends Component {

  render() {

    return (
      <div>
        <TopContent balance = {this.props.balance}/>
        <MiddleContent statement = {this.props.statement}/>
      </div>
    )

  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  var idx = state.app.get("currentlySelectedAccountIdx");
  var account = state.app.get('accounts').get(idx, Map());
  return {
    balance: account.getIn(["details",'balance'], "n/a"),
    statement: account.get('statement', List())
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeContentView = connect(mapStateToProps, mapDispatchToProps)(HomeContent);

export default HomeContentView;
