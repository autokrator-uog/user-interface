import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import TopContent from "./TopContent/TopContent"
import MiddleContent from "./MiddleContent/MiddleContent"

class HomeContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: props.accounts
    };
  }

  render() {
    console.log(this.state.accounts);

    return (
      <div>
        <TopContent accounts />
        <MiddleContent />
      </div>
    )

  }
}

// reads from redux state and returns react props for the component
const mapStateToProps = state => {
  return {
    accounts: state.get('accounts')
  }
}

// allows the component to perform actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

const HomeContentView = connect(mapStateToProps, mapDispatchToProps)(HomeContent);

export default HomeContentView;
