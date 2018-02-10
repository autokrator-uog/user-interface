import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { List } from "immutable";

import TopContent from "./TopContent/TopContent"
import MiddleContent from "./MiddleContent/MiddleContent"

class HomeContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: props.balance,
    };
  }

  render() {

    return (
      <div>
        <TopContent balance = {this.state.balance}/>
        <MiddleContent />
      </div>
    )

  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
    balance: state.get('accounts', List())
                        .map(account => account.getIn(['details', 'balance']))
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeContentView = connect(mapStateToProps, mapDispatchToProps)(HomeContent);

export default HomeContentView;
